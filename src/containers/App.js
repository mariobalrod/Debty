import React from 'react';
import * as firebase from 'firebase';

// Components
import { Col, Row } from 'react-bootstrap';
import Input from '../components/Input';
import Button from '../components/Button';

// Firebase Config
import { firebaseConfig } from '../firebaseConfig';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


export default function App () {

  const [ state, setState ] = React.useState({
    description: '',
    value: ''
  });

  /* React.useEffect(() => {
    const nameRef = firebase.database().ref().child("name");
    nameRef.on("value", (snapshot) => {
      setData(snapshot.val());
    });
  }, []);

  const setData = (data) => {
    setPrueba(data);
  } */

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  return (
    <Col className="App" style={{width: "100%"}}>
      <Row className="rows" id="row1">
        <h1>Row 1</h1>
      </Row>

      <Row className="rows" id="row2">
        <h1>Row 2</h1>
      </Row>

      <Row className="rows" id="row3">
        <h1>Row 3</h1>
      </Row>

      <Row className="rows" id="row4">
        <form onSubmit={handleSubmit} id="responsiveForm" className="rows">
          <Input name="description" placeholder="Desciption" type="text" inputSize="300" onChange={handleChange} value={state.description} />
          <Input name="value" placeholder="Value" type="number" inputSize="100" onChange={handleChange} value={state.value} />
          <Button type="submit" block>Save</Button>
        </form>
      </Row>

      <Row className="rows" id="row5">
        <h1>Row 5</h1>
      </Row>
    </Col>
  );
}