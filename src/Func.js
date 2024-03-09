function Func()
{
    function hello(name)
    {
        alert("Hello"+name)
    }
return(
    //<div><h1>function component</h1></div>
    <div><button onClick={hello}>Submit</button></div>
   // <div><button onClick={()=>hello("Ram")}>Submit</button></div>//with paramiterized
)
}
export default Func;