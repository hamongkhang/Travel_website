import { useContext, useState } from "react";
import { AppContext } from "../Context";


const Admincart = () => {
  //Tour Hot
  const link="images/";
  const {
    cart,
    addCart,
    huyCart
  } = useContext(AppContext);

  const addCartcart = (id) => {
    if (window.confirm("Are you sure?")) {
      addCart(id);
    }
  };
  const huyCartcart =(id) =>{
    if (window.confirm("Are you sure?")){
      huyCart(id);
    }
  }

  return(
    <div className="container">
              <div className="card-header py-3" data-toggle="modal">
                <button id="add_hot" className="btn btn-primary">CART</button>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                    <thead>
                      <tr>
                        <th>ID_Account</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Check_In</th>
                        <th>Check_Out</th>
                        <th>Adults</th>
                        <th>Image_Tour</th>
                        <th>Name_Tour</th>
                        <th>Price_Tour</th>
                        <th>Status</th>
                        <th>Set</th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
      {cart.map(({ id_cart,id_account,id_tour,image_tour,name_tour,price_tour,from_to,check_in,check_out,adults,phone,address,status, isEditing }) => {
  return status === "Confirmed" ? (
    <tr key={id_cart}>
    <td>{id_account}</td>
    <td>{phone}</td>
    <td>{address}</td>
    <td>{check_in}</td>
    <td>{check_out}</td>
    <td>{adults}</td>
    <td><img src={link+image_tour} height={200} width={250} /></td>
    <td>{name_tour}</td>
    <td>{price_tour}</td>
    <td>{status}</td>
    <td><button className="btn btn-success bt">CONFIRMED</button></td>
    </tr> 
  ) : (
    <tr key={id_cart}>
    <td>{id_account}</td>
    <td>{phone}</td>
    <td>{address}</td>
    <td>{check_in}</td>
    <td>{check_out}</td>
    <td>{adults}</td>
    <td><img src={link+image_tour} height={200} width={250} /></td>
    <td>{name_tour}</td>
    <td>{price_tour}</td>
    <td>{status}</td>
    <td><button onClick={() => addCartcart(id_cart)} className="btn btn-success bt">CONFIRM</button>
    <button onClick={() => huyCartcart(id_cart)} className="btn btn-warning"> CANCEL  </button></td>
    </tr> 
  )
})}
</tbody>
</table>
</div>
</div>
</div>
);
    };
export default Admincart;

        
          