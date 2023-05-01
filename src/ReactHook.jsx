import React,{useEffect, useState} from "react";

const ReactHook = ({count})=>{

    const [ counter,setCounter] = useState(count)

    useEffect(()=>{
   setCounter(count)
 


    });
    return(
        <div>
            
            <h2>React Hook da state yaratilishi</h2>
            <br />
            <br />
            <h1>React hook state  :{counter} </h1>
            <button onClick={()=>setCounter(counter + 1)}>+</button>
            <button onClick={()=>setCounter(counter - 1)}>-</button>
        </div>
    )

}

export default ReactHook;