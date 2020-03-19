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
          <>
          <div className="App">
            <Router>
            <ScrollTop/>
            <Switch>
            <Route exact path={"/"} component={Home} />
            <Route  path={"/project-and-script"} component={Project} />
            <Route  path={"/project/:id"} component={SingleProject} />
            <Route  path={"/script/:id"} component={SingleProject} />
            <Route component={NotFound} />
            </Switch>
        </Router>
        </div>
        </>
          );
      }
    }

    export default App;