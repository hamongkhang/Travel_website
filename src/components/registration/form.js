import React,{Component} from 'react';
import { useContext, useState } from "react";
import { AppContext } from "../../Context";
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Login from '../login/login';
import Index from '../index/index';
import Registration from '../registration/registration';

const Form = () => {
      const [newSignup, setNewSignup] = useState({});
      const [newSignup2, setNewSignup2] = useState({});
  const {
    signup,
    signupAdd,
    code
  } = useContext(AppContext);

    const addSignup = (event) => {
    const target=event.target;
    const field =target.name;
    const value=target.value;
    setNewSignup({
      ...newSignup,
      [field]: value,
    });
  };
  const add2Signup = (event) => {
    const target=event.target;
    const field =target.name;
    const value=target.value;
    setNewSignup2({
      ...signup[0],
      [field]: value,
    });
  };
  const signupSubmit = (e) => {
    console.log(newSignup2);
    signupAdd(newSignup2);
  };
  const addCode=(e)=>{
    code(newSignup);
  }
  let dem=0;
  {signup.map((item)=>{
    dem=dem+1;
  })}
  if (dem===0){
        return(
          <section className="innerpage-wrapper">
            <div id="registration" className="innerpage-section-padding">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="flex-content">
                      <div className="custom-form custom-form-fields">
                        <h3>Registration</h3>
                        <p>Welcome to Starttravel. Your informations will be secured carefully. Please fill informations fully. Contact us if you get any problems.</p>
                        <form  className="insertForm" onSubmit={addCode}>
                          <div className="form-group">
                            <input type="text" className="form-control" onChange={(event) => addSignup(event)} placeholder="Username" id="user" name="user" required />
                            <span><i className="fa fa-user" /></span>
                          </div>
                          <div className="form-group">
                            <input type="email" className="form-control" onChange={(event) => addSignup(event)} placeholder="Email" id="email" name="email" required />
                            <span><i className="fa fa-envelope" /></span>
                          </div>
                          <div className="form-group">
                            <input type="password" className="form-control" onChange={(event) => addSignup(event)} placeholder="Password" id="pass" name="pass" required />
                            <span><i className="fa fa-lock" /></span>
                          </div>
                          <div className="form-group">
                            <input type="password" className="form-control" onChange={(event) => addSignup(event)} id="repass" placeholder="Confirm Password" name="repass" required />
                            <span><i className="fa fa-lock" /></span>
                          </div>
                          <button type="submit" className="btn btn-orange btn-block" id="register" name="register" defaultValue="Register" >Register</button>
                        </form>
                        <div className="other-links">
                          <p className="link-line">Already Have An Account ? <a href="login.php">Login Here</a></p>
                        </div>
                        {/* end other-links */}
                      </div>
                      {/* end custom-form */}
                      <div className="flex-content-img custom-form-img">
                        <img src="images/Ngam_nhung_hinh_anh_tuyet_dep_ve_Viet_Nam_tren_bao_Anh_15.jpg" className="img-responsive" alt="registration-img" />
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
            {/* end registration */}
          </section>
        );}
        else{
          return(
            <section className="innerpage-wrapper">
              <div id="registration" className="innerpage-section-padding">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="flex-content">
                        <div className="custom-form custom-form-fields">
                          <h3>Registration</h3>
                          <p>Welcome to Starttravel. Your informations will be secured carefully. Please fill informations fully. Contact us if you get any problems.</p>
                          {signup.map((item) => {
                            return(
                          <form  className="insertForm" onSubmit={signupSubmit}>
                            <div className="form-group">
                              <input type="text" className="form-control"  value={item.user} id="user" name="account_user"  />
                              <span><i className="fa fa-user" /></span>
                            </div>
                            <div className="form-group">
                              <input type="email" className="form-control"  value={item.email} id="email" name="account_email"  />
                              <span><i className="fa fa-envelope" /></span>
                            </div>
                            <div className="form-group">
                              <input type="password" className="form-control"  value={item.pass} id="pass" name="account_pass"  />
                              <span><i className="fa fa-lock" /></span>
                            </div>
                            <div className="form-group">
                              <input type="password" className="form-control"  id="repass" value={item.repass} name="repass"  />
                              <span><i className="fa fa-lock" /></span>
                            </div> 
                             <div className="form-group">
                              <input type="text" className="form-control" id="numberr" placeholder="Codes" name="account_code" onChange={(event) => add2Signup(event)} />
                            </div> 
                            <input type="submit" className="btn btn-orange btn-block" id="submi" name="submit2" defaultValue="Submit" />
                          </form>
                            );})}
                          <div className="other-links">
                            <p className="link-line">Already Have An Account ? <a href="login.php">Login Here</a></p>
                          </div>
                          {/* end other-links */}
                        </div>
                        {/* end custom-form */}
                        <div className="flex-content-img custom-form-img">
                          <img src="images/Ngam_nhung_hinh_anh_tuyet_dep_ve_Viet_Nam_tren_bao_Anh_15.jpg" className="img-responsive" alt="registration-img" />
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
              {/* end registration */}
            </section>
          );
        }
    }
export default Form;