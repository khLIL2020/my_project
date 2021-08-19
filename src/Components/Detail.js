import { render } from "@testing-library/react";
import { Card,Button } from 'react-bootstrap';
import React, { Component } from 'react';
import {useParams} from "react-router-dom";
import {movies} from './Films'



const Detail = ( ) => {

  
  let { id } = useParams();
 
   const movie = movies.find(movie =>movie.id===id);

  render()
  {
    return(

      <div>
          
     
      <Card dir="ltr"style={{
        display:'flex',

width: '50rem',

padding:'10px', }}>

      <Card.Img variant="top" src={movie.posterURL}
      
      styles={{

        width: '10px',

        }}/>


  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text>
    {movie.description}
    </Card.Text>
   <Button>
  
  <a href={movie.bandeannonce} className='link-warning'>See the trailer</a> </Button>
  <br/>  <br/>
  

 
   <Button><a href={movie.link} className='link-warning'>Watch the movie</a> </Button>

   <br/><br/>

   <input id="input-id" name="input-name" type="number" class="rating" mouseEnabled={false} step={0.5} default ={5} stars={11 } data-size="lg" data-rtl="true"/>

   <iframe width="560" height="315" src={movie.bandeannonce} title={movie.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   
  </Card.Body>


</Card>
      </div>
    )}
    }
 export default Detail;
