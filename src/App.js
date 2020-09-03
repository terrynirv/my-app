import React from 'react';
import './App.css';
import Clock from './components/clock/Clock';
import Contact from './components/contact/Contact';
import Navigation from "./components/navigation/Navigation";
import Page404 from "./components/page404/Page404"
import Welcome from "./components/welcome/Welcome"
import { Route, Switch } from "react-router-dom";
import Jeopardy from "./Jeopardy"




function App() {
 
  return (
    <div>
       <Navigation />
        <Switch> 
       
      
        <Route
          exact
          path="/"
          render={(props)=> <Welcome {...props} name="Terry"/>} />
       
        <Route
          path="/welcome/:name"
          render={({ match }) => <Welcome   name={match.params.name}/>}    />
        <Route path="/clock" exact component={Clock} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/jeopardy" exact component={Jeopardy}/>
        <Route component={Page404} />
        
      </Switch>
      </div>
  );
  
}



export default App;
