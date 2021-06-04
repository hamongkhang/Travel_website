import React, {Component} from 'react';
import {BrowserRouter as Router,Switch,Route,Link,useHistory} from 'react-router-dom';
import Login from '../login/login';
import Index from '../index/index';
import Registration from '../registration/registration';
import About_us from '../about_us/about_us';
import Contact_us from '../contact_us/contact_us';
import All_tour from '../all_tour/all_tour';
import Before_fly from '../before_fly/before_fly';
import Blog_detail from '../blog_detail/blog_detail';
import Error_page from '../error_page/error_page';
import Forgot_password from '../forgot_password/forgot_password';
import Change_password from '../change_password/change_password';
import Holiday from '../holiday/holiday';
import Thank_you from '../thank_you/thank_you';
import Travel_insurance from '../travel_insurance/travel_insurance';
import { useContext, useState } from "react";
import { AppContext } from "../../Context";
import Cart from '../cart/cart';
import History from "../history/history";
import Payment from "../payment/payment";

const Footer = () => {
    return(
      <Router>
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
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/Tour_homepage'}>Tour</Link></li>
            <li><Link to={'/Blog_homepage'}>Blog</Link></li>
            <li><Link to={'/About_us'}>About us</Link></li>
            <li><Link to={'/Tour_homepage'}>Cruise</Link></li>
            <li><Link to={'/Tour_homepage'}>Sport</Link></li>
          </ul>
        </div>
        {/* end columns */}
        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 footer-widget ftr-links ftr-pad-left">
          <h3 className="footer-heading">RESOURCES</h3>
          <ul className="list-unstyled">
            <li><Link to={'/Blog_homepage'}>Blog</Link></li>
            <li><Link to={'/Contact_us'}>Contact us</Link></li>
            <li><Link to={'/Login'}>Login</Link></li>
            <li><Link to={'/Registration'}>Register</Link></li>
            <li><Link to={'/About_us'}>Site map</Link></li>
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

</Router>
);
}
export default Footer;