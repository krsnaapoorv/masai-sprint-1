import React from 'react';
import './App.css';
import About from './routing/About'
import Footer from './routing/Footer'
import Home from './routing/Home'
import Contact from './routing/Contact'
import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom';
import Software from "./routing/Software"
import Devices from "./routing/Devices"
import Login from './routing/Login'
import Services from './routing/Services'
import Cart from './routing/Cart'

const devices = [
  {
      name : "Microsoft Surface Laptop 2",
      img :"https://c.s-microsoft.com/en-us/CMSImages/SurfaceLaptop2_382x258.jpg?version=e2bde222-d545-199a-c85e-52a286e8df37",
      id: 1 ,
      price : "70000",
      specifications: "Windows 10, 13.5inch,16gb RAM,1TB SSD"
  },
  {
      name : "Microsoft Surface Laptop 3",
      img :"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4afYZ",
      id: 2 ,
      price : "60000",
      specifications: "Windows 10, 15inch,16GB RAM,512GB SSD"
  },
  {
      name : "Microsoft Surface Laptop 3",
      img :"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4afYZ",
      id: 3 ,
      price : "50000",
      specifications: "Windows 10, 13.5inch,16GB RAM,512GB SSD"
  },
  {
      name : "Microsoft Surface Book 2",
      img :"https://c.s-microsoft.com/en-us/CMSImages/Surface_13_inch_View_All.jpg?version=ec06b275-5ff6-651d-90dd-6fe32a4d18be",
      id: 4 ,
      price : "99000",
      specifications: "Windows 10, 13.5inch,16gb RAM,1TB SSD"
  },
  {
      name : "Microsoft Surface Book pro",
      img :"https://c.s-microsoft.com/en-us/CMSImages/Surface_15_inch_View_All_US_Only.jpg?version=ef39b819-a56f-9012-3692-380788d76ff4",
      id: 5 ,
      price : "150000",
      specifications: "Windows 10, 15inch,16gb RAM,1TB SSD"
  },
  {
      name : "Microsoft Xbox One S",
      img :"https://images-na.ssl-images-amazon.com/images/I/51RywqjNANL._SL1000_.jpg",
      id: 6 ,
      price : "20000",
      specifications: "1TB storage, 300+ games, Blu-ray Player"
  }
]

const software = [
  {
      name : "Microsoft Office 360",
      img :"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2jGnI?ver=38c9&w=249&h=204&q=90&m=6&b=%23FFF0F0F0&f=jpg&o=f&p=0&aim=true",
      id: 9 ,
      price : "3500",
      about : "for PCs,mac,phone,"
  },
  {
      name : "Microsoft SQL Server",
      img :"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3JZS2?ver=ec69&w=249&h=204&q=90&m=6&b=%23FFF0F0F0&f=jpg&o=f&p=0&aim=true",
      id: 11,
      price : "300000",
      about: "Most secure database over the last 9 years per NIST*,Query any database like Oracle, MongoDB, Cassandra, and Hadoop in a highly secure and highly performant way—all without moving or copying the data,Built-in AI with R, Python and SQL Server Machine learning services"
  },
  {
      name : "Microsoft Visual Studio Proffessional 2019",
      img :"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWtCPo?ver=76a0&w=249&h=204&q=90&m=6&b=%23FFF0F0F0&f=jpg&o=f&p=0&aim=true",
      id: 15 ,
      price : "50000",
      about: "Turn great ideas into exceptional solutions. This full-featured development environment provides individuals and small teams the tools for building the next generation of apps and games."
  },
  {
      name : "Microsoft Windows Server",
      img :"https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2ybMR?ver=adfb&w=249&h=204&q=90&m=6&b=%23FFF0F0F0&f=jpg&o=f&p=0&aim=true",
      id: 21 ,
      price : "30000",
      about: "Securely connect remote users"
  }
]
export default class App extends React.Component
{
  constructor(props)
    {
        super(props)
        this.state={
            pcSoftware : software,
            pcDevices : devices,
            cart : [],
            isAuth : false,
            username : "apoorva15997@gmail.com",
            password : "krsna123"
        }
    }

    addCart = (obj) =>{
    {
      console.log("flitered obj",obj)
      this.setState({
        cart: [...this.state.cart,obj]
      })
    }
  }

  authentication = (obj) =>{
    // console.log("userData--",obj)
    if(obj.username == this.state.username && obj.password == this.state.password)
    {
      alert("Sign-In Successfull")
      this.setState({
        isAuth : true
      })
    }
    else
    {
      alert("Try Again")
      this.setState({
        isAuth : false
      })
    }
  }
  
    
  render()
  {
    return(
      <React.Fragment>
        <div className="bg-dark ">
          <h4 className="text-white mb-0 pb-3 pt-4 text-center">30% Off on first Purchase. Use code <u>FIRST30</u> to redeem</h4>
        </div>
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{backgroundColor:"white"}}>
          
            <ul className="nav">
                <li className="nav-item">
                  <Link className="m-2 p-4 text-dark" to="/home"><img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" alt="logo" width="120px"></img></Link>
                </li>
                <li className="nav-item">
                  <Link className="m-2 p-4 text-dark" to="/about">office</Link>
                </li>
                <li className="nav-item">
                  <Link className="m-2 p-4 text-dark" to="/contact">windows</Link>
                </li>
                <li className= "nav-item">
                  <div className="dropdown mb-2">
                    <button className="btn btn-secondary dropdown-toggle text-dark" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{backgroundColor:"white"}}>Products</button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <div>
                        <Link to="/course/software" className="text-dark ml-2">Software</Link>
                      </div>
                      <div>
                        <Link to="/course/devices" className="text-dark ml-2">PC's and Devices</Link>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <Link className="m-2 p-4 text-dark" to="/services">support</Link>
                </li>
              </ul>
              <button className = "btn  btn-outline-success ml-auto">
                <Link className="p-2 text-dark" to="/cart">Cart</Link>
              </button>
              <button className = "btn  btn-outline-info ml-2">
                <Link className="p-2 text-dark" to="/login">Login</Link>
              </button>
        </nav>
        <hr></hr>
        <Route path = "/home" exact component = {Home} />
        <Route path = "/about" exact component = {About} />
        <Route path = "/contact" exact component = {Contact} />
        <Route exact path = "/course/software" component = {(props)=><Software {...props} arr= {this.state.pcSoftware} cart = {this.addCart}/>} />
        <Route exact path = "/course/devices" component = {(props)=><Devices {...props} arr= {this.state.pcDevices} cart = {this.addCart}/>} />
        <Route path = "/services" component = {Services} />
        <Route path = "/login" component = {(props)=><Login {...props}  auth = {this.authentication} isAuth = {this.state.isAuth}/>} />
        <Route exact path = "/cart" component = {(props)=><Cart {...props} cart={this.state.cart} isAuth = {this.state.isAuth}/>} />
        <br></br>
        <Footer></Footer>
      </React.Fragment>
    )
  }
};
