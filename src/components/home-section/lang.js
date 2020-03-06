
import React from "react";
import OwlCarousel from 'react-owl-carousel';


function lang_section(){

    return(
    <div className="lang">
    <div className="container">
        <div className="row">
            <div className="col-2 ">
                <h3>Lang</h3>
            </div>
            <div className="col-10">
                <div className="row">
                <OwlCarousel
    className="lang_slider text-center"
    loop
    responsive={
        {
            0: {
                items: 2
              },
              600: {
                items: 3
              },
              1000: {
                items: 7
              }
        }
    }
    autoplay={true}
    autoplayTimeout={8000}
>
                        <div className="col-md-12">Python</div>
                        <div className="col-md-12">React Js</div>
                        <div className="col-md-12">React Native</div>
                        <div className="col-md-12">Django</div>
                        <div className="col-md-12">Klotin</div>
                        <div className="col-md-12">Xml</div>
                        <div class="col-md-12">Java</div>
                   
                    </OwlCarousel>
                </div>
                
            </div>
        </div>
    </div>
</div>
);
}



export default lang_section;