import { css } from "@codemirror/lang-css";
import { html } from "@codemirror/lang-html";
import { javascript } from "@codemirror/lang-javascript";
import { xcodeDark } from "@uiw/codemirror-theme-xcode";

import CodeMirror from "@uiw/react-codemirror";

function Editor({ displayName, value, language, onChange }) {
  const handleChange = (value) => {
    onChange(value);
  };

  let extensions = [];
  if (language === "html") {
    extensions = [html()];
  } else if (language === "css") {
    extensions = [css()];
  } else if (language === "javascript") {
    extensions = [javascript()];
  } else {
    extensions = [];
  }

  return (
    <div className="pane">
      <div className="pane__header">
        <h2>{displayName}</h2>
        <div className="buttons">
          <div className="red"></div>
          <div className="yellow"></div>
          <div className="green"></div>
        </div>
      </div>
      <div>
        <CodeMirror
          value={value}
          theme={xcodeDark}
          onChange={handleChange}
          className="editor"
          height="45vh"
          basicSetup={{
            foldGutter: false,
            dropCursor: false,
            allowMultipleSelections: false,
            indentOnInput: false,
          }}
          extensions={extensions}
        />
      </div>
    </div>
  );
}

export default Editor;
