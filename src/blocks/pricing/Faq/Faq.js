import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


const mock = [
  {
    title: 'Can I purchase a gift certificate?',
    subtitle:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
  {
    title: 'What is your return policy?',
    subtitle:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
  {
    title: 'Do you sell gift cards?',
    subtitle:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
  {
    title: 'Can I change plans later on?',
    subtitle:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
  {
    title: 'Is this a subscription service?',
    subtitle:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
  {
    title: 'Can I purchase a gift certificate?',
    subtitle:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
];
let zestyURL =
(undefined === process.env.PRODUCTION) == 'true' || process.env.PRODUCTION
  ? process.env.zesty.production
  : process.env.zesty.stage;


const Faq = () => {
  const [faqsData, setFaqsData] = React.useState([]);
  const [isLoaded, setIsLoaded] = React.useState(false);
  
  React.useEffect(() => {
    // faqs
    try {
      const fetchData = async () => {
        const uri = `${zestyURL}/-/gql/faqs.json`;

        const response = await fetch(uri);
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const faqs = await response.json();
        setIsLoaded(true);
        setFaqsData(faqs);
      };

      fetchData();
    } catch (error) {
      console.error(`Could Not Find Results: ${error}`);
    }
  }, []);
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography fontWeight={700} variant={'h4'} align={'center'}>
          Frequently asked questions
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {faqsData.map((item, i) => (
          <Grid key={i} item xs={12} sm={6} md={4}>
            <Typography variant={'h6'} fontWeight={600} gutterBottom>
              {item.question}
            </Typography>
            <Box
                color="text.secondary"
                dangerouslySetInnerHTML={{
                  __html: item.answer
                }}
              ></Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Faq;
