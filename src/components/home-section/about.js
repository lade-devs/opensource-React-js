import React from "react";

function about_section(){
    return(
    <div id="abt">
    <div className="container abt">
        <div className="row">
            <div className="col-md-12">
                <h3 className="sub_title">About</h3>
            </div>
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-6">
                        <div className="abt_inner">
                            <h4>
                                Writing reusable scripts
                                targeted for all coders 
                            </h4>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="abt_inner">
                            <p>
                                Clean, bug free, reusable, opensource scripts written
                                by developers with vast experience in programming
                                and known knowledge to new technologies.
                            </p>
                            <hr/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
);
}

export default about_section;