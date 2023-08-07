import { Typography, Link, Box, Stack } from '@mui/material';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { MDImage } from './MDImage';
import { MDStrong } from './MDStrong';
import { MDItalic } from './MDItalic';

const LinkComponent = ({ node }) => {
  return (
    <Link
      sx={{ textDecoration: 'none' }}
      href={node.children[0].properties.href}
      title={node.children[0].children[0].value}
    >
      <Box
        p={3}
        my={1}
        mb={3}
        sx={{
          border: `1px solid #ccc`,
          borderRadius: '4px',
          display: 'flex',
          '&:hover': {
            background: '#ccc',
          },
        }}
      >
        <Stack
          direction={'row'}
          width={1}
          alignItems={'stretch'}
          justifyContent={'space-between'}
        >
          <Stack direction={'row'} gap={2}>
            <FileOpenIcon
              sx={{
                transform: 'scaleX(-1)',
              }}
            />
            <Typography color="black">
              {node.children[0].children[0].value}
            </Typography>
          </Stack>
          <ArrowForwardIosIcon sx={{ color: 'grey' }} />
        </Stack>
      </Box>
    </Link>
  );
};

export const MDParagraph = ({
  node,
  children,
  mainKeywords,
  productGlossary,
}) => {
  const keywords = mainKeywords;
  const keywordRegex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'gi');

  const res = children.map((e) => {
    if (e.type === 'a') {
      const linkHtml = `<a href="${e.props.href}" title="${e.props.children[0]}">${e.props.children[0]}</a>`;
      return linkHtml;
    }

    if (typeof e === 'string') {
      return e.replace(keywordRegex, (match) => {
        const obj = productGlossary.find((x) =>
          x.target_words.includes(match.toLowerCase()),
        );
        return `<a href="${obj?.url}" class="zesty-tooltip" title="${obj?.description}" >${match}</a>`;
      });
    }
  });

  if (node.children.length === 1 && node.children[0].tagName === 'strong') {
    return <MDStrong node={node} />;
  }
  if (node.children.length === 1 && node.children[0].tagName === 'em') {
    return <MDItalic node={node} />;
  }
  if (node.children.length === 1 && node.children[0].tagName === 'a') {
    return <LinkComponent node={node} />;
  }

  if (node?.children && node?.children[0]?.tagName === 'img') {
    return <MDImage node={node?.children[0]} />;
  }
  return (
    <p
      data-testid="box-container"
      dangerouslySetInnerHTML={{
        __html: res.join(''),
      }}
    />
  );
};
