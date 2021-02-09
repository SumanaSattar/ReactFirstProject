import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import {robots} from './robots';
ReactDOM.render(
  <React.StrictMode>
    <Card name={robots[0].name} email={robots[0].email}/>
    <Card name={robots[1].name} email={robots[1].email}/>
    <Card name={robots[2].name} email={robots[2].email}/>
    <Card name={robots[3].name} email={robots[3].email}/>
    <Card name={robots[4].name} email={robots[4].email}/>
    <Card name={robots[5].name} email={robots[5].email}/>
    <Card name={robots[6].name} email={robots[6].email}/>
    <Card name={robots[7].name} email={robots[7].email}/>
    <Card name={robots[8].name} email={robots[8].email}/>
    <Card name={robots[9].name} email={robots[9].email}/>


  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
