import React, {Component} from 'react';

class Mail extends Component{
  render(){
    return(
<section id="newsletter-1" className="section-padding back-size newsletter">
<div className="container">
  <div className="row">
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
      <h2>Subscribe Our Newsletter</h2>
      <p>Subscibe to receive our interesting updates</p>
      <form action="email.php" method="post">
        <div className="form-group">
          <div className="input-group">
            <input type="email" name="email" className="form-control input-lg" placeholder="Enter your email address" required />
            <span className="input-group-btn"><button type="submit" className="btn btn-lg"><i className="fa fa-envelope" /></button></span>
          </div>
        </div>
      </form>
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
export default Mail;