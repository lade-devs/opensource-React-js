
import React from "react";
import {Link} from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';


function case_section(){

    return(
        
    <div>
    <div className="container case_study">
        <div className="row">
            <div className="col-md-12">
                <h4 className="sub_title" style={{color: "rgba(5,0,16,0.71)"}}>CASE STUDY</h4>
                <div style={{marginTop: "100px"}}></div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <div className="row">

                <OwlCarousel
    className="case_study_slider"
    loop
    autoplayHoverPause={true}
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
    autoplayTimeout={4000}
>

                    <div className="col-md-12">
                        <h3 className="text-center">January 19, 2020 </h3>
                        <h2 className="text-center">Ticket booking: reservation built with React Native and Rest Api</h2>
                    </div>
                    <div className="col-md-12">
                        <h3 className="text-center">January 19, 2020 </h3>
                        <h2 className="text-center">Ticket booking: reservation built with React Native and Rest Api</h2>
                    </div>
                    <div className="col-md-12">
                        <h3 className="text-center">January 19, 2020 </h3>
                        <h2 className="text-center">Ticket booking: reservation built with React Native and Rest Api</h2>
                    </div>
                    <div className="col-md-12">
                        <h3 className="text-center">January 19, 2020 </h3>
                        <h2 className="text-center">Ticket booking: reservation built with React Native and Rest Api</h2>
                    </div>

</OwlCarousel>

                </div>
            </div>
        </div>
    </div>
</div>

);
}

export default case_section;