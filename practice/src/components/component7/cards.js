import React from 'react'
import data from "./student.json"
import { Container,Row,Col } from 'react-bootstrap'
import StudentCard from './studentCard'

const Cards = () => {
  return (
    <Container>
        <Row>
            {
                data.map((student,index)=>(
                <Col md={3} key={index}><StudentCard student={student}/></Col>))
            }
        </Row>
    </Container>
  
  )
}
export default Cards