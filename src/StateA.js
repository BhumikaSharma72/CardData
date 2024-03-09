import { useState } from "react";
function StateA()
{
    
    const [n,setN]=useState(1)
    function Num(){
        setN(2)

    }
   return(
    <div>
        <h1>The number n is{n}</h1>
        <button onClick={()=>Num()}>Submit</button>
    </div>

   )
}
export default StateA;