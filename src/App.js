import React from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faBars } from '@fortawesome/free-solid-svg-icons';
//import '@fortawesome/fontawesome-free/css/all.css';
import Calculator from './Calculator/calculator';

export default class App extends React.Component{
  constructor(props){
    super(props);
  }
 render(){
    return (
      <div>
        <Calculator />
      </div>
    );
 }
}

