import React,{Component} from 'react';
class Footer extends Component{
    render(){
        return(
    <section id="footer" className="ftr-heading-o ftr-heading-mgn-1">
    <div id="footer-top" className="banner-padding ftr-top-grey ftr-text-white">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 footer-widget ftr-contact">
            <h3 className="footer-heading">CONTACT US</h3>
            <ul className="list-unstyled">
              <li><span><i className="fa fa-map-marker" /></span>Passerellesnumériques Viet Nam</li>
              <li><span><i className="fa fa-phone" /></span>+00 964 988 91</li>
              <li><span><i className="fa fa-envelope" /></span>hamongkhang@gmail.com</li>
            </ul>
          </div>
          {/* end columns */}
          <div className="col-xs-12 col-sm-6 col-md-2 col-lg-2 footer-widget ftr-links">
            <h3 className="footer-heading">COMPANY</h3>
            <ul className="list-unstyled">
              <li><a href="index.php">Home</a></li>
              <li><a href="cruise-homepage.php">Flight</a></li>
              <li><a href="cruise-homepage.php">Hotel</a></li>
              <li><a href="cruise-homepage.php">Tours</a></li>
              <li><a href="cruise-homepage.php">Cruise</a></li>
              <li><a href="cruise-homepage.php">Cars</a></li>
            </ul>
          </div>
          {/* end columns */}
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 footer-widget ftr-links ftr-pad-left">
            <h3 className="footer-heading">RESOURCES</h3>
            <ul className="list-unstyled">
              <li><a href="blog-listing-right-sidebar.php">Blogs</a></li>
              <li><a href="contact-us.php">Contact Us</a></li>
              <li><a href="logout.php">Login</a></li>
              <li><a href="registration.php">Register</a></li>
              <li><a href="index.php">Site Map</a></li>
            </ul>
          </div>
          {/* end columns */}
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 footer-widget ftr-about">
            <h3 className="footer-heading">ABOUT US</h3>
            <p>We will bring you the journeys, the greatest experiences in your life. Your happiness and satisfaction are a motive power that impulse us to develop and improve. Thanks for your confidence and interaction. Hope you have a fantastic
              journeys!!
            </p>
            <ul className="social-links list-inline list-unstyled">
              <li><a href="https://www.facebook.com/"><span><i className="fa fa-facebook" /></span></a></li>
              <li><a href="https://twitter.com/"><span><i className="fa fa-twitter" /></span></a></li>
              <li><a href="https://google.com/"><span><i className="fa fa-google-plus" /></span></a></li>
              <li><a href="https://pinterest.com/"><span><i className="fa fa-pinterest-p" /></span></a></li>
              <li><a href="https://instagram.com/"><span><i className="fa fa-instagram" /></span></a></li>
              <li><a href="https://linkedin.com/"><span><i className="fa fa-linkedin" /></span></a></li>
              <li><a href="https://youtube.com/"><span><i className="fa fa-youtube-play" /></span></a></li>
            </ul>
          </div>
          {/* end columns */}
        </div>
        {/* end row */}
      </div>
      {/* end container */}
    </div>
    {/* end footer-top */}
    <div id="footer-bottom" className="ftr-bot-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6" id="copyright">
            <p>© 2021 <a href="index.php">StartTravel</a>. All rights reserved.</p>
          </div>
          {/* end columns */}
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6" id="terms">
            <ul className="list-unstyled list-inline">
              <li><a href="index.php">Terms &amp; Condition</a></li>
              <li><a href="index.php">Privacy Policy</a></li>
            </ul>
          </div>
          {/* end columns */}
        </div>
        {/* end row */}
      </div>
      {/* end container */}
    </div>
    {/* end footer-bottom */}
  </section>
        );
    }
}
export default Footer;