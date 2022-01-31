import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ResumeProvider } from './Context/resumeContext';

ReactDOM.render(
  <React.StrictMode>
    <ResumeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ResumeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
