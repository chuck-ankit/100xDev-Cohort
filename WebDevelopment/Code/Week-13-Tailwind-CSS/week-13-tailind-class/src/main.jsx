
import './index.css'
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const container = document.getElementById('root'); // Reference the root element
const root = createRoot(container); // Initialize the root

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
