import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './assets/styles/variables.css';
import './assets/styles/core.css';
import RootContextProvider from './context/rootContext';

ReactDOM.render(
  <React.StrictMode>
    <RootContextProvider>
      <App />
    </RootContextProvider>
  </React.StrictMode>,
  document.getElementById('react-root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
