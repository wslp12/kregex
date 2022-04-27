import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const id = 'root';
const rootElem = document.getElementById(id);
if (rootElem) {
  const root = ReactDOM.createRoot(rootElem);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
} else {
  console.error(
    `${rootElem} 가 존재하지 않습니다. (${id} 가 존재하지 않을 수도 있습니다)`,
  );
}
