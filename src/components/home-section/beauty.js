import React,{Component} from "react";
import {Link} from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import axios from 'axios';


class beauty_section extends Component{

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
 <div>
 <div className="container beauty">
     <div className="row">
         <div className="col-md-12">
             <h3 className="sub_title">Beauty in code</h3>
         </div>
         <div className="col-md-12">
             <div className="row ">

             { this.state.fetchApi ? this.state.fetchApi.data.length && (
             <OwlCarousel
    className="beauty_row  text-center"
    
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
    rewind = {true}
    autoplayTimeout={6000}
>

                 {this.state.fetchApi.data.map((i,v)=>(
                         
                         
                     <div key={v} className="col-md-12">
                     <div className="inner_beauty">
                         <div className="beauty_item">
                             <ul className="list-inline">
                             
                             {i.lang === 'yes'? (
                                 i.project_tag.map((i,v)=>(
                                    <li key={v} className="list-inline-item JAVA">{i.lang}</li>
                                ))
                             ) : (
                                <li className="list-inline-item JAVA">{i.project_tag}</li>
                             ) }
                             
                             </ul>
                                 <p style={{marginTop: "100px"}}></p>
                                 <h3 className="text-center text-capitalize">{i.project_type}</h3>
                                    <h2 className="text-center">{i.project_title}</h2>
                                 <p style={{marginTop: "50px"}}></p>
                                 <p className="text-center">
                                     <Link to={"/"+i.project_type+"/"+i.project_slug}>Read more <i className="fa fa-arrow-right"></i></Link>
                                 </p>
                                 <p style={{marginTop: "50px"}}></p>
                         </div>
                     </div>
                 </div>
                 
                 )
                                 )}
    
                 

             </OwlCarousel>
             ) : (<p>Failed to get Lang</p>)
            }
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
}

export default beauty_section;