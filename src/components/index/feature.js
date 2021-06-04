import React, {Component} from 'react';

class Feature extends Component{
  render(){
    return(
  <section id="best-features" className="banner-padding black-features">
  <div className="container">
    <div className="row">
      <div className="col-sm-6 col-md-3">
        <div className="b-feature-block">
          <span><i className="fa fa-dollar" /></span>
          <h3>Best Price Guarantee</h3>
          <p>Our website brings you the best experiences and services with the most standard price. Our services are approved a resolution by Vietnam Travel Branch.</p>
        </div>
        {/* end b-feature-block */}
      </div>
      {/* end columns */}
      <div className="col-sm-6 col-md-3">
        <div className="b-feature-block">
          <span><i className="fa fa-lock" /></span>
          <h3>Safe and Secure</h3>
          <p>All your personal informations, supported informations will be kept and secured in the best way. Only you and administrators can know. Your informations never have leaked out and lost.</p>
        </div>
        {/* end b-feature-block */}
      </div>
      {/* end columns */}
      <div className="col-sm-6 col-md-3">
        <div className="b-feature-block">
          <span><i className="fa fa-thumbs-up" /></span>
          <h3>Best Travel Agents</h3>
          <p>We have related to the best Travel agency in Vietnam. Supported and admitted by many branches, we have been improving and broading our activities.</p>
        </div>
        {/* end b-feature-block */}
      </div>
      {/* end columns */}
      <div className="col-sm-6 col-md-3">
        <div className="b-feature-block">
          <span><i className="fa fa-bars" /></span>
          <h3>Travel Guidelines</h3>
          <p>All your questions will be replied by administrators and they will help you. We're always side by side and help you about any problems.</p>
        </div>
        {/* end b-feature-block */}
      </div>
      {/* end columns */}
    </div>
    {/* end row */}
  </div>
  {/* end container */}
</section>
);
}
}
export default Feature;