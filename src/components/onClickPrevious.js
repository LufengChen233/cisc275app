import QingQing from '../My cat/QingQing.png';
import q1 from '../My cat/q1.jpg';
import q2 from '../My cat/q2.jpg';
import q3 from '../My cat/q3.jpg';
import q4 from '../My cat/q4.jpg';
import q5 from '../src/My cat/q4.jpg';
import q6 from '../src/My cat/q4.jpg';
import q7 from '../src/My cat/q4.jpg';
import q8 from '../src/My cat/q4.jpg';
import q9 from '../src/My cat/q4.jpg';
import q10 from '../src/My cat/q4.jpg';
import q11 from '../src/My cat/q4.jpg';
import q12 from '../src/My cat/q4.jpg';
import q13 from '../src/My cat/q4.jpg';
import q14 from '../src/My cat/q4.jpg';
import q15 from '../src/My cat/q4.jpg';
import q16 from '../src/My cat/q4.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export function ClickPre(){
    const [index,setIndex] = useState(0);
  
    const [pic] = useState([QingQing, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16]);

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