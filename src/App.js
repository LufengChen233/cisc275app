import QingQing from '../src/My cat/QingQing.png';
import q1 from '../src/My cat/q1.jpg';
import q2 from '../src/My cat/q2.jpg';
import q3 from '../src/My cat/q3.jpg';
import q4 from '../src/My cat/q4.jpg';
import q5 from '../src/My cat/q5.jpg';
import q6 from '../src/My cat/q6.jpg';
import q7 from '../src/My cat/q7.jpg';
import q8 from '../src/My cat/q8.jpg';
import q9 from '../src/My cat/q9.jpg';
import q10 from '../src/My cat/q10.jpg';
import q11 from '../src/My cat/q11.jpg';
import q12 from '../src/My cat/q12.jpg';
import q13 from '../src/My cat/q13.jpg';
import q14 from '../src/My cat/q14.jpg';
import q15 from '../src/My cat/q15.jpg';
import q16 from '../src/My cat/q16.jpg';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container,Row,Button,Col,Card} from 'react-bootstrap';
import { Like } from './Likeornor/like';




function App() { 

  const [index,setIndex] = useState(0);
  
  const [pic] = useState([QingQing, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16]);

  const onClickNext= () => {
    if (index + 1 === pic.length ){
        setIndex(
            index === 0 
          )
      } else {
          setIndex(
              index + 1
          )
      }
    }
  
  const onClickPrevious= () => {
    if (index - 1 === -1 ){
        setIndex(
            pic.length - 1
          )
      } else {
        setIndex(
            index - 1
          )
      }
    }
      
      return (
          <div className="bg">
          <Container className="App" >
            <Row>
              <Col><Button style={{"fontSize":"18px"}} onClick={onClickPrevious}> Previous </Button></Col>
              <Col><Button style={{"margin-left":"5px", "fontSize":"18px"}} onClick={onClickNext}> Next </Button></Col>
              <Card>
              <Card.Body>
                <Card.Title>Gallery</Card.Title>
                <Card.Text>
                <div><img src={pic[index]}  style={{"maxHeight":"70%","maxWidth":"70%"}} alt="Thank you for watching" /></div>
                </Card.Text>
              </Card.Body>
              </Card>
              <div><Like></Like></div>
            </Row>  
          </Container>
          </div>
        );
}



export default App;
