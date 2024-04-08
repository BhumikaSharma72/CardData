


            import { useState } from "react";
function PostAPi()
{
    const [rollno,setRollno]=useState()
    const [name,setName]=useState()
    const [marks,setMarks]=useState()
    function SubmitForm(e)
    {
        e.preventDefault();
         console.log(rollno,name,marks)
         
         const rollno1=parseInt(rollno)
         const marks1=parseInt(marks)
         const data={rollno1,name,marks1}

         fetch("http://localhost:3000/posts",{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
         }).then((result)=>{
            result.json().then((data1)=>{
                console.log(data1)
            })
         })
    }
    return(
        <div>
          <form onSubmit={SubmitForm}>
          <input type="number" placeholder="Enter RollNo" onChange={(e)=>setRollno(e.target.value)}></input><br></br>
          <input type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}></input><br></br>
          <input type="number" placeholder="Enter marks" onChange={(e)=>setMarks(e.target.value)}></input><br></br>
          <button>Submit</button>
          </form>
        </div>
    )
}
export default PostAPi

