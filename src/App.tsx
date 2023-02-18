import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/esm/Container';
import Intro from './components/Intro';
import Register from './components/Register';
import Sucess from './components/Success';

function App() {
  return (
    <div className="App">
      <Intro />
      <Register />
      <Sucess/>
      
    </div>
  );
}

export default App;
