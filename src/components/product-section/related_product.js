import React from "react";
import {Link} from "react-router-dom";
    
// const isLoading = ({isLoading}) => {}
    const RelatedProduct = ({fetch,isLoading}) =>{
        
        
        return(
            <div style={{padding: "50px 0 120px"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="sub_title" style={{color: "#050010"}}>Related</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <div className="row">
                        {fetch.data.map(i=>(
                            i.related_project.map((i,v)=>(
                                <div  key={v} className="col-lg-4">
                                    <div className="inner_beauty">
                                        <div className="beauty_item">
                                            <ul className="list-inline">
                                            {i.lang === 'yes'? (
                                 i.tag.map((i,v)=>(
                                    <li key={v} className="list-inline-item JAVA">{i.lang}</li>
                                ))
                             ) : (
                                <li className="list-inline-item JAVA">{i.tag}</li>
                             ) }
                                            </ul>
                                                <p style={{marginTop: "100px"}}></p>
                                                <h3 className="text-center text-capitalize">{i.project_type}</h3>
                                                <h2 className="text-center">{i.project_title}</h2>
                                                <p style={{marginTop: "50px"}}></p>
                                                <p className="text-center">
                                                    <Link  to={{pathname:"/"+i.project_type+"/"+i.slug,state:isLoading}}>Read more <i className="fa fa-arrow-right"></i></Link>
                                                </p>
                                                <p style={{marginTop: "50px"}}></p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ))}
                        </div>

                    </div>
                </div>
            
            </div>
        </div>
        );
    


    }
export default RelatedProduct;