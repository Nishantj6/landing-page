 import React, { Component } from 'react';
 //import logo from './logo.svg';
 import './App.css';
 import './Navigation.css';
 

 class Navigation extends Component {
   render() {
     return (
      <nav>
          <h2>React Project</h2>
         <ul>
             <li><a href='https://www.google.com/'>Home</a></li>
             <li><a href='http://www.motogp.com/'>About</a></li>
             <li><a href='#quit'>LogOut</a></li>

         </ul>
     </nav>
     );
   }
 }

 export default Navigation;
