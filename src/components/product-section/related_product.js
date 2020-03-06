import React,{Component} from "react";
import {Link} from "react-router-dom";


class RelatedProduct extends Component{

    render(){
        return(
            <div style={{padding: "50px 0 120px"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="sub_title" style={{color: "#050010"}}>Related</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-lg-4">
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
                                                <Link to="/project/s">Read more <i className="fa fa-arrow-right"></i></Link>
                                            </p>
                                            <p style={{marginTop: "50px"}}></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
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
                                            <Link to="/project/s">Read more <i className="fa fa-arrow-right"></i></Link>
                                            </p>
                                            <p style={{marginTop: "50px"}}></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
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
                                            <Link to="/project/s">Read more <i className="fa fa-arrow-right"></i></Link>
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


export default RelatedProduct;