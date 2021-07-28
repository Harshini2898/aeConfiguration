import React, {Fragment} from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/pages/dashboard";
import Navbar from "./components/layouts/navbar"
import About from "./components/pages/about";
import AddConfig  from "./components/pages/addConfig";
import ConfigState from "./context/config/ConfigState";
import background from "./images/Group2.jpg";


const App = () => {

  return(
    <ConfigState>
    <Router>
      <div >
      <Fragment  className='App'>
      <Navbar/>
      <div className='container'>
      <Switch>
        <Route exact path ='/' component = {Dashboard}/>
        <Route exact path ='/add' component = {AddConfig}/>
        <Route exact path ='/about' component = {About}/>
      </Switch>
      </div>
      </Fragment>
      </div>

    </Router>
    </ConfigState>
  )
}

export default App;
