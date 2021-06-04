import React, {Component} from 'react';

class Offer extends Component{
  render(){
    return(
 <section id="flight-offers" className="section-padding">
 <div className="container">
   <div className="row">
     <div className="col-sm-12">
       <div className="page-heading">
         <h2>Harzadous sports tour</h2>
         <hr className="heading-line" />
       </div>
       {/* end page-heading */}
       <div className="row">
         {/*?php
               // include ("admin_set.php");
               $tourSport = new tourSport();
               $sql = "select * from tour_sport";
               $rows = $tourSport-*/}fetch($sql);
         if (!empty($rows)) {'{'}
         foreach ($rows as $row) {'{'}
         $id_sport = $row['id_sport'];
         $name_sport = $row['name_sport'];
         $img_sport = $row['img_sport'];
         $price_sport = $row['price_sport'];
         $detail_sport = $row['detail_sport'];
         $from_to_sport = $row['from_to_sport'];
         echo "<div className="col-sm-6 col-md-4">
           <div className="main-block flight-block">
             <a>
               <div className="flight-img">
                 <div data-toggle="modal" data-target="#myModalSport$id_sport"><img src="images/$img_sport" className="img-responsive" alt="flight-img" /></div>
               </div>
               {/* end flight-img */}
               <div className="flight-info">
                 <div className="flight-title">
                   <h3><span className="flight-destination">$name_sport</span>|<span className="flight-type">$name_sport</span></h3>
                 </div>
                 {/* end flight-title */}
                 <div className="flight-timing">
                   <ul className="list-unstyled">
                     <li><span><i className="fa fa-plane" /></span><span className="date">Aug, 02-2017 </span>(8:40 PM)</li>
                     <li><span><i className="fa fa-plane" /></span><span className="date">Aug, 03-2017 </span>(8:40 PM)</li>
                   </ul>
                 </div>
                 {/* end flight-timing */}
                 <ul className="list-unstyled list-inline offer-price-1">
                   <li className="price">$price_sport<span className="pkg">Avg/Person</span></li>
                   <li className="rating">
                     <span><i className="fa fa-star orange" /></span>
                     <span><i className="fa fa-star orange" /></span>
                     <span><i className="fa fa-star orange" /></span>
                     <span><i className="fa fa-star orange" /></span>
                     <span><i className="fa fa-star lightgrey" /></span>
                   </li>
                 </ul>
               </div>
             </a>
           </div>
         </div>
         ";
         {'}'}
         {'}'}
         ?&gt;
       </div>
       {/* end row */}
       {/*?php
           if (!empty($rows)) {
               foreach ($rows as $row) {
                   $id_sport = $row['id_sport'];
                   $name_sport = $row['name_sport'];
                   $img_sport = $row['img_sport'];
                   $price_sport = $row['price_sport'];
                   $detail_sport = $row['detail_sport'];
                   $from_to_sport = $row['from_to_sport'];
                   echo
                   '<div class="modal fade" id="myModalSport' . $id_sport . '" role="dialog"*/}
       <div className="modal-dialog modal-dialog-centered">
         {/* Modal content*/}
         <div className="modal-content">
           <div className="modal-header">
             <button type="button" className="close" data-dismiss="modal">×</button>
             <div className="row g-0">
               <div className="col-md-8">
                 <img src="images/' . $img_sport . '" alt="" style={{width: '350px', height: '260px'}} />
               </div>
               <div className="col-md-4">
                 <div className="card-body">
                   <h5 className="card-title">' . $name_sport . '</h5>
                   <p className="card-text">' . $detail_sport . '</p>
                   <p className="card-text">From: ' . $from_to_sport . '</p>
                   <p className="card-text"><medium className="text-muted"><b>$' . $price_sport . '</b></medium></p>
                 </div>
               </div>
             </div>
           </div>
           <div className="modal-footer">
             <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
             <a href="booking_sport.php?id=' . $id_sport . '"><button type="button" className="btn btn-primary" onclick>Add to cart</button></a>
           </div>
         </div>
       </div>
     </div>';
     {'}'}
     {'}'}
     ?&gt;
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
export default Offer;