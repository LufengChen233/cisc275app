import QingQing from '../src/My cat/QingQing.png';
import q1 from '../src/My cat/q1.jpg';
import q2 from '../src/My cat/q2.jpg';
import q3 from '../src/My cat/q3.jpg';
import q4 from '../src/My cat/q4.jpg';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container,Row,Button,Col,Card} from 'react-bootstrap';




function App() { 

  const [index,setIndex] = useState(0);
  
  const [pic] = useState([q1, q2, q3, q4, QingQing]);

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
          <Container className="App">
            <Row>
              <Col><Button style={{"fontSize":"18px"}} onClick={onClickPrevious}> Previous </Button></Col>
              <Col><Button style={{"margin-left":"5px", "fontSize":"18px"}} onClick={onClickNext}> Next </Button></Col>
              <Card>
              <Card.Body>
                <Card.Title>Gallery</Card.Title>
                <Card.Text>
                <div><img src={pic[index]} style={{"maxHeight":"70%","maxWidth":"70%"}} alt="My cat" /> <br/></div>
                </Card.Text>
              </Card.Body>
              </Card>
            </Row>  
          </Container>
        );
}



export default App;
