import React,{Component} from "react";
import {Link} from "react-router-dom";
// reactstrap components
import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

import AnchorLink from 'react-anchor-link-smooth-scroll';

class Header_Navbar extends Component{
   
    constructor() {
        super();
        this.state = {
            addClass: false,
            collapseOpen:false,
            setCollapseOpen:false,
            name:'ham hamRotate ham1'
        }
      }
      

     handleMouseEnter = () => {
        
        if(this.state.addClass === false){
            this.setState({
                addClass: !this.state.addClass,
                name:'ham hamRotate ham1 active'
            })
        }else{
            this.setState({
                addClass: !this.state.addClass,
                name:'ham hamRotate ham1'
            })
        }
       
      }
      setCollapseOpen = () => {
          this.setState({
              collapseOpen: !this.state.collapseOpen
          })
      }
     
    render(){
        
    return(
        
        <header>
            <div className="fixed-top" style={{backgroundColor: "#050010"}}>
            <Container>
                <Navbar expand="lg">
                    <Container fluid={true}>
                        <NavbarBrand>
                            <img className="img-fluid" alt="Opensource Logo"src={require("../assets/img/logo.png")} width="60"></img>
                        </NavbarBrand>
                        <button
                    onClick={() => {
                      document.documentElement.classList.toggle("nav-open");
                        this.setCollapseOpen();
                    }}
                    aria-expanded={this.state.collapseOpen}
                    className="navbar-toggler"
                    type="button"
                  >
                    <svg className={this.state.name} viewBox="0 0 100 100" width="55" onClick={()=>{
                                document.documentElement.classList.toggle("active");
                               this.handleMouseEnter()
                                }}>
                        <path
                              className="line top"
                              d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
                        <path
                              className="line middle"
                              d="m 30,50 h 40" />
                        <path
                              className="line bottom"
                              d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
                      </svg>
                  </button>
                  <Collapse isOpen={this.state.collapseOpen} navbar>
                  <Nav className="mr-auto" navbar>
                    <NavItem>
                        <Link className="nav-link active" to="/" style={{color:"#FAF9FC"}}>Home</Link>
                    </NavItem>
                    <NavItem>
                    <Link className="nav-link" to="/project-and-script" style={{color:"#FAF9FC"}}>Projects and Scripts</Link>
                    </NavItem>
                    <NavItem>
                    <AnchorLink className="nav-link" href="#collaborate" style={{color:"#FAF9FC"}}>Collaborate</AnchorLink>
                    </NavItem>
                    </Nav>

                    <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="mailto:hello@kodedict.com" style={{color:"#FAF9FC"}}>Email: hello@kodedict.com</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="tel:+2348183472536" style={{color:"#FAF9FC"}}>Tel: +234 8183472536</NavLink>
                    </NavItem>
                    </Nav>
                  </Collapse>
                    </Container>
                </Navbar>
            </Container>
        
            </div>
        </header>
        
    );
}
}

export default Header_Navbar;