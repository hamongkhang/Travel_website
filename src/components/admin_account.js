import { useContext, useState } from "react";
import { AppContext } from "../Context";


const Adminaccount = () => {
  //Tour Hot
  const {
    account,
    blockAccount,
    addAccount,
  } = useContext(AppContext);


  const blockaccAccount = (id) => {
    if (window.confirm("Are you sure?")) {
      blockAccount(id);
    }
  };
  const addaccAccount = (id) => {
    if (window.confirm("Are you sure?")) {
      addAccount(id);
    }
  };

  

  return(
    <div className="container">
              <div className="card-header py-3" data-toggle="modal">
                <button id="add_hot" className="btn btn-primary">ACCOUNTS</button>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                    <thead>
                      <tr>
                        <th>User_Name</th>
                        <th>User_Password</th>
                        <th>User_Email</th>
                        <th>Status</th>
                        <th>Set</th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
      {account.map(({ account_id,account_name,account_pass,account_email,account_status, isEditing }) => {
  return account_status === "Block" ? (
    <tr key={account_id}>
    <td>{account_name}</td>
    <td>{account_pass}</td>
    <td>{account_email}</td>
    <td>{account_status}</td>
    <td><button onClick={() => addaccAccount(account_id)} className="btn btn-success bt">ADD</button></td>
    </tr> 
  ) : (
     <tr key={account_id}>
     <td>{account_name}</td>
     <td>{account_pass}</td>
     <td>{account_email}</td>
     <td>{account_status}</td>
     <td><button onClick={() => blockaccAccount(account_id)} className="btn btn-success bt">BLOCK</button></td>
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
export default Adminaccount;

        
          