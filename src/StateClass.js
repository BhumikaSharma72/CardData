const{Component}=require("react");
class StateClass extends Component
{
    constructor()
    {
        super()
        this.state=
        {
            name:"Ram"
        }
   
    }
    render()
    {
        return(
            <div>
                <h1>
                    This is  {this.state.name}

                </h1>
                <button onClick={()=>this.setState({name:"syam"})}>Submit</button>
            </div>
        )
    }
}
export default StateClass