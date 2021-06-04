import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import React,{Component} from 'react';
import Header from './header';
import Menu from './menu_admin';
import Menunu from './menunu_admin';

class Admin extends Component{
  render(){
    return(
      <Router>
        <div>
        {/*======== SEARCH-OVERLAY =========*/}
        <div className="overlay">
          <a href="javascript:void(0)" id="close-button" className="closebtn">×</a>
          <div className="overlay-content">
            <div className="form-center">
              <form>
                <div className="form-group">
                  <div className="input-group">
                    <input type="text" id="search" className="form-control" placeholder="Search..." required />
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
        <Header />
        {/* end top-bar */}
       <Menu />
       <Menunu />
        <div id="content">
          
          <div className="container">
          
            {/* Tour offer */}
            <div className="modal fade" id="Modal_offer" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel"> Add tour </h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="close">
                      <span aria-hidden="true">× </span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form action className="form-row" method="post" encType="multipart/form-data">
                      <div className="col-12 mt-3">
                        <input type="text" className="form-control" id="name_hot" placeholder="Name" name="name_offer" />
                      </div>
                      <div className="col-12 mt-3">
                        <input type="file" className="form-control" id="img_hot" placeholder="Img" name="img_offer" />
                      </div>
                      <div className="col-12 mt-3">
                        <input type="number" className="form-control" id="price_hot" placeholder="Price" name="price_offer" />
                      </div>
                      <div className="col-12 mt-3">
                        <input type="text" className="form-control" id="from_hot" placeholder="From_to" name="fromto_offer" />
                      </div>
                      <div className="col-12 mt-3">
                        <input type="text" className="form-control" id="detail_hot" placeholder="Detail" name="detail_offer" />
                      </div>
                    </form></div>
                  <div className="modal-footer">
                    <button type="submit" id="save_hot" className="btn btn-primary" name="save_hot">Save</button>
                    <button type="button" id="Cancle_hot" data-dismiss="modal" className="btn btn-danger">Cancle</button>
                  </div>
                </div>
              </div>
            </div>
            {/* Cruise offer */}
            <div className="modal fade" id="Modal_cruise" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel"> Add tour </h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="close">
                      <span aria-hidden="true">× </span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form action className="form-row" method="post" encType="multipart/form-data">
                      <div className="col-12 mt-3">
                        <input type="text" className="form-control" id="name_hot" placeholder="Name" name="name_cruise" />
                      </div>
                      <div className="col-12 mt-3">
                        <input type="file" className="form-control" id="img_hot" placeholder="Img" name="img_cruise" />
                      </div>
                      <div className="col-12 mt-3">
                        <input type="number" className="form-control" id="price_hot" placeholder="Price" name="price_cruise" />
                      </div>
                      <div className="col-12 mt-3">
                        <input type="text" className="form-control" id="from_hot" placeholder="From_to" name="fromto_cruise" />
                      </div>
                      <div className="col-12 mt-3">
                        <input type="text" className="form-control" id="detail_hot" placeholder="Detail" name="detail_cruise" />
                      </div>
                    </form></div>
                  <div className="modal-footer">
                    <button type="submit" id="save_hot" className="btn btn-primary" name="save_hot">Save</button>
                    <button type="button" id="Cancle_hot" data-dismiss="modal" className="btn btn-danger">Cancle</button>
                  </div>
                </div>
              </div>
            </div>
            {/* Modal update cruise */}
            {/* end Cruise */}
            {/* Sport */}
            <div className="modal fade" id="Modal_sport" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel"> Add tour </h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="close">
                      <span aria-hidden="true">× </span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form action className="form-row" method="post" encType="multipart/form-data">
                      <div className="col-12 mt-3">
                        <input type="text" className="form-control" id="name_hot" placeholder="Name" name="name_sport" />
                      </div>
                      <div className="col-12 mt-3">
                        <input type="file" className="form-control" id="img_hot" placeholder="Img" name="img_sport" />
                      </div>
                      <div className="col-12 mt-3">
                        <input type="number" className="form-control" id="price_hot" placeholder="Price" name="price_sport" />
                      </div>
                      <div className="col-12 mt-3">
                        <input type="text" className="form-control" id="from_hot" placeholder="From_to" name="fromto_sport" />
                      </div>
                      <div className="col-12 mt-3">
                        <input type="text" className="form-control" id="detail_hot" placeholder="Detail" name="detail_sport" />
                      </div>
                    </form></div>
                  <div className="modal-footer">
                    <button type="submit" id="save_hot" className="btn btn-primary" name="save_hot">Save</button>
                    <button type="button" id="Cancle_hot" data-dismiss="modal" className="btn btn-danger">Cancle</button>
                  </div>
                </div>
              </div>
            </div>
            {/* Tour Capital */}
            <div className="modal fade" id="Modal_capital" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel"> Add tour </h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="close">
                      <span aria-hidden="true">× </span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form action className="form-row" method="post" encType="multipart/form-data">
                      <div className="col-12 mt-3">
                        <input type="text" className="form-control" id="name_hot" placeholder="Name" name="name_capital" />
                      </div>
                      <div className="col-12 mt-3">
                        <input type="file" className="form-control" id="img_hot" placeholder="Img" name="img_capital" />
                      </div>
                      <div className="col-12 mt-3">
                        <input type="number" className="form-control" id="price_hot" placeholder="Price" name="price_capital" />
                      </div>
                      <div className="col-12 mt-3">
                        <input type="text" className="form-control" id="from_hot" placeholder="From_to" name="fromto_capital" />
                      </div>
                      <div className="col-12 mt-3">
                        <input type="text" className="form-control" id="detail_hot" placeholder="Detail" name="detail_capital" />
                      </div>
                    </form></div>
                  <div className="modal-footer">
                    <button type="submit" id="save_hot" className="btn btn-primary" name="save_hot">Save</button>
                    <button type="button" id="Cancle_hot" data-dismiss="modal" className="btn btn-danger">Cancle</button>
                  </div>
                </div>
              </div>
            </div>
            {/* Modal update capital */}
            {/* end Capital */}
            {/* Blogs */}
            <div className="modal fade" id="Modal_blog" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel"> Add blog </h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="close">
                      <span aria-hidden="true">× </span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form action className="form-row" method="post" encType="multipart/form-data">
                      <div className="col-12 mt-3">
                        <input type="file" className="form-control" id="name_hot" placeholder="Image" name="img_blog" />
                      </div>
                      <div className="col-12 mt-3">
                        <input type="text" className="form-control" id="img_hot" placeholder="Author" name="author_blog" />
                      </div>
                      <div className="col-12 mt-3">
                        <input type="text" className="form-control" id="price_hot" placeholder="Time" name="time_blog" />
                      </div>
                      <div className="col-12 mt-3">
                        <input type="text" className="form-control" id="from_hot" placeholder="Title" name="title_blog" />
                      </div>
                      <div className="col-12 mt-3">
                        <input type="text" className="form-control" id="detail_hot" placeholder="Content" name="content_blog" />
                      </div>
                    </form></div>
                  <div className="modal-footer">
                    <button type="submit" id="save_blog" className="btn btn-primary" name="save_blog">Save</button>
                    <button type="button" id="Cancle_hot" data-dismiss="modal" className="btn btn-danger">Cancle</button>
                  </div>
                </div>
              </div>
            </div>
            {/* Modal update blogs */}
            {/* end Blogs */}
        
            {/* Table 2 */}
            <div className="card shadow mb-4" id="hot">
              <div className="card-header py-3" data-toggle="modal" data-target="#Modal_hot">
                <button id="add_hot" className="btn btn-primary">Add Hot</button>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name tour</th>
                        <th>Img</th>
                        <th>Price</th>
                        <th>Detail</th>
                        <th>From-to</th>
                        <th>Edit</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                     <tr>
                        <td>$id_hot</td>
                        <td>$name_hot</td>
                        <td><img src="images/$img_hot" height={200} width={250} /></td>
                        <td>$price_hot</td>
                        <td>$detail_hot</td>
                        <td>$from_to_hot</td>
                        <td><button type="button" className="btn btn-success bt" data-toggle="modal" data-target="#update_hot$id_hot">EDIT</button></td>
                        <td><a href="delete_hot.php?id=$id_hot"><button type="button" className="btn btn-success bt">DELETE</button></a></td>
                      </tr> 
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* end tb2 */}
            {/* Table 3 */}
            <div className="card shadow mb-4" id="offer">
              <div className="card-header py-3" data-toggle="modal" data-target="#Modal_offer">
                <button id="add_offer" className="btn btn-primary">Add Offer</button>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  fetch($sql);
                  if (!empty($rows)) {'{'}
                  foreach ($rows as $row) {'{'}
                  $id_offer = $row['id_offer'];
                  $name_offer = $row['name_offer'];
                  $img_offer = $row['img_offer'];
                  $price_offer = $row['price_offer'];
                  $detail_offer = $row['detail_offer'];
                  $from_to_offer = $row['from_to_offer'];
                  echo $table = "
                  ";
                  echo $modal = " 
                  <div className="modal fade" id="update_offer$id_offer" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel"> Product Updates </h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="close"> 
                            <span aria-hidden="true">× </span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <form action="edit_offer.php" className="form-row" method="post" encType="multipart/form-data" />
                          <div className="col-12 mt-3">
                            <input type="text" className="form-control" id="named_hot" name="id_offer2" defaultValue="$id_offer" readOnly />
                          </div>
                          <div className="col-12 mt-3">
                            <input type="text" className="form-control" id="named_hot" name="name_offer2" defaultValue="$name_offer" />
                          </div>
                          <div className="col-12 mt-3">
                            <input type="file" className="form-control" id="imgd_hot" name="img_offer2" />
                          </div>
                          <div className="col-12 mt-3">
                            <input type="number" className="form-control" id="priced_hot" name="price_offer2" defaultValue="$price_offer" />
                          </div>
                          <div className="col-12 mt-3">
                            <input type="text" className="form-control" id="detaild_hot" name="detail_offer2" defaultValue="$detail_offer" />
                          </div>
                          <div className="col-12 mt-3">
                            <input type="text" className="form-control" id="fromd_hot" name="fromto_offer2" defaultValue="$from_to_offer" />
                          </div>
                          <div className="modal-footer" id="footer">
                            <button type="submit" className="btn btn-success" name>EDIT</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Exit</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>";
                  {'}'}
                  {'}'} ?&gt;
                  <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name tour</th>
                        <th>Img</th>
                        <th>Price</th>
                        <th>Detail</th>
                        <th>From-to</th>
                        <th>Edit</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      {/*?php
                                $sql = "select * from tour_offer";
                                $rows = $tourOffer-*/}<tr>
                        <td>$id_offer</td>
                        <td>$name_offer</td>
                        <td><img src="images/$img_offer" height={200} width={250} /></td>
                        <td>$price_offer</td>
                        <td>$detail_offer</td>
                        <td>$from_to_offer</td>
                        <td><button type="button" className="btn btn-success bt" data-toggle="modal" data-target="#update_offer$id_offer">EDIT</button></td>
                        <td><a href="delete_offer.php?id=$id_offer"><button type="button" className="btn btn-success bt">DELETE</button></a></td>
                      </tr> </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* end tb3 */}
            {/* Table 4 */}
            <div className="card shadow mb-4" id="cruise">
              <div className="card-header py-3" data-toggle="modal" data-target="#Modal_cruise">
                <button id="add_cruise" className="btn btn-primary">Add Cruice</button>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  fetch($sql);
                  if (!empty($rows)) {'{'}
                  foreach ($rows as $row) {'{'}
                  $id_cruise = $row['id_cruise'];
                  $name_cruise = $row['name_cruise'];
                  $img_cruise = $row['img_cruise'];
                  $price_cruise = $row['price_cruise'];
                  $detail_cruise = $row['detail_cruise'];
                  $from_to_cruise = $row['from_to_cruise'];
                  echo $table = "
                  ";
                  echo $modal = " 
                  <div className="modal fade" id="update_cruise$id_cruise" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel"> Product Updates </h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="close"> 
                            <span aria-hidden="true">× </span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <form action="edit_cruise.php" className="form-row" method="post" encType="multipart/form-data" />
                          <div className="col-12 mt-3">
                            <input type="text" className="form-control" id="named_hot" name="id_cruise2" defaultValue="$id_cruise" readOnly />
                          </div>
                          <div className="col-12 mt-3">
                            <input type="text" className="form-control" id="named_hot" name="name_cruise2" defaultValue="$name_cruise" />
                          </div>
                          <div className="col-12 mt-3">
                            <input type="file" className="form-control" id="imgd_hot" name="img_cruise2" />
                          </div>
                          <div className="col-12 mt-3">
                            <input type="number" className="form-control" id="priced_hot" name="price_cruise2" defaultValue="$price_cruise" />
                          </div>
                          <div className="col-12 mt-3">
                            <input type="text" className="form-control" id="detaild_hot" name="detail_cruise2" defaultValue="$detail_cruise" />
                          </div>
                          <div className="col-12 mt-3">
                            <input type="text" className="form-control" id="fromd_hot" name="fromto_cruise2" defaultValue="$from_to_cruise" />
                          </div>    
                          <div className="modal-footer" id="footer">
                            <button type="submit" className="btn btn-success" name>EDIT</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Exit</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>";
                  {'}'}
                  {'}'} ?&gt;
                  <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name tour</th>
                        <th>Img</th>
                        <th>Price</th>
                        <th>Detail</th>
                        <th>From-to</th>
                        <th>Edit</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      {/*?php
                                $sql = "select * from tour_cruise";
                                $rows = $tourCruise-*/}<tr><td>$id_cruise</td>
                        <td>$name_cruise</td>
                        <td><img src="images/$img_cruise" height={200} width={250} /></td>
                        <td>$price_cruise</td>
                        <td>$detail_cruise</td>
                        <td>$from_to_cruise</td>
                        <td><button type="button" className="btn btn-success bt" data-toggle="modal" data-target="#update_cruise$id_cruise">EDIT</button></td>
                        <td><a href="delete_cruise.php?id=$id_cruise"><button type="button" className="btn btn-success bt">DELETE</button></a></td>
                      </tr> </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* end tb4 */}
            {/* Table 5 */}
            <div className="card shadow mb-4" id="capital">
              <div className="card-header py-3" data-toggle="modal" data-target="#Modal_capital">
                <button id="add_offer" className="btn btn-primary">Add Capital</button>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  fetch($sql);
                  if (!empty($rows)) {'{'}
                  foreach ($rows as $row) {'{'}
                  $id_capital = $row['id_capital'];
                  $name_capital = $row['name_capital'];
                  $img_capital = $row['img_capital'];
                  $price_capital = $row['price_capital'];
                  $detail_capital = $row['detail_capital'];
                  $from_to_capital = $row['from_to_capital'];
                  echo $table = "
                  ";
                  echo $modal = " 
                  <div className="modal fade" id="update_capital$id_capital" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel"> Product Updates </h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="close"> 
                            <span aria-hidden="true">× </span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <form action="edit_capital.php" className="form-row" method="post" encType="multipart/form-data" />
                          <div className="col-12 mt-3">
                            <input type="text" className="form-control" id="named_hot" name="id_capital2" defaultValue="$id_capital" readOnly />
                          </div>
                          <div className="col-12 mt-3">
                            <input type="text" className="form-control" id="named_hot" name="name_capital2" defaultValue="$name_capital" />
                          </div>
                          <div className="col-12 mt-3">
                            <input type="file" className="form-control" id="imgd_hot" name="img_capital2" />
                          </div>
                          <div className="col-12 mt-3">
                            <input type="number" className="form-control" id="priced_hot" name="price_capital2" defaultValue="$price_capital" />
                          </div>
                          <div className="col-12 mt-3">
                            <input type="text" className="form-control" id="detaild_hot" name="detail_capital2" defaultValue="$detail_capital" />
                          </div>
                          <div className="col-12 mt-3">
                            <input type="text" className="form-control" id="fromd_hot" name="fromto_capital2" defaultValue="$from_to_capital" />
                          </div>
                          <div className="modal-footer" id="footer">
                            <button type="submit" className="btn btn-success" name>EDIT</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Exit</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>";
                  {'}'}
                  {'}'} ?&gt;
                  <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name tour</th>
                        <th>Img</th>
                        <th>Price</th>
                        <th>Detail</th>
                        <th>From-to</th>
                        <th>Edit</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      {/*?php
                                $sql = "select * from tour_capital";
                                $rows = $tourCapital-*/}<tr><td>$id_capital</td>
                        <td>$name_capital</td>
                        <td><img src="images/$img_capital" height={200} width={250} /></td>
                        <td>$price_capital</td>
                        <td>$detail_capital</td>
                        <td>$from_to_capital</td>
                        <td><button type="button" className="btn btn-success bt" data-toggle="modal" data-target="#update_capital$id_capital">EDIT</button></td>
                        <td><a href="delete_capital.php?id=$id_capital"><button type="button" className="btn btn-success bt">DELETE</button></a></td>
                      </tr> </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* end tb5 */}
            {/* Table 6 */}
            <div className="card shadow mb-4" id="sport">
              <div className="card-header py-3" data-toggle="modal" data-target="#Modal_sport">
                <button id="add_offer" className="btn btn-primary">Add Sport</button>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  fetch($sql);
                  if (!empty($rows)) {'{'}
                  foreach ($rows as $row) {'{'}
                  $id_sport = $row['id_sport'];
                  $name_sport = $row['name_sport'];
                  $img_sport = $row['img_sport'];
                  $price_sport = $row['price_sport'];
                  $detail_sport = $row['detail_sport'];
                  $from_to_sport = $row['from_to_sport'];
                  echo $table = "
                  ";
                  echo $modal = " 
                  <div className="modal fade" id="update_sport$id_sport" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel"> Product Updates </h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="close"> 
                            <span aria-hidden="true">× </span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <form action="edit_sport.php" className="form-row" method="post" encType="multipart/form-data" />
                          <div className="col-12 mt-3">
                            <input type="text" className="form-control" id="named_hot" name="id_sport2" defaultValue="$id_sport" readOnly />
                          </div>
                          <div className="col-12 mt-3">
                            <input type="text" className="form-control" id="named_hot" name="name_sport2" defaultValue="$name_sport" />
                          </div>
                          <div className="col-12 mt-3">
                            <input type="file" className="form-control" id="imgd_hot" name="img_sport2" />
                          </div>
                          <div className="col-12 mt-3">
                            <input type="number" className="form-control" id="priced_hot" name="price_sport2" defaultValue="$price_sport" />
                          </div>
                          <div className="col-12 mt-3">
                            <input type="text" className="form-control" id="detaild_hot" name="detail_sport2" defaultValue="$detail_sport" />
                          </div>
                          <div className="col-12 mt-3">
                            <input type="text" className="form-control" id="fromd_hot" name="fromto_sport2" defaultValue="$from_to_sport" />
                          </div>
                          <div className="modal-footer" id="footer">
                            <button type="submit" className="btn btn-success" name>EDIT</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Exit</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>";
                  {'}'}
                  {'}'} ?&gt;
                  <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name tour</th>
                        <th>Img</th>
                        <th>Price</th>
                        <th>Detail</th>
                        <th>From-to</th>
                        <th>Edit</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      {/*?php
                                $sql = "select * from tour_sport";
                                $rows = $tourSport-*/}<tr><td>$id_sport</td>
                        <td>$name_sport</td>
                        <td><img src="images/$img_sport" height={200} width={250} /></td>
                        <td>$price_sport</td>
                        <td>$detail_sport</td>
                        <td>$from_to_sport</td>
                        <td><button type="button" className="btn btn-success bt" data-toggle="modal" data-target="#update_sport$id_sport">EDIT</button></td>
                        <td><a href="delete_sport.php?id=$id_sport"><button type="button" className="btn btn-success bt">DELETE</button></a></td>
                      </tr> </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* end tb6 */}
            {/* Table 7 */}
            <div className="card shadow mb-4" id="blog">
              <div className="card-header py-3" data-toggle="modal" data-target="#Modal_blog">
                <button id="add_offer" className="btn btn-primary">Add Blog</button>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  fetch($sql);
                  if (!empty($rows)) {'{'}
                  foreach ($rows as $row) {'{'}
                  $id_blog = $row['id_blog'];
                  $author_blog = $row['author_blog'];
                  $time_blog = $row['time_blog'];
                  $content_blog = $row['content_blog'];
                  $title_blog = $row['title_blog'];
                  $img_blog = $row['img_blog'];
                  echo $table = "
                  ";
                  echo $modal = " 
                  <div className="modal fade" id="update_blog$id_blog" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel"> Product Updates </h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="close"> 
                            <span aria-hidden="true">× </span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <form action="edit_blog.php" className="form-row" method="post" encType="multipart/form-data" />
                          <div className="col-12 mt-3">
                            <input type="text" className="form-control" id="named_hot" name="id_blog2" defaultValue="$id_blog" readOnly />
                          </div>
                          <div className="col-12 mt-3">
                            <input type="text" className="form-control" id="named_hot" name="author_blog2" defaultValue="$author_blog" />
                          </div>
                          <div className="col-12 mt-3">
                            <input type="file" className="form-control" id="imgd_hot" name="img_blog2" />
                          </div>
                          <div className="col-12 mt-3">
                            <input type="text" className="form-control" id="priced_hot" name="time_blog2" defaultValue="$time_blog" />
                          </div>
                          <div className="col-12 mt-3">
                            <input type="text" className="form-control" id="detaild_hot" name="title_blog2" defaultValue="$title_blog" />
                          </div>
                          <div className="col-12 mt-3">
                            <input type="text" className="form-control" id="fromd_hot" name="content_blog2" defaultValue="$content_blog" />
                          </div>
                          <div className="modal-footer" id="footer">
                            <button type="submit" className="btn btn-success" name>EDIT</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Exit</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>";
                  {'}'}
                  {'}'} ?&gt;
                  <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Author</th>
                        <th>Img</th>
                        <th>Time</th>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Edit</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      {/*?php
                                $sql = "select * from blog";
                                $rows = $blog-*/}<tr><td>$id_blog</td>
                        <td>$author_blog</td>
                        <td><img src="images/$img_blog" height={200} width={250} /></td>
                        <td>$time_blog</td>
                        <td>$title_blog</td>
                        <td>$content_blog</td>
                        <td><button type="button" className="btn btn-success bt" data-toggle="modal" data-target="#update_blog$id_blog">EDIT</button></td>
                        <td><a href="delete_blog.php?id=$id_blog"><button type="button" className="btn btn-success bt">DELETE</button></a></td>
                      </tr> </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="card shadow mb-4" id="account">
              <div className="card-header py-3" data-toggle="modal">
                <button id="add_offer" className="btn btn-primary">Accounts</button>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  fetch();
                  if (!empty($rows)) {'{'}
                  foreach ($rows as $row) {'{'}
                  $id_account = $row['account_id'];
                  $name_account = $row['account_name'];
                  $pass_account = $row['account_pass'];
                  $email_account = $row['account_email'];
                  $status_account = $row['account_status'];
                  echo $table = "
                  ";
                  {'}'}
                  {'}'}
                  ?&gt;
                  <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>User_Name</th>
                        <th>User_Password</th>
                        <th>User_Email</th>
                        <th>Status</th>
                        <th>Set</th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      {/*?php
                                include("sign_up.php");
                                $account = new account();
                                $rows = $account-*/}<tr><td>$id_account</td>
                        <td>$name_account</td>
                        <td>$pass_account</td>
                        <td>$email_account</td>
                        <td>$status_account</td>
                        <td><a href="block.php?id=$id_account" id="block" className="btn btn-success" onclick="add()">BLOCK</a>
                          <a href="add.php?id=$id_account&email=$email_account" id="add" name="add" className="btn btn-success " onclick="block()">ADD</a></td>
                      </tr></tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="card shadow mb-4" id="cart">
              <div className="card-header py-3" data-toggle="modal">
                <button id="add_offer" className="btn btn-primary">Cart</button>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  ";
                  {'}'}
                  ?&gt;
                  <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                    <thead>
                      <tr>
                        <th>ID ACCOUNT</th>
                        <th>ID TOUR</th>
                        <th>IMAGE</th>
                        <th>NAME</th>
                        <th>PRICE</th>
                        <th>STATUS</th>
                        <th>Set</th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      {/*?php
                            $email=null;
                            $link=new mysqli("localhost","root","","startravel");
                               $queryquery = "select * from cart";
                               $resultresult = mysqli_query($link, $queryquery);
                               $queryquery2 = "select * from activity";
                               $resultresult2 = mysqli_query($link, $queryquery2);
                               while ($rowrow2 = mysqli_fetch_assoc($resultresult2)) {
                                $email = $rowrow2['email'];
                               }
                               while ($rowrow = mysqli_fetch_assoc($resultresult)) {
                                   $id_cart = $rowrow['id_cart'];
                                   $id_account = $rowrow['id_account'];
                                   $id_tour = $rowrow['id_tour'];
                                   $image = $rowrow['image_tour'];
                                   $name = $rowrow['name_tour'];
                                   $price = $rowrow['price_tour'];
                                   $status = $rowrow['status'];
                                   echo $table = "<tr*/}
                      <tr><td>$id_account</td>
                        <td>$id_tour</td>
                        <td><img src="images/$image" height={200} width={250} /></td>
                        <td>$name</td>
                        <td>$price</td>
                        <td>$status</td>
                        <td><a href="add_tour.php?id=$id_cart&id_account=$id_account" id="add" name="add" className="btn btn-success " onclick="block()">ADD</a></td>
                      </tr></tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* Logout Modal*/}
            <div className="modal fade" id="logoutModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Are you sure you want to log out?</h5>
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span></button>
                  </div>
                  <div className="modal-footer">
                    <button className="btn btn-secondary" type="button" data-dismiss="modal">Exit</button>
                    <a className="btn btn-primary" href="login.php">Log out</a>
                  </div>
                </div>
              </div>
            </div>
          </div></div></div>
          
      </Router>
    );
  }
}
export default Admin;

