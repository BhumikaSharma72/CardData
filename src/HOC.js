import { useState } from "react"


var HOC=()=>
{
    return(
        <div>
          <RedCmp cmp = {Counter}></RedCmp>
            
        </div>
    )
}
function RedCmp(prop)
{
    return(
       <h1 style={{backgroundColor:"red",width:"200px"}}><prop.cmp></prop.cmp></h1>

    )
}

function Counter()
{
    const [count,setCount]=useState(0)
    return(
        <div>
            <h1>count:{count}</h1>
            <button onClick={()=>setCount(count+1)}>Submit</button>
        </div>
    )

}
export default HOC