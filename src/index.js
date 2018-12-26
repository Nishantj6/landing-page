import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import Navigation from './Navigation';
import Headerson from './Header';
import Services from './services';
//import { base } from './firebase';

class App extends React.Component{
    render(){
        return(
            <div>
                <Navigation />,
                <Headerson title="WELCOME TO REACT" button="Explore now" />
                <Services />
                
            
               
            </div>

        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
