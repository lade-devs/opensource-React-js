import React,{Component} from "react";
import {Link} from "react-router-dom";

class  MainContent extends Component{
    render(){
        return(

            <div style={{padding: "120px 0", backgroundColor: "#F4F3F3"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 style={{color: "#050010",fontWeight: "bold", fontSize: "2rem"}}>Beauty in code</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="inner_beauty">
                                    <div className="beauty_item">
                                        <ul className="list-inline">
                                            <li className="list-inline-item RA">Rest APi</li>
                                            <li className="list-inline-item RN">React Native</li> 
                                        </ul>
                                            <p style={{marginTop: "100px"}}></p>
                                            <h3 className="text-center">Project</h3>
                                            <h2 className="text-center">Ticket Booking</h2>
                                            <p style={{marginTop: "50px"}}></p>
                                            <p className="text-center">
                                                <Link to="/projects">Read more <i className="fa fa-arrow-right"></i></Link>
                                            </p>
                                            <p style={{marginTop: "50px"}}></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="inner_beauty">
                                    <div className="beauty_item">
                                        <ul className="list-inline">
                                            <li className="list-inline-item LARAVEL">Laravel</li>
                                        </ul>
                                            <p style={{marginTop: "100px"}}></p>
                                            <h3 className="text-center">Script</h3>
                                            <h2 className="text-center">Shopping Cart</h2>
                                            <p style={{marginTop: "50px"}}></p>
                                            <p className="text-center">
                                            <Link to="/projects">Read more <i className="fa fa-arrow-right"></i></Link>
                                            </p>
                                            <p style={{marginTop: "50px"}}></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="inner_beauty">
                                    <div className="beauty_item">
                                        <ul className="list-inline">
                                            <li className="list-inline-item JAVA">Java</li>
                                        </ul>
                                            <p style={{marginTop: "100px"}}></p>
                                            <h3 className="text-center">Project</h3>
                                            <h2 className="text-center">POS System</h2>
                                            <p style={{marginTop: "50px"}}></p>
                                            <p className="text-center">
                                            <Link to="/projects">Read more <i className="fa fa-arrow-right"></i></Link>
                                            </p>
                                            <p style={{marginTop: "50px"}}></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="inner_beauty">
                                    <div className="beauty_item">
                                        <ul className="list-inline">
                                            <li className="list-inline-item LARAVEL">Laravel</li>
                                        </ul>
                                            <p style={{marginTop: "100px"}}></p>
                                            <h3 className="text-center">Script</h3>
                                            <h2 className="text-center">User Auth</h2>
                                            <p style={{marginTop: "50px"}}></p>
                                            <p className="text-center">
                                            <Link to="/projects">Read more <i className="fa fa-arrow-right"></i></Link>
                                            </p>
                                            <p style={{marginTop: "50px"}}></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>

        );
    }
}


export default MainContent;