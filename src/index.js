import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { MoodProvider } from './hooks/MoodContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MoodProvider>
        <App />
      </MoodProvider>
    </BrowserRouter>
  </React.StrictMode>
);
