import { useContext, useState } from "react";
import { AppContext } from "../../Context";

const Blog_detail_1 = () => {
  function mapRevers(reverse) {
    let reversed = reverse.map( (num,index,reverse) => reverse[(reverse.length-1)-index] );
    return reversed;
}
  const [newComment, setNewComment] = useState({});
    const link="images/";
  const {
  bl,cmt1,addcmt
  } = useContext(AppContext);

  const addNewComment = (event) => {
    const target=event.target;
    const field =target.name;
    const value=target.value;
    setNewComment({
      ...newComment,
      [field]: value,
    });
  };

  const addComment = (e,id) => {
    addcmt(newComment,id);
    e.target.reset();
  };

    return(
<div>

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
                        <img src="images/141711.jpg" className="img-responsive" alt="blog-post-image" />
                        <div className="main-mask blog-post-info">
                          <ul className="list-inline list-unstyled blog-post-info">
                            <li><span><i className="fa fa-calendar" /></span>July 30, 2020</li>
                            <li><span><i className="fa fa-user" /></span>By: <a href="#">Khang Ha</a></li>
                          </ul>
                        </div>
                      </div>
                      {/* end blog-post-img */}
                      <div className="blog-post-detail">
                        <h2 className="blog-post-title">The cherry blossoms in Dalat bloom.</h2>
                        <p>Unlike the cherry blossoms (sakura) of Japan, Da Lat cherry apricot (Prunus Cerasoides) has a familiar resemblance to the plum peach but the flower belongs to a single five petals like apricot, so it is called with
                          the name " Peach Mai "is Cherry Mai. Da Lat cherry blossoms are a unique feature of this mountain town, living only at an altitude of over 1000 m above sea level, so it is impossible to "swap the concept" of Japanese
                          cherry blossoms, northern cherry blossoms. apricot flowers in Vung Tau. Clarifying the concept of this flower will help you feel better about the beauty of Da Lat cherry blossoms!</p>
                        <p>Traveling to Dalat in January, you will see new cherry blossoms blooming in some places such as the road to Hoan My hospital, Sunshine coffee, Tran Hung Dao roundabout, Truong Cong Dinh slope, the road to Tuyen Lam
                          lake. Cherry plum blossoms will bloom from mid-January to mid-February, so note the beautiful ways to photograph these flowers are Tran Hung Dao, Trieu Viet Vuong, the way to Trai Mat, Truong Cong Dinh, shore Xuan
                          Huong Lake, specialized school Thang Long or Phan Chu Trinh Junior High School (for school, you should come on a holiday and have to ask permission to protect you first). But in general, in the blooming season,
                          almost every street in Dalat will not lack this flower's silhouette.</p>
                        <p>The most beautiful at this moment is the cherry apricot tree next to Sunshine Coffee (No. 9 Tran Hung Dao) - where you can sit and watch the whole city in the windy space. After that, the most beautiful Cherry Mai streets
                          in Da Lat that I listed above will be destinations that cannot be missed this spring. These flowers are best when blooming together on a road, capturing the brilliant spring sky and a great background for any photo
                          set. Streets like Tran Hung Dao, Trieu Viet Vuong or Trai Mat are chosen by many couples to take wedding photos in spring!</p>
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
                      {mapRevers(cmt1).map(({id_blog,name_comment,email_comment,message,date_comment }) => {
  return(
    <div className="comment-block">
                      <div className="user-img">
                        <img src="images/uer.png" className="img-responsive" alt="user-img" />
                      </div>
                      {/* end user-img */}
                      <div className="user-text">
                        <ul className="list-inline list-unstyled">
                          <li className="user-name">{name_comment}</li>
                          <li className="date">{date_comment},</li>
                          <li className="date">{email_comment}</li>
                        </ul>
                        <p>{message}</p>
                        <a href="#"><span><i className="fa fa-reply" /></span> Reply</a>
                      </div>
                      {/* end user-text */}
                    </div>
  )})}
                  </div>
                  {/* end comments */}
                  <div id="comment-form">
                    <div className="innerpage-heading">
                      <h1>Add Comment</h1>
                    </div>
                    {/* end innerpage-heading */}
                    <form className="insertForm" onSubmit={(event) => addComment(event,0)}>
                      <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-6">
                          <div className="form-group">
                            <input type="text" className="form-control input input-lg" name="name_comment" onChange={(event) => addNewComment(event)} placeholder="Your Name" required />
                          </div>
                        </div>
                        {/* end columns */}
                        <div className="col-xs-12 col-sm-6 col-md-6">
                          <div className="form-group">
                            <input type="email" className="form-control input input-lg" name="email_comment" onChange={(event) => addNewComment(event)} placeholder="Your Email" required />
                          </div>
                        </div>
                        {/* end columns */}
                      </div>
                      {/* end row */}
                      <div className="form-group">
                        <textarea className="form-control input-lg" rows={5} onChange={(event) => addNewComment(event)} name="message" placeholder="Your Message" defaultValue={""} />
                      </div>
                      <button type="submit" className="btn btn-orange">Submit</button>
                    </form>
                  </div>
                  {/* end comment-form */}
                </div>
                {/* end space-right */}
              </div>
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
export default Blog_detail_1;