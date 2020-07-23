import React from 'react';
import * as firebase from 'firebase';

// Firebase Config
import { firebaseConfig } from '../firebaseConfig';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


export default function App () {

  const [ prueba, setPrueba ] = React.useState('');

  React.useEffect(() => {
    const nameRef = firebase.database().ref().child("name");
    nameRef.on("value", (snapshot) => {
      setData(snapshot.val());
    });
  }, []);

  const setData = (data) => {
    setPrueba(data);
  }

  return (
    <div className="App">
      <h1>{prueba}</h1>
    </div>
  );
}