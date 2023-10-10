import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';

import MuiMarkdown from 'markdown-to-jsx';

import * as React from 'react';

import { ArrowUpward } from '@mui/icons-material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { getCookie } from 'cookies-next';
import { hashMD5 } from 'utils/Md5Hash';

const formatUrlSources = (url) => {
  const match = url.match(/\/([^/]+)\/?(\?.*)?$/);
  if (match) {
    const lastPath = match[1];

    // Replace hyphens with spaces and capitalize each word
    const formattedText = lastPath
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    return formattedText;
  }
};

export const AiSearch = () => {
  const theme = useTheme();
  const email = getCookie('APP_USER_EMAIL').replace(/%40/g, '@');
  const md5Hash = hashMD5(email.toLowerCase());
  const scrollableRef = React.useRef(null);
  const [chatHistory, setChatHistory] = React.useState([
    {
      id: 1,
      type: 'bot',
      message: 'Hi, How can I help you?',
    },
  ]);
  const [query, setQuery] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const [language, setLanguage] = React.useState('english');
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const askAiHandler = async (e) => {
    // Keep scroll at the bottom
    scrollableRef.current.scrollTop = scrollableRef.current.scrollHeight;
    e.preventDefault();
    setLoading(true);
    setQuery('');
    setTypedText('');
    setChatHistory([
      ...chatHistory,
      {
        id: generateRandomId(10),
        type: 'user',
        message: query.replaceAll('\n', '<br/>'),
      },
    ]);

    // Guard Clause to prevent empty queries
    if (query === '') return;

    try {
      const resp = await fetch(
        'https://us-central1-zesty-dev.cloudfunctions.net/aiSearch/query/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `${query} respond in ${language}`,
          }),
        },
      );

      const data = await resp.json();

      if (data) {
        setLoading(false);
        setChatHistory((prevChatHistory) => [
          ...prevChatHistory,
          {
            id: generateRandomId(10),
            type: 'bot',
            message: data.response.text
              .replace(/\\n/g, '\n')
              .replace(/\"/g, ''),
            sourceDocuments: data.response.sourceDocuments,
          },
        ]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const placeholderText = [
    'Ask me anything about zesty!',
    'What is zesty?',
    'How do I use parsley?',
  ];
  const [state, setState] = React.useState(0);

  const [displayedPlaceholder, setDisplayedPlaceholder] = React.useState('');

  React.useEffect(() => {
    if (chatHistory.length < 2) {
      let currentText = '';
      let currentIndex = 0;
      const placeholderInterval = setInterval(() => {
        const currentPlaceholder = placeholderText[state];
        const nextChar = currentPlaceholder[currentIndex];

        if (nextChar) {
          currentText += nextChar;
          setDisplayedPlaceholder(currentText);
          currentIndex++;
        } else {
          setState((prevState) => (prevState + 1) % placeholderText.length);
          currentText = '';
          currentIndex = 0;
        }
      }, 150);

      return () => {
        clearInterval(placeholderInterval); // Clean up the interval on component unmount
      };
    }
  }, [state, chatHistory]);

  React.useEffect(() => {
    scrollableRef.current.scrollTop = scrollableRef.current?.scrollHeight;
  }, [chatHistory]);

  const [typedText, setTypedText] = React.useState('');

  React.useEffect(() => {
    let currentIndex = -10;
    const lastBotResponse =
      chatHistory[chatHistory.length - 1].type === 'bot' &&
      chatHistory[chatHistory.length - 1];
    const typeNextCharacter = () => {
      scrollableRef.current.scrollTop = scrollableRef.current?.scrollHeight;
      if (currentIndex < lastBotResponse?.message.length) {
        setTypedText(
          (prevText) =>
            prevText + lastBotResponse?.message.charAt(currentIndex),
        );
        currentIndex++;
        setTimeout(typeNextCharacter, 1); // Adjust the delay to control typing speed
      }
    };

    if (lastBotResponse) {
      typeNextCharacter();
    }
  }, [chatHistory]);

  return (
    <>
      <Stack
        ref={scrollableRef}
        sx={{ mt: 4, maxHeight: 500, overflow: 'auto', pb: 2 }}
      >
        <Box>
          {chatHistory.map((item, idx) => {
            const message = item.type === 'bot' ? item.message : '';

            return (
              <Box key={item.id}>
                {item.type === 'bot' ? (
                  <Box>
                    <Box
                      key={item.id}
                      sx={{
                        display: 'flex',
                        gap: 1.5,
                        mt: 2,
                      }}
                    >
                      <Box>
                        <Box
                          component={'img'}
                          src="https://kfg6bckb.media.zestyio.com/content.one-logo.png"
                          sx={{
                            width: 40,
                            height: 35,
                            borderRadius: 1,
                            display: 'flex',
                          }}
                        />
                      </Box>

                      <Box sx={{ pr: 2 }}>
                        {item.sourceDocuments && (
                          <>
                            <Typography
                              sx={{
                                borderRadius: 100,
                                color: theme.palette.zesty.zestyZambezi,
                              }}
                              variant="caption"
                            >
                              Sources:
                            </Typography>
                            <Box
                              sx={{
                                mb: 1,
                                display: 'flex',
                                gap: 1,
                                flexWrap: 'wrap',
                              }}
                            >
                              {item?.sourceDocuments?.map((item, idx) => {
                                const domainRegex = /https:\/\/[^/]+/;
                                return (
                                  <Box key={idx}>
                                    <Box
                                      component="a"
                                      href={item.metadata.source.replace(
                                        domainRegex,
                                        `https://zesty.io`,
                                      )}
                                      target="_blank"
                                      sx={{
                                        background: `${theme.palette.zesty.zestyOrange}`,
                                        borderRadius: 100,
                                        px: 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                        textDecoration: 'none',
                                      }}
                                    >
                                      <Typography
                                        sx={{
                                          color: '#fff',
                                        }}
                                        variant="caption"
                                      >
                                        {formatUrlSources(item.metadata.source)}
                                      </Typography>
                                    </Box>
                                  </Box>
                                );
                              })}
                            </Box>
                          </>
                        )}
                        <MuiMarkdown
                          options={{
                            overrides: {
                              code: {
                                component: SyntaxHighlighter,
                                props: {
                                  style: dracula,
                                  language: 'javascript',
                                  wrapLongLines: true,
                                },
                              },
                            },
                          }}
                        >
                          {item.message ===
                          chatHistory[chatHistory.length - 1].message
                            ? typedText
                            : message}
                        </MuiMarkdown>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        ml: 4,
                        mt: 1,
                      }}
                    ></Box>
                  </Box>
                ) : (
                  <>
                    <Box
                      key={item.id}
                      sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        mt: 2,
                        pr: 2,
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          gap: 2,
                          pl: 5,
                        }}
                      >
                        <Box sx={{ mt: 0.5 }}>
                          <MuiMarkdown options={{ wrapper: 'p' }}>
                            {item.message.replaceAll(/\n/g, '<br/>')}
                          </MuiMarkdown>
                        </Box>

                        <Box
                          component={'img'}
                          src={`https://www.gravatar.com/avatar/${md5Hash}?s=200&d=mm`}
                          sx={{
                            width: 40,
                            height: 40,
                            borderRadius: 1,
                            display: 'block',
                          }}
                        />
                      </Box>
                    </Box>
                  </>
                )}
              </Box>
            );
          })}
        </Box>
      </Stack>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt: 4,
        }}
      >
        {loading && (
          <Typography
            variant="caption"
            sx={{ color: theme.palette.zesty.zestyZambezi }}
          >
            Searching documentation. This may take a second!
          </Typography>
        )}
      </Box>

      <Box
        sx={{ display: 'flex', gap: 1, mt: 1 }}
        component="form"
        onSubmit={askAiHandler}
      >
        <TextField
          required
          placeholder={
            chatHistory.length < 2 ? displayedPlaceholder : placeholderText[0]
          }
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          sx={{ flex: 1 }}
        />
        <Button
          type="submit"
          startIcon={<ArrowUpward />}
          variant="contained"
          color="secondary"
        >
          Ask
        </Button>

        <Box sx={{ width: 80 }}>
          <FormControl fullWidth>
            <InputLabel>Lang</InputLabel>
            <Select
              value={language}
              label="Select Language"
              onChange={handleLanguageChange}
            >
              {Lang.map((item) => {
                return (
                  <MenuItem key={item.value} value={item.value}>
                    {item.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Typography
        sx={{ textAlign: 'center', mt: 1, color: '#ccc' }}
        variant="caption"
      >
        Content.one AI Chatbot powered by ChatGPT may produce inaccurate Parsley
        code.
      </Typography>
    </>
  );
};

const Lang = [
  {
    name: 'EN',
    value: 'english',
  },
  {
    name: 'ES',
    value: 'spanish',
  },
  {
    name: 'TL',
    value: 'tagalog',
  },
  {
    name: 'HI',
    value: 'hindi',
  },
  {
    name: 'IT',
    value: 'italian',
  },
  {
    name: 'FR',
    value: 'french',
  },
  {
    name: 'DE',
    value: 'german',
  },
];

// Create a function that generates random ID's
function generateRandomId(length) {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomId = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters.charAt(randomIndex);
  }

  return randomId;
}
