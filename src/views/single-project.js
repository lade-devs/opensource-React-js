import React,{Component} from "react";
import { Helmet } from 'react-helmet';
import Loader from 'react-loader-spinner';
import axios from 'axios';
import { Link } from 'react-router-dom';

//core components
import Header from "../components/header";
import Footer from "../components/footer";

//Section
import MainContent from "../components/product-section/single_main";
import RelatedProduct from "../components/product-section/related_product";

//Scroll Top
import ScrollTop from "../components/ScrollToTop";





class single_main extends Component{
    constructor(props) {
        super(props);
        this.state = { 
        
        isLoading: true,
        fetchApi: null
        }
    }

    fetchData(){
        axios.post('/api/fetchSingleBeauty/'+this.props.match.params.id).then(res => {
            const fetchApi = res.data;
            this.setState({ fetchApi });
          })
          .catch(error=> console.log('Error happened'));
    }

    
    componentDidMount() {

       
        this._asyncRequest = axios.post('/api/fetchSingleBeauty/'+this.props.match.params.id).then(res => {
            const fetchApi = res.data;
            this._asyncRequest = null;
            this.setState({ fetchApi });
          })
          .catch(error=> console.log('Error happened'));;
        

        setTimeout(() => {
            this.setState({isLoading: false})
          }, 1200);
    }
    componentWillUnmount() {
        if (this._asyncRequest) {
          this._asyncRequest.cancel();
        }
      }

    render(){
    return(
        <>
         {this.state.isLoading ? (
        <div className="text-cente" style={{position: "absolute",
            top: "50%",
            left: "50%"}}>
        <Loader
         type="Grid"
         color="#00BFFF"
         height={80}
         width={80}
         timeout={1200} //3 secs
         

      />
        </div>
        
        ) : (

            this.state.fetchApi ?    
        <div>
        <Helmet>
                <title>{ this.props.match.params.id }</title>
        </Helmet>
        <Header/>
        <MainContent fetch={this.state.fetchApi} />
        <RelatedProduct fetch={this.state.fetchApi} isLoading={this.state.isLoading} />
        <Footer/>
        <ScrollTop/>
        </div>

            : (
                <div>
                <Helmet>
                <title>Page Not Found</title>
                </Helmet>
                
                Not found
                <center><Link to="/">Return to Home Page</Link></center>
                </div>
            )

        )}
        </>
    );
    }
}

export default single_main;