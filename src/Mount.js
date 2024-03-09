import { Component } from "react";

class Mount extends Component
{
    constructor()
    {
        super()
        console.log("Constructor")

    }
    componentDidMount()
    {
        console.log("Component Did Mount")

    }
 render()
 {
    console.log(" Render ")

    return(
        <div>
            <h1>
                Mount
            </h1>
        </div>
    )
 }   
}
export default Mount