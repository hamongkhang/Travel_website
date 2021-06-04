import React,{Component} from 'react';
import { useContext, useState } from "react";
import { AppContext } from "../../Context";
import {BrowserRouter as Router,Switch,Route,Link,useHistory} from 'react-router-dom';
import Login from '../login/login';
import Index from '../index/index';
import Registration from '../registration/registration';

const Form = () => {
  const history =useHistory();
  const ind=(event)=>{
    history.push('/');
}
  const [newLogin, setNewLogin] = useState({});
  const {
    login,
  } = useContext(AppContext);

  const addLogin = (event) => {
    const target=event.target;
    const field =target.name;
    const value=target.value;
    setNewLogin({
      ...newLogin,
      [field]: value,
    });
  };
  const loginSubmit = (e) => {
    login(newLogin);
    e.target.reset();
  };
        return(
        <Router>
          <section className="innerpage-wrapper">
          <div id="login" className="innerpage-section-padding">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="flex-content">
                    <div className="custom-form custom-form-fields">
                      <h3>Login</h3>
                      <p>Welcome to Starttravel. Your informations will be secured carefully. Please fill informations fully. Contact us if you get any problems.</p>
                      <form className="insertForm" onSubmit={loginSubmit}>
                        <div className="form-group">
                          <input type="text" className="form-control" id="user" name="user" onChange={(event) => addLogin(event)} placeholder="Username" required />
                          <span><i className="fa fa-user" /></span>
                        </div>
                        <div className="form-group">
                          <input type="password" className="form-control" id="pass" name="pass" onChange={(event) => addLogin(event)} placeholder="Password" required />
                          <span><i className="fa fa-lock" /></span>
                        </div>
                        <div className="checkbox">
                          <label><input type="checkbox" /> Remember me</label>
                        </div>
                        <button className="btn btn-orange btn-block" type="submit" name="login">Login</button>
                      
                      </form>
                    
                      <div className="other-links">
                        <p className="link-line">New Here ? <a href="registration.php">Signup</a></p>
                        <a className="simple-link" href="forgot-password.php">Forgot Password ?</a>
                      </div>
                      {/* end other-links */}
                    </div>
                    {/* end custom-form */}
                    <div className="flex-content-img custom-form-img">
                      <img src="images/ve-dep-viet-nam-vnexpress-2-1584434502.jpg" className="img-responsive" alt="registration-img" />
                    </div>
                    {/* end custom-form-img */}
                  </div>
                  {/* end form-content */}
                </div>
                {/* end columns */}
              </div>
              {/* end row */}
            </div>
            {/* end container */}
          </div>
          {/* end login */}
        </section> 
        <Switch>
          <Route  exact path ='/Cart' component={Index} />
    </Switch>
        </Router>
        );
    }
export default Form;