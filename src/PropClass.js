import PropClass1 from "./PropClass1";
const {Component} = require("react");
class PropClass extends Component
{
    constructor()
    {
        super()
        this.state={name:"Ram",
         age:"10" ,
         add:"Indore"

        }
    }
    render()
    {
        return(
<div><PropClass1 name={this.state.name} age={this.state.age} add={this.state.add}></PropClass1>
<button onClick={()=>this.setState(
    {
        name:"Shyam",
        age:"15",
        add:"Mumbai"
    }
)}>Submit</button>
</div>
        )
    }
}
export default PropClass