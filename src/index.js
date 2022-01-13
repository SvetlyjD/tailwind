import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import HeaderApp from './Components/HeaderApp';
import FooterApp from './Components/FooterApp';
import Main from './Components/Main';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <HeaderApp></HeaderApp>
      <div className='pos'>
        <div className='flex ml-20 w-10/12 bg-white'>
          <Main></Main>
          <div className='ml-10 w-4/5'><App></App></div>
        </div>
      </div>
      <FooterApp></FooterApp>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
