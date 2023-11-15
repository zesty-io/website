import * as React from 'react';
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
import { ArrowUpward } from '@mui/icons-material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import QuestionAndAnswer from './QuestionAndAnswer';
import { useEffect } from 'react';
import { formatUrlSources } from './AiSearchHelpers/formatUrlSources';
import { generateRandomId } from './AiSearchHelpers/generateRandomId';
import { animateStreaming } from './AiSearchHelpers/animateSteaming';
import { Lang } from './AiSearchHelpers/constant';

export function AiSearch() {
  const theme = useTheme();
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
  const { typedText } = animateStreaming({ chatHistory, scrollableRef });

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  async function askAiHandler(event) {
    try {
      // Scroll to the bottom of the chat
      scrollableRef.current.scrollTop = scrollableRef.current.scrollHeight;

      // Prevent the default form submission
      event.preventDefault();

      // Set loading state to true
      setLoading(true);

      // Clear the input query
      setQuery('');

      // Add the user's query to the chat history
      const userMessage = {
        id: generateRandomId(10),
        type: 'user',
        message: query.replaceAll('\n', '<br/>'),
      };
      setChatHistory((prevChatHistory) => [...prevChatHistory, userMessage]);

      // Guard Clause to prevent empty queries
      if (!query) {
        // Early return if the query is empty
        return;
      }

      // Make a request to the AI server
      const response = await fetch(
        'https://us-central1-zesty-dev.cloudfunctions.net/aiSearch/quey/',
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

      // Check if the response is successful
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      // Parse the JSON response
      const responseData = await response.json();

      // Update the chat history with the AI's response
      const botMessage = {
        id: generateRandomId(10),
        type: 'bot',
        message: responseData.response.text
          .replace(/\\n/g, '\n')
          .replace(/\"/g, ''),
        sourceDocuments: responseData.response.sourceDocuments,
      };
      setChatHistory((prevChatHistory) => [...prevChatHistory, botMessage]);

      // Set loading state to false
      setLoading(false);
    } catch (error) {
      // Handle and log any errors that occur
      setChatHistory((prevChatHistory) => [
        ...prevChatHistory,
        {
          type: 'bot',
          message:
            'Sorry, There was an error while processing your request. Please try again later.',
        },
      ]);
      console.error('An error occurred:', error);
    }
  }

  useEffect(() => {
    scrollableRef.current.scrollTop = scrollableRef.current?.scrollHeight;
  }, [chatHistory]);

  return (
    <>
      <Stack
        ref={scrollableRef}
        sx={{ mt: 4, maxHeight: 500, overflow: 'auto', pb: 2 }}
      >
        <Box>
          {chatHistory.map((item, _idx) => {
            const message = item.type === 'bot' ? item.message : '';

            return (
              <Box key={item.id}>
                {item.type === 'bot' ? (
                  <QuestionAndAnswer
                    type={item.type}
                    reverse
                    sx={{
                      display: 'flex',
                      gap: 1.5,
                      mt: 2,
                    }}
                  >
                    <Box>
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
                  </QuestionAndAnswer>
                ) : (
                  <QuestionAndAnswer
                    type={item.type}
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      mt: 2,
                      pr: 2,
                    }}
                  >
                    <Box sx={{ mt: 0.5 }}>
                      <MuiMarkdown options={{ wrapper: 'p' }}>
                        {item.message.replaceAll(/\n/g, '<br/>')}
                      </MuiMarkdown>
                    </Box>
                  </QuestionAndAnswer>
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
          placeholder={'Ask me anything about zesty!'}
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
}
