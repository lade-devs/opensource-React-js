import React,{Component} from "react";
import {Link} from "react-router-dom";

class SingleMain extends Component{
    render(){
        return(
            
            <div style={{padding: "120px 0", backgroundColor: "#F4F3F3"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 style={{color: "#050010",fontWeight: "bold", fontSize: "2rem"}}>Ticket Booking</h1>
                    </div>
                    <div className="col-md-7 single_project">
                            <div style={{padding: "10px"}}>
                                <p style={{margin: "30px 0",fontWeight:"100"}}><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                                    it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                                    Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                                    <Link to="" className="btn beauty_btn">Read More&nbsp;<i className="fab fa-medium"></i></Link>
                                    <p style={{marginTop: "50px"}}></p>
                                    <hr style={{backgroundColor: "#707070"}}/>
                                <p style={{marginTop: "30px"}}></p>
                                    <ul className="list-inline">
                                        <li className="list-inline-item" style={{fontWeight: "bold",fontSize: "20px"}}>tags:</li>
                                        <li className="list-inline-item RA">Rest APi</li>
                                        <li className="list-inline-item RN">React Native</li> 
                                    </ul>
                            </div>
                    </div>
                    <div className="col-md-5 single_project_social">
                            <div style={{padding: "10px"}}>
                                <p style={{fontWeight: "100",fontSize: "16px"}}><strong>Completed</strong> January 19, 2020</p>
                        <hr style={{backgroundColor: "#707070"}}/>
                        <p style={{marginTop: "50px"}}></p>
                        <ul className="list-inline">
                            <li className="list-inline-item" style={{fontWeight: "500"}}>Share:</li>
                            <li className="list-inline-item"><Link to=""><i className="fab fa-facebook"></i></Link></li>
                            <li className="list-inline-item"><Link to=""><i className="fab fa-linkedin"></i></Link></li>
                            <li className="list-inline-item"><Link to=""><i className="fab fa-twitter"></i></Link></li>
                        </ul>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default SingleMain;