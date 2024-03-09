function StateFun()
{
    //function hello()
    //{
      //  alert("Hello")
    function hello(name)
    {
        alert("Hello "+name)
    }

//}S
return(
    <div>
        
       {/* <button onClick={hello}>Submit</button> */}
        <button onClick={()=>hello("Ram")}>Submit</button>


        
    </div>
)
}
export default StateFun;