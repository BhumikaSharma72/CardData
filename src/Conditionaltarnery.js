import { useState } from "react"
function Conditionaltarnery()
{
    const [status,setStatus]=useState(true)
    return(
        <div>
            {
                status==1?<h1>HELLO WORLD 1</h1>
                :status==2?<h1>HELLO WORLD 1</h1>
                :status==3?<h1>HELLO WORLD 1</h1>
                :null
            }
           <button onClick={()=>setStatus(false)}>Hide</button>
            <button onClick={()=>setStatus(true)}>Show</button> 
            <button onClick={()=>setStatus(!status)}>Toggle</button>

        </div>
    )
}
export default Conditionaltarnery
