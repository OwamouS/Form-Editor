import ReactDOM from 'react-dom';
import { App } from './app';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import React from 'react';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root'),
);
