import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


export function Like (){
    
    const [lcount,setLcount] = useState(0);

    const [ucount,setUcount] = useState(0);

    const likecounter =()=>{
        
        localStorage.setItem("likecount", lcount)
        localStorage.setItem("setLikecount", setLcount)
        if(typeof(Storage) !== "undefined"){
            if(localStorage.likecount){
                setLcount (lcount+1);
            } else{
                lcount (localStorage.lcount);
            }
        }
    }
    
    const unlikecounter =()=>{
        setUcount(ucount+1);
        localStorage.setItem("unlikecount", ucount)
    }
    
    let style={marginTop:"20px"}
        
        return <div className='container' style={style}>
            <div className='card'>
                <div className='card-header'></div>
                <div className='card-title'>
                </div>
                <div className='card-body'>
                    <div className='alert alert-success'>Like:{localStorage.getItem('likecount')}</div>
                    <div className='alert alert-danger'>Unlike:{localStorage.getItem('unlikecount')}</div>
                </div>
                <div className='card-footer'>
                    <button className='btn btn-primary' onClick={likecounter}>Like</button>
                    &nbsp;
                    &nbsp;
                    <button className='btn btn-danger' onClick={unlikecounter}>unlike</button>
                </div>
            </div>
        </div>
        
}



