import React, { Component }  from 'react';
import MovieCard from '../Components/Moviecard';
import Search from './Searchbar'
function Series(props) {

  const {movies} = props;

  return (
    <ul>
      
      {movies.map((item,key) =>
        <ul key={key}> 
          <MovieCard movie={item}/>


         </ul>
 
            
      )}

      
    </ul>
    
  );
}

//.filter((val)=>{
//if(searchTerm==""){
  //return val;
//}
//else if (val.movies.toLowerCase().includes(searchTerm.toLowerCase()))
//{
 // return val; 
//}
//     })
console.log(Series) 

  
  export default Series;