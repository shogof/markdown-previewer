import React, { useState } from 'react';
import { marked } from 'marked';
import './MarkdownPreviewer.css';

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
          id="preview" dangerouslySetInnerHTML={{
            __html: marked.parse(editorValue, { breaks: true }),
          }}
        />
      </div>
    </div>
  );
};

export default MarkdownPreviewer;
