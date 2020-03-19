
import React,{Component} from "react";
import OwlCarousel from 'react-owl-carousel';
import axios from 'axios';

class case_section extends Component{
    state = {
        fetchApi: null
      }
    
    
    
      componentDidMount() {
        axios.get('/api/fetchCase')
          .then(res => {
            const fetchApi = res.data;
            this.setState({ fetchApi });
          })
          .catch(error=> console.log('Error happened'));
      }
    
    render(){  
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
                { this.state.fetchApi ? this.state.fetchApi.data.length && (
                <OwlCarousel
    className="case_study_slider"
    rewind = {true}
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

                    {this.state.fetchApi.data.map((i,v)=>(
                        <div key={v} className="col-md-12">
                        <h3 className="text-center">{i.post_date}</h3>
                    <h2 className="text-center"><a target="_blanck" href={i.post_link}>{i.post_title}</a></h2>
                    </div>
                    ))}

</OwlCarousel>

) : (<p>Failed to get Case study</p>)
                    }

                </div>
            </div>
        </div>
    </div>
</div>

);
}
}

export default case_section;