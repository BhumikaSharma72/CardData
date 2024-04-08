import { createContext } from "react"
import CmpB from "./CmpB"


const data = createContext()

function CmpA()
{

    var name = "Ram"

    return(
        <div>

            <data.Provider  value = {name}>
                <CmpB></CmpB>
            </data.Provider>


            
        </div>
    )
}

export default CmpA

export {data}