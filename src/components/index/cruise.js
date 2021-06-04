import React, {Component} from 'react';

class Cruise extends Component{
  render(){
    return(
 <section id="cruise-offers" className="section-padding">
 <div className="container">
   <div className="row">
     <div className="col-sm-12">
       <div className="page-heading">
         <h2>Cruise Offers</h2>
         <hr className="heading-line" />
       </div>
       {/* end page-heading */}
       <div className="row">
         {/*?php
               // include ("admin_set.php");
               $tourCruise = new tourCruise();
               $sql = "select * from tour_cruise";
               $rows = $tourCruise-*/}fetch($sql);
         if (!empty($rows)) {'{'}
         foreach ($rows as $row) {'{'}
         $id_cruise = $row['id_cruise'];
         $name_cruise = $row['name_cruise'];
         $img_cruise = $row['img_cruise'];
         $price_cruise = $row['price_cruise'];
         $detail_cruise = $row['detail_cruise'];
         $from_to_cruise = $row['from_to_cruise'];
         echo "<div className="col-sm-6 col-md-6">
           <div className="main-block cruise-block">
             <div className="row">
               <div className="col-sm-12 col-md-6 col-md-push-6 no-pd-l">
                 <div className="main-img cruise-img">
                   <a>
                     <div data-toggle="modal" data-target="#myModalCruise$id_cruise"><img src="images/$img_cruise" className="img-responsive" alt="cruise-img" /></div>
                     <div className="cruise-mask">
                       <p>7 Nights, 6 Days</p>
                     </div>
                   </a>
                 </div>
               </div>
               <div className="col-sm-12 col-md-6 col-md-pull-6 no-pd-r">
                 <div className="main-info cruise-info">
                   <div className="main-title cruise-title">
                     <a href="#"> $name_cruise</a>
                     <p>From: $from_to_cruise</p>
                     <div className="rating">
                       <span><i className="fa fa-star orange" /></span>
                       <span><i className="fa fa-star orange" /></span>
                       <span><i className="fa fa-star orange" /></span>
                       <span><i className="fa fa-star orange" /></span>
                       <span><i className="fa fa-star lightgrey" /></span>
                     </div>
                     <span className="cruise-price">$price_cruise</span>
                   </div>
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
       {/*?php
           if (!empty($rows)) {
               foreach ($rows as $row) {
                   $id_cruise = $row['id_cruise'];
                   $name_cruise = $row['name_cruise'];
                   $img_cruise = $row['img_cruise'];
                   $price_cruise = $row['price_cruise'];
                   $detail_cruise = $row['detail_cruise'];
                   $from_to_cruise = $row['from_to_cruise'];
                   echo
                   '<div class="modal fade" id="myModalCruise' . $id_cruise . '" role="dialog"*/}
       <div className="modal-dialog modal-dialog-centered">
         {/* Modal content*/}
         <div className="modal-content">
           <div className="modal-header">
             <button type="button" className="close" data-dismiss="modal">×</button>
             <div className="row g-0">
               <div className="col-md-8">
                 <img src="images/' . $img_cruise . '" alt="" style={{width: '350px', height: '260px'}} />
               </div>
               <div className="col-md-4">
                 <div className="card-body">
                   <h5 className="card-title">' . $name_cruise . '</h5>
                   <p className="card-text">' . $detail_cruise . '</p>
                   <p className="card-text">From: ' . $from_to_cruise . '</p>
                   <p className="card-text"><medium className="text-muted"><b>$' . $price_cruise . '</b></medium></p>
                 </div>
               </div>
             </div>
           </div>
           <div className="modal-footer">
             <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
             <a href="booking_cruise.php?id=' . $id_cruise . '"><button type="button" className="btn btn-primary" onclick>Add to cart</button></a>
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
          export default Cruise;