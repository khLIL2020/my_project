import React from 'react';
import './App.css';
import movies from './Components/Films'
import Contactus from './Components/Contact-us'
import Categoriemaper from './Components/Categorie-maper'
import Home from './Components/Films'
import Detail from './Components/Detail' 
import Bar from './Components/Navbar';
import{ BrowserRouter as Router } from 'react-router-dom'
import {  Route, Switch } from 'react-router-dom';
import './Components/styles.css'
function App() {

  

  return  (
    <div className='App'>
  
{Bar()}
 <Router>
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
        
    
        </ul>
      </nav>

      <Switch>
      <Route exact path="/" render={()=><Home />} /> /contact-us
      <Route path="/movie/:id" render = {()=> <Detail movies={movies}/>}/>
      <Route path="/categorie/:type" render = {()=> <Categoriemaper/>}/>
      <Route path="/contact-us" render = {()=> <Contactus />}/>

      </Switch>
      </Router>
    </div>
    
  );
}

export default App;
