import { useState } from "react";

function Afun()
{
    var [color,setColor]=useState("lal")
    function abc()
    {
        setColor("narangi")
    }
    return(
        <div>
            <h1>The color  is  {color}</h1>
            <button onClick={abc}>Submit</button>
        </div>
    )
}
export default Afun