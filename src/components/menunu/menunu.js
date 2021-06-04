// import React, {Component} from 'react';
// import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
// import Login from '../login/login';
// import Index from '../index/index';
// import Registration from '../registration/registration';
// import About_us from '../about_us/about_us';
// import Contact_us from '../contact_us/contact_us';
// import All_tour from '../all_tour/all_tour';
// import Before_fly from '../before_fly/before_fly';
// import Blog_detail from '../blog_detail/blog_detail';
// import Error_page from '../error_page/error_page';
// import Forgot_password from '../forgot_password/forgot_password';
// import Holiday from '../holiday/holiday';
// import Thank_you from '../thank_you/thank_you';
// import Travel_insurance from '../travel_insurance/travel_insurance';
// class Menunu extends Component{
//   render(){
//     return(
//        <Router>
//        <div className="sidenav-content">
//         <div id="mySidenav" className="sidenav">
//           <h2 id="web-name"><span><i className="fa fa-plane" /></span>Star Travel</h2>
//           <div id="main-menu">
//             <div className="closebtn">
//               <button className="btn btn-default" id="closebtn">×</button>
//             </div>
//             {/* end close-btn */}
//             <div className="list-group panel">
//               <a href="#flight-links" className="list-group-item active" data-toggle="collapse" data-parent="#main-menu"><span><i className="fa fa-home link-icon" /></span>Home<span><i className="fa fa-chevron-down arrow" /></span></a>
//               <div className="collapse sub-menu" id="home-links">
//                 <a href="index.php" className="list-group-item active">Main Homepage</a>
//                 <a href="cruise-homepage.php" className="list-group-item">Tour Homepage</a>
//                 <a href="cruise-homepage.php" className="list-group-item">Cruise Homepage</a>
//                 <a href="cruise-homepage.php" className="list-group-item">Harzadous Sports Tour Homepage</a>
//                 <a href="blog-listing-right-sidebar.php" className="list-group-item">Blog Homepage</a>
//               </div>
//               {/* end sub-menu */}
//               <a href="#hotels-links" className="list-group-item" data-toggle="collapse" data-parent="#main-menu"><span><i className="fa fa-building link-icon" /></span>Account<span><i className="fa fa-chevron-down arrow" /></span></a>
//               <div className="collapse sub-menu" id="hotels-links">
//                 <div className="list-group-item"><Link to={'/Login'}>Login Homepage</Link></div>
//                 <li  className="list-group-item"><Link to={'/Registration'}>Registration Homepage</Link></li>
//                 <li className="list-group-item"><Link to={'/Forgot_password'}>Forgot Password Homepage</Link></li>
//               </div>
//               {/* end sub-menu */}
//               <a href="#tours-links" className="list-group-item" data-toggle="collapse" data-parent="#main-menu"><span><i className="fa fa-globe link-icon" /></span>Blogs<span><i className="fa fa-chevron-down arrow" /></span></a>
//               <div className="collapse sub-menu" id="tours-links">
//               <li className="list-group-item"><Link to={'/Blog_Homepage'}>Blog Homepage</Link></li>
//                 <li className="list-group-item"><Link to={'/About_us'}>About Us</Link></li>
//                 <li className="list-group-item"><Link to={'/Contact_us'}>Contact Us</Link></li>
//                 <li className="list-group-item"><Link to={'/Coming_soon'}>Coming Soon</Link></li>
//               </div>
//               {/* end sub-menu */}
//               <a href="#cruise-links" className="list-group-item" data-toggle="collapse" data-parent="#main-menu"><span><i className="fa fa-ship link-icon" /></span>Tours<span><i className="fa fa-chevron-down arrow" /></span></a>
//               <div className="collapse sub-menu" id="cruise-links">
//               <li className="list-group-item"><Link to={'/Tour_homepage'}>Tour Homepage</Link></li>
//                 <li className="list-group-item"><Link to={'/Before_you_fly'}>Before You Fly</Link></li>
//                 <li className="list-group-item"><Link to={'/Travel_insurance'}>Travel insurance</Link></li>
//                 <li className="list-group-item"><Link to={'/Holidays'}>Holidays</Link></li>
//               </div>
//               {/* end sub-menu */}
//               <a href="#cars-links" className="list-group-item" data-toggle="collapse" data-parent="#main-menu"><span><i className="fa fa-car link-icon" /></span>Cruise<span><i className="fa fa-chevron-down arrow" /></span></a>
//               <div className="collapse sub-menu" id="cars-links">
//               <li className="list-group-item"><Link to={'/Cruise_homepage'}>Cruise Homepage</Link></li>
//                 <li className="list-group-item"><Link to={'/Before_you_fly'}>Before You Fly</Link></li>
//                 <li className="list-group-item"><Link to={'/Travel_insurance'}>Travel insurance</Link></li>
//                 <li className="list-group-item"><Link to={'/Holidays'}>Holidays</Link></li>
//               </div>
//               {/* end sub-menu */}
//               <a href="#pages-links" className="list-group-item" data-toggle="collapse" data-parent="#main-menu"><span><i className="fa fa-clone link-icon" /></span>Pages<span><i className="fa fa-chevron-down arrow" /></span></a>
//               <div className="collapse sub-menu" id="pages-links">
//                 <div className="list-group-heading list-group-item">Standard <span>Pages</span></div>
//                 <li><Link to={'/About_us'}>About Us</Link></li>
//                         <li className="list-group-item"><Link to={'/Contact_us'}>Contact Us</Link></li>
//                         <li className="list-group-item"><Link to={'/Blog_homepage'}>Blog Listing Right Sidebar</Link></li>
//                         <li className="list-group-item"><Link to={'/Blog_homepage'}>Blog Detail Right Sidebar</Link></li>
//                 <div className="list-group-heading list-group-item">User <span>Dashboard</span></div>
//                 <li><Link to={'/Dashboard'}>Dashboard</Link></li>
//                         <li className="list-group-item"><Link to={'/User_profile'}>User Profile</Link></li>
//                         <li className="list-group-item"><Link to={'/Booking'}>Booking</Link></li>
//                         <li className="list-group-item"><Link to={'/Wishlist'}>Wishlist</Link></li>
//                         <li className="list-group-item"><Link to={'/Cards'}>Cards</Link></li>
//                 <div className="list-group-heading list-group-item">Special <span>Pages</span></div>
//                 <li><Link to={'/Login'}>Login</Link></li>
//                         <li className="list-group-item"><Link to={'/Registration'}>Registration</Link></li>
//                         <li className="list-group-item"><Link to={'/Forgot_password'}>Forgot Password</Link></li>
//                         <li className="list-group-item"><Link to={'/Error_page'}>404 Page</Link></li>
//                         <li className="list-group-item"><Link to={'/Coming_soon'}>Coming Soon</Link></li>
//                 <div className="list-group-heading list-group-item">Extra <span>Pages</span></div>
//                 <li><Link to={'/Before_you_fly'}>Before Fly</Link></li>
//                         <li className="list-group-item"><Link to={'/Travel_insurance'}>Travel Insurance</Link></li>
//                         <li className="list-group-item"><Link to={'/Holidays'}>Holidays</Link></li>
//                         <li className="list-group-item"><Link to={'/Thank_you'}>Thank You</Link></li>
//               </div>
//               {/* end sub-menu */}
//             </div>
//             {/* end list-group */}
//           </div>
//           {/* end main-menu */}
//         </div>
//         {/* end mySidenav */}

//       </div>
//       <Switch>
//           <Route  exact path ='/' component={Index} />
//           <Route path ='/Tour_homepage' component={All_tour} />
//           <Route path ='/Hazadous_sports_tour_homepage' component={All_tour} />
//           <Route path ='/Cruise_homepage' component={All_tour} />
//           <Route path ='/Sport_Homepage' component={All_tour} />
//           <Route path ='/Blog_homepage' component={Blog_detail} />
//           <Route path ='/Login' component={Login} />
//           <Route path ='/Registration' component={Registration} />
//           <Route path ='/Forgot_password' component={Forgot_password} />
//           <Route path ='/Contact_us' component={Contact_us} />
//           <Route path ='/About_us' component={About_us} />
//           <Route path ='/Before_you_fly' component={Before_fly} />
//           <Route path ='/Travel_insurance' component={Travel_insurance} />
//           <Route path ='/Holidays' component={Holiday} />
//           <Route path ='/Dashboard' component={Error_page} />
//           <Route path ='/Wishlist' component={Error_page} />
//           <Route path ='/Coming_soon' component={Error_page} />
//           <Route path ='/Cards' component={Error_page} />
//           <Route path ='/Booking' component={Error_page} />
//           <Route path ='/User_profile' component={Error_page} />
//           <Route path ='/Thank_you' component={Thank_you} />
//           <Route path ='/Error_page' component={Error_page} />
//     </Switch>
//       </Router>
//       );

//   }
// }
// export default Menunu;