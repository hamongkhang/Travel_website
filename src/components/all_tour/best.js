import React,{Component} from 'react';

class Best extends Component{
  render(){
    return(
        <section id="cruise-capital-banner">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 cruise-capital-img text-center">
              <img src="images/ĐN - Copy.jpg" className="img-responsive" alt="capital-img" />
            </div>
            {/* end columns */}
            <div className="col-sm-6 cruise-capital-text">
              <h2>Best capital</h2>
              <h3 className="cruise-tour">Da Nang Boat Tour</h3>
              <p className="cruise-capital-dur">7 Nights, 6 Days</p>
              <p className="cruise-capital-price">From $1,441</p>
              <a href="cruise-detail-right-sidebar.php" className="btn btn-black">Booking</a>
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
export default Best;