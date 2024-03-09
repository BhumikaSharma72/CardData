import { useState } from "react"

function Hook()
{
    const[name ,setName]=useState("Ram")
return(
    <div>
        <h1>My name is {name}</h1>
        <button onClick={()=>setName("Syam")}>Submit</button>
    </div>
)
}
export default Hook