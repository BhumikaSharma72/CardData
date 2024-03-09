import React from "react";



function Wjsx()
{
    return(
        //<h1>Hello World</h1>//jsx
       // React.createElement("h1",null,"Hello World")
       //<div>
      // <h1>Hello World</h1></div>
       React.createElement("div",null,React.createElement("h1",null," Hello AWorld"))
    )
}
export default Wjsx;