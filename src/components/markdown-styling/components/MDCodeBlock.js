import { githubDarkInit } from '@uiw/codemirror-theme-github';
import CodeMirror from '@uiw/react-codemirror';
import { EditorView } from '@codemirror/view';
import { javascript } from '@codemirror/lang-javascript';
import { v4 as uuidV4 } from 'uuid';

const fontSize = EditorView.baseTheme({
  '&': {
    fontSize: '14px',
  },
});
export const MDCodeBlock = ({ node }) => {
  const codeTxt = node?.children[0]?.children[0]?.value;

  return (
    <CodeMirror
      id={uuidV4()}
      key={uuidV4()}
      data-testid="code-mirror"
      width="100%"
      editable={false}
      value={codeTxt}
      placeholder={'Click Run to view the response'}
      extensions={[
        fontSize,
        javascript({ jsx: true }),
        EditorView.lineWrapping,
      ]}
      onChange={() => {}}
      style={{ width: '100%' }}
      theme={githubDarkInit({
        settings: {
          caret: '#ff5c0c',
          fontFamily: 'monospace',
        },
      })}
    />
  );
};
