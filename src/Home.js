import React, { useState, useEffect } from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';
import Footer from './Footer';

import {useNavigate} from "react-router-dom"


function Home()
{
  const [apidata, setApiData] =useState([])
  const navigate = useNavigate()

  useEffect (()=>
{
  getData()
},[])



function getId(pid)
{
  const data = { name : pid , add : "Indore"}

  navigate("./item" , {state : data} )

  console.log(pid)


}







  async function getData()
  {
   var result =  await fetch("https://fakestoreapi.com/products")

    var data = await result.json()

    setApiData(data)

  }
  return(
    <div>
      

      <MDBRow className='row-cols-1 row-cols-md-3 g-4'>

        {

          apidata.map ((item,i)=>

          <MDBCol key = {i}>
          <MDBCard>
          <center>  <MDBCardImage
              src= {item.image} style ={{width : "100px", height : "100px"}}
              alt='...'  
              position='top'
            /></center>
            <MDBCardBody>
              <MDBCardTitle style = {{color : "red"}}>{item.title}</MDBCardTitle>
              <MDBCardTitle style =  {{color : "green"}}>{item.price*80} Rs</MDBCardTitle>
              <MDBCardTitle style =  {{color : "blue"}}>{item.rating.rate}</MDBCardTitle>
              <MDBCardText>
                This is a longer card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.
              </MDBCardText>


              <MDBBtn  onClick={()=>getId(item.id)}>View Details {item.id}</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        
        
        )
          
        }
   
      
    </MDBRow>

    <Footer></Footer>
    </div>
  )
}

export default Home