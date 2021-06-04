import React, {Component} from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
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
import Holiday from '../holiday/holiday';
import Cart from '../cart/cart';
import Thank_you from '../thank_you/thank_you';
import Travel_insurance from '../travel_insurance/travel_insurance';
import App from '../../App';
import { useContext, useState } from "react";
import { AppContext } from "../../Context";



const Menu2 = () => {
    const {
      logout,
      active
    } = useContext(AppContext);
    const logoutout = (e) => {
      if (window.confirm("Are you sure?")) {
        logout();
      }
    };
    let dem=0;
    {active.map((item) => {
               dem=dem+1;
    })}
    if(dem===0){
    return(
      <Router>
        <div>
   <div id="top-bar" className="tb-text-white">
     <div className="container">
       <div className="row">
         <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
           <div id="info">
             <ul className="list-unstyled list-inline">
               <li><span><i className="fa fa-map-marker" /></span>Passerellesnumériques Viet Nam</li>
               <li><span><i className="fa fa-phone" /></span>+03 964 988 91</li>
             </ul>
           </div>
           {/* end info */}
         </div>
         {/* end columns */}
         <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
           <div id="links">
             <ul className="list-unstyled list-inline">
                 {}
             <li><button type="submit" onClick={(e) => logoutout()}><span><i className="fa fa-sign-out" /></span>Logout</button></li>
               <li><Link to={'/Cart'}><span><i className="fa fa-shopping-cart" /></span>Cart</Link></li>
               <li>
                 <form>
                   <ul className="list-inline">
                     <li>
                       <div className="form-group currency">
                         <span><i className="fa fa-angle-down" /></span>
                         <select className="form-control">
                           <option value>$</option>
                           <option value>đ</option>
                           <option value>£</option>
                         </select>
                       </div>
                       {/* end form-group */}
                     </li>
                     <li>
                       <div className="form-group language">
                         <span><i className="fa fa-angle-down" /></span>
                         <select className="form-control">
                           <option value>EN</option>
                           <option value>VI</option>
                           <option value>FR</option>
                         </select>
                       </div>
                       {/* end form-group */}
                     </li>
                     <li>
                   
                     </li>
                   </ul>
                 </form>
               </li>
             </ul>
           </div>
         </div>
         {/* end links */}
       </div>
       {/* end columns */}
     </div>
     {/* end row */}
    
   </div>
      <nav className="navbar navbar-default main-navbar navbar-custom navbar-white" id="mynavbar-1">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" id="menu-button">
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <div className="header-search hidden-lg">
            <a href="javascript:void(0)" className="search-button"><span><i className="fa fa-search" /></span></a>
          </div>
          <a href="index.php" className="navbar-brand"><span><i className="fa fa-plane" />START</span>TRAVELS</a>
        </div>
        {/* end navbar-header */}
        <div className="collapse navbar-collapse" id="myNavbar1">
          <ul className="nav navbar-nav navbar-right navbar-search-link">
            <li className="dropdown active"><a href="#" className="dropdown-toggle" data-toggle="dropdown">HOME<span><i className="fa fa-angle-down" /></span></a>
              <ul className="dropdown-menu">
                <li className="active"><Link to={'/'}>Main Homepage</Link></li>
                <li><Link to={'/Tour_homepage'}>Tour Homepage</Link></li>
                <li><Link to={'/Cruise_homepage'}>Cruise Homepage</Link></li>
                <li><Link to={'/Hazadous_sports_tour_homepage'}>Harzadous Sports Tour Homepage</Link></li>
                <li><Link to={'/Blog_homepage'}>Blog Homepage</Link></li>
              </ul>
            </li>
            <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown">Account<span><i className="fa fa-angle-down" /></span></a>
              <ul className="dropdown-menu">
                <li><Link to={'/Login'}>Login Homepage</Link></li>
                <li><Link to={'/Registration'}>Registration Homepage</Link></li>
                <li><Link to={'/Forgot_password'}>Forgot Password Homepage</Link></li>
              </ul>
            </li>
            <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown">Blogs<span><i className="fa fa-angle-down" /></span></a>
              <ul className="dropdown-menu">
                <li><Link to={'/Blog_Homepage'}>Blog Homepage</Link></li>
                <li><Link to={'/About_us'}>About Us</Link></li>
                <li><Link to={'/Contact_us'}>Contact Us</Link></li>
                <li><Link to={'/Coming_soon'}>Coming Soon</Link></li>
              </ul>
            </li>
            <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown">Tours<span><i className="fa fa-angle-down" /></span></a>
              <ul className="dropdown-menu">
                <li><Link to={'/Tour_homepage'}>Tour Homepage</Link></li>
                <li><Link to={'/Before_you_fly'}>Before You Fly</Link></li>
                <li><Link to={'/Travel_insurance'}>Travel insurance</Link></li>
                <li><Link to={'/Holidays'}>Holidays</Link></li>
              </ul>
            </li>
            <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown">Cruise<span><i className="fa fa-angle-down" /></span></a>
              <ul className="dropdown-menu">
                <li><Link to={'/Cruise_homepage'}>Cruise Homepage</Link></li>
                <li><Link to={'/Before_you_fly'}>Before You Fly</Link></li>
                <li><Link to={'/Travel_insurance'}>Travel insurance</Link></li>
                <li><Link to={'/Holidays'}>Holidays</Link></li>
              </ul>
            </li>
            <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown">Pages<span><i className="fa fa-angle-down" /></span></a>
              <ul className="dropdown-menu mega-dropdown-menu row">
                <li>
                  <div className="row">
                    <div className="col-md-3">
                      <ul className="list-unstyled">
                        <li className="dropdown-header">Standard <span>Pages</span></li>
                        <li><Link to={'/About_us'}>About Us</Link></li>
                        <li><Link to={'/Contact_us'}>Contact Us</Link></li>
                        <li><Link to={'/Blog_homepage'}>Blog Listing Right Sidebar</Link></li>
                        <li><Link to={'/Blog_homepage'}>Blog Detail Right Sidebar</Link></li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <ul className="list-unstyled">
                        <li className="dropdown-header">User <span>Dashboard</span></li>
                        <li><Link to={'/Dashboard'}>Dashboard</Link></li>
                        <li><Link to={'/User_profile'}>User Profile</Link></li>
                        <li><Link to={'/Booking'}>Booking</Link></li>
                        <li><Link to={'/Wishlist'}>Wishlist</Link></li>
                        <li><Link to={'/Cards'}>Cards</Link></li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <ul className="list-unstyled">
                        <li className="dropdown-header">Special <span>Pages</span></li>
                        <li><Link to={'/Login'}>Login</Link></li>
                        <li><Link to={'/Registration'}>Registration</Link></li>
                        <li><Link to={'/Forgot_password'}>Forgot Password</Link></li>
                        <li><Link to={'/Error_page'}>404 Page</Link></li>
                        <li><Link to={'/Coming_soon'}>Coming Soon</Link></li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <ul className="list-unstyled">
                        <li className="dropdown-header">Extra <span>Pages</span></li>
                        <li><Link to={'/Before_you_fly'}>Before Fly</Link></li>
                        <li><Link to={'/Travel_insurance'}>Travel Insurance</Link></li>
                        <li><Link to={'/Holidays'}>Holidays</Link></li>
                        <li><Link to={'/Thank_you'}>Thank You</Link></li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li><a href="javascript:void(0)" className="search-button"><span><i className="fa fa-search" /></span></a></li>
          </ul>
        </div>
        {/* end navbar collapse */}
      </div>
    </nav>
       </div>
       <Switch>
          <Route  exact path ='/' component={Index} />
          <Route path ='/Tour_homepage' component={All_tour} />
          <Route path ='/Cart' component={Cart} />
          <Route path ='/Hazadous_sports_tour_homepage' component={All_tour} />
          <Route path ='/Cruise_homepage' component={All_tour} />
          <Route path ='/Sport_Homepage' component={All_tour} />
          <Route path ='/Blog_homepage' component={Blog_detail} />
          <Route path ='/Login' component={Login} />
          <Route path ='/Registration' component={Registration} />
          <Route path ='/Forgot_password' component={Forgot_password} />
          <Route path ='/Contact_us' component={Contact_us} />
          <Route path ='/About_us' component={About_us} />
          <Route path ='/Before_you_fly' component={Before_fly} />
          <Route path ='/Travel_insurance' component={Travel_insurance} />
          <Route path ='/Holidays' component={Holiday} />
          <Route path ='/Dashboard' component={Error_page} />
          <Route path ='/Wishlist' component={Error_page} />
          <Route path ='/Coming_soon' component={Error_page} />
          <Route path ='/Cards' component={Error_page} />
          <Route path ='/Booking' component={Error_page} />
          <Route path ='/User_profile' component={Error_page} />
          <Route path ='/Thank_you' component={Thank_you} />
          <Route path ='/Error_page' component={Error_page} />
    </Switch>
    </Router>
      );}else{
          return(
            <Router>
            <div>
       <div id="top-bar" className="tb-text-white">
         <div className="container">
           <div className="row">
             <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
               <div id="info">
                 <ul className="list-unstyled list-inline">
                   <li><span><i className="fa fa-map-marker" /></span>Passerellesnumériques Viet Nam</li>
                   <li><span><i className="fa fa-phone" /></span>+03 964 988 91</li>
                 </ul>
               </div>
               {/* end info */}
             </div>
             {/* end columns */}
             <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
               <div id="links">
                 <ul className="list-unstyled list-inline">
                     {}
                 <li><button type="submit" onClick={(e) => logoutout()}><span><i className="fa fa-sign-out" /></span>Logout</button></li>
                   <li><Link to={'/Cart'}><span><i className="fa fa-shopping-cart" /></span>Cart</Link></li>
                   <li>
                     <form>
                       <ul className="list-inline">
                         <li>
                           <div className="form-group currency">
                             <span><i className="fa fa-angle-down" /></span>
                             <select className="form-control">
                               <option value>$</option>
                               <option value>đ</option>
                               <option value>£</option>
                             </select>
                           </div>
                           {/* end form-group */}
                         </li>
                         <li>
                           <div className="form-group language">
                             <span><i className="fa fa-angle-down" /></span>
                             <select className="form-control">
                               <option value>EN</option>
                               <option value>VI</option>
                               <option value>FR</option>
                             </select>
                           </div>
                           {/* end form-group */}
                         </li>
                         <li>
                         {active.map((item) => {
                         return(
                       <a id="ten2"><span><i className="fa fa-circle blackiconcolor" />{item.activity_name}</span>
                       </a>
                         );
                    })}
                         </li>
                       </ul>
                     </form>
                   </li>
                 </ul>
               </div>
             </div>
             {/* end links */}
           </div>
           {/* end columns */}
         </div>
         {/* end row */}
        
       </div>
          <nav className="navbar navbar-default main-navbar navbar-custom navbar-white" id="mynavbar-1">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" id="menu-button">
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <div className="header-search hidden-lg">
                <a href="javascript:void(0)" className="search-button"><span><i className="fa fa-search" /></span></a>
              </div>
              <a href="index.php" className="navbar-brand"><span><i className="fa fa-plane" />START</span>TRAVELS</a>
            </div>
            {/* end navbar-header */}
            <div className="collapse navbar-collapse" id="myNavbar1">
              <ul className="nav navbar-nav navbar-right navbar-search-link">
                <li className="dropdown active"><a href="#" className="dropdown-toggle" data-toggle="dropdown">HOME<span><i className="fa fa-angle-down" /></span></a>
                  <ul className="dropdown-menu">
                    <li className="active"><Link to={'/'}>Main Homepage</Link></li>
                    <li><Link to={'/Tour_homepage'}>Tour Homepage</Link></li>
                    <li><Link to={'/Cruise_homepage'}>Cruise Homepage</Link></li>
                    <li><Link to={'/Hazadous_sports_tour_homepage'}>Harzadous Sports Tour Homepage</Link></li>
                    <li><Link to={'/Blog_homepage'}>Blog Homepage</Link></li>
                  </ul>
                </li>
                <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown">Account<span><i className="fa fa-angle-down" /></span></a>
                  <ul className="dropdown-menu">
                    <li><Link to={'/Login'}>Login Homepage</Link></li>
                    <li><Link to={'/Registration'}>Registration Homepage</Link></li>
                    <li><Link to={'/Forgot_password'}>Forgot Password Homepage</Link></li>
                  </ul>
                </li>
                <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown">Blogs<span><i className="fa fa-angle-down" /></span></a>
                  <ul className="dropdown-menu">
                    <li><Link to={'/Blog_Homepage'}>Blog Homepage</Link></li>
                    <li><Link to={'/About_us'}>About Us</Link></li>
                    <li><Link to={'/Contact_us'}>Contact Us</Link></li>
                    <li><Link to={'/Coming_soon'}>Coming Soon</Link></li>
                  </ul>
                </li>
                <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown">Tours<span><i className="fa fa-angle-down" /></span></a>
                  <ul className="dropdown-menu">
                    <li><Link to={'/Tour_homepage'}>Tour Homepage</Link></li>
                    <li><Link to={'/Before_you_fly'}>Before You Fly</Link></li>
                    <li><Link to={'/Travel_insurance'}>Travel insurance</Link></li>
                    <li><Link to={'/Holidays'}>Holidays</Link></li>
                  </ul>
                </li>
                <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown">Cruise<span><i className="fa fa-angle-down" /></span></a>
                  <ul className="dropdown-menu">
                    <li><Link to={'/Cruise_homepage'}>Cruise Homepage</Link></li>
                    <li><Link to={'/Before_you_fly'}>Before You Fly</Link></li>
                    <li><Link to={'/Travel_insurance'}>Travel insurance</Link></li>
                    <li><Link to={'/Holidays'}>Holidays</Link></li>
                  </ul>
                </li>
                <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown">Pages<span><i className="fa fa-angle-down" /></span></a>
                  <ul className="dropdown-menu mega-dropdown-menu row">
                    <li>
                      <div className="row">
                        <div className="col-md-3">
                          <ul className="list-unstyled">
                            <li className="dropdown-header">Standard <span>Pages</span></li>
                            <li><Link to={'/About_us'}>About Us</Link></li>
                            <li><Link to={'/Contact_us'}>Contact Us</Link></li>
                            <li><Link to={'/Blog_homepage'}>Blog Listing Right Sidebar</Link></li>
                            <li><Link to={'/Blog_homepage'}>Blog Detail Right Sidebar</Link></li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <ul className="list-unstyled">
                            <li className="dropdown-header">User <span>Dashboard</span></li>
                            <li><Link to={'/Dashboard'}>Dashboard</Link></li>
                            <li><Link to={'/User_profile'}>User Profile</Link></li>
                            <li><Link to={'/Booking'}>Booking</Link></li>
                            <li><Link to={'/Wishlist'}>Wishlist</Link></li>
                            <li><Link to={'/Cards'}>Cards</Link></li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <ul className="list-unstyled">
                            <li className="dropdown-header">Special <span>Pages</span></li>
                            <li><Link to={'/Login'}>Login</Link></li>
                            <li><Link to={'/Registration'}>Registration</Link></li>
                            <li><Link to={'/Forgot_password'}>Forgot Password</Link></li>
                            <li><Link to={'/Error_page'}>404 Page</Link></li>
                            <li><Link to={'/Coming_soon'}>Coming Soon</Link></li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <ul className="list-unstyled">
                            <li className="dropdown-header">Extra <span>Pages</span></li>
                            <li><Link to={'/Before_you_fly'}>Before Fly</Link></li>
                            <li><Link to={'/Travel_insurance'}>Travel Insurance</Link></li>
                            <li><Link to={'/Holidays'}>Holidays</Link></li>
                            <li><Link to={'/Thank_you'}>Thank You</Link></li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li><a href="javascript:void(0)" className="search-button"><span><i className="fa fa-search" /></span></a></li>
              </ul>
            </div>
            {/* end navbar collapse */}
          </div>
        </nav>
           </div>
           <Switch>
              <Route  exact path ='/' component={Index} />
              <Route path ='/Tour_homepage' component={All_tour} />
              <Route path ='/Cart' component={Cart} />
              <Route path ='/Hazadous_sports_tour_homepage' component={All_tour} />
              <Route path ='/Cruise_homepage' component={All_tour} />
              <Route path ='/Sport_Homepage' component={All_tour} />
              <Route path ='/Blog_homepage' component={Blog_detail} />
              <Route path ='/Login' component={Login} />
              <Route path ='/Registration' component={Registration} />
              <Route path ='/Forgot_password' component={Forgot_password} />
              <Route path ='/Contact_us' component={Contact_us} />
              <Route path ='/About_us' component={About_us} />
              <Route path ='/Before_you_fly' component={Before_fly} />
              <Route path ='/Travel_insurance' component={Travel_insurance} />
              <Route path ='/Holidays' component={Holiday} />
              <Route path ='/Dashboard' component={Error_page} />
              <Route path ='/Wishlist' component={Error_page} />
              <Route path ='/Coming_soon' component={Error_page} />
              <Route path ='/Cards' component={Error_page} />
              <Route path ='/Booking' component={Error_page} />
              <Route path ='/User_profile' component={Error_page} />
              <Route path ='/Thank_you' component={Thank_you} />
              <Route path ='/Error_page' component={Error_page} />
        </Switch>
        </Router>
          );
      }
  }
export default Menu2;