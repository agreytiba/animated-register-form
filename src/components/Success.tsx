import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import {IoIosArrowRoundForward } from "react-icons/io"
const Sucess = () => {
  return (
      <Card style={{width:"300px", overflow: "hidden",backgroundColor:"teal"}}>
          <Row className='justify-content-between align-items-center' style={{width:"300px",height:"400px",}}>
              <Col className="ms-4 text-light">

                      <Card.Title className='fs-2'>Great!</Card.Title>
                      <Card.Subtitle>your account was created successfully!</Card.Subtitle>
                
              </Col>
            
              
              
              
          </Row>
       
          
    </Card>
  )
}

export default Sucess