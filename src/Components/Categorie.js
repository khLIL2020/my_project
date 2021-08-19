import { render } from "@testing-library/react";
import { Card,Button } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';


const Categorie = (props) => {

  
  const {movie} = props;
  console.log(movie)
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
   
  
  

      
   
  <Button>
            <Link to={`/movie/${movie.id}`} className='link-warning'> movies details</Link>
  </Button>

  </Card.Body>


</Card>
     
    
      </div>
    )}}
    
 export default Categorie;
