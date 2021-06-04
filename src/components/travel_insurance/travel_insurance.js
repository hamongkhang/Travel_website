import React,{Component} from 'react';

class Travel_insurance extends Component{
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
            <section className="page-cover" id="cover-travel-insurance">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                    <h1 className="page-title">Travel Insurance</h1>
                    <ul className="breadcrumb">
                      <li><a href="index.php">Home</a></li>
                      <li className="active">Travel Insurance</li>
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
              <div id="travel-insurance" className="innerpage-section-padding">
                <div className="container">
                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 content-side tvl-insurance-info">
                      <div className="space-right">
                        <div className="insurance-desc mg-bot-60">
                          <div className="innerpage-heading">
                            <h1>Why Travel Insurance</h1>
                            <p>International Travel Insurance - An indispensable companion in traveling, visiting, studying abroad,… Travel Insurance Bao Viet offers packages that guarantee Visa eligibility and are always chosen by everyone. Risks
                              are undesirable, to minimize risks due to trip delays, trip cancellations, loss of things, accidents during travel, study abroad, relative visits,…. For more enjoyment and peace of mind during your trip, please
                              choose Bao Travel Insurance</p>
                            <img src="images/bảo-hiểm-du-lịch-nội-địa.jpg" className="img-responsive" alt="travel-insurance" />
                          </div>
                          {/* end innerpage-heading */}
                          <ul className="list-unstyled">
                            <li>Veniam delectus ei vis st atqui timeam mnesarchum at.</li>
                            <li>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri.</li>
                            <li>Est atqui timeam mnesarchum at, pro an eros perpetua ullamcorper.</li>
                            <li>Ad duo fugit aeque fabulas, in lucilius prodesset pri.</li>
                            <li>Veniam delectus ei vis st atqui timeam mnesarchum at.</li>
                          </ul>
                        </div>
                        {/* end insurance-desc */}
                        <div className="insurance-features">
                          <div className="innerpage-heading">
                            <h1>Insurance Features</h1>
                          </div>
                          {/* end innerpage-heading */}
                          <div className="row">
                            <div className="col-xs-12 col-sm-6 col-md-6">
                              <div className="in-feature-block text-center">
                                <span><i className="fa fa-user" /></span>
                                <div className="in-frature-text">
                                  <h4>Feature Title 1</h4>
                                  <p>Emergency medical guarantee and relief service in VN, other languages ​​on a global scale with just one call.</p>
                                </div>
                                {/* end in-feature-text */}
                              </div>
                              {/* end in-feature-block */}
                            </div>
                            {/* end columns */}
                            <div className="col-xs-12 col-sm-6 col-md-6">
                              <div className="in-feature-block text-center">
                                <span><i className="fa fa-shield" /></span>
                                <div className="in-frature-text">
                                  <h4>Feature Title 2</h4>
                                  <p>All international travel insurance packages are eligible for a Visa.</p>
                                </div>
                                {/* end in-feature-text */}
                              </div>
                              {/* end in-feature-block */}
                            </div>
                            {/* end columns */}
                            <div className="col-xs-12 col-sm-6 col-md-6">
                              <div className="in-feature-block text-center">
                                <span><i className="fa fa-cogs" /></span>
                                <div className="in-frature-text">
                                  <h4>Feature Title 3</h4>
                                  <p>The preferential tariff applies if the whole family participates in an international travel insurance policy.</p>
                                </div>
                                {/* end in-feature-text */}
                              </div>
                              {/* end in-feature-block */}
                            </div>
                            {/* end columns */}
                            <div className="col-xs-12 col-sm-6 col-md-6">
                              <div className="in-feature-block text-center">
                                <span><i className="fa fa-diamond" /></span>
                                <div className="in-frature-text">
                                  <h4>Feature Title 4</h4>
                                  <p>Delivery of insurance to take place according to customer requirements even after hours (Note for insurance during office hours).</p>
                                </div>
                                {/* end in-feature-text */}
                              </div>
                              {/* end in-feature-block */}
                            </div>
                            {/* end columns */}
                          </div>
                        </div>
                        {/* end insurance-features */}
                      </div>
                      {/* end space-right */}
                    </div>
                    {/* end columns */}
                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 side-bar blog-sidebar right-side-bar">
                      <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-12">
                          <div className="side-bar-block categories">
                            <h2 className="side-bar-heading">Useful Links</h2>
                            <ul className="nav nav-pills nav-stacked">
                              <li><a href="#"><span><i className="fa fa-angle-right" /></span>Online Insurance</a></li>
                              <li><a href="#"><span><i className="fa fa-angle-right" /></span>Full Guarnateed</a></li>
                              <li><a href="#"><span><i className="fa fa-angle-right" /></span>Medical Expense</a></li>
                              <li><a href="#"><span><i className="fa fa-angle-right" /></span>Accidents &amp; Failures</a></li>
                              <li><a href="#"><span><i className="fa fa-angle-right" /></span>Sports &amp; Acitivites</a></li>
                              <li><a href="#"><span><i className="fa fa-angle-right" /></span>Airline Faliure Cover</a></li>
                            </ul>
                          </div>
                          {/* end side-bar-block */}
                        </div>
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
                      </div>
                      {/* end row */}
                    </div>
                    {/* end columns */}
                  </div>
                  {/* end row */}
                </div>
                {/* end container */}
              </div>
              {/* end travel-insurance */}
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
export default Travel_insurance;