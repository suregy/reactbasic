import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from '@testing-library/react';
import FunctionComponet from './functioncomponent/HelloComponent';
import ClassComponent from './classcomponent/StatefullComponent';
import YoutubeComp from './functioncomponent/YoutubeComp/YoutubeComp';
import YoutubeHome from './classcomponent/YoutubeHome/YoutubeHome';

const HelloWorld = () => {
  return <p>Hello World</p>;
};

ReactDOM.render(
  <React.StrictMode>
    <YoutubeHome />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
