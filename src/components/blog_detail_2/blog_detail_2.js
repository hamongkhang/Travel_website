import React,{Component} from 'react';

class Blog_detail_2 extends Component{
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
      <section className="page-cover" id="cover-blog-details">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="page-title">Blog Details Right Sidebar</h1>
              <ul className="breadcrumb">
                <li><a href="index.php">Home</a></li>
                <li className="active">Blog Details Right Sidebar</li>
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
        <div id="blog-details" className="innerpage-section-padding">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 content-side">
                <div className="space-right">
                  <div className="blog-post">
                    <div className="main-img blog-post-img">
                      <img src="images/kinh-nghiem-du-lich-da-lat-10.jpg" className="img-responsive" alt="blog-post-image" />
                      <div className="main-mask blog-post-info">
                        <ul className="list-inline list-unstyled blog-post-info">
                          <li><span><i className="fa fa-calendar" /></span>July 30, 2021</li>
                          <li><span><i className="fa fa-user" /></span>By: <a href="#">Hang Ho</a></li>
                        </ul>
                      </div>
                    </div>
                    {/* end blog-post-img */}
                    <div className="blog-post-detail">
                      <h2 className="blog-post-title">5 brand new Da Lat check-in locations in 2021.</h2>
                      <p>I just discovered this angle right in the Dalat market is very suitable for capturing the minimal style and boldness of Dalat life. This section of stairs is 2 parallel stairs with opposite aisle, so the photographer
                        will go in one direction and the sample will enter in the opposite direction. There is no need to line up in the "Hong Kong on the side of Dalat market" anymore, with this new location, if you hurry up, you will
                        have your own unique image before it is too crowded.</p>
                      <p>A vintage corner in the heart of Dalat and a special durian crepe! Please reveal a beautiful restaurant for Tet to spring, coming back to Vietnamese standards with all the criteria: delicious cake, beautiful restaurant,
                        suitable for whole family or class meeting. I strongly recommend that you try the durian crepe, which is delicious and sweet, and bites into the mouth like a real durian! It turns out that in Da Lat, I saw cakes
                        in Goute (Nguyen Van Troi) and here I could eat within 1 note. The new shop opened, I went at the end of December, the style of the cafes in Chiang Mai is gentle and elegant, especially the beautiful city view.
                        In addition, the shop also has a lovely "army of kids" to take pictures with. The homestay Hillside Hideaway restaurant is very neat, you can book the homestay here is also very clean and comfortable.</p>
                      <p>The shop is located in a large villa with the backyard of both floors and focuses on the check-in corners that are not too colorful but still quality, so it can be said that this is a suitable place for visitors to
                        be able to fit. take photos while eating and drinking (including food menu) without having to go too far. If you go with a large family of "nine people ten ideas", this is the right choice, the inside has a beautiful
                        corner just enough for teenagers, outside has a beautiful view for adults.</p>
                    </div>
                    {/* end blog-post-detail */}
                  </div>
                  {/* end blog-post */}
                  <div id="comments">
                    <div className="comment-block">
                      <div className="user-img">
                        <img src="images/IMG_6909.jpg" className="img-responsive" alt="user-img" />
                      </div>
                      {/* end user-img */}
                      <div className="user-text">
                        <ul className="list-inline list-unstyled">
                          <li className="user-name">Khang Ha</li>
                          <li className="date">27 May, 2020</li>
                        </ul>
                        <p>When you want to take a photo with, you should stand in the middle of the blooming flower tree so that you can stand out from the brilliant pink. If you want a set of beautiful "virtual life" photos with spring
                          flowers, you will "set up a contract" with your friends to come to Dalat right away!</p>
                        <a href="#"><span><i className="fa fa-reply" /></span> Reply</a>
                      </div>
                      {/* end user-text */}
                      <div className="comment-block reply-block">
                        <div className="user-img">
                          <img src="images/IMG_6916.jpg" className="img-responsive" alt="user-img" />
                        </div>
                        {/* end user-img */}
                        <div className="user-text">
                          <ul className="list-inline list-unstyled">
                            <li className="user-name">Jhon Smith</li>
                            <li className="date">27 May, 2017</li>
                          </ul>
                          <p>Save immediately the most beautiful paths of Da Lat cherry blossoms in 2021: Doc Da Quy, Cau Dat Tea Hill, Tran Hung Dao Street, Tran Quy Cap Street, Tuyen Lam Lake, Ho Xuan Huong, K'Long K'Lanh , Dalat University,
                            Lac Duong Town ...</p>
                          <a href="#"><span><i className="fa fa-reply" /></span> Reply</a>
                        </div>
                        {/* end user-text */}
                      </div>
                      {/* end reply-block */}
                    </div>
                    {/* end comment-block */}
                    <div className="comment-block">
                      <div className="user-img">
                        <img src="images/IMG_6916.jpg" className="img-responsive" alt="user-img" />
                      </div>
                      {/* end user-img */}
                      <div className="user-text">
                        <ul className="list-inline list-unstyled">
                          <li className="user-name">Jhon Smith</li>
                          <li className="date">27 May, 2017</li>
                        </ul>
                        <p>You may have heard a lot about sunflowers, triangles, mustard greens, lavender, ... in the flower city of Dalat, but I am sure that cherry blossoms are the only feature of this flower land. .</p>
                        <a href="#"><span><i className="fa fa-reply" /></span> Reply</a>
                      </div>
                      {/* end user-text */}
                    </div>
                    {/* end comment-block */}
                    <div className="comment-block">
                      <div className="user-img">
                        <img src="images/IMG_6949.jpg" className="img-responsive" alt="user-img" />
                      </div>
                      {/* end user-img */}
                      <div className="user-text">
                        <ul className="list-inline list-unstyled">
                          <li className="user-name">Jhon Smith</li>
                          <li className="date">27 May, 2017</li>
                        </ul>
                        <p>Do not hesitate to travel to Dalat this January to experience the spring-filled atmosphere, to have more new feelings about this place! Quickly carry your backpack and go!</p>
                        <a href="#"><span><i className="fa fa-reply" /></span> Reply</a>
                      </div>
                      {/* end user-text */}
                    </div>
                    {/* end comment-block */}
                  </div>
                  {/* end comments */}
                  <div id="comment-form">
                    <div className="innerpage-heading">
                      <h1>Add Comment</h1>
                    </div>
                    {/* end innerpage-heading */}
                    <form>
                      <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-6">
                          <div className="form-group">
                            <input type="text" className="form-control input input-lg" placeholder="Your Name" required />
                          </div>
                        </div>
                        {/* end columns */}
                        <div className="col-xs-12 col-sm-6 col-md-6">
                          <div className="form-group">
                            <input type="email" className="form-control input input-lg" placeholder="Your Email" required />
                          </div>
                        </div>
                        {/* end columns */}
                      </div>
                      {/* end row */}
                      <div className="form-group">
                        <textarea className="form-control input-lg" rows={5} placeholder="Your Message" defaultValue={""} />
                      </div>
                      <button className="btn btn-orange">Submit</button>
                    </form>
                  </div>
                  {/* end comment-form */}
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
                          <img src="images/ve-dep-viet-nam-vnexpress-2-1584434502.jpg" className="img-responsive" alt="car-ad" />
                          <div className="ad-mask">
                            <div className="ad-text">
                           
                           
                           xccjkjchjcsdcnvbvkccdxsdh dcvskbwedbdjcbsdcbsdjcbsdjcbddccbhjcm,.v cb
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
                          <p>Street No: To Hien Thanh, Son Tra, Da Nang, Viet Nam </p>
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
        {/* end blog-postings */}
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
export default Blog_detail_2;