import { Table } from "react-bootstrap"

function List()
{
    var arr=[{rollno:101,name:"Ram",marks:86},
    {rollno:102,name:"Syam",marks:56},{rollno:103,name:"Krishna",marks:66},{rollno:104,name:"Sohan",marks:76}]
    
    return(
        <div>
            <center><h1>Student Data</h1>           
             <Table striped bordered hover variant="dark" style={{width:"200px"}}>
              <tbody>
                <tr>
                <td>key</td>
                <td>Roll no</td>
                <td>name</td>
                <td>Marks</td>
                </tr>
              
            {
              arr.map((item,i)=>
              item.marks>=60?
              <tr key={i}>
                <td>{i}</td>
                <td>{item.rollno}</td>
                <td>{item.name}</td>
                <td>{item.marks}</td>


              </tr>:null
              
                //<h1>{item}</h1>
              )
            }
            </tbody>
            </Table>
            </center>


        </div>
    )

}
export default List