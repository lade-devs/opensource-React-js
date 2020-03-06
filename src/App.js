import React,{Component} from 'react';
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";

// stylesheet
import "./assets/css/bootstrap.min.css";
import "./assets/css/styles.css";
import "./assets/css/responsive.css";

// pages
import Home from "./views/Index";
import Project from "./views/project";
import SingleProject from "./views/single-project"; 
import NotFound from "./views/404";


import ScrollTop from "./components/router_top";






class App extends Component {

      render() {
        return (
          
          <div className="App">
            <Router>
            <ScrollTop/>
            <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/project-and-script"} component={Project} />
            <Route exact path={"/projects"} component={SingleProject} />
            <Route path="*" component={NotFound} />
            </Switch>
        </Router>
        </div>
        
          );
      }
    }

    export default App;