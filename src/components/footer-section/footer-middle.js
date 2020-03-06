
import React from "react";
import {Link} from "react-router-dom";

function footer_middle(){
    return(

  <div style={{backgroundColor: "#050010"}}>
  <div className="container footer_bottom">
      <div className="row">
          <div className="col-md-12 d-flex flex-column align-items-center" style={{padding: "50px 0"}}>
              <img src={require("../../assets/img/logo.png")} className="img-fluid" alt="Opensource Logo" width="85"/>
              <div style={{marginTop: "15px"}}></div>
              <ul className="list-inline">
                  <li className="list-inline-item"><Link href=""><i className="fab fa-facebook"></i></Link></li>
                  <li className="list-inline-item"><Link href=""><i className="fab fa-linkedin"></i></Link></li>
                  <li className="list-inline-item"><Link href=""><i className="fab fa-github"></i></Link></li>
                  <li className="list-inline-item"><Link href=""><i className="fab fa-instagram"></i></Link></li>
              </ul>
          </div>
      </div>
  </div>
</div>
);
}

export default footer_middle;