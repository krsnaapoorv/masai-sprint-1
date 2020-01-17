import React from 'react';


const Footer = () =>
{
    return(
        <div style={{backgroundColor:"#F2F2F2"}}>
          <div className="row">
            <h5 className="p-5">Follow us at :</h5>
            <span className=" d-inline-block mt-5">
                <a href="https://www.facebook.com/akmallik025" target="_target">
                  <i class="fab fa-facebook fa-2x "></i>
                </a>
                <a href="https://twitter.com/Krsna_apoorv" target="_target" className="ml-2">
                  <i class="fab fa-twitter fa-2x "></i>
                </a>
                <a href="https://www.linkedin.com/in/apoorva-krishna-078a5112b/" target="_target" className="ml-2">
                  <i class="fab fa-linkedin-in fa-2x"></i>
                </a>
            </span> 
          </div>
          <div className="row">
             <div className="col ml-5">
                <h5>What's new</h5>
                <p >Surface Go</p>
                <p >Surface Pro</p>
                <p >Windows 10 apps</p>
                <p >Office apps</p>
             </div>
             <div className="col">
                <h5>Microsoft store</h5>
                <p>Account profile</p>
                <p>Download Center</p>
                <p>Microsoft Store Support</p>
                <p>Returns</p>
                <p>Order tracking</p>
             </div>
             <div className="col">
                <h5>Education</h5>
                <p>Microsoft in education</p>
                <p>Office for students</p>
                <p>Office 365 for schools</p>
                <p>Microsoft Azure in education</p>
                <p>Office apps</p>
             </div>
             <div className="col">
                <h5>Enterprise</h5>
                <p>Azure</p>
                <p>AppSource</p>
                <p>Automotive</p>
                <p>Government</p>
                <p>Healthcare</p>
                <p>Manufacturing</p>
                <p>Financial services</p>
                <p>Retail</p>
             </div>
             <div className="col">
                <h5 >Developer</h5>
                <p>Microsoft Visual Studio</p>
                <p>Developer Network</p>
                <p>TechNet</p>
                <p>Channel 9</p>
                <p>Office  Dev Center</p>
             </div>
             <div className="col">
                <h5>Company</h5>
                <p >Carrers</p>
                <p >About Microsoft</p>
                <p >Company News</p>
                <p >Privacy at Microsoft</p>
                <p >Investor</p>
                <p >Security</p>
             </div>
          </div>
        </div>
    )
    
}

export default Footer