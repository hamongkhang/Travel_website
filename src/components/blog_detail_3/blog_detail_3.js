import React,{Component} from 'react';

class Blog_detail_3 extends Component{
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
                      <img src="images/thiet-bi-dien-tu-mag-di-du-lich-1.jpg" className="img-responsive" alt="blog-post-image" />
                      <div className="main-mask blog-post-info">
                        <ul className="list-inline list-unstyled blog-post-info">
                          <li><span><i className="fa fa-calendar" /></span>July 30, 2020</li>
                          <li><span><i className="fa fa-user" /></span>By: <a href="#">Huan Nguyen</a></li>
                        </ul>
                      </div>
                    </div>
                    {/* end blog-post-img */}
                    <div className="blog-post-detail">
                      <h2 className="blog-post-title">Dear friend, when I am traveling, do not forget to check this indispensable items list!</h2>
                      <p>
                        If you are planning a travel that includes a long flight time, or have to travel a lot on vehicles, the neck pillow (also known as the U pillow) is an indispensable item. It is one of the best tonic for your body, able to take advantage of rest and recharge.
                        Time on plane, ship, vehicle; Please take a nap and make your body fully rest before continuing your journey of discovery and play. If you are afraid of bulky pillows, look for air pillows; When not in use, the
                        valve can be discharged and folded conveniently and neatly.</p>
                      <p>Whenever we travel, we always prioritize diverse outfits to take advantage of many beautiful photos, right? But sometimes the clothes we love can't fit in our wallets, or important papers. So usually you will use more
                        bags, backpacks, etc. The "money does not go along the intestine" easily causes us to lose property, encounter cases such as pickpocketing, rucksack. ... Anti-theft hanger is an extremely effective solution to combat
                        these unfortunate cases. This hook will make it easy for crooks to detect and help you preserve your property. A "trendy" stomach bag might be the solution if you don't use a bag or don't like a bulky backpack.
                        The advantage of this type of bag is that you will wear it on your chest or stomach, they will always be in sight or in your arms. The compartment is also quite large, so you can comfortably remove all your IDs,
                        passports, money, even a little lipstick, tissue and camera!</p>
                      <p>
                        In the checklist of indispensable items when traveling, have a… checklist. Really! Because it's great when you prepare all the items, but when you go back to ... throwing the checklist you have set up is extremely inconvenient. Whether you write it down
                        on paper, or save it to your phone, you should still bring the checklist until the end of your trip. This helps you to manage your luggage better, not left behind when preparing to pack home. At the same time as
                        at the departure time, you will easily check the quantity without spending much time remembering if you have cleaned up everything.</p>
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
export default Blog_detail_3;