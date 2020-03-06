import React from "react";
import {Link} from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';




function stat_section(){
    return(

    <div idName="stat">
    <div className="container stat">
        
        <div className="row">
            
            <div className="col-md-4">
                <h2>Stats</h2>
                    <div className="stat_box">
                        <ul className="list-inline">
                            <li>Ongoing Projects <hr/> <p>1</p> </li>
                            <li>Completed Projects <hr/> <p>1</p> </li>
                            <li>Collaborators <hr/> <p>2</p>  </li>
                            <li>Scripts <hr/> <p>1</p>  </li>
                        </ul>
                    </div>
            </div>
            <div className="col-md-8 d-flex flex-column  justify-content-center align-items-center ctr_box">
                <h3 style={{left: "39%",marginLeft: "-100px"}}>Recent Collaborators</h3>

<OwlCarousel
    className="contributor_slider col-md-5"
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
                items: 1
              }
        }
    }
    autoplay={true}
    autoplayTimeout={5000}
>
     <div><h4>Olayinka Olumayokun</h4>
                        <p>Software Engineer</p>
                        <ul className="list-inline">
                            <li className="list-inline-item"><Link href=""><i className="fab fa-github"></i></Link></li>
                            <li className="list-inline-item"><Link href=""><i className="fab fa-linkedin"></i></Link></li>
                        </ul></div>
     <div><h4>Olomolaiye Shalom</h4>
                        <p>Software Engineer</p>
                        <ul className="list-inline">
                            <li className="list-inline-item"><Link href=""><i className="fab fa-github"></i></Link></li>
                            <li className="list-inline-item"><Link href=""><i className="fab fa-linkedin"></i></Link></li>
                        </ul></div>
</OwlCarousel>


            </div>
        </div>
    </div>
</div>
);
}

export default stat_section;