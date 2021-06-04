import React,{Component} from 'react';
class Thank_you extends Component{
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
            {/*================= PAGE-COVER ================*/}
            <section className="page-cover" id="cover-thank-you">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                    <h1 className="page-title">Thank You</h1>
                    <ul className="breadcrumb">
                      <li><a href="index.php">Home</a></li>
                      <li className="active">Thank You</li>
                    </ul>
                  </div>
                  {/* end columns */}
                </div>
                {/* end row */}
              </div>
              {/* end container */}
            </section>
            {/* end page-cover */}
            {/*==== INNERPAGE-WRAPPER =====*/}
            <section className="innerpage-wrapper">
              <div id="thank-you" className="innerpage-section-padding">
                <div className="container">
                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 content-side">
                      <div className="space-right">
                        <div className="thank-you-note">
                          <h3>Your Booking is confirmed now. Thank You!</h3>
                          <p>Lorem ipsum dolor sit amet, conse adipiscing elit curabitur.</p>
                          <a href="#" className="btn btn-orange">Print Details</a>
                        </div>
                        {/* end thank-you-note */}
                        <div className="traveler-info">
                          <h3 className="t-info-heading"><span><i className="fa fa-info-circle" /></span>Traveler Information</h3>
                          <div className="table-responsive">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td>Booking Number:</td>
                                  <td>000-111-222</td>
                                </tr>
                                <tr>
                                  <td>First Name:</td>
                                  <td>James</td>
                                </tr>
                                <tr>
                                  <td>Last Name:</td>
                                  <td>Anderson</td>
                                </tr>
                                <tr>
                                  <td>Email Address:</td>
                                  <td>info@loremipsum.com</td>
                                </tr>
                                <tr>
                                  <td>Home Address:</td>
                                  <td>D-Block Main Road, Lorum Ipsum.</td>
                                </tr>
                                <tr>
                                  <td>Town/City:</td>
                                  <td>Paris/France</td>
                                </tr>
                                <tr>
                                  <td>Zip Code:</td>
                                  <td>700250</td>
                                </tr>
                                <tr>
                                  <td>Country:</td>
                                  <td>USA</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          {/* end table-responsive */}
                        </div>
                        {/* end traveler-info */}
                      </div>
                      {/* end space-right */}
                    </div>
                    {/* end columns */}
                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 side-bar blog-sidebar right-side-bar">
                      <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-12">
                          <div className="side-bar-block recent-post">
                            <h2 className="side-bar-heading">Holiday Deals</h2>
                            <div className="recent-block">
                              <div className="recent-img">
                                <a href="blog-detail-left-sidebar.php"><img src="images/727e5ea10a3f1852dcbdb06b3733cb7f.jpg" className="img-reponsive" alt="holiday-deal-image" /></a>
                              </div>
                              {/* end recent-img */}
                              <div className="recent-text">
                                <a href="blog-detail-right-sidebar.php">
                                  <h5>Host a Family Party</h5>
                                </a>
                                <span className="date">27 May, 2020</span>
                              </div>
                              {/* end recent-text */}
                            </div>
                            {/* end recent-block */}
                            <div className="recent-block">
                              <div className="recent-img">
                                <a href="blog-detail-right-sidebar.php"><img src="images/tải xuống (1).jfif" className="img-reponsive" alt="recent-blog-image" /></a>
                              </div>
                              {/* end recent-img */}
                              <div className="recent-text">
                                <a href="blog-detail-right-sidebar.php">
                                  <h5>Host a Family Party</h5>
                                </a>
                                <span className="date">27 May, 2020</span>
                              </div>
                              {/* end recent-text */}
                            </div>
                            {/* end recent-block */}
                            <div className="recent-block">
                              <div className="recent-img">
                                <a href="blog-detail-right-sidebar.php"><img src="images/tải xuống (1).jfif" className="img-reponsive" alt="recent-blog-image" /></a>
                              </div>
                              {/* end recent-img */}
                              <div className="recent-text">
                                <a href="blog-detail-right-sidebar.php">
                                  <h5>Host a Family Party</h5>
                                </a>
                                <span className="date">27 May, 2020</span>
                              </div>
                              {/* end recent-text */}
                            </div>
                            {/* end recent-block */}
                          </div>
                          {/* end side-bar-block */}
                        </div>
                        {/* end columns */}
                        <div className="col-xs-12 col-sm-6 col-md-12">
                          <div className="side-bar-block contact">
                            <h2 className="side-bar-heading">Contact Us</h2>
                            <div className="c-list">
                              <div className="icon"><span><i className="fa fa-envelope" /></span></div>
                              <div className="text">
                                <p>hamongkhang@gmail.com</p>
                              </div>
                            </div>
                            {/* end c-list */}
                            <div className="c-list">
                              <div className="icon"><span><i className="fa fa-phone" /></span></div>
                              <div className="text">
                                <p>039 649 8891</p>
                              </div>
                            </div>
                            {/* end c-list */}
                            <div className="c-list">
                              <div className="icon"><span><i className="fa fa-map-marker" /></span></div>
                              <div className="text">
                                <p>Street No: To Hien Thanh, Son Tra, Da Nang, Viet Nam </p>
                              </div>
                            </div>
                            {/* end c-list */}
                          </div>
                          {/* end side-bar-block */}
                        </div>
                        {/* end columns */}
                        <div className="col-xs-12 col-sm-12 col-md-12">
                          <div className="side-bar-block follow-us">
                            <h2 className="side-bar-heading">Follow Us</h2>
                            <ul className="list-unstyled list-inline">
                              <li><a href="https://www.facebook.com"><span><i className="fa fa-facebook" /></span></a></li>
                              <li><a href="https://www.twitter.com"><span><i className="fa fa-twitter" /></span></a></li>
                              <li><a href="https://istagram.com"><span><i className="fa fa-linkedin" /></span></a></li>
                              <li><a href="https://www.google.com"><span><i className="fa fa-google-plus" /></span></a></li>
                              <li><a href="https://pinterest.com"><span><i className="fa fa-pinterest-p" /></span></a></li>
                            </ul>
                          </div>
                          {/* end side-bar-block */}
                        </div>
                        {/* end columns */}
                      </div>
                      {/* end row */}
                    </div>
                    {/* end columns */}
                  </div>
                  {/* end row */}
                </div>
                {/* end container */}
              </div>
              {/* end thank-you */}
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
          </div>
          );
    }
}
export default Thank_you;