
import React,{Component} from "react";
import OwlCarousel from 'react-owl-carousel';
import axios from 'axios';


class lang_section extends Component{

    state = {
        fetchApi: null
      }

      componentDidMount() {
        axios.get('/api/fetchLang')
          .then(res => {
            const fetchApi = res.data;
            this.setState({ fetchApi });
          })
          .catch(error=> console.log('Error happened'));
      }
        

    render(){
    return(
    <div className="lang">
    <div className="container">
        <div className="row">
            <div className="col-2 ">
                <h3>Lang</h3>
            </div>
            <div className="col-10">
                <div className="row">

                { this.state.fetchApi ? this.state.fetchApi.data.length && (

                <OwlCarousel
    className="lang_slider text-center"
    rewind = {true}
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
                        {this.state.fetchApi.data.map((v,i)=>(
                            
                                <div key={i} className="col-md-12">{v.lang}</div>
                            
                        ))}
                   
                    </OwlCarousel>
            ) : (<p>Failed to get Lang</p>) }
                </div>
                
            </div>
        </div>
    </div>
</div>
);
}
}


export default lang_section;