import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Assume you have some basic CSS styling
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
