import QingQing from '../My cat/QingQing.png';
import q1 from '../My cat/q1.jpg';
import q2 from '../My cat/q2.jpg';
import q3 from '../My cat/q3.jpg';
import q4 from '../My cat/q4.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';



export function ClickNext(){

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
    
    return <Col><Button style={{"margin-left":"5px", "fontSize":"18px"}} onClick={onClickNext}> Next </Button></Col>
}