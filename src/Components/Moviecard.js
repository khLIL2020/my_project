 import { render } from "@testing-library/react";
import { Card,Button } from 'react-bootstrap';
import React, { Component } from 'react';
import { Link,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'




  function Film(props) {
    const {movie} = props;
    
      render()
  
  {  return(
  

<Card dir="ltr" className='Moviecard' style={{

display:'flex',

   width: '20rem',

padding:'10px',

}}>
  
    <Card.Title>{movie.title}</Card.Title>


  <Card.Body>

   
   
  <Button className='Button' >

  <Card.Img variant="top" src={movie.posterURL} />
  <Link className='Link'to={`/movie/${movie.id}`} className='link-warning'>movie detail</Link>
            
  </Button>

  </Card.Body>


</Card>


  )}
    }
 export default Film;
 