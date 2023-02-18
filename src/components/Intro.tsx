import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { IoIosArrowRoundForward } from "react-icons/io"
type Props = {
    handleIntro:() => void
}
const Intro = ({handleIntro}:Props) => {
  return (
      <Card style={{width:"300px",overflow:"hidden",border:"none"}}>
          <Row className='justify-content-between align-items-center' style={{width:"300px",height:"400px",}}>
              <Col md={9} className="ms-4">

                      <Card.Title>welcome</Card.Title>
                      <Card.Subtitle>let's get started</Card.Subtitle>
                
              </Col>
              <Col xs={{span: 2}}>
                  <div className='text-light rounded-circle' style={{ width: "100px", height: "100px", backgroundColor:"tomato",position:"relative" }}>
                      <span className='text-light  fs-1 position-absolute ' style={{top:"20px",left:"0"}} onClick ={handleIntro}>
                          <IoIosArrowRoundForward /> 
                      </span>
                  </div>
              
              </Col>
              
              
              
          </Row>
          
          {/* AiOutlineArrowRight */}
          
    </Card>
  )
}

export default Intro