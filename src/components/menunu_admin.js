import React, {Component} from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';

class Menunu extends Component{
  render(){
    return(
      <Router>
      <div className="sidenav-content">
      <div id="mySidenav" className="sidenav">
      <Link to={'/'} className="navbar-brand"><span><i className="fa fa-plane" />START</span>TRAVELS</Link>
        <div id="main-menu">
          <div className="closebtn">
            <button className="btn btn-default" id="closebtn">×</button>
          </div>
          {/* end close-btn */}
          <div className="list-group panel">
            <a href="#hotels-links" className="list-group-item" data-toggle="collapse" data-parent="#main-menu"><span><i className="fa fa-home link-icon" /></span>Home<span><i className="fa fa-chevron-down arrow" /></span></a>
            <div className="collapse sub-menu" id="hotels-links">
              <Link className="list-group-item" to={'/All_tour'}>All tour</Link>
              <a className="list-group-item"><Link to={'/Tour_hots'}>Tour hot</Link></a>
              <a className="list-group-item"><Link to={'/Tour_offers'}>Tour offer</Link></a>
              <a className="list-group-item"><Link to={'/Tour_cruises'}>Cruise Offers</Link></a>
              <a className="list-group-item"><Link to={'/Tour_sports'}>Harzadous Sports Tour</Link></a>
              <a className="list-group-item"><Link to={'/Tour_capitals'}>Capital Tour</Link></a>
              <a className="list-group-item"><Link to={'/Blogs'}>Our Latest Blogs</Link></a>
              <a className="list-group-item"><Link to={'/Accounts'}>Accounts</Link></a>
              <a className="list-group-item"><Link to={'/Cart'}>Cart</Link></a>
              <a className="list-group-item"><Link to={'/'}>Exit</Link></a>
            </div>
          </div>
          {/* end list-group */}
        </div>
       
        {/* end main-menu */}
      </div>
      {/* end mySidenav */}
    </div>
    </Router>
    );
  }
}
export default Menunu;