import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render( <
    React.StrictMode >
    <
    Router > { /* Wrap with Router */ } <
    App / >
    <
    /Router> <
    /React.StrictMode>
);