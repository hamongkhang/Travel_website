import React,{Component} from 'react';

class Content extends Component{
  render(){
    return(
<section className="innerpage-wrapper">
<div id="about-us">
  <div id="about-content" className="section-padding">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="flex-content">
            <div className="flex-content-img about-img">
              <img src="images/Logo.png" className="img-responsive" alt="about-img" />
            </div>
            {/* end about-img */}
            <div className="about-text">
              <div className="about-detail">
                <h2>About Start Travels</h2>
                <p>STARTTRAVELS- where converges the most excellent authorities in the world. Including the top people about fields such as travel, advice, doctor,...we always work with the highest power in order to bring the best
                  thing for customers. We can make customers feeling comfortable, enjoyable when they arrive here and then they can choose the most helpfull and suitable services. Which is our expectation. We will help you to
                  access, make relations, choose the services and ensure that your travel is the most successful and exciting one. We have experience about serving thounsand of customers that are fastidious and facile, from high
                  to low class, from male to female and from home to abroad people. They have given us many advices, compliments that makes us become more perfect and successful.</p>
                <p>Bringing enjoyable and sastified feeling to you is our purpose and norm working. We can have no meal, no sleep, but we are always here to serve and take care of you. Please contact with administrators to be answered
                  and advised all problems and difficulty. Thank you for supporting and loving STARTTRAVELS, that make we are like this.</p>
              </div>
              {/* end about-detail */}
            </div>
            {/* end about-text */}
          </div>
          {/* end flex-content */}
        </div>
        {/* end columns */}
      </div>
      {/* end row */}
    </div>
    {/* end container */}
  </div>
  {/* end about-content */}
  {/*==================== VIDEO BANNER ===================*/}
  <section id="video-banner" className="banner-padding back-size">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h2>Take a Video Tour</h2>
          <p>Starttravels brings about the most memorable moments in life, the unprecedented impressions. We brings the beauty of Viet Nam being world-famous. Let's experience througt our video and feel it.</p>
          <a href="https://www.youtube.com/watch?v=Au6LqK1UH8g" className="popup-youtube" id="play-button"><span><i className="fa fa-play" /></span></a>
        </div>
        {/* end columns */}
      </div>
      {/* end row */}
    </div>
    {/* end container */}
  </section>
  {/* end video-banner */}
  <div id="team" className="section-padding">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="page-heading">
            <h2>Meet Our Team</h2>
            <hr className="heading-line" />
          </div>
          {/* end page-heading */}
          <div className="owl-carousel owl-theme" id="owl-team">
            <div className="item">
              <div className="member-block">
                <div className="member-img">
                  <img src="images/IMG_6803.jpg" className="img-responsive img-circle" alt="member-img" />
                  <ul className="list-unstyled list-inline contact-links">
                    <li><a href="#"><span><i className="fa fa-facebook-square" /></span></a></li>
                    <li><a href="#"><span><i className="fa fa-twitter-square" /></span></a></li>
                    <li><a href="#"><span><i className="fa fa-linkedin-square" /></span></a></li>
                  </ul>
                </div>
                {/* end member-img */}
                <div className="member-name">
                  <h3>Ha Mong Khang</h3>
                  <p>Director</p>
                </div>
                {/* end member-name */}
              </div>
              {/* end member-block */}
            </div>
            {/* end item */}
            <div className="item">
              <div className="member-block">
                <div className="member-img">
                  <img src="images/IMG_6862.jpg" className="img-responsive img-circle" alt="member-img" />
                  <ul className="list-unstyled list-inline contact-links">
                    <li><a href="#"><span><i className="fa fa-facebook-square" /></span></a></li>
                    <li><a href="#"><span><i className="fa fa-twitter-square" /></span></a></li>
                    <li><a href="#"><span><i className="fa fa-linkedin-square" /></span></a></li>
                  </ul>
                </div>
                {/* end member-img */}
                <div className="member-name">
                  <h3>Ho Thi Hang</h3>
                  <p>Director</p>
                </div>
                {/* end member-name */}
              </div>
              {/* end member-block */}
            </div>
            {/* end item */}
            <div className="item">
              <div className="member-block">
                <div className="member-img">
                  <img src="images/IMG_6807.jpg" className="img-responsive img-circle" alt="member-img" />
                  <ul className="list-unstyled list-inline contact-links">
                    <li><a href="#"><span><i className="fa fa-facebook-square" /></span></a></li>
                    <li><a href="#"><span><i className="fa fa-twitter-square" /></span></a></li>
                    <li><a href="#"><span><i className="fa fa-linkedin-square" /></span></a></li>
                  </ul>
                </div>
                {/* end member-img */}
                <div className="member-name">
                  <h3>Nguyen Hoang Huan</h3>
                  <p>Director</p>
                </div>
                {/* end member-name */}
              </div>
              {/* end member-block */}
            </div>
            {/* end item */}
            <div className="item">
              <div className="member-block">
                <div className="member-img">
                  <img src="images/IMG_6810.jpg" className="img-responsive img-circle" alt="member-img" />
                  <ul className="list-unstyled list-inline contact-links">
                    <li><a href="#"><span><i className="fa fa-facebook-square" /></span></a></li>
                    <li><a href="#"><span><i className="fa fa-twitter-square" /></span></a></li>
                    <li><a href="#"><span><i className="fa fa-linkedin-square" /></span></a></li>
                  </ul>
                </div>
                {/* end member-img */}
                <div className="member-name">
                  <h3>Le Cong Dinh</h3>
                  <p>Director</p>
                </div>
                {/* end member-name */}
              </div>
              {/* end member-block */}
            </div>
            {/* end item */}
            <div className="item">
              <div className="member-block">
                <div className="member-img">
                  <img src="images/IMG_6803.jpg" className="img-responsive img-circle" alt="member-img" />
                  <ul className="list-unstyled list-inline contact-links">
                    <li><a href="#"><span><i className="fa fa-facebook-square" /></span></a></li>
                    <li><a href="#"><span><i className="fa fa-twitter-square" /></span></a></li>
                    <li><a href="#"><span><i className="fa fa-linkedin-square" /></span></a></li>
                  </ul>
                </div>
                {/* end member-img */}
                <div className="member-name">
                  <h3>Nguyen Thi Hien</h3>
                  <p>Director</p>
                </div>
                {/* end member-name */}
              </div>
              {/* end member-block */}
            </div>
            {/* end item */}
          </div>
          {/* end owl-team */}
        </div>
        {/* end columns */}
      </div>
      {/* end row */}
    </div>
    {/* end container */}
  </div>
  {/* end team */}
</div>
{/* end about-us */}
</section>
);
}
}
export default Content;