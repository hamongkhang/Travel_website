import React, { Component } from 'react';
import { useContext, useState } from "react";
import { AppContext } from "../Context";
import {BrowserRouter as Router,Switch,Route,Link,useHistory} from 'react-router-dom';

const Header = () => {
  const {
    logout
  } = useContext(AppContext);
  const logoutout = (e) => {
    if (window.confirm("Are you sure?")) {
      logout();
    }
  };
    return (
      <Route>
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
              <li><Link to={'/Login'} type="submit" onClick={(e) => logoutout()}><span><i className="fa fa-sign-out" /></span>Logout</Link></li>
              <li><form>
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
                    
                       <a id="ten2"><span><i className="fa fa-circle blackiconcolor" />ADMIN</span>
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
  </Route>
  );
  }
export default Header;
