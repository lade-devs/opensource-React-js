import React from "react";
import {Link} from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';


function beauty_section(){
    return(
 <div>
 <div className="container beauty">
     <div className="row">
         <div className="col-md-12">
             <h3 className="sub_title">Beauty in code</h3>
         </div>
         <div className="col-md-12">
             <div className="row ">

             <OwlCarousel
    className="beauty_row  text-center"
    loop
    responsive={
        {
            0: {
                items: 1
              },
              600: {
                items: 1
              },
              1000: {
                items: 3
              }
        }
    }
    autoplay={true}
    autoplayTimeout={6000}
>

                 <div className="col-md-12">
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
                 <div className="col-md-12">
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
                 <div className="col-md-12">
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
                 <div className="col-md-12">
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
             </OwlCarousel>
             </div>
         </div>
     </div>
 </div>
 <div className="text-center" style={{padding: "50px 0"}}>
     <Link to="/project-and-script" className="btn beauty_btn">View More</Link>
 </div>
</div>

);
}

export default beauty_section;