import _ from 'lodash';
import './style.css';

function component() {
    const element = document.createElement('div');
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'Alok'], ' ');
    element.classList.add('hello');
    return element;
  }


  function myFunc( ) {
    console.log("Hi I am Alok")
  }

  myFunc();
  
  document.body.appendChild(component());