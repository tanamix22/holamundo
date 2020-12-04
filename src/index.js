import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HolaMundo from  './components/HolaMundo';
import Button from './components/Button'; 
import reportWebVitals from './reportWebVitals';

const tests = {
  text: 'click',
  text2: 'click 2',
  text3: 'click 3',
}


ReactDOM.render(
  <React.StrictMode>
    <Button {...tests} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
