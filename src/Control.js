import { useState } from "react"


function  Control()

{
    const[name,setName]=useState();
    const[mob,setMob]=useState();
    function SubmitForm(e)
    {
        e.preventDefault()
        console.log(name,mob)
    }



return(
    <div>
        <form onSubmit={SubmitForm}>
            <input type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}></input>
            <input type="number" placeholder="Enter Mobile" onChange={(e)=>setMob(e.target.value)}></input>
            <button>Submit</button>


        </form>
    </div>
)




}
export default Control