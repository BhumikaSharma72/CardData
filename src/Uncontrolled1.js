import { useRef } from "react"


function Uncontrolled1()
{
    const inputref=useRef()
    function hello()
    {
        inputref.current.value="Hello World I am Bhumika"
        console.log(inputref.current.value)
    }
return(

    <div>
                    <input type="text" placeholder="Enter Name" ref={inputref}></input>
            <button onClick={()=>hello()}>Submit</button>

    </div>
)
}
export default Uncontrolled1