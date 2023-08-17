import { githubDarkInit } from '@uiw/codemirror-theme-github';
import CodeMirror from '@uiw/react-codemirror';
import { EditorView } from '@codemirror/view';
import { javascript } from '@codemirror/lang-javascript';
import { Box } from '@mui/material';

export const MDCodeBlock = ({ node }) => {
  const codeTxt = node?.children[0]?.children[0]?.value;

  return (
    <Box
      data-testid="code-block-box"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        justifyItems: 'center',
        width: '100%',
      }}
      padding={2}
    >
      <CodeMirror
        width="700px"
        key={Math.random() * 123}
        data-testid="code-mirror"
        editable={false}
        value={codeTxt}
        placeholder={'Click Run to view the response'}
        extensions={[javascript({ jsx: true }), EditorView.lineWrapping]}
        onChange={() => {}}
        style={{ fontSize: '12px', width: '100%' }}
        theme={githubDarkInit({
          settings: {
            caret: '#ff5c0c',
            fontFamily: 'monospace',
          },
        })}
      />
    </Box>
  );
};
