import { useContext, useState } from "react";
import { AppContext } from "../../Context";
import {BrowserRouter as Router,Switch,Route,Link,useHistory} from 'react-router-dom';

const Mycart = () => {
  const link="images/";
  const pay="/Payment?id=";
  const {
    cart,
    deleteCart,
    paymen
  } = useContext(AppContext);
  const deleteteCart = (id) => {
    if (window.confirm("Are you sure?")) {
      deleteCart(id);
    }
  };
  const payPay = (id) => {
    if (window.confirm("Are you sure?")) {
      paymen(id);
    }
  };
        return(
          <Route>
            <div className="container">
            <div className="container">
 
                <thead>
                <tr>
                    <td> <Link to={'/Tour_homepage'} className="btn btn-warning" ><i className="fa fa-angle-left" /> CONTINUE BUYING</Link>
                    </td>
                    <th style={{width: '15%'}}><b /></th>
                    <th style={{width: '15%'}}><b /></th>
                    <th style={{width: '15%'}}><b /></th>
                    <th style={{width: '200%'}}><b /></th>
                    <td className="hidden-xs text-center">
                    </td>
                    
                    <td><Link to={'/History'} className="btn btn-success btn-block" >HISTORY <i className="fa fa-angle-right" /></Link>
                    </td>
                  </tr>
                </thead>
          
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                  <thead>
                    <tr>
                      <th>IMAGE</th>
                      <th>NAME</th>
                      <th>FROM_TO</th>
                      <th>PRICE</th>
                      <th>PAY</th>
                      <th>TOOL</th>
                    </tr>
                  </thead>
                  <tbody className="text-center"> 
    
{cart.map(({ id_cart,id_account,id_tour,image_tour,name_tour,price_tour,from_to,check_in,check_out,adults,phone,address,status, isEditing }) => {
  return(
    <tr key={id_cart}>
      <td>
       <img src={link+image_tour} height={200} width={250} />
      </td>
      <td>{name_tour}</td>
      <td>{from_to}</td>
      <td>{price_tour} $</td>  
     
      <td> <Link  to={"/Payment"} onClick={() => payPay(id_cart)} className="btn btn-success bt" >PAY</Link></td>           
      <td><button onClick={() => deleteteCart(id_cart)} className="btn btn-success bt">DELETE</button></td>
    </tr> 
  );})}     
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          </Route>
        );
    }
export default Mycart;