import Child1 from "./Child1"



function Parent1()
{
    function hello(name)
    {
        alert("Hello="+name)
    }
return(
    <div>
        <h1>

        {/* <Child1 name="Ram"></Child1> */}
        {/*<Child1 name="Ram"></Child1>*/}
        <Child1 name={hello}></Child1>
        </h1>
    </div>
)
}
export  default Parent1