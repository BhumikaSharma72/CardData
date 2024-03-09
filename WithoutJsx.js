function WithoutJsx()
{
    return(
        //<h1>Hello World</h1>//jsx
       // React.createElement("h1",null,"Hello World")
       React.cloneElement("div",null,React.createElement("h1",null," Hello AWorld"))
    )
}
export default WithoutJsx;