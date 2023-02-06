import { useEffect, useState } from "react";
import Editor from "./components/Editor";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [html, setHTML] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, SetJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState(`<html>
  <body>${html}</body>
  <style>${css}</style>
  <script>${js}</script>
  </html>`);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`<html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
        </html>`);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [js, html, css]);

  return (
    <div>
      <div className="pane-container">
        <Editor
          displayName="HTML"
          language="html"
          value={html}
          onChange={setHTML}
        />
        <Editor
          displayName="CSS"
          language="css"
          value={css}
          onChange={setCss}
        />
        <Editor
          displayName="JavaScript"
          language="javascript"
          value={js}
          onChange={SetJs}
        />
      </div>
      <div className="iframe-container">
        <iframe
          title="screen"
          sandbox="allow-scripts"
          srcDoc={srcDoc}
          width="100%"
          height="100%"
          className="iframe-container__iframe"
        />
      </div>
    </div>
  );
}
export default App;
