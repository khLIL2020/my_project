import { render } from "@testing-library/react";
import { Card,Button } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

const Categorie = (props) => {

  
  const {movie} = props;

const WrappedLink = () => {
      return (

          <Link style={{display: 'block', height: '100%'}} to={`/movie/${movie.id}`} className='link-warning'><Card.Img variant="top" src={movie.posterURL} className='Poster'/></Link>
  
      )
    }
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


  <WrappedLink/>
  </Button>

  </Card.Body>

</Card>


     
    
      </div>
    )}}
    
 export default Categorie;
