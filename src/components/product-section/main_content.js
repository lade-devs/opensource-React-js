import React,{Component} from "react";
import {Link} from "react-router-dom";
import axios from 'axios';

class  MainContent extends Component{

    state = {
        fetchApi: null
      }
    
    
    
      componentDidMount() {
        axios.get('/api/fetchBeauty')
          .then(res => {
            const fetchApi = res.data;
            this.setState({ fetchApi });
          })
          .catch(error=> console.log('Error happened'));
      }

    render(){
        return(

            <div style={{padding: "120px 0", backgroundColor: "#F4F3F3"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 style={{color: "#050010",fontWeight: "bold", fontSize: "2rem"}}>Beauty in code</h1>
                    </div>
                </div>
                <div className="row">

                    <div className="col-md-12">
                        <div className="row">
                        { this.state.fetchApi ? this.state.fetchApi.data.map((v, i) => {

                            return(
                            <div key={i} className="col-lg-3">
                                <div className="inner_beauty">
                                    <div className="beauty_item">
                                        <ul className="list-inline">
                                        {v.lang === 'yes'? (
                                 v.project_tag.map((i,v)=>(
                                    <li key={v} className="list-inline-item JAVA">{i.lang}</li>
                                ))
                             ) : (
                                <li className="list-inline-item JAVA">{v.project_tag}</li>
                             ) }
                                        </ul>
                                            <p style={{marginTop: "100px"}}></p>
                                            <h3 className="text-center text-capitalize">{v.project_type}</h3>
                                            <h2 className="text-center">{v.project_title}</h2>
                                            <p style={{marginTop: "50px"}}></p>
                                            <p className="text-center">
                                                {v.project_type === 'project' ? (
                                                    <Link to={"/project/"+v.project_slug}>Read more <i className="fa fa-arrow-right"></i></Link>
                                                ) : (
                                                    <Link to={"/script/"+v.project_slug}>Read more <i className="fa fa-arrow-right"></i></Link>
                                                )}
                                            </p>
                                            <p style={{marginTop: "50px"}}></p>
                                    </div>
                                </div>
                            </div>
                            )

                        }) : (<p>Failed to get Lang</p>)
                    }

                        </div>
                    </div>

                </div>
            
            </div>
        </div>

        );
    }
}


export default MainContent;