import { useEffect, useState } from "react"

function UseEff()

{
    const[count,set_count]=useState(0)
    const[data,set_data]=useState(10)
    const[run,set_run]=useState(100)

    useEffect(()=>{
        console.log("Loading")
    },[count])

  return(
    <div>
        <h1>
            Count:{count}
            Data:{data}
            run:{run}

            <button onClick={()=>set_count(count+1)}>Count</button><br></br>
            <button onClick={()=>set_data(data+1)}>Data</button><br></br>

            <button onClick={()=>set_run(run+1)}>Run</button><br></br>

        </h1>
    </div>
  )  
}
export default UseEff