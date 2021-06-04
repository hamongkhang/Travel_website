import React,{Component} from 'react';
class Holiday extends Component{
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
            {/*================= PAGE-COVER =================*/}
            <section className="page-cover" id="cover-holiday">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                    <h1 className="page-title">Beautiful Holiday Trips</h1>
                    <ul className="breadcrumb">
                      <li><a href="index.php">Home</a></li>
                      <li className="active">Beautiful Holiday Trips</li>
                    </ul>
                  </div>
                  {/* end columns */}
                </div>
                {/* end row */}
              </div>
              {/* end container */}
            </section>
            {/* end page-cover */}
            {/*===== INNERPAGE-WRAPPER ====*/}
            <section className="innerpage-wrapper">
              <div id="holiday-trips" className="innerpage-section-padding">
                <div className="container">
                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <div className="trip-block mg-bot-60">
                        <div className="page-heading trip-heading">
                          <h2><span><i className="fa fa-map-marker" /></span>Viet Nam Trip</h2>
                          <p>330 Holiday Places</p>
                        </div>
                        {/* end page-heading */}
                        <div className="owl-carousel owl-theme owl-custom-arrow owl-holidays">
                          <div className="item">
                            <div className="main-block hotel-block">
                              <div className="main-img">
                                <a href="#">
                                  <img src="images/sapa.jpg" className="img-responsive" alt="hotel-img" />
                                </a>
                                <div className="main-mask">
                                  <ul className="list-unstyled list-inline offer-price-1">
                                    <li className="price">$568.00<span className="divider">|</span><span className="pkg">Avg/Week</span></li>
                                    <li className="rating">
                                      <span><i className="fa fa-star orange" /></span>
                                      <span><i className="fa fa-star orange" /></span>
                                      <span><i className="fa fa-star orange" /></span>
                                      <span><i className="fa fa-star orange" /></span>
                                      <span><i className="fa fa-star lightgrey" /></span>
                                    </li>
                                  </ul>
                                </div>
                                {/* end main-mask */}
                              </div>
                              {/* end offer-img */}
                              <div className="main-info hotel-info">
                                <div className="arrow">
                                  <a href="#"><span><i className="fa fa-angle-right" /></span></a>
                                </div>
                                {/* end arrow */}
                                <div className="main-title hotel-title">
                                  <a href="#">Sapa Tour</a>
                                  <p>From: Lao Cai, Viet Nam</p>
                                </div>
                                {/* end hotel-title */}
                              </div>
                              {/* end hotel-info */}
                            </div>
                            {/* end hotel-block */}
                          </div>
                          {/* end item */}
                          <div className="item">
                            <div className="main-block hotel-block">
                              <div className="main-img">
                                <a href="#">
                                  <img src="images/du-lich-phu-quoc-17.jpg" className="img-responsive" alt="hotel-img" />
                                </a>
                                <div className="main-mask">
                                  <ul className="list-unstyled list-inline offer-price-1">
                                    <li className="price">$568.00<span className="divider">|</span><span className="pkg">Avg/Week</span></li>
                                    <li className="rating">
                                      <span><i className="fa fa-star orange" /></span>
                                      <span><i className="fa fa-star orange" /></span>
                                      <span><i className="fa fa-star orange" /></span>
                                      <span><i className="fa fa-star orange" /></span>
                                      <span><i className="fa fa-star lightgrey" /></span>
                                    </li>
                                  </ul>
                                </div>
                                {/* end main-mask */}
                              </div>
                              {/* end offer-img */}
                              <div className="main-info hotel-info">
                                <div className="arrow">
                                  <a href="#"><span><i className="fa fa-angle-right" /></span></a>
                                </div>
                                {/* end arrow */}
                                <div className="main-title hotel-title">
                                  <a href="#">Phu Quoc island Tour</a>
                                  <p>From: Kien Giang, Viet Nam</p>
                                </div>
                                {/* end hotel-title */}
                              </div>
                              {/* end hotel-info */}
                            </div>
                            {/* end hotel-block */}
                          </div>
                          {/* end item */}
                          <div className="item">
                            <div className="main-block hotel-block">
                              <div className="main-img">
                                <a href="#">
                                  <img src="images/DSCF7483-8260-1593164119.jpg" className="img-responsive" alt="hotel-img" />
                                </a>
                                <div className="main-mask">
                                  <ul className="list-unstyled list-inline offer-price-1">
                                    <li className="price">$568.00<span className="divider">|</span><span className="pkg">Avg/Day</span></li>
                                    <li className="rating">
                                      <span><i className="fa fa-star orange" /></span>
                                      <span><i className="fa fa-star orange" /></span>
                                      <span><i className="fa fa-star orange" /></span>
                                      <span><i className="fa fa-star orange" /></span>
                                      <span><i className="fa fa-star lightgrey" /></span>
                                    </li>
                                  </ul>
                                </div>
                                {/* end main-mask */}
                              </div>
                              {/* end offer-img */}
                              <div className="main-info hotel-info">
                                <div className="arrow">
                                  <a href="#"><span><i className="fa fa-angle-right" /></span></a>
                                </div>
                                {/* end arrow */}
                                <div className="main-title hotel-title">
                                  <a href="#">Qui Nhon Tour</a>
                                  <p>From: Binh Dinh, viet Nam</p>
                                </div>
                                {/* end hotel-title */}
                              </div>
                              {/* end hotel-info */}
                            </div>
                            {/* end hotel-block */}
                          </div>
                          {/* end item */}
                          <div className="item">
                            <div className="main-block hotel-block">
                              <div className="main-img">
                                <a href="#">
                                  <img src="images/Vuon Thuong Uyen Bay Da Lat.jpg" className="img-responsive" alt="hotel-img" />
                                </a>
                                <div className="main-mask">
                                  <ul className="list-unstyled list-inline offer-price-1">
                                    <li className="price">$568.00<span className="divider">|</span><span className="pkg">Avg/Night</span></li>
                                    <li className="rating">
                                      <span><i className="fa fa-star orange" /></span>
                                      <span><i className="fa fa-star orange" /></span>
                                      <span><i className="fa fa-star orange" /></span>
                                      <span><i className="fa fa-star orange" /></span>
                                      <span><i className="fa fa-star lightgrey" /></span>
                                    </li>
                                  </ul>
                                </div>
                                {/* end main-mask */}
                              </div>
                              {/* end offer-img */}
                              <div className="main-info hotel-info">
                                <div className="arrow">
                                  <a href="#"><span><i className="fa fa-angle-right" /></span></a>
                                </div>
                                {/* end arrow */}
                                <div className="main-title hotel-title">
                                  <a href="#">Da Lat Tour</a>
                                  <p>From: Da Lat, Viet Nam</p>
                                </div>
                                {/* end hotel-title */}
                              </div>
                              {/* end hotel-info */}
                            </div>
                            {/* end hotel-block */}
                          </div>
                          {/* end item */}
                        </div>
                        {/* end owl-holidays */}
                      </div>
                      {/* end trip-block */}
                    </div>
                    {/* end columns */}
                  </div>
                  {/* end row */}
                </div>
                {/* end container */}
              </div>
              {/* end holidays */}
              <div id="popular-destinations" className="banner-padding">
                <div className="container">
                  <div className="big-heading">
                    <h2>Popular <br />Destinations
                      <div className="light" />
                    </h2>
                  </div>
                  {/* end big-heading */}
                  <div className="row">
                    <div className="col-xs-12 col-sm-12">
                      <div className="destination-lists">
                        <div className="col-sm-6 col-md-3">
                          <ul className="list-unstyled">
                            <li><a href="https://huesmiletravel.com.vn/blog/top-15-dia-diem-du-lich-viet-nam-dep">Destination Title</a>
                              <p>101 Places</p>
                            </li>
                            <li><a href="https://huesmiletravel.com.vn/blog/top-15-dia-diem-du-lich-viet-nam-dep">Destination Title</a>
                              <p>101 Places</p>
                            </li>
                            <li><a href="https://huesmiletravel.com.vn/blog/top-15-dia-diem-du-lich-viet-nam-dep">Destination Title</a>
                              <p>101 Places</p>
                            </li>
                            <li><a href="https://huesmiletravel.com.vn/blog/top-15-dia-diem-du-lich-viet-nam-dep">Destination Title</a>
                              <p>101 Places</p>
                            </li>
                            <li><a href="https://huesmiletravel.com.vn/blog/top-15-dia-diem-du-lich-viet-nam-dep">Destination Title</a>
                              <p>101 Places</p>
                            </li>
                            <li><a href="https://huesmiletravel.com.vn/blog/top-15-dia-diem-du-lich-viet-nam-dep">Destination Title</a>
                              <p>101 Places</p>
                            </li>
                          </ul>
                        </div>
                        {/* end columns */}
                        <div className="col-sm-6 col-md-3">
                          <ul className="list-unstyled">
                            <li><a href="https://huesmiletravel.com.vn/blog/top-15-dia-diem-du-lich-viet-nam-dep">Destination Title</a>
                              <p>101 Places</p>
                            </li>
                            <li><a href="https://huesmiletravel.com.vn/blog/top-15-dia-diem-du-lich-viet-nam-dep">Destination Title</a>
                              <p>101 Places</p>
                            </li>
                            <li><a href="https://huesmiletravel.com.vn/blog/top-15-dia-diem-du-lich-viet-nam-dep">Destination Title</a>
                              <p>101 Places</p>
                            </li>
                            <li><a href="https://huesmiletravel.com.vn/blog/top-15-dia-diem-du-lich-viet-nam-dep">Destination Title</a>
                              <p>101 Places</p>
                            </li>
                            <li><a href="https://huesmiletravel.com.vn/blog/top-15-dia-diem-du-lich-viet-nam-dep">Destination Title</a>
                              <p>101 Places</p>
                            </li>
                            <li><a href="https://huesmiletravel.com.vn/blog/top-15-dia-diem-du-lich-viet-nam-dep">Destination Title</a>
                              <p>101 Places</p>
                            </li>
                          </ul>
                        </div>
                        {/* end columns */}
                        <div className="col-sm-6 col-md-3">
                          <ul className="list-unstyled">
                            <li><a href="https://huesmiletravel.com.vn/blog/top-15-dia-diem-du-lich-viet-nam-dep">Destination Title</a>
                              <p>101 Places</p>
                            </li>
                            <li><a href="https://huesmiletravel.com.vn/blog/top-15-dia-diem-du-lich-viet-nam-dep">Destination Title</a>
                              <p>101 Places</p>
                            </li>
                            <li><a href="https://huesmiletravel.com.vn/blog/top-15-dia-diem-du-lich-viet-nam-dep">Destination Title</a>
                              <p>101 Places</p>
                            </li>
                            <li><a href="https://huesmiletravel.com.vn/blog/top-15-dia-diem-du-lich-viet-nam-dep">Destination Title</a>
                              <p>101 Places</p>
                            </li>
                            <li><a href="https://huesmiletravel.com.vn/blog/top-15-dia-diem-du-lich-viet-nam-dep">Destination Title</a>
                              <p>101 Places</p>
                            </li>
                            <li><a href="https://huesmiletravel.com.vn/blog/top-15-dia-diem-du-lich-viet-nam-dep">Destination Title</a>
                              <p>101 Places</p>
                            </li>
                          </ul>
                        </div>
                        {/* end columns */}
                        <div className="col-sm-6 col-md-3">
                          <ul className="list-unstyled">
                            <li><a href="https://huesmiletravel.com.vn/blog/top-15-dia-diem-du-lich-viet-nam-dep">Destination Title</a>
                              <p>101 Places</p>
                            </li>
                            <li><a href="https://huesmiletravel.com.vn/blog/top-15-dia-diem-du-lich-viet-nam-dep">Destination Title</a>
                              <p>101 Places</p>
                            </li>
                            <li><a href="https://huesmiletravel.com.vn/blog/top-15-dia-diem-du-lich-viet-nam-dep">Destination Title</a>
                              <p>101 Places</p>
                            </li>
                            <li><a href="https://huesmiletravel.com.vn/blog/top-15-dia-diem-du-lich-viet-nam-dep">Destination Title</a>
                              <p>101 Places</p>
                            </li>
                            <li><a href="https://huesmiletravel.com.vn/blog/top-15-dia-diem-du-lich-viet-nam-dep">Destination Title</a>
                              <p>101 Places</p>
                            </li>
                            <li><a href="https://huesmiletravel.com.vn/blog/top-15-dia-diem-du-lich-viet-nam-dep">Destination Title</a>
                              <p>101 Places</p>
                            </li>
                          </ul>
                        </div>
                        {/* end columns */}
                      </div>
                      {/* end destination-lists */}
                    </div>
                    {/* end columns */}
                  </div>
                  {/* end row */}
                </div>
                {/* end container */}
              </div>
              {/* end holiday-trips */}
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
export default Holiday;