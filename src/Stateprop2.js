import { useState } from "react";
import StateProp1 from " ./StateProp1"


function StateProp()

{
    const[name,setName]=useState("Ram")
    const[age,setAge]=useState(25)
    function change()
    {
        setName("Syam")
        setAge(28)
    }
    return(
        <div>
             <StateProp1 val1={name} val2={age}></StateProp1>
             <button onClick={change}>Submit</button>
        </div>
    )


}
export default StateProp2