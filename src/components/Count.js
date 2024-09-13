import React, { useState } from 'react'
import './Count.css'
function Count() {
    const [count,setcount]=useState(0);
    const inc=()=> setcount(count+1)
    const dec=()=>setcount((count)=>{
    //    count=>(count>0?(count-1):count));
       if(count > 0)
        {
            return count-1;
        }
        else
        {
            return count;
        }
})
    
  return (
    <div>
        <h1>Counter</h1>
        <label>{count}</label><br></br>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
    </div>
  )
}

export default Count