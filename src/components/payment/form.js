import { useContext, useState } from "react";
import { AppContext } from "../../Context";
import {BrowserRouter as Router,Switch,Route,Link,useHistory} from 'react-router-dom';

const Form = () => {
  const {
    cart,
    payment,
    active,
    addPayment
  } = useContext(AppContext);
  const addPay = (name_user,email_user,name_tour,price_tour,from_to,check_in,check_out,adults,phone,address) => {
   addPayment(name_user,email_user,name_tour,price_tour,from_to,check_in,check_out,adults,phone,address);
  };
        return(
            <section className="innerpage-wrapper">
            <div id="login" className="innerpage-section-padding">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                  {payment.map(({ name_user,email_user,id_cart,id_account,id_tour,image_tour,name_tour,price_tour,from_to,check_in,check_out,adults,phone,address,status, isEditing }) => {
                        return status === "Confirmed" ?(
                    <div className="flex-content">
                      <div className="custom-form custom-form-fields">
                        <h3>Payment</h3>
                        
                          <form className="insertForm">
                            <label>Name: </label>
                            <div className="form-group">
                              <input type="text" className="form-control" id="Name" name="Name" value={name_user} required />
                            </div>
                            <label>Phone: </label>
                            <div className="form-group">
                              <input type="text" className="form-control" id="Phone" name="Phone" value={phone} required />
                            </div>
                            <label>Email: </label>
                            <div className="form-group">
                              <input type="text" className="form-control" id="Email" name="Email" value={email_user} required />
                            </div>
                            <label>Address: </label>
                            <div className="form-group">
                              <input type="text" className="form-control" id="Address" name="Address" value={address} required />
                            </div>
                            <label>Check In: </label>
                            <div className="form-group left-icon">
                              <input type="text" className="form-control dpd1" value={check_in} />
                              <i className="fa fa-calendar" />
                            </div>
                            <label>Check Out: </label>
                            <div className="form-group left-icon">
                              <input type="text" className="form-control dpd2" value={check_out} />
                              <i className="fa fa-calendar" />
                            </div>
                            <label>Adults: </label>
                            <div className="form-group left-icon">
                              <input type="number" className="form-control" id="Adults" name="Adults" value={adults} required />
                            </div>
                            </form>
                       
                
                        </div> 
                      <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
                      <div className="form-group">
                            <label>Name_tour: </label>
                            <input type="text" className="form-control" id="Name_tour" name="Name_tour" defaultValue={name_tour} readOnly />
                          </div>
                        <label>From-to: </label>
                        <div className="form-group">
                          <input type="text" className="form-control" id="From_to" name="From_to" defaultValue={from_to} readOnly />
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
                        <label>Price: </label>
                        <div className="form-group">
                          <input type="text" className="form-control" id="Price_tour" name="Price_tour" defaultValue={price_tour} readOnly />
                        </div>
                      </div>
                      <div className="col-xs-4 col-sm-4 col-md-5 col-lg-4">
                        <label />
                      </div>
                      <div className="col-xs-4 col-sm-4 col-md-5 col-lg-4">
                      <button onClick={() => addPay(name_user,email_user,name_tour,price_tour,from_to,check_in,check_out,adults,phone,address)} class="btn btn-orange btn-block" name="pay">Submit</button>
                        <a href="https://sandbox.vnpayment.vn/tryitnow/Home/CreateOrder" class="btn btn-orange btn-block" name="pay">Pay</a>
                      </div>
                      <div className="col-xs-4 col-sm-4 col-md-5 col-lg-4">
                        <label />
                      </div>
                     
                    </div>
                      ):(
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
                  <p>Hi {active[0].activity_name}, Please wait for the admin to check !!!!!!!</p>
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
                      );})}
                  </div>
                  {/* end custom-form */}
                </div>
                {/* end form-content */}
              </div>
              {/* end columns */}
            </div>
            {/* end row */}
            {/* end container */}
            {/* end login */}
          </section>
        );
    }
export default Form;