import React,{Component} from "react";
import { Helmet } from 'react-helmet';
import Loader from 'react-loader-spinner';

//core components
import Header from "../components/header";
import Footer from "../components/footer";


//section
import HeaderSection from "../components/home-section/header";
import AboutSection from "../components/home-section/about";
import StatSection from "../components/home-section/stat";
import LangSection from "../components/home-section/lang";
import BeautySection from "../components/home-section/beauty";
import CaseSection from "../components/home-section/case";

//Scroll Top
import ScrollTop from "../components/ScrollToTop";

const PAGETITLE = 'Opensource reusable,bug free scripts and project source code';

class Index extends Component{
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
         color="#00BFFF"
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
        <HeaderSection/>
        <AboutSection/>
        <div style={{marginTop: "150px"}}></div>
        <StatSection/>
        <div style={{marginTop: "100px"}}></div>
        <LangSection/>
        <div style={{backgroundColor: "rgba(229, 228, 228, 0.43)", height: "600px", width: "100%"}}></div>
        <BeautySection/>
        <div style={{marginTop: "100px"}}></div>
        <CaseSection/>  
        <div style={{marginTop: "200px"}}></div>
        <Footer/>
        <ScrollTop/>
        </div>
        )}
    </>
    );
}
}


export default Index;