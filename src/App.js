import React from 'react';
import './App.css';
import Welcome from './components/welcome/Welcome';
import Clock from './components/clock/Clock';
import Contact from './components/contact/Contact';
import Navigation from "./components/navigation/Navigation";
import Page404 from "./components/page404/Page404"
import { Route, Switch } from "react-router-dom";


function App() {

  return (
    <div>
       <Navigation />
        <Switch> 
       
      
      <Route path="/" exact component={Welcome}
         
        />
        <Route path="/clock" exact component={Clock} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/" component={Page404} />
      </Switch>
      </div>
  );
}

export default App;
