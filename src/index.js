import React from 'react';
import ReactDOM from 'react-dom';
import MarkdownPreviewer from './MarkdownPreviewer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <MarkdownPreviewer />
  </React.StrictMode>,
  document.getElementById('root'),
);
