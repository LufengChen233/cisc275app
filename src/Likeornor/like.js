import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


export function Like (){
    
    const [lcount,setLcount] = useState(Number(localStorage.getItem('likecount')));

    const [ucount,setUcount] = useState(Number(localStorage.getItem('unlikecount')));

    const likecounter =()=>{
        setLcount(lcount+1);
        localStorage.setItem('likecount',lcount);
    }
    
    const unlikecounter =()=>{
        setUcount(ucount+1);
        localStorage.setItem('unlikecount',ucount);
    }
    
    let style={marginTop:"20px"}
        
        return <div className='container' style={style}>
            <div className='card'>
                <div className='card-header'></div>
                <div className='card-title'>
                    <h>Do you like her</h>
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



