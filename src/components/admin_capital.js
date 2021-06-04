import { useContext, useState } from "react";
import { AppContext } from "../Context";


const Admincapital = () => {
  //Tour Hot
  const [newCapital, setNewCapital] = useState({});
  const [newDataCapital, setNewDataCapital] = useState({});
  const link="images/";
  const {
    addCapital,
    tourcapital,
    deleteCapital,
    updateCapital,
    cancelEditCapital,
    editModeCapital
  } = useContext(AppContext);

  const addFileCapital = (event) => {
    const target=event.target;
    const field =target.name;
    console.log(event.target.files[0].name);
    setNewCapital({
      ...newCapital,
      [field]: event.target.files[0].name,
    });
  };

  const addNewCapital = (event) => {
    const target=event.target;
    const field =target.name;
    const value=target.value;
    setNewCapital({
      ...newCapital,
      [field]: value,
    });
  };

  const addTourCapital = (e) => {
    e.preventDefault();
    addCapital(newCapital);
    e.target.reset();
  };

  const deleteTourCapital = (id) => {
    if (window.confirm("Are you sure?")) {
      deleteCapital(id);
    }
  };

  const saveBtnCapital = () => {
    updateCapital(newDataCapital);
  };

  const updateNewDataCapital = (event) => {
    const target=event.target;
    const field =target.name;
    const value=target.value;
    setNewDataCapital({
      ...newDataCapital,
      [field]: value,
    });
  };

  const updateNewFileCapital = (event) => {
    const target=event.target;
    const field =target.name;
    console.log(event.target.files[0].name);
    setNewDataCapital({
      ...newDataCapital,
      [field]: event.target.files[0].name,
    });
  };

  const Edit = (id_capital, name_capital, img_capital, price_capital, detail_capital,from_to_capital) => {
    setNewDataCapital({ id_capital, name_capital, img_capital, price_capital, detail_capital,from_to_capital });
    editModeCapital(id_capital);
  };
  

  return(
    <div className="container">
              <div className="card-header py-3" data-toggle="modal" data-target="#Modal_hot">
                <button id="add_hot" className="btn btn-primary">Add Capital</button>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                    <thead>
                      <tr>
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
      {tourcapital.map(({ id_capital, name_capital, img_capital, price_capital, detail_capital,from_to_capital, isEditing }) => {
  return isEditing === true ? (
    <tr key={id_capital}>
  
    <td> 
        <input
          type="text"
          name="name_capital"
          defaultValue={name_capital}
          onChange={(event) => updateNewDataCapital(event)}
        />
      </td>
    <td>  <input
          type="file"
          name="img_capital"
          onChange={(event) => updateNewFileCapital(event)}
        /></td>
    <td><input
       type="text"
       name="price_capital"
       defaultValue={price_capital}
       onChange={(event) => updateNewDataCapital(event)}
       /></td>
    <td> <input
          type="text"
          name="detail_capital"
          defaultValue={detail_capital}
          onChange={(event) => updateNewDataCapital(event)}
        /></td>
    <td> <input
          type="text"
          name="from_to_capital"
          defaultValue={from_to_capital}
          onChange={(event) => updateNewDataCapital(event)}
        /></td>
    <td><button onClick={() => saveBtnCapital()} className="btn btn-success bt">SAVE</button></td>
    <td><button onClick={() => cancelEditCapital(id_capital)} className="btn btn-success bt">CANCEL</button></td>
    </tr> 
  ) : (
     <tr key={id_capital}>
     <td>{name_capital}</td>
     <td><img src={link+img_capital} height={200} width={250} /></td>
     <td>{price_capital}</td>
     <td>{detail_capital}</td>
     <td>{from_to_capital}</td>
     <td><button onClick={() => Edit(id_capital, name_capital, img_capital, price_capital, detail_capital,from_to_capital)} className="btn btn-success bt">EDIT</button></td>
     <td><button onClick={() => deleteTourCapital(id_capital)} className="btn btn-success bt">DELETE</button></td>
     </tr> 
  )
})}
</tbody>
</table>
</div>
</div>
{/* Tour hot */}
          <div className="modal fade" id="Modal_hot" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel"> Add tour </h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="close">
                      <span aria-hidden="true">× </span>
                    </button>
                  </div>
                  <div className="modal-body">
                  <form className="insertForm" onSubmit={addTourCapital}>
                      <div className="col-12 mt-3">
                        <input type="text" className="form-control"  onChange={(event) => addNewCapital(event)} placeholder="Name" name="name_capital" />
                      </div>
                      <div className="col-12 mt-3">
                        <input type="file" className="form-control" onChange={(event) => addFileCapital(event)} placeholder="Img" name="img_capital" />
                      </div>
                      <div className="col-12 mt-3">
                        <input type="number" className="form-control"  onChange={(event) => addNewCapital(event)} placeholder="Price" name="price_capital" />
                      </div>
                      <div className="col-12 mt-3">
                        <input type="text" className="form-control"   onChange={(event) => addNewCapital(event)} placeholder="From_to" name="from_to_capital" />
                      </div>
                      <div className="col-12 mt-3">
                        <input type="text" className="form-control"   onChange={(event) => addNewCapital(event)} placeholder="Detail" name="detail_capital" />
                      </div>
                      <button type="submit" id="save_hot" className="btn btn-primary" name="save_hot">Save</button>
                    </form></div>
                  <div className="modal-footer">
                   
                    <button type="button" id="Cancle_hot" data-dismiss="modal" className="btn btn-danger">Cancle</button>
                  </div>
                </div>
              </div>
            </div>
            {/* end Hot */}
</div>
);
    };
export default Admincapital;

        
          