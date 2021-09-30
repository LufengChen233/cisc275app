import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export class Like extends Component{
    constructor(props,context){
        super(props,context)
        this.state = {
            like:0,
            unlike:0,
            title:props.title
        }
    }

    static defaultProps={
        title:"Do you like this pciture"
    }

    render(){
        let style={marginTop:"20px"}
        let {like,unlike,title}= this.state
        return <div className='container' style={style}>
            <div className='card'>
                <div className='card-header'></div>
                <div className='card-title'>
                    {title}
                </div>
                <div className='card-body'>
                    <div className='alert alert-success'>Like:{like}</div>
                    <div className='alert alert-danger'>Unlike:{unlike}</div>
                </div>
                <div className='card-footer'>
                    <button className='btn btn-primary' onClick={this.like}>Like</button>
                    &nbsp;
                    &nbsp;
                    <button className='btn btn-danger' onClick={this.unlike}>unlike</button>
                </div>
            </div>
        </div>
        
    }

    like = () => {
        this.setState({like:this.state.like + 1})
    }

    unlike = () => {
        this.setState({unlike:this.state.unlike + 1})
    }
}




