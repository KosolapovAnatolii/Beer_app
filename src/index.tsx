import React from 'react';
import { HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');

if (rootElement) {
  // ReactDOM.createRoot(rootElement).render(<App />);
    ReactDOM.render(
      <HashRouter >
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </HashRouter>,
        rootElement
    );
} else {
    console.error("Cannot find element with id 'root'");
}
