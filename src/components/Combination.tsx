import React from 'react'
import { Container } from 'react-bootstrap'
import Intro from './Intro'
import Register from './Register'
import Sucess from './Success'
import { useState } from 'react'
const Combination = () => {
    const [intro, setIntro] = useState(false)
  return (
      <Container>
          <Intro />
          <Register />
          <Sucess/>
      </Container>
  )
}

export default Combination