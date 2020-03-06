
import React from "react";
import {Link} from "react-router-dom";

function footer_bottom(){
    return(

   <div>
        <div className="container">
            <div className="row">
                <div className="col-md-12 d-flex flex-column align-items-center" style={{padding: "30px 0"}}>
                    <img src={require("../../assets/img/logo_main.svg")} className="img-fluid" alt="KodeDict Logo" width="80"/>
                    <div style={{marginTop: "30px"}}></div>
                    <p style={{fontSize: "15px"}} className="text-center">
                        An initiative and development by&nbsp;<Link href="" style={{color: "#006CFF",fontWeight: "500"}}>KodeDict</Link><br/>© 2020.</p>
                </div>
            </div>
        </div>
    </div>
    );
    }
    export default footer_bottom;