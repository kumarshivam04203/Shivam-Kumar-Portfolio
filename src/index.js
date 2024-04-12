import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';
// import ClarityProvider from 'react-microsoft-clarity';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    {/* <ClarityProvider projectId={process.env.REACT_APP_CLARITY_TOKEN}> */}
      <App />
      {/* </ClarityProvider> */}
    </Router>
  </React.StrictMode>
);
