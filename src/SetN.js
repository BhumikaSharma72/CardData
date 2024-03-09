import { useState } from "react";

function SetN()
{
    //const name ="Ram";
    const [name,setName]=useState("Ram")
    function hello()
    {
        //name="Syam"
        setName("Syam")
    } 
        return(
            <div>
                <h1>
                    My name is {name}
                </h1>
                <button onClick={()=>hello()}>Submit</button>
            </div>
        )

}
export default SetN;