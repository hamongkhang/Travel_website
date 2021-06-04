import Page from './page';
import Mycart from './mycart';
import { useContext, useState } from "react";
import {BrowserRouter as Router,Switch,Route,Link,useHistory} from 'react-router-dom';
import { AppContext } from "../../Context";

const Hello = () => {
  const {
    logout,
    active
  } = useContext(AppContext);

        return(
          <Router>
            <div>
            {/*====== LOADER =====*/}
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
            {/* end top-bar */}
            <section className="innerpage-wrapper">
        <div id="dashboard" className="innerpage-section-padding">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="dashboard-heading">
                  <h2>Travel<span>Start</span></h2>
                  <p>Hi {active[0].activity_name}, Welcome to Star Travels!</p>
                  <p>All your trips booked with us will appear here and you'll be able to manage everything!
                  All your trips booked with us will appear here and you'll be able to manage everything!
                  All your trips booked with us will appear here and you'll be able to manage everything!
                  All your trips booked with us will appear here and you'll be able to manage everything!
                  </p>
                </div>
                {/* end dashboard-heading */}
                <div className="dashboard-wrapper">
                  <div className="row">
                   </div>
                </div>
                </div>
                </div>
                </div>
     </div>
      </section>
           
          </div>
        <Switch>
        <Route   path ='/cart2' component={Mycart} />
        
  </Switch>
  </Router>
       );
    }
export default Hello;