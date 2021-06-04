import React,{Component} from 'react';

class Error_page extends Component{
    render(){
        return(
            <div>
            {/*====== LOADER =====*/}
            {/*======== SEARCH-OVERLAY =========*/}
            <div className="overlay">
              <a href="javascript:void(0)" id="close-button" className="closebtn">×</a>
              <div className="overlay-content">
                <div className="form-center">
                  <form>
                    <div className="form-group">
                      <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search..." required />
                        <span className="input-group-btn"><button type="submit" className="btn"><span><i className="fa fa-search" /></span></button>
                        </span>
                      </div>
                      {/* end input-group */}
                    </div>
                    {/* end form-group */}
                  </form>
                </div>
                {/* end form-center */}
              </div>
              {/* end overlay-content */}
            </div>
            {/* end overlay */}
            {/*===== INNERPAGE-WRAPPER ====*/}
            <section className="innerpage-wrapper">
              <div id="error-text" className="section-padding back-size">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12">
                      <h3 className="company-name"><span><i className="fa fa-plane" /></span>StarTTravels</h3>
                      <h2>404</h2>
                      <p>The page you were looking for could not be found.</p>
                      <a href="index.php" className="btn btn-w-border">Go Back Home</a>
                    </div>
                    {/* end columns */}
                  </div>
                  {/* end row */}
                </div>
                {/* end container */}
              </div>
              {/* end error-text */}
            </section>
            {/* end innerpage-wrapper */}
            {/*======================= BEST FEATURES =====================*/}
            <section id="best-features" className="banner-padding black-features">
              <div className="container">
                <div className="row">
                  <div className="col-sm-6 col-md-3">
                    <div className="b-feature-block">
                      <span><i className="fa fa-dollar" /></span>
                      <h3>Best Price Guarantee</h3>
                      <p>Our website brings you the best experiences and services with the most standard price. Our services are approved a resolution by Vietnam Travel Branch.</p>
                    </div>
                    {/* end b-feature-block */}
                  </div>
                  {/* end columns */}
                  <div className="col-sm-6 col-md-3">
                    <div className="b-feature-block">
                      <span><i className="fa fa-lock" /></span>
                      <h3>Safe and Secure</h3>
                      <p>All your personal informations, supported informations will be kept and secured in the best way. Only you and administrators can know. Your informations never have leaked out and lost.</p>
                    </div>
                    {/* end b-feature-block */}
                  </div>
                  {/* end columns */}
                  <div className="col-sm-6 col-md-3">
                    <div className="b-feature-block">
                      <span><i className="fa fa-thumbs-up" /></span>
                      <h3>Best Travel Agents</h3>
                      <p>We have related to the best Travel agency in Vietnam. Supported and admitted by many branches, we have been improving and broading our activities.</p>
                    </div>
                    {/* end b-feature-block */}
                  </div>
                  {/* end columns */}
                  <div className="col-sm-6 col-md-3">
                    <div className="b-feature-block">
                      <span><i className="fa fa-bars" /></span>
                      <h3>Travel Guidelines</h3>
                      <p>All your questions will be replied by administrators and they will help you. We're always side by side and help you about any problems.</p>
                    </div>
                    {/* end b-feature-block */}
                  </div>
                  {/* end columns */}
                </div>
                {/* end row */}
              </div>
              {/* end container */}
            </section>
            {/* end best-features */}
            {/*========================= NEWSLETTER-1 ==========================*/}
            <section id="newsletter-1" className="section-padding back-size newsletter">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                    <h2>Subscribe Our Newsletter</h2>
                    <p>Subscibe to receive our interesting updates</p>
                    <form>
                      <div className="form-group">
                        <div className="input-group">
                          <input type="email" className="form-control input-lg" placeholder="Enter your email address" required />
                          <span className="input-group-btn"><button className="btn btn-lg"><i className="fa fa-envelope" /></button></span>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* end columns */}
                </div>
                {/* end row */}
              </div>
              {/* end container */}
            </section>
            {/* end newsletter-1 */}
            {/*======================= FOOTER =======================*/}
          </div>
        );
    }
}
export default Error_page;