
import React from "react";
import {Link} from "react-router-dom";
import AnchorLink from 'react-anchor-link-smooth-scroll';

function header_section(){
    return(

    <div className="header_bg">
    <div className="d-flex justify-content-center align-items-center" style={{height: "inherit",minHeight: "initial",width: "100%",position: "absolute",left: "0",backgroundColor: "rgba(5,0,16,0.97)"}}>
        <div className="d-flex align-items-center order-12" style={{height:"200px"}}>
            <div className="container header">
                <h1 className="text-center"><img alt="" className="img-fluid" src={require("../../assets/img/logo_trans.svg")} width="150"></img></h1>
                <h3 className="text-center">Opensource to&nbsp; 
                    <span className="text_item">Learn</span>
                    <span className="text_item">Build</span>
                </h3>
                <p className="text-center header_icon">
                    <AnchorLink href="#abt">
                      <svg xmlns="http://www.w3.org/2000/svg" width="33.037" height="114.189" viewBox="0 0 83.037 114.189">
                        <g id="Group_57" data-name="Group 57" transform="translate(-918 -757)">
                          <g id="Path_15" data-name="Path 15" transform="translate(918 757)" fill="none">
                            <path d="M41.519,0A41.519,41.519,0,0,1,83.037,41.519c0,22.93-18.589,72.671-41.519,72.671S0,64.449,0,41.519A41.519,41.519,0,0,1,41.519,0Z" stroke="none"/>
                            <path d="M 41.5186653137207 5.000007629394531 C 36.58648681640625 5.000007629394531 31.80446624755859 5.964866638183594 27.30548477172852 7.867767333984375 C 22.95746612548828 9.706825256347656 19.05150604248047 12.34064483642578 15.69606781005859 15.69606781005859 C 12.34064483642578 19.05150604248047 9.706825256347656 22.95746612548828 7.867767333984375 27.30548095703125 C 5.964866638183594 31.80446624755859 5.000007629394531 36.58648681640625 5.000007629394531 41.51866149902344 C 5.000007629394531 46.75782775878906 6.098907470703125 53.76882553100586 8.094284057617188 61.26016616821289 C 10.21458435058594 69.220458984375 13.17264556884766 77.16986083984375 16.64866638183594 84.24892425537109 C 20.40958404541016 91.90818786621094 24.65030670166016 98.23406219482422 28.91240692138672 102.5426864624023 C 33.27508544921875 106.9529876708984 37.51644515991211 109.1892013549805 41.5186653137207 109.1892013549805 C 45.5208854675293 109.1892013549805 49.76224517822266 106.9529876708984 54.12492370605469 102.5426864624023 C 58.38702392578125 98.23406219482422 62.62774658203125 91.90818786621094 66.38866424560547 84.24892425537109 C 69.86468505859375 77.16986083984375 72.82274627685547 69.220458984375 74.94304656982422 61.26016616821289 C 76.93842315673828 53.76882553100586 78.03732299804688 46.75782775878906 78.03732299804688 41.51866149902344 C 78.03732299804688 36.58648681640625 77.07246398925781 31.80446624755859 75.16956329345703 27.30548095703125 C 73.33050537109375 22.95746612548828 70.69668579101563 19.05150604248047 67.34126281738281 15.69606781005859 C 63.98582458496094 12.34064483642578 60.07986450195313 9.706825256347656 55.73184585571289 7.867767333984375 C 51.23286437988281 5.964866638183594 46.45084381103516 5.000007629394531 41.5186653137207 5.000007629394531 M 41.5186653137207 7.62939453125e-06 C 64.44878387451172 7.62939453125e-06 83.03732299804688 18.58854675292969 83.03732299804688 41.51866149902344 C 83.03732299804688 64.44878387451172 64.44878387451172 114.1892013549805 41.5186653137207 114.1892013549805 C 18.58854675292969 114.1892013549805 7.62939453125e-06 64.44878387451172 7.62939453125e-06 41.51866149902344 C 7.62939453125e-06 18.58854675292969 18.58854675292969 7.62939453125e-06 41.5186653137207 7.62939453125e-06 Z" stroke="none" fill="#faf9fc"/>
                          </g>
                          <path id="Path_151" data-name="Path 151" d="M4305.514-165.4l13.384,12.362,13.383-12.362" transform="translate(-3359 981)" fill="none" stroke="#faf9fc" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/>
                        </g>
                      </svg> 
                      </AnchorLink>
                </p>
            </div>
        </div>
    </div>
</div>
);
}

export default header_section;