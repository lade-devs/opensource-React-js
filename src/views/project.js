import React,{Component} from "react";
import { Helmet } from 'react-helmet';
import Loader from 'react-loader-spinner';

//core components
import Header from "../components/header";
import Footer from "../components/footer";

//Project content
import MainContent from "../components/product-section/main_content";

//Scroll Top
import ScrollTop from "../components/ScrollToTop";

const PAGETITLE = 'Source code scripts and projects';

class Project extends Component{
    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }
    
    componentDidMount() {
        

        setTimeout(() => {
            this.setState({isLoading: false})
          }, 1200);
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
         color="#006CFF"
         height={80}
         width={80}
         timeout={1200} //3 secs
         

      />
        </div>
        
        ) : (
        <div>
        <Helmet>
                <title>{ PAGETITLE }</title>
        </Helmet>
        <Header/>
        <MainContent/>
        <Footer/>
        <ScrollTop/>
        </div>
        )}
        </>
    );
    }
}

export default Project;