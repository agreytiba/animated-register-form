
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col} from 'react-bootstrap';
import { FaCircle } from "react-icons/fa"
import {FiCircle} from "react-icons/fi"
import Intro from './components/Intro';
import Register from './components/Register';
import Sucess from './components/Success';
import { useState } from "react"
import './App.css';
function App() {
  const [isIntro, setIsIntro] = useState(true)
  const [isRegister, setIsRegister] = useState(false)
  const [isSucess, setIsSuccess] = useState(false)
  
  // handle motion from intro page to register page
  const handleIntro = () => {
    setIsIntro(false);
    setIsRegister(true);
    setIsSuccess(false)
  }

  // handle the register form  move to sucess page
  const handleRegister = () => {
    setIsIntro(false);
    setIsRegister(false);
    setIsSuccess(true);
  }

  // manage  return to home
  const handleSucess = () => {
    setIsIntro(true);
    setIsRegister(false);
    setIsSuccess(false);
  }
  return (
    <div className="App">
      <Container className='d-flex ' style={{width:"320px", position:"relative"}}>
        { isIntro && <Intro handleIntro={handleIntro} />} 
        {isRegister && <Register  handleRegister={handleRegister}/>}
        {isSucess && <Sucess handleSucess={handleSucess} />}
        <Row className='position-absolute  ' style={{width:"100px",bottom:"20px",left:"35%",fontSize:"15px"}}>
          <Col xs={4}>{isIntro === true ?<FaCircle />: <FiCircle/>}</Col>
          <Col xs={4}>{isRegister === true ?<FaCircle />: <FiCircle/>}</Col>
          <Col xs={4}>{isSucess === true ?<FaCircle />: <FiCircle/>}</Col>
       </Row>
      </Container>
    </div>
  );
}

export default App;
