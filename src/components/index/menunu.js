import React, {Component} from 'react';

class Menunu extends Component{
  render(){
    return(
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
                <a href="logout.php" className="list-group-item">Login Homepage</a>
                <a href="registration.php" className="list-group-item">Registration Homepage</a>
                <a href="forgot-password.php" className="list-group-item">Forgot Password Homepage</a>
              </div>
              {/* end sub-menu */}
              <a href="#tours-links" className="list-group-item" data-toggle="collapse" data-parent="#main-menu"><span><i className="fa fa-globe link-icon" /></span>Blogs<span><i className="fa fa-chevron-down arrow" /></span></a>
              <div className="collapse sub-menu" id="tours-links">
                <a href="blog-listing-right-sidebar.php" className="list-group-item">Blog Homepage</a>
                <a href="about-us.php" className="list-group-item">About Us</a>
                <a href="contact-us.php" className="list-group-item">Contact Us</a>
                <a href="#" className="list-group-item">Comingsoon</a>
              </div>
              {/* end sub-menu */}
              <a href="#cruise-links" className="list-group-item" data-toggle="collapse" data-parent="#main-menu"><span><i className="fa fa-ship link-icon" /></span>Tours<span><i className="fa fa-chevron-down arrow" /></span></a>
              <div className="collapse sub-menu" id="cruise-links">
                <a href="cruise-homepage.php" className="list-group-item">Tour Homepage</a>
                <a href="before-you-fly.php" className="list-group-item">Before You Fly</a>
                <a href="travel-insurance.php" className="list-group-item">Travel insurance</a>
                <a href="holidays.php" className="list-group-item">Holidays</a>
              </div>
              {/* end sub-menu */}
              <a href="#cars-links" className="list-group-item" data-toggle="collapse" data-parent="#main-menu"><span><i className="fa fa-car link-icon" /></span>Cruise<span><i className="fa fa-chevron-down arrow" /></span></a>
              <div className="collapse sub-menu" id="cars-links">
                <a href="cruise-homepage.php" className="list-group-item">Cruise Homepage</a>
                <a href="before-you-fly.php" className="list-group-item">Before You Fly</a>
                <a href="travel-insurance.php" className="list-group-item">Travel insurance</a>
                <a href="holidays.php" className="list-group-item">Holidays</a>
              </div>
              {/* end sub-menu */}
              <a href="#pages-links" className="list-group-item" data-toggle="collapse" data-parent="#main-menu"><span><i className="fa fa-clone link-icon" /></span>Pages<span><i className="fa fa-chevron-down arrow" /></span></a>
              <div className="collapse sub-menu" id="pages-links">
                <div className="list-group-heading list-group-item">Standard <span>Pages</span></div>
                <a href="about-us.php" className="list-group-item">About Us</a>
                <a href="contact-us.php" className="list-group-item">Contact Us</a>
                <a href="blog-listing-right-sidebar.php" className="list-group-item">Blog Listing Right Sidebar</a>
                <a href="blog-detail-right-sidebar.php" className="list-group-item">Blog Detail Right Sidebar</a>
                <div className="list-group-heading list-group-item">User <span>Dashboard</span></div>
                <a href="error-page.php" className="list-group-item">Dashboard</a>
                <a href="error-page.php" className="list-group-item">User Profile</a>
                <a href="error-page.php" className="list-group-item">Booking</a>
                <a href="error-page.php" className="list-group-item">Wishlist</a>
                <a href="error-page.php" className="list-group-item">Cards</a>
                <div className="list-group-heading list-group-item">Special <span>Pages</span></div>
                <a href="logout.php" className="list-group-item">Login</a>
                <a href="registration.php" className="list-group-item">Registration</a>
                <a href="forgot-password.php" className="list-group-item">Forgot Password</a>
                <a href="error-page.php" className="list-group-item">404 Page</a>
                <a href="#" className="list-group-item">Coming Soon</a>
                <div className="list-group-heading list-group-item">Extra <span>Pages</span></div>
                <a href="before-you-fly.php" className="list-group-item">Before Fly</a>
                <a href="travel-insurance.php" className="list-group-item">Travel Insurance</a>
                <a href="holidays.php" className="list-group-item">Holidays</a>
                <a href="thank-you.php" className="list-group-item">Thank You</a>
              </div>
              {/* end sub-menu */}
            </div>
            {/* end list-group */}
          </div>
          {/* end main-menu */}
        </div>
        {/* end mySidenav */}
      </div>);
  }
}
export default Menunu;