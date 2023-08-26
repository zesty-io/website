import { githubDarkInit } from '@uiw/codemirror-theme-github';
import CodeMirror from '@uiw/react-codemirror';
import { EditorView } from '@codemirror/view';
import { javascript } from '@codemirror/lang-javascript';

export const MDCodeBlock = ({ node }) => {
  const codeTxt = node?.children[0]?.children[0]?.value;

  return (
    <CodeMirror
      data-testid="code-mirror"
      editable={false}
      value={codeTxt}
      placeholder={'Click Run to view the response'}
      extensions={[javascript({ jsx: true }), EditorView.lineWrapping]}
      onChange={() => {}}
      style={{ fontSize: '18px', width: '100%' }}
      theme={githubDarkInit({
        settings: {
          caret: '#ff5c0c',
          fontFamily: 'monospace',
        },
      })}
    />
  );
};
