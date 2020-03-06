import React from "react";

function footer_top(){
    return(

  <div id="collaborate" style={{backgroundColor: "rgba(5,0,16,0.89)", borderTop: "#006CFF 15px solid"}}>
  <div className="container footer_top">
      <div className="row">
          <div className="col-md-12 d-flex flex-column align-items-center" style={{padding: "50px 0"}}>
              <h3 className="sub_title" style={{color: "#006CFF"}}>CONTACT</h3>
              <h2 className="text-center">Let's build a project together</h2>
              <p className="text-center">we'll be glad to involve you in our opensource course.</p>
              <div className="container text-center d-flex flex-column align-items-center">
                  <div className="row" style={{padding: "0 30px"}}>
                      <div className="col-md-12 " style={{padding: "50px 0px"}}>
                  <form>
                              <div className="row">
                                  <div className="col-md-6 ">
                                      <div className="form-group"><input className="form-control" type="text" placeholder="Full Name*"/></div>
                                  </div>
                                  <div className="col-md-6">
                                      <div className="form-group"><input className="form-control" type="email" placeholder="Email*"/></div>
                                  </div>
                                  <div className="col-md-12" style={{paddingTop: "50px"}}>
                                      <div className="form-group">
                                          <button className="btn btn-primary" type="submit" style={{padding: "15px 25px"}}>Contribute to Opensource</button>
                                      </div>
                                  </div>
                              </div>
                  </form>
              </div>
          </div>
              </div>
          </div>
      </div>
  </div>
</div>
);
}

export default footer_top;