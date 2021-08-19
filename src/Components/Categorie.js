import { render } from "@testing-library/react";
import { Card,Button } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

const Categorie = (props) => {

  
  const {movie} = props;
  console.log(movie)
  render()
  {
    return(

      <div>
     
<Card dir="ltr" className='Home'style={{

display:'flex',

   width: '35rem',

padding:'10px',

}}>
  
    <Card.Title>{movie.title}</Card.Title>


  <Card.Body>

   
   
  <Button className='Button' >

  <Card.Img variant="top" src={movie.posterURL} className='Poster'/>
  <Link className='Link'to={`/movie/${movie.id}`} className='link-warning'>movie detail</Link>
            
  </Button>

  </Card.Body>

</Card>


     
    
      </div>
    )}}
    
 export default Categorie;
