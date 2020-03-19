import React,{Component} from "react";
import OwlCarousel from 'react-owl-carousel';
import axios from 'axios';



class stat_section extends Component{

state = {
    fetchApi: null
  }



  componentDidMount() {
    axios.get('/api/fetchStat')
      .then(res => {
        const fetchApi = res.data;
        this.setState({ fetchApi });
      })
      .catch(error=> console.log('Error happened'));
  }
      

    render(){
        
    return(

    <div>
    <div className="container stat">
        
        <div className="row">
            
            <div className="col-md-4">
                <h2>Stats</h2>
                    <div className="stat_box">
                        
                    { this.state.fetchApi ? this.state.fetchApi.data.map((v, i) => {
                         return (
                          <ul key={i} className="list-inline"> 
                          <li>Ongoing Projects <hr/> <p>{v.ongoing_project}</p> </li>
                          <li>Completed Projects <hr/> <p>{v.completed_project}</p> </li>
                          <li>Collaborators <hr/> <p>{v.collaborator}</p>  </li>
                          <li>Scripts <hr/> <p>{v.script}</p>  </li>
                
                      </ul>
                         )
                        }) : (
                        
                          <ul className="list-inline"> 
                          <li>Ongoing Projects <hr/> <p>0</p> </li>
                          <li>Completed Projects <hr/> <p>0</p> </li>
                          <li>Collaborators <hr/> <p>0</p>  </li>
                          <li>Scripts <hr/> <p>0</p>  </li>
                          </ul>
                        )
                    }   
                    </div>
                    
            </div>
            <div className="col-md-8 d-flex flex-column  justify-content-center align-items-center ctr_box">
                <h3 style={{left: "39%",marginLeft: "-100px"}}>Recent Collaborators</h3>


{ this.state.fetchApi ? this.state.fetchApi.data.length && (

<OwlCarousel
className="contributor_slider col-md-5"
rewind = {true}
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

{this.state.fetchApi.data.map(v =>(
    v.collaborators_detail.map((person,i)=>(
                            
      <div key={i}><h4>{person.collaborators_name}</h4>
            <p>{person.collaborators_title}</p>
            <ul className="list-inline">
            <li className="list-inline-item"><a target="_blanck" href={"https://github.com/"+person.github}><i className="fab fa-github"></i></a></li>
            <li className="list-inline-item"><a target="_blanck" href={"https://www.linkedin.com/"+person.linkedin}><i className="fab fa-linkedin"></i></a></li>
            </ul>
      </div>
   
    ))
    
))}


  </OwlCarousel>

) : (<p>Failed to get Contributors</p>)
                    }


            </div>
        </div>
    </div>
</div>
);
    }
}

export default stat_section;