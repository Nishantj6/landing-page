import Rebase from 'rebase';
import firebase from 'firebase';

 

const config = {
    apiKey: "AIzaSyDdsFYb_X_iMgZVQG_oGMTePr9I6-tY9fA",
    authDomain: "react-73a8b.firebaseapp.com",
    databaseURL: "https://react-73a8b.firebaseio.com",
    projectId: "react-73a8b",
    storageBucket: "react-73a8b.appspot.com",
    messagingSenderId: "905598573445"
  };
  firebase.initializeApp(config);

  const app = firebase.initializeApp(config)
  const base = Rebase.createClass(app.database())

  export { base }
