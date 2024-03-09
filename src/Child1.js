function Child1(prop)
{
    return(
        <div>
            {/*<h1>My name is{prop.name}</h1>*/}
            <button onClick={()=>prop.name("Ram")}>Button</button>
        </div>
    )

}
export default Child1