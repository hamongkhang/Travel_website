import React, {Component} from 'react';

class Hightlight extends Component{
  render(){
    return(
  <section id="highlights" className="section-padding back-size">
  <div className="container">
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className="row">
          <div id="boxes">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <div className="highlight-box">
                <div className="h-icon">
                  <span><i className="fa fa-plane" /></span>
                </div>
                {/* end h-icon */}
                <div className="h-text">
                  <span className="numbers">2496</span>
                  <p>Outstanding Tours</p>
                </div>
                {/* end h-text */}
              </div>
              {/* end highlight-box */}
            </div>
            {/* end columns */}
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <div className="highlight-box">
                <div className="h-icon">
                  <span><i className="fa fa-ship" /></span>
                </div>
                {/* end h-icon */}
                <div className="h-text cruise">
                  <span className="numbers">1906</span>
                  <p>Worldwide Cruise</p>
                </div>
                {/* end h-text */}
              </div>
              {/* end highlight-box */}
            </div>
            {/* end columns */}
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <div className="highlight-box">
                <div className="h-icon">
                  <span><i className="fa fa-taxi" /></span>
                </div>
                {/* end h-icon */}
                <div className="h-text taxi">
                  <span className="numbers">2033</span>
                  <p>Luxury Car Booking</p>
                </div>
                {/* end h-text */}
              </div>
              {/* end highlight-box */}
            </div>
            {/* end columns */}
          </div>
          {/* end boxes */}
        </div>
        {/* end row */}
      </div>
      {/* end columns */}
    </div>
    {/* end row */}
  </div>
  {/* end container */}
</section>
);
}
}
export default Hightlight;