import { useContext, useState } from "react";
import { AppContext } from "../../Context";
import {BrowserRouter as Router,Switch,Route,Link,useHistory} from 'react-router-dom';

const Myhistory = () => {
  const link="images/";
  const {
    history,
    deleteHistory
  } = useContext(AppContext);
  const deleteteHistory = (id) => {
    if (window.confirm("Are you sure?")) {
      deleteHistory(id);
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
                      <th>STATUS</th>
                      <th>TOOL</th>
                    </tr>
                  </thead>
                  <tbody className="text-center"> 
    
{history.map(({ id_history,image_tour,name_tour,price_tour,from_to,status }) => {
  return(
    <tr key={id_history}>
      <td>
       <img src={link+image_tour} height={200} width={250} />
      </td>
      <td>{name_tour}</td>
      <td>{from_to}</td>
      <td>{price_tour} $</td>  
     
      <td> {status}</td>           
      <td><button onClick={() => deleteteHistory(id_history)} className="btn btn-success bt">DELETE</button></td>
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
export default Myhistory;