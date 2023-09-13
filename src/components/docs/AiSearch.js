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

const processToken = (token) => {
  const data = JSON.parse(token);
  const text = data.token.replace(/\\n/g, '\n').replace(/\"/g, '');
  return {
    text,
    id: data.id,
  };
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
  const [botResponse, setBotResponse] = React.useState(null);
  const [query, setQuery] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const [language, setLanguage] = React.useState('english');
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const [source, setSource] = React.useState(null);

  const askAiHandler = async (e) => {
    // Keep scroll at the bottom
    scrollableRef.current.scrollTop = scrollableRef.current.scrollHeight;
    e.preventDefault();
    setBotResponse(null);
    setLoading(true);
    setQuery('');
    setChatHistory([
      ...chatHistory,
      {
        id: chatHistory.length + 1,
        type: 'user',
        message: query.replaceAll('\n', '<br/>'),
      },
    ]);

    // Guard Clause to prevent empty queries
    if (query === '') return;

    if (source) {
      source.close();
    }

    const newSource = new EventSource(
      'https://us-central1-zesty-dev.cloudfunctions.net/aiSearch/query/',
    );
    setSource(newSource);

    newSource.addEventListener('newToken', async (event) => {
      const { text, id } = processToken(event.data);

      setBotResponse((prevBotResponse) => {
        return {
          text: `${prevBotResponse?.text || ''}${text}`,
          id,
        };
      });
    });

    newSource.addEventListener('end', () => {
      newSource.close();
      setLoading(false);
    });

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
      // update the source documents of the last time in the chat history if type is bot
      setChatHistory((prevChatHistory) => {
        //Shallow copy of the last index of chatHistory
        const lastItem = { ...prevChatHistory[prevChatHistory.length - 1] };

        // If the last item is a bot, update the source documents
        if (lastItem.type === 'bot') {
          lastItem.sourceDocuments = data.response.sourceDocuments;
        }
        return [
          ...prevChatHistory.slice(0, prevChatHistory.length - 1),
          lastItem,
        ];
      });
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    if (botResponse) {
      setChatHistory((prevChatHistory) => {
        const updatedChatHistory = prevChatHistory.map((item) => {
          if (item.id === botResponse.id) {
            // Update the message property for the matching ID
            return {
              ...item,
              message: botResponse.text,
            };
          }
          return item;
        });

        // If no item with the matching ID was found, add a new item
        if (!updatedChatHistory.some((item) => item.id === botResponse.id)) {
          updatedChatHistory.push({
            id: botResponse.id,
            type: 'bot',
            message: botResponse.text,
          });
        }

        return updatedChatHistory;
      });
      scrollableRef.current.scrollTop = scrollableRef.current.scrollHeight;
    }
  }, [botResponse, setChatHistory]);

  const placeholderText = [
    'Ask me anything about zesty!',
    'What is zesty?',
    'How do I use parsley?',
  ];
  const [state, setState] = React.useState(0);

  const [displayedPlaceholder, setDisplayedPlaceholder] = React.useState('');

  React.useEffect(() => {
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
  }, [state]);

  return (
    <>
      <Stack
        ref={scrollableRef}
        sx={{ mt: 4, maxHeight: 500, overflow: 'auto', pb: 2 }}
      >
        <Box>
          {chatHistory.map((item) => {
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
                                return (
                                  <Box key={idx}>
                                    <Box
                                      component="a"
                                      href={item.metadata.source}
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
                                  language: 'html',
                                  wrapLongLines: true,
                                },
                              },
                            },
                          }}
                        >
                          {message}
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
