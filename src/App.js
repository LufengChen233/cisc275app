import QingQing from '../src/My cat/QingQing.png';
import q1 from '../src/My cat/q1.jpg';
import q2 from '../src/My cat/q2.jpg';
import q3 from '../src/My cat/q3.jpg';
import q4 from '../src/My cat/q4.jpg';
import React, { useState } from 'react';



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
          <div>
            <img src={pic[index]} style={{"maxHeight":"40%","maxWidth":"40%"}} alt="My cat" /> <br/>
            <button style={{"fontSize":"18px"}} onClick={onClickPrevious}> Previous </button>
            <button style={{"margin-left":"5px", "fontSize":"18px"}} onClick={onClickNext}> Next </button>
          </div>
        );
}



export default App;
