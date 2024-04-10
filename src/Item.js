import { useEffect, useState } from "react";
import {useLocation} from "react-router-dom"
import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';

function Item()
{

  const location = useLocation() ;
  const data = location.state

  const [apidata,setData]=useState({})

  useEffect(()=>
{

  fetch("https://fakestoreapi.com/products"+data.pid).then((result)=>{

  result.json().then((data1)=>{
    
    setData(data1)


  })

  })
},[])
  return (
    <div>
      

      


      <MDBCard>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>

    </div>
  )
}

export default  Item
