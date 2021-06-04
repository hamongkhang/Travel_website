import React, {Component} from 'react';

class Menu extends Component{
  render(){
    return(
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
                <li className="active"><a href="index.php">Main Homepage</a></li>
                <li><a href="cruise-homepage.php">Tour Homepage</a></li>
                <li><a href="capital.js">Cruise Homepage</a></li>
                <li><a href="cruise-homepage.php">Harzadous Sports Tour Homepage</a></li>
                <li><a href="blog-listing-right-sidebar.php">Blog Homepage</a></li>
              </ul>
            </li>
            <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown">Account<span><i className="fa fa-angle-down" /></span></a>
              <ul className="dropdown-menu">
                <li><a href="login.php">Login Homepage</a></li>
                <li><a href="registration.php">Registration Homepage</a></li>
                <li><a href="forgot-password.php">Forgot Password Homepage</a></li>
              </ul>
            </li>
            <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown">Blogs<span><i className="fa fa-angle-down" /></span></a>
              <ul className="dropdown-menu">
                <li><a href="blog-listing-right-sidebar.php">Blog Homepage</a></li>
                <li><a href="about-us.php">About Us</a></li>
                <li><a href="contact-us.php">Contact Us</a></li>
                <li><a href="#">Coming Soon</a></li>
              </ul>
            </li>
            <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown">Tours<span><i className="fa fa-angle-down" /></span></a>
              <ul className="dropdown-menu">
                <li><a href="cruise-homepage.php">Tour Homepage</a></li>
                <li><a href="before-you-fly.php">Before You Fly</a></li>
                <li><a href="travel-insurance.php">Travel insurance</a></li>
                <li><a href="holidays.php">Holidays</a></li>
              </ul>
            </li>
            <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown">Cruise<span><i className="fa fa-angle-down" /></span></a>
              <ul className="dropdown-menu">
                <li><a href="cruise-homepage.php">Cruise Homepage</a></li>
                <li><a href="before-you-fly.php">Before You Fly</a></li>
                <li><a href="travel-insurance.php">Travel insurance</a></li>
                <li><a href="holidays.php">Holidays</a></li>
              </ul>
            </li>
            <li className="dropdown"><a href="#" className="dropdown-toggle" data-toggle="dropdown">Pages<span><i className="fa fa-angle-down" /></span></a>
              <ul className="dropdown-menu mega-dropdown-menu row">
                <li>
                  <div className="row">
                    <div className="col-md-3">
                      <ul className="list-unstyled">
                        <li className="dropdown-header">Standard <span>Pages</span></li>
                        <li><a href="about-us.php">About Us</a></li>
                        <li><a href="contact-us.php">Contact Us</a></li>
                        <li><a href="blog-listing-right-sidebar.php">Blog Listing Right Sidebar</a></li>
                        <li><a href="blog-detail-right-sidebar.php">Blog Detail Right Sidebar</a></li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <ul className="list-unstyled">
                        <li className="dropdown-header">User <span>Dashboard</span></li>
                        <li><a href="error-page.php">Dashboard</a></li>
                        <li><a href="error-page.php">User Profile</a></li>
                        <li><a href="error-page.php">Booking</a></li>
                        <li><a href="error-page.php">Wishlist</a></li>
                        <li><a href="error-page.php">Cards</a></li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <ul className="list-unstyled">
                        <li className="dropdown-header">Special <span>Pages</span></li>
                        <li><a href="logout.php">Login</a></li>
                        <li><a href="registration.php">Registration</a></li>
                        <li><a href="forgot-password.php">Forgot Password</a></li>
                        <li><a href="error-page.php">404 Page</a></li>
                        <li><a href="#">Coming Soon</a></li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <ul className="list-unstyled">
                        <li className="dropdown-header">Extra <span>Pages</span></li>
                        <li><a href="before-you-fly.php">Before Fly</a></li>
                        <li><a href="travel-insurance.php">Travel Insurance</a></li>
                        <li><a href="holidays.php">Holidays</a></li>
                        <li><a href="thank-you.php">Thank You</a></li>
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
      {/* end container */}
    </nav>
      );
  }
}
export default Menu;