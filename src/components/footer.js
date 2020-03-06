import React from "react";

import FooterTop from "../components/footer-section/footer-top";
import FooterMiddle from "../components/footer-section/footer-middle";
import FooterBottom from "../components/footer-section/footer-bottom";

function footer_segment(){
    return(
        <>
        <FooterTop/>
        <FooterMiddle/>
        <FooterBottom/>
        </>
    );
}

export default footer_segment;