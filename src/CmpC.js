import { data } from "./CmpA"
function CmpC()
{
    return(
        <div>
            <h1> Cmp C</h1>
            <data.Consumer>
                {
                    (name) =>
                    {
                       return(
                        <h1> My name is {name}</h1>
                       )
                    }
                }
            </data.Consumer>
        </div>
    )
}

export default CmpC