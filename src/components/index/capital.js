import React, {Component} from 'react';

class Capital extends Component{
  render(){
    return(
      <section id="vehicle-offers" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="page-heading">
                <h2>Capital tour</h2>
                <hr className="heading-line" />
              </div>
              {/* end page-heading */}
              {/*?php
                  $tourCapital = new tourCapital();
                  $sql = "select * from tour_capital";
                  $rows = $tourCapital-*/}fetch($sql);
              if (!empty($rows)) {'{'}
              foreach ($rows as $row) {'{'}
              $id_capital = $row['id_capital'];
              $name_capital = $row['name_capital'];
              $img_capital = $row['img_capital'];
              $price_capital = $row['price_capital'];
              $detail_capital = $row['detail_capital'];
              $from_to_capital = $row['from_to_capital'];
              echo
              '<div className="modal fade" id="myModalCapital' . $id_capital . '" role="dialog">
                <div className="modal-dialog modal-dialog-centered">
                  {/* Modal content*/}
                  <div className="modal-content">
                    <div className="modal-header">
                      <button type="button" className="close" data-dismiss="modal">×</button>
                      <div className="row g-0">
                        <div className="col-md-8">
                          <img src="images/' . $img_capital . '" alt="" style={{width: '350px', height: '260px'}} />
                        </div>
                        <div className="col-md-4">
                          <div className="card-body">
                            <h5 className="card-title">' . $name_capital . '</h5>
                            <p className="card-text">' . $detail_capital . '</p>
                            <p className="card-text">From: ' . $from_to_capital . '</p>
                            <p className="card-text"><medium className="text-muted"><b>$' . $price_capital . '</b></medium></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                      <a href="booking_capital.php?id=' . $id_capital . '"><button type="button" className="btn btn-primary" onclick>Add to cart</button></a>
                    </div>
                  </div>
                </div>
              </div>';
              {'}'}
              {'}'}
              ?&gt;
              <div className="row">
                {/*?php
                      if (!empty($rows)) {
                          foreach ($rows as $row) {
                              $id_capital = $row['id_capital'];
                              $name_capital = $row['name_capital'];
                              $img_capital = $row['img_capital'];
                              $price_capital = $row['price_capital'];
                              $detail_capital = $row['detail_capital'];
                              $from_to_capital = $row['from_to_capital'];
                              echo "<div class='col-sm-6 col-md-4'*/}
                <div className="main-block vehicle-block">
                  <div className="main-img vehicle-img">
                    <a href="#"><img src="images/$img_capital" className="img-responsive" alt="tour-img" /></a>
                    <div className="vehicle-time"><p><span><i className="fa fa-clock-o" /></span>22/h</p></div>
                  </div>
                  <div className="offer-price-2">
                    <ul className="list-unstyled">
                      <li className="price">$price_capital<a data-toggle="modal" data-target="#myModalCapital$id_capital"><span className="arrow"><i className="fa fa-angle-right" /></span></a></li>
                    </ul>
                  </div>
                  <div className="main-info vehicle-info">
                    <div className="main-title vehicle-title">
                      <a href="#"> $name_capital</a>
                      <p>Ha Noi</p>
                      <div className="rating">
                        <span><i className="fa fa-star orange" /></span>
                        <span><i className="fa fa-star orange" /></span>
                        <span><i className="fa fa-star orange" /></span>
                        <span><i className="fa fa-star orange" /></span>
                        <span><i className="fa fa-star lightgrey" /></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              ";
              {'}'}
              {'}'}
              ?&gt;
            </div>
            {/* end row */}
            <div className="view-all text-center">
              <a href="cruise-homepage.php" className="btn btn-orange">View All</a>
            </div>
            {/* end view-all */}
          </div>
          {/* end columns */}
        </div>
        {/* end row */}
        {/* end container */}
      </section>
);
}
}
export default Capital;