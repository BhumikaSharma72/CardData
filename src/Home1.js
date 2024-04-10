import React, { useEffect, useState } from 'react'
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBBtn,
  MDBCol
} from 'mdb-react-ui-kit';
import Footer from './Footer';
import {useNavigate} from 'react-router-dom'
export default function Home1() { 
  const [apidata,setdata]=useState([])
  const navigate=useNavigate()
  useEffect(()=>{
   getData()
},[])
function getId(pid)
{
  //console.log(pid)
  const data={pid:pid,add:"Indore"}
  navigate("/item",{state:data})
}

 async function getData()
{
  //console.log("Hello")
  var result =await fetch("https://fakestoreapi.com/products")
  //console.log(result)
  var data = await result.json()
 // console.log(data)
  setdata(data)
}
  return (
      <div>
       <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      {
        apidata.map((item)=>
        <MDBCol key={item.id}>
        <MDBCard>
         <center><MDBCardImage
            src={item.image} style={{width:"150px",height:"150px"}}
            alt='...'
            position='top'
          /></center>
          <MDBCardBody>
            <MDBCardTitle>{item.title}</MDBCardTitle>
            <MDBCardTitle style={{color:"blue"}}>{item.price*80}Rs</MDBCardTitle>
            <MDBCardTitle style={{color:"green"}}>{item.category}</MDBCardTitle>
            <MDBCardTitle style={{color:"orange"}}>{item.rating.rate}</MDBCardTitle>

            <MDBCardText>
              {item.description}
            </MDBCardText>
            <center><button type="button"  className='btn btn-secondary' onClick={()=>getId(item.id)}>View{item.id}</button></center>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      )}
      
      
    </MDBRow>
   <Footer></Footer>    
    </div>
  )
}