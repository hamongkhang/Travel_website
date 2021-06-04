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
import Blog_detail_1 from "../blog_detail_1/blog_detail_1";
import Blog_detail_2 from "../blog_detail_2/blog_detail_2";
import Blog_detail_3 from "../blog_detail_3/blog_detail_3";
import Blog_detail_4 from "../blog_detail_4/blog_detail_4";
import Chat from "../chat";



const Menu = () => {
  const [newMess, setNewMess] = useState({});
  const history=useHistory();
  const ind=(event)=>{
       history.push('/');
  }
  function mapRevers(reverse) {
    let reversed = reverse.map( (num,index,reverse) => reverse[(reverse.length-1)-index] );
    return reversed;
}
  const addNewMess = (event) => {
    const target=event.target;
    const field =target.name;
    const value=target.value;
    setNewMess({
      ...newMess,
      [field]: value,
    });
  };

  const addddMess = (e) => {
    e.preventDefault();
    addMess(newMess);
    e.target.reset();
  };
  const {
    logout,
    addMess,
    active,
    mess,
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
               <li><Link to={'/Login'}><span><i className="fa fa-lock" /></span>Login</Link></li>
               <li><Link to={'/Registration'}><span><i className="fa fa-plus" /></span>Sign up</Link></li>
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
          <Link to={'/'} className="navbar-brand"><span><i className="fa fa-plane" />START</span>TRAVELS</Link>
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
                <li><Link to={'/Change_password'}>Change Password Homepage</Link></li>
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
                        <li><Link to={'/Change_password'}>Change Password Homepage</Link></li>
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
       <div className="sidenav-content">
        <div id="mySidenav" className="sidenav">
          <h2 id="web-name"><span><i className="fa fa-plane" /></span>Star Travel</h2>
          <div id="main-menu">
            <div className="closebtn">
              <button className="btn btn-default" id="closebtn">×</button>
            </div>
            {/* end close-btn */}
            <div className="list-group panel">
              <a href="#flight-links" className="list-group-item active" data-toggle="collapse" data-parent="#main-menu"><span><i className="fa fa-home link-icon" /></span>Home<span><i className="fa fa-chevron-down arrow" /></span></a>
              <div className="collapse sub-menu" id="home-links">
                <a href="index.php" className="list-group-item active">Main Homepage</a>
                <a href="cruise-homepage.php" className="list-group-item">Tour Homepage</a>
                <a href="cruise-homepage.php" className="list-group-item">Cruise Homepage</a>
                <a href="cruise-homepage.php" className="list-group-item">Harzadous Sports Tour Homepage</a>
                <a href="blog-listing-right-sidebar.php" className="list-group-item">Blog Homepage</a>
              </div>
              {/* end sub-menu */}
              <a href="#hotels-links" className="list-group-item" data-toggle="collapse" data-parent="#main-menu"><span><i className="fa fa-building link-icon" /></span>Account<span><i className="fa fa-chevron-down arrow" /></span></a>
              <div className="collapse sub-menu" id="hotels-links">
                <div className="list-group-item"><Link to={'/Login'}>Login Homepage</Link></div>
                <li  className="list-group-item"><Link to={'/Registration'}>Registration Homepage</Link></li>
                <li className="list-group-item"><Link to={'/Forgot_password'}>Forgot Password Homepage</Link></li>
                <li className="list-group-item"><Link to={'/Change_password'}>Change Password Homepage</Link></li>
              </div>
              {/* end sub-menu */}
              <a href="#tours-links" className="list-group-item" data-toggle="collapse" data-parent="#main-menu"><span><i className="fa fa-globe link-icon" /></span>Blogs<span><i className="fa fa-chevron-down arrow" /></span></a>
              <div className="collapse sub-menu" id="tours-links">
              <li className="list-group-item"><Link to={'/Blog_Homepage'}>Blog Homepage</Link></li>
                <li className="list-group-item"><Link to={'/About_us'}>About Us</Link></li>
                <li className="list-group-item"><Link to={'/Contact_us'}>Contact Us</Link></li>
                <li className="list-group-item"><Link to={'/Coming_soon'}>Coming Soon</Link></li>
              </div>
              {/* end sub-menu */}
              <a href="#cruise-links" className="list-group-item" data-toggle="collapse" data-parent="#main-menu"><span><i className="fa fa-ship link-icon" /></span>Tours<span><i className="fa fa-chevron-down arrow" /></span></a>
              <div className="collapse sub-menu" id="cruise-links">
              <li className="list-group-item"><Link to={'/Tour_homepage'}>Tour Homepage</Link></li>
                <li className="list-group-item"><Link to={'/Before_you_fly'}>Before You Fly</Link></li>
                <li className="list-group-item"><Link to={'/Travel_insurance'}>Travel insurance</Link></li>
                <li className="list-group-item"><Link to={'/Holidays'}>Holidays</Link></li>
              </div>
              {/* end sub-menu */}
              <a href="#cars-links" className="list-group-item" data-toggle="collapse" data-parent="#main-menu"><span><i className="fa fa-car link-icon" /></span>Cruise<span><i className="fa fa-chevron-down arrow" /></span></a>
              <div className="collapse sub-menu" id="cars-links">
              <li className="list-group-item"><Link to={'/Cruise_homepage'}>Cruise Homepage</Link></li>
                <li className="list-group-item"><Link to={'/Before_you_fly'}>Before You Fly</Link></li>
                <li className="list-group-item"><Link to={'/Travel_insurance'}>Travel insurance</Link></li>
                <li className="list-group-item"><Link to={'/Holidays'}>Holidays</Link></li>
              </div>
              {/* end sub-menu */}
              <a href="#pages-links" className="list-group-item" data-toggle="collapse" data-parent="#main-menu"><span><i className="fa fa-clone link-icon" /></span>Pages<span><i className="fa fa-chevron-down arrow" /></span></a>
              <div className="collapse sub-menu" id="pages-links">
                <div className="list-group-heading list-group-item">Standard <span>Pages</span></div>
                <li><Link to={'/About_us'}>About Us</Link></li>
                        <li className="list-group-item"><Link to={'/Contact_us'}>Contact Us</Link></li>
                        <li className="list-group-item"><Link to={'/Blog_homepage'}>Blog Listing Right Sidebar</Link></li>
                        <li className="list-group-item"><Link to={'/Blog_homepage'}>Blog Detail Right Sidebar</Link></li>
                        <li className="list-group-item"><Link to={'/Change_password'}>Change Password Homepage</Link></li>
                <div className="list-group-heading list-group-item">User <span>Dashboard</span></div>
                <li><Link to={'/Dashboard'}>Dashboard</Link></li>
                        <li className="list-group-item"><Link to={'/User_profile'}>User Profile</Link></li>
                        <li className="list-group-item"><Link to={'/Booking'}>Booking</Link></li>
                        <li className="list-group-item"><Link to={'/Wishlist'}>Wishlist</Link></li>
                        <li className="list-group-item"><Link to={'/Cards'}>Cards</Link></li>
                <div className="list-group-heading list-group-item">Special <span>Pages</span></div>
                <li><Link to={'/Login'}>Login</Link></li>
                        <li className="list-group-item"><Link to={'/Registration'}>Registration</Link></li>
                        <li className="list-group-item"><Link to={'/Forgot_password'}>Forgot Password</Link></li>
                        <li className="list-group-item"><Link to={'/Error_page'}>404 Page</Link></li>
                        <li className="list-group-item"><Link to={'/Coming_soon'}>Coming Soon</Link></li>
                <div className="list-group-heading list-group-item">Extra <span>Pages</span></div>
                <li><Link to={'/Before_you_fly'}>Before Fly</Link></li>
                        <li className="list-group-item"><Link to={'/Travel_insurance'}>Travel Insurance</Link></li>
                        <li className="list-group-item"><Link to={'/Holidays'}>Holidays</Link></li>
                        <li className="list-group-item"><Link to={'/Thank_you'}>Thank You</Link></li>
              </div>
              {/* end sub-menu */}
            </div>
            {/* end list-group */}
          </div>
          {/* end main-menu */}
        </div>
        {/* end mySidenav */}

      </div>
       <Switch>
          <Route  exact path ='/' component={Index} />
          <Route path ='/Tour_homepage' component={All_tour} />
          <Route path ='/Hazadous_sports_tour_homepage' component={All_tour} />
          <Route path ='/Cruise_homepage' component={All_tour} />
          <Route path ='/Sport_Homepage' component={All_tour} />
          <Route path ='/Blog_homepage' component={Blog_detail} />
          <Route path ='/Blog_detail_1' component={Blog_detail_1} />
          <Route path ='/Blog_detail_2' component={Blog_detail_2} />
          <Route path ='/Blog_detail_3' component={Blog_detail_3} />
          <Route path ='/Blog_detail_4' component={Blog_detail_4} />
          <Route path ='/Login' component={Login} />
          <Route path ='/Registration' component={Registration} />
          <Route path ='/Forgot_password' component={Forgot_password} />
          <Route path ='/Change_password' component={Change_password} />
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
               <li><Link to={'/Login'} type="submit" onClick={(e) => logoutout()}><span><i className="fa fa-sign-out" /></span>Logout</Link></li>
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
                      
                     <a id="ten2"><span><i className="fa fa-circle blackiconcolor" />{active[0].activity_name}</span>
                     </a>
                     
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
            <Link to={'/'} className="navbar-brand"><span><i className="fa fa-plane" />START</span>TRAVELS</Link>
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
                  <li><Link to={'/Change_password'}>Change Password Homepage</Link></li>
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
                          <li><Link to={'/Change_password'}>Change Password Homepage</Link></li>
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
         <div className="sidenav-content">
        <div id="mySidenav" className="sidenav">
          <h2 id="web-name"><span><i className="fa fa-plane" /></span>Star Travel</h2>
          <div id="main-menu">
            <div className="closebtn">
              <button className="btn btn-default" id="closebtn">×</button>
            </div>
            {/* end close-btn */}
            <div className="list-group panel">
              <a href="#flight-links" className="list-group-item active" data-toggle="collapse" data-parent="#main-menu"><span><i className="fa fa-home link-icon" /></span>Home<span><i className="fa fa-chevron-down arrow" /></span></a>
              <div className="collapse sub-menu" id="home-links">
                <a href="index.php" className="list-group-item active">Main Homepage</a>
                <a href="cruise-homepage.php" className="list-group-item">Tour Homepage</a>
                <a href="cruise-homepage.php" className="list-group-item">Cruise Homepage</a>
                <a href="cruise-homepage.php" className="list-group-item">Harzadous Sports Tour Homepage</a>
                <a href="blog-listing-right-sidebar.php" className="list-group-item">Blog Homepage</a>
              </div>
              {/* end sub-menu */}
              <a href="#hotels-links" className="list-group-item" data-toggle="collapse" data-parent="#main-menu"><span><i className="fa fa-building link-icon" /></span>Account<span><i className="fa fa-chevron-down arrow" /></span></a>
              <div className="collapse sub-menu" id="hotels-links">
                <div className="list-group-item"><Link to={'/Login'}>Login Homepage</Link></div>
                <li  className="list-group-item"><Link to={'/Registration'}>Registration Homepage</Link></li>
                <li className="list-group-item"><Link to={'/Forgot_password'}>Forgot Password Homepage</Link></li>
                <li className="list-group-item"><Link to={'/Change_password'}>Change Password Homepage</Link></li>
              </div>
              {/* end sub-menu */}
              <a href="#tours-links" className="list-group-item" data-toggle="collapse" data-parent="#main-menu"><span><i className="fa fa-globe link-icon" /></span>Blogs<span><i className="fa fa-chevron-down arrow" /></span></a>
              <div className="collapse sub-menu" id="tours-links">
              <li className="list-group-item"><Link to={'/Blog_Homepage'}>Blog Homepage</Link></li>
                <li className="list-group-item"><Link to={'/About_us'}>About Us</Link></li>
                <li className="list-group-item"><Link to={'/Contact_us'}>Contact Us</Link></li>
                <li className="list-group-item"><Link to={'/Coming_soon'}>Coming Soon</Link></li>
              </div>
              {/* end sub-menu */}
              <a href="#cruise-links" className="list-group-item" data-toggle="collapse" data-parent="#main-menu"><span><i className="fa fa-ship link-icon" /></span>Tours<span><i className="fa fa-chevron-down arrow" /></span></a>
              <div className="collapse sub-menu" id="cruise-links">
              <li className="list-group-item"><Link to={'/Tour_homepage'}>Tour Homepage</Link></li>
                <li className="list-group-item"><Link to={'/Before_you_fly'}>Before You Fly</Link></li>
                <li className="list-group-item"><Link to={'/Travel_insurance'}>Travel insurance</Link></li>
                <li className="list-group-item"><Link to={'/Holidays'}>Holidays</Link></li>
              </div>
              {/* end sub-menu */}
              <a href="#cars-links" className="list-group-item" data-toggle="collapse" data-parent="#main-menu"><span><i className="fa fa-car link-icon" /></span>Cruise<span><i className="fa fa-chevron-down arrow" /></span></a>
              <div className="collapse sub-menu" id="cars-links">
              <li className="list-group-item"><Link to={'/Cruise_homepage'}>Cruise Homepage</Link></li>
                <li className="list-group-item"><Link to={'/Before_you_fly'}>Before You Fly</Link></li>
                <li className="list-group-item"><Link to={'/Travel_insurance'}>Travel insurance</Link></li>
                <li className="list-group-item"><Link to={'/Holidays'}>Holidays</Link></li>
              </div>
              {/* end sub-menu */}
              <a href="#pages-links" className="list-group-item" data-toggle="collapse" data-parent="#main-menu"><span><i className="fa fa-clone link-icon" /></span>Pages<span><i className="fa fa-chevron-down arrow" /></span></a>
              <div className="collapse sub-menu" id="pages-links">
                <div className="list-group-heading list-group-item">Standard <span>Pages</span></div>
                <li><Link to={'/About_us'}>About Us</Link></li>
                        <li className="list-group-item"><Link to={'/Contact_us'}>Contact Us</Link></li>
                        <li className="list-group-item"><Link to={'/Blog_homepage'}>Blog Listing Right Sidebar</Link></li>
                        <li className="list-group-item"><Link to={'/Blog_homepage'}>Blog Detail Right Sidebar</Link></li>
                        <li className="list-group-item"><Link to={'/Change_password'}>Change Password Homepage</Link></li>
                <div className="list-group-heading list-group-item">User <span>Dashboard</span></div>
                <li><Link to={'/Dashboard'}>Dashboard</Link></li>
                        <li className="list-group-item"><Link to={'/User_profile'}>User Profile</Link></li>
                        <li className="list-group-item"><Link to={'/Booking'}>Booking</Link></li>
                        <li className="list-group-item"><Link to={'/Wishlist'}>Wishlist</Link></li>
                        <li className="list-group-item"><Link to={'/Cards'}>Cards</Link></li>
                <div className="list-group-heading list-group-item">Special <span>Pages</span></div>
                <li><Link to={'/Login'}>Login</Link></li>
                        <li className="list-group-item"><Link to={'/Registration'}>Registration</Link></li>
                        <li className="list-group-item"><Link to={'/Forgot_password'}>Forgot Password</Link></li>
                        <li className="list-group-item"><Link to={'/Error_page'}>404 Page</Link></li>
                        <li className="list-group-item"><Link to={'/Coming_soon'}>Coming Soon</Link></li>
                <div className="list-group-heading list-group-item">Extra <span>Pages</span></div>
                <li><Link to={'/Before_you_fly'}>Before Fly</Link></li>
                        <li className="list-group-item"><Link to={'/Travel_insurance'}>Travel Insurance</Link></li>
                        <li className="list-group-item"><Link to={'/Holidays'}>Holidays</Link></li>
                        <li className="list-group-item"><Link to={'/Thank_you'}>Thank You</Link></li>
              </div>
              {/* end sub-menu */}
            </div>
            {/* end list-group */}
          </div>
          {/* end main-menu */}
        </div>
        {/* end mySidenav */}
        <div class="chat-popup" id="myForm">
          <h1>Welcome to ST</h1>
        <form class="form-container" onSubmit={addddMess}>
        <div id="test">
        {mapRevers(mess).map(({id_account,content_mess,time_mess,name_account}) => {
          if ((name_account==="admin")){
            return(
              <div>
                  <input type="text" value={content_mess} className="mess" disabled />
                  <h4 className="tt">{time_mess} by admin</h4>
              </div>
            )
          }else{
 return(
    <div>
        <input type="text" value={content_mess} className="mess2" disabled />
        <h4 className="tt2">{time_mess} by me</h4>
    </div>
  )}})}
   </div>
          <div className="sub">
        <input type="text" id="messa" placeholder="Type message.." name="content_mess" onChange={(event) => addNewMess(event)} required></input>
        <button type="submit" class="btnbtn">Send</button>
        </div>
      </form>
   </div>
      </div>
         <Switch>
            <Route  exact path ='/' component={Index} />
            <Route path ='/Tour_homepage' component={All_tour} />
            <Route path ='/Cart' component={Cart} />
            <Route path ='/Hazadous_sports_tour_homepage' component={All_tour} />
            <Route path ='/Cruise_homepage' component={All_tour} />
            <Route path ='/Sport_Homepage' component={All_tour} />
            <Route path ='/Cart' component={Cart} />
            <Route path ='/Blog_homepage' component={Blog_detail} />
            <Route path ='/Blog_detail_1' component={Blog_detail_1} />
          <Route path ='/Blog_detail_2' component={Blog_detail_2} />
          <Route path ='/Blog_detail_3' component={Blog_detail_3} />
          <Route path ='/Blog_detail_4' component={Blog_detail_4} />
            <Route path ='/Login' component={Login} />
            <Route path ='/Registration' component={Registration} />
            <Route path ='/Forgot_password' component={Forgot_password} />
            <Route path ='/Change_password' component={Change_password} />
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
            <Route path ='/History' component={History} />
            <Route path ='/Payment' component={Payment} />
            <Route path ='/Chat' component={Chat} />
      </Switch>
      </Router>
        );
    }
}
export default Menu;




