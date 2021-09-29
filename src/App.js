import QingQing from '../src/My cat/QingQing.png';
import q1 from '../src/My cat/q1.jpg';
import q2 from '../src/My cat/q2.jpg';
import q3 from '../src/My cat/q3.jpg';
import q4 from '../src/My cat/q4.jpg';
import React from 'react';
import {Jumbotron} from 'react-bootstrap';




class Main extends React.Component  { 

  state = {index: 0, picList: [q1, q2, q3, q4, QingQing]}
  state1 = {index:0}

  onClickNext= () => {
    if (this.state.index + 1 === this.state.picList.length ){
        this.setState({ 
            index: 0 
          })
      } else {
          this.setState({
              index: this.state.index + 1
          })
      }
    }
  
    onClickPrevious= () => {
      if (this.state.index - 1 === -1 ){
          this.setState({ 
              index: this.state.picList.length - 1
            })
        } else {
            this.setState({
                index: this.state.index - 1
            })
        }
      }

      onClickLike=()=>{
        this.setState1({
          index:this.state1.index + 1});
      }

      
      render() {
        return (
          <div>
            <img src={this.state.picList[this.state.index]} style={{"maxHeight":"40%","maxWidth":"40%"}} alt="My cat" /> <br/>
            <button style={{"fontSize":"18px"}} onClick={this.onClickPrevious}> Previous </button>
            <button style={{"margin-left":"5px", "fontSize":"18px"}} onClick={this.onClickNext}> Next </button>
            <button style={{"fontSize":"18px"}} onClick={this.onClickLike}> Like </button>
            <Jumbotron>[this.state1.count]</Jumbotron>
          </div>
        );
}
}


export default Main;
