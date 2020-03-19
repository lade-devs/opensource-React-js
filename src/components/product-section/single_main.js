import React from "react";
import {Link} from "react-router-dom";


    const SingleMain = ({fetch}) => {
        return(
            
            <div style={{padding: "120px 0", backgroundColor: "#F4F3F3"}}>
            <div className="container">
            {fetch.data.map((i,v)=>(
                <div key={v} className="row">
                    <div className="col-md-12">
                        <h1 style={{color: "#050010",fontWeight: "bold", fontSize: "2rem"}}>{i.project_title}</h1>
                    </div>
                    
                        
                        <div className="col-md-7 single_project">
                        <div style={{padding: "10px"}}>
                            <p style={{margin: "30px 0",fontWeight:"100"}}>{i.project_detail}</p> 
                                
                            {i.m_link !== 'none' ? ( 
                                <a href={i.m_link} className="btn beauty_btn">Read More&nbsp;<i className="fab fa-medium"></i></a>
                                ) : null}
                                <p style={{marginTop: "50px"}}></p>
                                <hr style={{backgroundColor: "#707070"}}/>
                            <p style={{marginTop: "30px"}}></p>
                                <ul className="list-inline">
                                    <li className="list-inline-item" style={{fontWeight: "bold",fontSize: "20px"}}>tags:</li>
                                    {i.lang === 'yes'? (
                                 i.tag.map((i,v)=>(
                                    <li key={v} className="list-inline-item JAVA">{i.lang}</li>
                                ))
                             ) : (
                                <li className="list-inline-item JAVA">{i.tag}</li>
                             ) }
                                </ul>
                                <p style={{marginTop: "30px"}}></p>
                                <em>{i.slug}</em>
                        </div>
                </div>
                <div className="col-md-5 single_project_social">
                        <div style={{padding: "10px"}}>
                            <p style={{fontWeight: "100",fontSize: "16px"}}><strong>Completed:</strong> {i.completed}</p>
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
            ))}
            </div>
        </div>
        );
    }


export default SingleMain;