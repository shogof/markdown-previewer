import React, { useState, useEffect } from "react";
import { marked } from "marked";
import "./MarkdownPreviewer.css"; // Import the updated CSS file

const MarkdownPreviewer = () => {
  const [editorValue, setEditorValue] = useState(`# Heading
## Subheading
[Link](https://www.freecodecamp.org)
\`Inline code\`
\`\`\`
Code block
\`\`\`
* List item
> Blockquote
![Image](https://www.freecodecamp.org/favicon.ico)
**Bolded text**`);

  useEffect(() => {
    marked.setOptions({
      breaks: true,
    });
  }, []);

  const handleEditorChange = (e) => {
    setEditorValue(e.target.value);
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Markdown Previewer</h1>
      </header>
      <div className="editor-preview-container">
        <textarea
          id="editor"
          value={editorValue}
          onChange={handleEditorChange}
        />
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked.parse(editorValue) }}
        />
      </div>
    </div>
  );
};

export default MarkdownPreviewer;
