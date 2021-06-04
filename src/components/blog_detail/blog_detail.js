import { useContext, useState } from "react";
import { AppContext } from "../../Context";
import Blog_detail_4 from "../blog_detail_4/blog_detail_4";
import {BrowserRouter as Router,Switch,Route,Link,useHistory} from 'react-router-dom';
const Blog_detail = () => {
  const link="images/";
  const {
    blogblog,
    blog
  } = useContext(AppContext);
  const Blogdetail = (id_blog,time_blog,author_blog,title_blog,img_blog,content_blog) => {
    blogblog(id_blog);
  };
 
  
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
      <section className="page-cover" id="cover-blog-listing">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="page-title">Blog Listing Right Sidebar</h1>
              <ul className="breadcrumb">
                <li><a href="index.php">Home</a></li>
                <li className="active">Blog Listing Right Sidebar</li>
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
        <div id="blog-listings" className="innerpage-section-padding">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 content-side">
                <div className="space-right">
                  <div className="main-block blog-post blog-list">
                    <div className="main-img blog-post-img">
                      <a href="blog-detail-right-sidebar.php">
                        <img src="images/141711.jpg" className="img-responsive" alt="blog-post-image" />
                      </a>
                      <div className="main-mask blog-post-info">
                        <ul className="list-inline list-unstyled blog-post-info">
                          <li><span><i className="fa fa-calendar" /></span>July 30, 2020</li>
                          <li><span><i className="fa fa-user" /></span>By: <a href="#">Khang Ha</a></li>
                        </ul>
                      </div>
                    </div>
                    {/* end blog-post-img */}
                    <div className="blog-post-detail">
                      <h2 className="blog-post-title"><a href="blog-detail-right-sidebar.php">The cherry blossoms in Dalat bloom.</a></h2>
                      <p>Having passed the cold winter of the land of fog, spring came back to Da Lat with a typical dream feature of this place. It is the season of cherry apricot blazing pink all over the spring sky. Cherry plum - a typical
                        flower of Dalat, blooms from the beginning of the year to mid-February, so let's take advantage of Dalat travel in January to explore immediately!.</p>
                      <Link to={'/Blog_detail_1'}><button className="btn btn-orange">View More</button></Link>
                    </div>
                    {/* end blog-post-detail */}
                  </div>
                  {/* end blog-post */}
                  <div className="main-block blog-post blog-list">
                    <div className="main-img blog-post-img">
                      <a href="blog-detail-right-sidebar2.php">
                        <img src="images/kinh-nghiem-du-lich-da-lat-10.jpg" className="img-responsive" alt="blog-post-image" />
                      </a>
                      <div className="main-mask">
                        <ul className="list-inline list-unstyled blog-post-info">
                          <li><span><i className="fa fa-calendar" /></span>July 30, 2021</li>
                          <li><span><i className="fa fa-user" /></span>By: <a href="#">Hang Ho</a></li>
                        </ul>
                      </div>
                    </div>
                    {/* end blog-post-img */}
                    <div className="blog-post-detail">
                      <h2 className="blog-post-title"><a href="blog-detail-right-sidebar2.php">5 brand new Da Lat check-in locations in 2021.</a></h2>
                      <p>The name "Da Lat" must be too familiar in the list of the hottest tourist destinations in Vietnam, but the association who loves to check in to Da Lat is still constantly searching for a series of new super-cool places
                        for you to go. That's not boring! Join Traveloka to take a look at the year 2021 which is the most interesting and attractive place on the picture!</p>
                      <Link to={'/Blog_detail_2'}><button className="btn btn-orange">View More</button></Link>
                    </div>
                    {/* end blog-post-detail */}
                  </div>
                  {/* end blog-post */}
                  <div className="main-block blog-post blog-list">
                    <div className="main-img blog-post-img">
                      <a href="blog-detail-right-sidebar3.php">
                        <img src="images/thiet-bi-dien-tu-mag-di-du-lich-1.jpg" className="img-responsive" alt="blog-post-image" />
                      </a>
                      <div className="main-mask">
                        <ul className="list-inline list-unstyled blog-post-info">
                          <li><span><i className="fa fa-calendar" /></span>July 30, 20120</li>
                          <li><span><i className="fa fa-user" /></span>By: <a href="#">Huan Nguyen</a></li>
                        </ul>
                      </div>
                    </div>
                    {/* end blog-post-img */}
                    <div className="blog-post-detail">
                      <h2 className="blog-post-title"><a href="blog-detail-right-sidebar3.php">Dear friend, when I am traveling, do not forget to check this indispensable items list!</a></h2>
                      <p>This may not be your first time traveling, but most likely… this is the first time you know the full checklist of indispensable travel items. Make your trip perfect with the help of these items, let Traveloka discover
                        how much you have on this list!</p>
                      <Link to={'/Blog_detail_3'}><button className="btn btn-orange">View More</button></Link>
                    </div>
                    {/* end blog-post-detail */}
                  </div>
                 
                  {blog.map(({ id_blog, img_blog, author_blog, time_blog, title_blog,content_blog, isEditing }) => {
  return (
    <div className="main-block blog-post blog-list">
    <div className="main-img blog-post-img">
      <a href="#">
        <img src={link+img_blog} className="img-responsive" alt="blog-post-image" />
      </a>
      <div className="main-mask">
        <ul className="list-inline list-unstyled blog-post-info">
          <li><span><i className="fa fa-calendar" /></span>{time_blog}</li>
          <li><span><i className="fa fa-use" /></span>By: <a href="#">{author_blog}</a></li>
        </ul>
      </div>
    </div>
    {/* end blog-post-img */}
    <div className="blog-post-detail">
      <h2 className="blog-post-title"><a href="#">{title_blog}</a></h2>
      <p>{content_blog}</p>
      <Link to={'/Blog_detail_4'}><button onClick={() => Blogdetail(id_blog,time_blog,author_blog,title_blog,img_blog,content_blog)} className="btn btn-orange">View More</button></Link>
    </div>
    {/* end blog-post-detail */}
  </div>
  )
})}
                  <div className="pages">
                    <ol className="pagination">
                      <li><a href="#" aria-label="Previous"><span aria-hidden="true"><i className="fa fa-angle-left" /></span></a></li>
                      <li className="active"><a href="#">1</a></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a href="#">4</a></li>
                      <li><a href="#" aria-label="Next"><span aria-hidden="true"><i className="fa fa-angle-right" /></span></a></li>
                    </ol>
                  </div>
                  {/* end pages */}
                </div>
                {/* end space-right */}
              </div>
              {/* end columns */}
              <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 side-bar blog-sidebar right-side-bar">
                <div className="row">
                  <div className="col-xs-12 col-sm-6 col-md-12">
                    <div className="side-bar-block main-block ad-block">
                      <div className="main-img ad-img">
                        <a href="#">
                          <img src="images/thang6dalat.png" className="img-responsive" alt="car-ad" />
                          <div className="ad-mask">
                            <div className="ad-text">
                              <span>Luxury</span>
                              <h2>Car</h2>
                              <span>Offer</span>
                            </div>
                            {/* end ad-text */}
                          </div>
                          {/* end columns */}
                        </a>
                      </div>
                      {/* end ad-img */}
                    </div>
                    {/* end side-bar-block */}
                  </div>
                  {/* end columns */}
                  <div className="col-xs-12 col-sm-6 col-md-12">
                    <div className="side-bar-block instagram">
                      <h2 className="side-bar-heading">Instagram</h2>
                      <ul className="list-unstyled list-inline">
                        <li>
                          <a href="#"><img src="images/hoa1.jpg" className="img-responsive" alt="insta-img" /></a>
                        </li>
                        <li>
                          <a href="#"><img src="images/hoa2.jpg" className="img-responsive" alt="insta-img" /></a>
                        </li>
                        <li>
                          <a href="#"><img src="images/hoa3.jfif" className="img-responsive" alt="insta-img" /></a>
                        </li>
                        <li>
                          <a href="#"><img src="images/hoa4.jfif" className="img-responsive" alt="insta-img" /></a>
                        </li>
                        <li>
                          <a href="#"><img src="images/hoa5.jfif" className="img-responsive" alt="insta-img" /></a>
                        </li>
                        <li>
                          <a href="#"><img src="images/hoa6.jfif" className="img-responsive" alt="insta-img" /></a>
                        </li>
                        <li>
                          <a href="#"><img src="images/hoa7.jfif" className="img-responsive" alt="insta-img" /></a>
                        </li>
                        <li>
                          <a href="#"><img src="images/hoa8.jfif" className="img-responsive" alt="insta-img" /></a>
                        </li>
                        <li>
                          <a href="#"><img src="images/hoa9.jfif" className="img-responsive" alt="insta-img" /></a>
                        </li>
                      </ul>
                    </div>
                    {/* end side-bar-block */}
                  </div>
                  {/* end columns */}
                </div>
                {/* end row */}
                <div className="row">
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
                          <p>Street No: To Hien Thanh, Son Tra, Da Nang, Viet Nam</p>
                        </div>
                      </div>
                      {/* end c-list */}
                    </div>
                    {/* end side-bar-block */}
                  </div>
                  {/* end columns */}
                  <div className="col-xs-12 col-sm-6 col-md-12">
                    <div className="side-bar-block recent-post">
                      <h2 className="side-bar-heading">Recent Post</h2>
                      <div className="recent-block">
                        <div className="recent-img">
                          <a href="blog-detail-right-sidebar.php"><img src="images/727e5ea10a3f1852dcbdb06b3733cb7f.jpg" className="img-reponsive" alt="recent-blog-image" /></a>
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
                          <a href="blog-detail-right-sidebar.php"><img src="images//tải xuống (1).jfif" className="img-reponsive" alt="recent-blog-image" /></a>
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
                </div>
                {/* end row */}
                <div className="row">
                  <div className="col-xs-12 col-sm-6 col-md-12">
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
                  <div className="col-xs-12 col-sm-6 col-md-12">
                    <div className="side-bar-block tags">
                      <h2 className="side-bar-heading">Tags</h2>
                      <ul className="list-unstyled list-inline">
                        <li><a href="#" className="btn btn-g-border">SPA</a></li>
                        <li><a href="#" className="btn btn-g-border">Restaurant</a></li>
                        <li><a href="#" className="btn btn-g-border">Searvices</a></li>
                        <li><a href="#" className="btn btn-g-border">Wifi</a></li>
                        <li><a href="#" className="btn btn-g-border">Tv</a></li>
                        <li><a href="#" className="btn btn-g-border">Rooms</a></li>
                        <li><a href="#" className="btn btn-g-border">Pools</a></li>
                        <li><a href="#" className="btn btn-g-border">Work</a></li>
                        <li><a href="#" className="btn btn-g-border">Sports</a></li>
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
        {/* end blog-listings */}
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
export default Blog_detail;