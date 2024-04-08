import { PureComponent,setState } from "react";
//pure component ka use unnessessary or unimportant rendering ko rokne ke liye kiya jata h
class PureCmp extends PureComponent
{
    constructor()
    {
        super()
        this.state=
        {
            count:0
        }
    }
    render()
    {
        console.log("Render")
        return(
            <div>
                <h1>Count{this.state.count}</h1>
                <button onClick={()=>this.setState({count:this.state.count1})}>Submit</button>
            </div>
        )

    }
}
export default PureCmp