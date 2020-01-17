import React from 'react'
import {Link} from 'react-router-dom';


const Home = () =>
{
  return(
    <div>
      <div className="m-5">
          <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE37lBy?ver=c49d&q=90&m=8&h=609&w=1083&b=%23FFFFFFFF&l=f&x=4&y=0&s=2116&d=1190&aim=true" class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h3 className="text-dark">This is 365</h3>
                  <p className="text-dark">Discover what's possible every day with office 365</p>
                  <button className="text-white btn btn-dark">
                    <Link to="/course/software" className="text-white ml-2">Buy Now</Link>
                  </button>
                </div>
              </div>
              <div class="carousel-item">
                <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2Ni4z?ver=0f5a&q=90&m=8&h=609&w=1083&b=%23FFFFFFFF&l=f&x=169&y=184&s=1788&d=1006&aim=true" class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Go to touch above ordinary</h5>
                  <p>Surface Laptop 2</p>
                  <button className="text-white btn btn-dark">
                    <Link to="/course/devices" className="text-white ml-2">Buy Now</Link>
                  </button>
                </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
      </div>
      <br></br>
      <div className = "mx-5">
        <div class="card-deck">
          <div class="card">
            <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2Ni4y?ver=e1d6&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true" class="card-img-top" alt="surface" />
            <div class="card-body">
              <h3 class="card-title font-weight-bold">Surface 6 pro</h3>
              <p class="card-text">Stand out from the ordinary</p>
              <Link to="/course/devices">Shop Now ></Link>
            </div>
            
          </div>
          <div class="card">
            <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWfbJT?ver=8259&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true" class="card-img-top" alt="surface pro" />
            <div class="card-body">
              <h3 class="card-title font-weight-bold">Surface Book 2</h3>
              <p class="card-text">Powerhouse performance in the ultimate laptop.</p>
              <Link to="/course/devices">Shop Now ></Link>
            </div>
            
          </div>
          <div class="card">
            <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW9wPJ?ver=211f&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true" class="card-img-top" alt="game" />
            <div class="card-body">
              <h3 class="card-title font-weight-bold">Xbox one X</h3>
              <p class="card-text">The world’s most powerful console.</p>
              <Link to="/course/devices">Shop Now ></Link>
            </div>
            
          </div>
          <div class="card">
            <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE37bh1?ver=33cd&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true" class="card-img-top" alt="xbox" />
            <div class="card-body">
              <h3 class="card-title font-weight-bold">Xbox game pass ultimate</h3>
              <p class="card-text">Xbox Live Gold and over 100 high-quality console and PC games. Play together with friends and discover your next favourite game.</p>
              <Link to="/course/devices">Shop Now ></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="m-5">
          <div className="bgimg row flex-column justify-content-center">
            <h4 className=" ml-5 font-weight-bold">Xbox One S</h4>
            <p className=" ml-5">The ultimate games and 4K Ultra HD entertainment system</p>
            <a href="https://www.xbox.com/en-in/xbox-one-s" className="ml-5 text-dark">Learn More ></a>
          </div>
      </div>
      <br></br>
      <h3 className="ml-5 ">For Work</h3>
      <div className = "mx-5 mt-2">
        <div class="card-deck">
          <div class="card">
            <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1CmIw?ver=e555&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true" class="card-img-top" alt="surface" />
            <div class="card-body">
              <h3 class="card-title font-weight-bold">Windows 10 Enterprise</h3>
              <p class="card-text">Download the free 90-day evaluation for IT professionals.</p>
              <Link to="/course/software">Shop Now ></Link>
            </div>
            
          </div>
          <div class="card">
            <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2mheW?ver=527a&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&x=444&y=171&aim=true" class="card-img-top" alt="surface pro" />
            <div class="card-body">
              <h3 class="card-title font-weight-bold">Office 365 for Business</h3>
              <p class="card-text">Access your files from anywhere, online or offline.</p>
              <Link to="/course/software">Shop Now ></Link>
            </div>
            
          </div>
          <div class="card">
            <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3sKm8?ver=08d4&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true" class="card-img-top" alt="game" />
            <div class="card-body">
              <h3 class="card-title font-weight-bold">Explore Kubernetes</h3>
              <p class="card-text">Learn how Kubernetes works and get started with cloud native app development today.</p>
              <Link to="/course/software">Shop Now ></Link>
            </div>
            
          </div>
          <div class="card">
            <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2OfW4?ver=3149&q=90&m=6&h=157&w=279&b=%23FFFFFFFF&l=f&o=t&aim=true" class="card-img-top" alt="xbox" />
            <div class="card-body">
              <h3 class="card-title font-weight-bold">Get Visual Studio 2019</h3>
              <p class="card-text">Download Visual Studio 2019, the productive, modern and innovative IDE.</p>
              <Link to="/course/software">Shop Now ></Link>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <hr></hr>
    </div>
  )
}

export default Home