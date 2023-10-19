import * as React from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Box, Container, useTheme, Grid, Typography } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const codeString = `<div>
    <h1>{{this.title}}</h1>
    <div class="richText">{{this.description}}</div>
    <ul>
    {{each faqlist as faq}}
        <li>{{faq.question}}: {{faq.answer}}</li>
    {{end-each}}
    </ul>

    {{if {request.pathPart(1)} == 'ppc'}}
    <div class="cta">    
        {{include call-to-action-form}}
    </div>
    {{end-if}}
</div>`;

const codeStringJSON = `
{{$category = '{request.queryParam(category)' }}

{
    category: {{category.filter({$category}).toJSON()}},
    articles: [
        {{each articles as art where art.category = '{$category}'}}
            {{art.toJSON()}}
            {{if {art._num} < {art.length} }},{{end-if}}
        {{end-each}}
    ]
}


    `;

const codeCalender = `
{{$eventZUID = '7-xyz-xyz'}}

BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTAMP:20221206T035926Z
DTSTART:{{event.filter({$eventZUID}).start_date.date(Ymd\\THis) }} 
DTEND:{{event.filter({$eventZUID}).start_end.date(Ymd\\THis) }}
SUMMARY:{{event.filter({$eventZUID}).title}}
LOCATION:{{event.filter({$eventZUID}).location}}
DESCRIPTION:{{event.filter({$eventZUID}).description}}
END:VEVENT
END:VCALENDAR
`

const codeSearch = `
{{$search = '{request.queryParam(search)}' }}

[
    {{each articles as article where article.title LIKE '%{$search}%' }}
        {
            title: '{{article.title}}',
            thumbnail: '{{article.image.getImage(100,100,crop)}}',
            description: '{{article.description.striptags()}}',
            url: '{{article.getURL()}}'
        }
        {{if {article._num} < {article.length} }},{{end-if}}
    {{end-each}}
]
    `;

export default function ParsleyOverview() {
    const [value, setValue] = React.useState('1');
    const [waitTime, setWaitTime] = React.useState(3000);
    const totalTabs = 4;

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleHover = (newValue) => {
        setValue(newValue);
        setWaitTime(6000);
    };
 

    const changeVal = () => {
        const newval = (parseInt(value) + 1) <= totalTabs ? parseInt(value) + 1 : 1;
 
        setValue(`${newval}`);
    }

    React.useEffect(() => {
         
        const interval = setInterval(() => changeVal(), waitTime);
        return () => clearInterval(interval);
    }, [value]);

    const theme = useTheme();
  return (
     <Box sx={{ backgroundColor: theme.palette.zesty.zestyDarkBlue }}>
        <Container>
        <Grid container>
          <Grid item paddingY={2} md={6}>
            <Box sx={{mb:2}}>
                <img width="50%" src="https://9skdl6.media.zestyio.com/parsley-logo-brackets.png" />
            </Box>
            <Typography
              variant="h4"
              component="h4"
              sx={{ color: theme.palette.zesty.pureWhite, ml:5 }}
            >
              Content Syntax
            </Typography>
            <Box paddingY={2} sx={{ml:5, mr:2}}>
            <Typography
              variant="p"
              component="h4"
              sx={{ color: theme.palette.zesty.zestyLightBlue, fontWeight: 400 }}
            >Take advantage of Parsley to rapidly build websites, supercharge headless development, output dynamic files, and more.</Typography>
            </Box>
        <Stack spacing={1} paddingY={2} sx={{ml:5}} direction="row">
            <Chip label="Templating"  variant={value == '1' ? 'contained' : 'outlined'} color="primary"  onMouseOver={() => handleHover('1')} />
            <Chip label="Custom JSON" variant={value == '2' ? 'contained' : 'outlined'} color="primary" onMouseOver={() => handleHover('2')} />
            <Chip label="Dynamic Files" variant={value == '3' ? 'contained' : 'outlined'} color="primary" onMouseOver={() => handleHover('3')} />
            <Chip label="Tailored Search" variant={value == '4' ? 'contained' : 'outlined'} color="primary" onMouseOver={() => handleHover('4')} />
            </Stack>
            
            <Typography>Learn More About Parlsey</Typography>
          </Grid>
          <Grid item md={6}>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Template Syntax" value="1" />
                        <Tab label="Custom Endpoints" value="2" />
                        <Tab label=".ICS Example" value="3" />
                        <Tab label="Search" value="4" />
                    </TabList>
                    </Box>
                    <TabPanel sx={{padding: 0}} value="1">
                        <SyntaxHighlighter
                            showLineNumbers="true"
                            language="handlebars"
                            style={vscDarkPlus}
                            >
                            {codeString}
                            </SyntaxHighlighter>
                    </TabPanel>
                    <TabPanel sx={{padding: 0}} value="2">
                        <SyntaxHighlighter
                            showLineNumbers="true"
                            language="javascript"
                            style={vscDarkPlus}
                            >
                            {codeStringJSON}
                            </SyntaxHighlighter>
                    </TabPanel>
                    <TabPanel sx={{padding: 0}} value="3">
                        <SyntaxHighlighter
                            showLineNumbers="true"
                            language="handlebars"
                            style={vscDarkPlus}
                            >
                            {codeCalender}
                        </SyntaxHighlighter>
                    </TabPanel>
                    <TabPanel sx={{padding: 0}} value="4">
                        <SyntaxHighlighter
                            showLineNumbers="true"
                            language="handlebars"
                            style={vscDarkPlus}
                            >
                            {codeSearch}
                        </SyntaxHighlighter>
                    </TabPanel>
                </TabContext>
            </Box>

           
          </Grid>
        </Grid>
        </Container>
      </Box>

    
  );
}