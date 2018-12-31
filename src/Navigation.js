 import React, { Component } from 'react';
 //import logo from './logo.svg';
 import './App.css';
 import './Navigation.css';
 import {Menu} from "semantic-ui-react";
 import {HashRouter as Router, Route, Switch, Link} from 'react-router-dom';
 

 class Navigation extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
   render() {
    const { activeItem } = this.state

     return (
      <nav>
          <h2>React Project</h2>
            <Router>
              
              <Menu inverted secondary>
              <Menu.Item  as={Link} to= "/home" name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
              <Menu.Item
                name='messages'
                active={activeItem === 'messages'}
                onClick={this.handleItemClick}
              />
              
              <Menu.Item className="btns" href ='http://www.motogp.com/'
                name='friends'
                active={activeItem === 'friends'}
                onClick={this.handleItemClick}
              />
              
            </Menu>
          </Router>
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
