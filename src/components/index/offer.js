import React, {Component} from 'react';

class Offer extends Component{
  render(){
    return(
<section id="tour-offers" className="section-padding">
<div className="container">
  {/*?php
  $tourOffer = new tourOffer();
  $sql = "select * from tour_offer";
  $rows = $tourOffer-*/}fetch($sql);
  if (!empty($rows)) {'{'}
  foreach ($rows as $row) {'{'}
  $id_offer = $row['id_offer'];
  $name_offer = $row['name_offer'];
  $img_offer = $row['img_offer'];
  $price_offer = $row['price_offer'];
  $detail_offer = $row['detail_offer'];
  $from_to_offer = $row['from_to_offer'];
  echo
  '<div className="modal fade" id="myModalOffer' . $id_offer . '" role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      {/* Modal content*/}
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">×</button>
          <div className="row g-0">
            <div className="col-md-8">
              <img src="images/' . $img_offer . '" alt="" style={{width: '350px', height: '260px'}} />
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title">' . $name_offer . '</h5>
                <p className="card-text">' . $detail_offer . '</p>
                <p className="card-text">From: ' . $from_to_offer . '</p>
                <p className="card-text"><medium className="text-muted"><b>$' . $price_offer . '</b></medium></p>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <a href="booking_offer.php?id=' . $id_offer . '"><button type="button" className="btn btn-primary" onclick>Add to cart</button></a>
        </div>
      </div>
    </div>
  </div>';
  {'}'}
  {'}'}
  ?&gt;
  <div className="row">
    <div className="col-sm-12">
      <div className="page-heading">
        <h2>Tour Offers</h2>
        <hr className="heading-line" />
      </div>
      {/* end page-heading */}
      <div className="owl-carousel owl-theme owl-custom-arrow" id="owl-tour-offers">
        {/*?php
              $rows = $tourOffer-*/}fetch($sql);
        if (!empty($rows)) {'{'}
        foreach ($rows as $row) {'{'}
        $id_offer = $row['id_offer'];
        $name_offer = $row['name_offer'];
        $img_offer = $row['img_offer'];
        $price_offer = $row['price_offer'];
        $detail_offer = $row['detail_offer'];
        $from_to_offer = $row['from_to_offer'];
        echo "<div className="item">
          <div className="main-block hotel-block">
            <div className="main-img">
              <a href="#"><img src="images/$img_offer" className="img-responsive" alt="hotel-img" /></a>
              <div className="main-mask">
                <ul className="list-unstyled list-inline offer-price-1">
                  <li className="price">$price_offer<span className="divider">|</span><span className="pkg">Avg/Week</span></li>
                  <li className="rating">
                    <span><i className="fa fa-star orange" /></span>
                    <span><i className="fa fa-star orange" /></span>
                    <span><i className="fa fa-star orange" /></span>
                    <span><i className="fa fa-star orange" /></span>
                    <span><i className="fa fa-star lightgrey" /></span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="main-info hotel-info">
              <div className="arrow">
                <div data-toggle="modal" data-target="#myModalOffer$id_offer"><i className="fa fa-angle-right" /></div>
              </div>
              <div className="main-title hotel-title">
                <a href='#'> $name_offer</a>
                <p>From: $from_to_offer</p>
              </div>
            </div>
          </div>
        </div>
        ";
        {'}'}
        {'}'}
        ?&gt;
      </div>
      {/* end owl-tour-offers */}
      <div className="view-all text-center">
        <a href="cruise-homepage.php" className="btn btn-orange">View All</a>
      </div>
      {/* end view-all */}
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
          export default Offer;