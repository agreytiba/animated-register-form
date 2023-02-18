import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import {IoIosArrowRoundForward } from "react-icons/io"
const Intro = () => {
  return (
      <Card style={{width:"300px", overflow: "hidden"}}>
          <Row className='justify-content-between align-items-center' style={{width:"300px",height:"400px",}}>
              <Col md={9} className="ms-4">

                      <Card.Title>welcome</Card.Title>
                      <Card.Subtitle>let's get started</Card.Subtitle>
                
              </Col>
              <Col xs={{span: 2}}>
                  <div className='text-light rounded-circle' style={{ width: "100px", height: "100px", backgroundColor:"tomato" }}>
                      <IoIosArrowRoundForward className='text-primary '/>
                  </div>
              
              </Col>
              
              
              
          </Row>
          
          {/* AiOutlineArrowRight */}
          
    </Card>
  )
}

export default Intro