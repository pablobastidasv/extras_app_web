import React from 'react';
import ReactDOM from 'react-dom';

class ExtrasApp extends React.Component{

  render(){
    return <div>
      <h1>This is the very first element!!!dfadsf </h1>
    </div>
  }
}


document.addEventListener('DOMContentLoaded', () => ReactDOM.render(
  React.createElement(ExtrasApp),
  document.getElementById('app')
))