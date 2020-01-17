import React from 'react'

const About = () =>
{
  return(
    <div>
      <div className="officeimg1 row flex-column justify-content-center pr-3">
        <h1 className=" ml-5 font-weight-bold text-white">This is your 365</h1>
        <p className=" ml-5 text-white">Every day is an opportunity to achieve with Office 365.</p>
        <div className="d-inline-flex">
          <button className="officeBtn ml-5">For Home</button>
          <button className="officeBtn ml-3">For Office</button>
        </div>
      </div>
      
      <div className="row" style={{backgroundColor:"#F2F2F2"}}>
        <div className="col-7 mt-5">
            <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE49D7o?ver=d425&q=90&h=950&w=1090&b=%23FFFFFFFF&aim=true" className="img-fluid" alt="officelappy"></img>
        </div>
        <div className="col-5">
          <div class="h1 font-weight-bold ml-3" style={{marginTop:"180px"}}>What is Office 365</div>
          <p className="ml-3">Office 365 is a cloud-based subscription service that brings <br />
           together the best tools for the way people work today. By <br />
            combining best-in-class apps like Excel and Outlook with <br />
            powerful cloud services like OneDrive and Microsoft Teams, <br />Office 365 lets anyone create and share anywhere on any <br /> 
            device.</p>
        </div>
      </div>
      <br></br>
      <h1 className="font-weight-bold text-center">Learn more about Office 365</h1>
      <br></br>
      <div className="row ">
        <div className="col">
          <div className="d-flex justify-content-center">
            <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3hsE5?ver=427c&q=90&h=40&b=%23FFFFFFFF&aim=true" class="" alt="surface" />
          </div>
          <h5 className="text-center mt-2">Home</h5>
          <p className="text-center mt-2"><a href="https://products.office.com/en-in/explore-office-for-home" target="_target">Learn More ></a></p>
        </div>
        <div className="col">
          <div className="d-flex justify-content-center">
            <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3hxRH?ver=cec4&q=90&h=40&b=%23FFFFFFFF&aim=true" class="" alt="surface" />
          </div>
          <h5 className="text-center mt-2">Small Buisness</h5>
          <p className="text-center mt-2"><a href="https://products.office.com/en-in/business/explore-office-365-for-business" target="_target">Learn More ></a></p>
        </div>
        <div className="col">
          <div className="d-flex justify-content-center">
            <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3hSFA?ver=078b&q=90&h=40&b=%23FFFFFFFF&aim=true" class="" alt="surface" />
          </div>
          <h5 className="text-center mt-2">Enterprise</h5>
          <p className="text-center mt-2"><a href="https://products.office.com/en-in/business/enterprise-productivity-tools" target="_target">Learn More ></a></p>
        </div>
        <div className="col">
          <div className="d-flex justify-content-center">
            <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3hKSi?ver=4080&q=90&h=40&b=%23FFFFFFFF&aim=true" class="" alt="surface" />
          </div>
          <h5 className="text-center mt-2">Education</h5>
          <p className="text-center mt-2"><a href="https://products.office.com/en-in/student/office-in-education" target="_target">Learn More ></a></p>
        </div>
      </div>
      <br></br>
    </div>
  )
}

export default About