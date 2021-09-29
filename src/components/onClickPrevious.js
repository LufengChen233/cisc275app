import QingQing from '../My cat/QingQing.png';
import q1 from '../My cat/q1.jpg';
import q2 from '../My cat/q2.jpg';
import q3 from '../My cat/q3.jpg';
import q4 from '../My cat/q4.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export function ClickPre(){
    const [index,setIndex] = useState(0);
  
    const [pic] = useState([q1, q2, q3, q4, QingQing]);

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
    
    return <Col><Button style={{"fontSize":"18px"}} onClick={onClickPrevious}> Previous </Button></Col>
}