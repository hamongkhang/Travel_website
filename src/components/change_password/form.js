import React,{Component} from 'react';
import { useContext, useState } from "react";
import { AppContext } from "../../Context";


const Form = () => {
  const [newChange, setNewChange] = useState({});
  const {
   changePassword
  } = useContext(AppContext);

  const addChange = (event) => {
    const target=event.target;
    const field =target.name;
    const value=target.value;
    setNewChange({
      ...newChange,
      [field]: value,
    });
  };

  const addddChange = (e) => {
    e.preventDefault();
    changePassword(newChange);
    e.target.reset();
  };
        return(
          <section className="innerpage-wrapper">
          <div id="forgot-password" className="innerpage-section-padding">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="flex-content">
                    <div className="custom-form custom-form-fields">
                      <h3>Change Password</h3>
                      <p>When you fill in your registered email address, you will be sent instructions on how to reset your password.</p>
                      <form className="insertForm" onSubmit={addddChange}>
                        <div className="form-group">
                          <input type="text" className="form-control" onChange={(event) => addChange(event)} placeholder="Your User Name" id="user" name="user" required />
                          <span><i className="fa fa-user" /></span>
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" onChange={(event) => addChange(event)} placeholder="Your Email" id="email" name="email" required />
                          <span><i className="fa fa-envelope" /></span>
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" onChange={(event) => addChange(event)} placeholder="Your Old Password" id="user" name="oldpass" required />
                          <span><i className="fa fa-envelope" /></span>
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" onChange={(event) => addChange(event)} placeholder="Your New Password" id="user" name="newpass" required />
                          <span><i className="fa fa-envelope" /></span>
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control" onChange={(event) => addChange(event)} placeholder="Confirm Your Old Password" id="user" name="newpass2" required />
                          <span><i className="fa fa-envelope" /></span>
                        </div>
                        <input type="submit" className="btn btn-orange btn-block" id="register" placeholder="Register" name="register2" />
                      </form>
                      <div className="other-links">
                        <p className="link-line">Already Have An Account ? <a href="login.php">Login Here</a></p>
                        <p className="link-line">New Here ? <a href="registration.php">Join Us</a></p>
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
          {/* end forgot-password */}
        </section>
              );
    }
export default Form;