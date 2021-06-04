import { useContext, useState } from "react";
import { AppContext } from "../Context";


const Admincruise = () => {
  //Tour Hot
  const [newCruise, setNewCruise] = useState({});
  const [newDataCruise, setNewDataCruise] = useState({});
  const link="images/";
  const {
    addCruise,
    tourcruise,
    deleteCruise,
    updateCruise,
    cancelEditCruise,
    editModeCruise
  } = useContext(AppContext);

  const addFileCruise = (event) => {
    const target=event.target;
    const field =target.name;
    console.log(event.target.files[0].name);
    setNewCruise({
      ...newCruise,
      [field]: event.target.files[0].name,
    });
  };

  const addNewCruise = (event) => {
    const target=event.target;
    const field =target.name;
    const value=target.value;
    setNewCruise({
      ...newCruise,
      [field]: value,
    });
  };

  const addTourCruise = (e) => {
    e.preventDefault();
    addCruise(newCruise);
    e.target.reset();
  };

  const deleteTourCruise = (id) => {
    if (window.confirm("Are you sure?")) {
      deleteCruise(id);
    }
  };

  const saveBtnCruise = () => {
    updateCruise(newDataCruise);
  };

  const updateNewDataCruise = (event) => {
    const target=event.target;
    const field =target.name;
    const value=target.value;
    setNewDataCruise({
      ...newDataCruise,
      [field]: value,
    });
  };

  const updateNewFileCruise = (event) => {
    const target=event.target;
    const field =target.name;
    console.log(event.target.files[0].name);
    setNewDataCruise({
      ...newDataCruise,
      [field]: event.target.files[0].name,
    });
  };

  const Edit = (id_cruise, name_cruise, img_cruise, price_cruise, detail_cruise,from_to_cruise) => {
    setNewDataCruise({ id_cruise, name_cruise, img_cruise, price_cruise, detail_cruise,from_to_cruise });
    editModeCruise(id_cruise);
  };
  

  return(
    <div className="container">
              <div className="card-header py-3" data-toggle="modal" data-target="#Modal_hot">
                <button id="add_hot" className="btn btn-primary">Add Cruise</button>
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
      {tourcruise.map(({ id_cruise, name_cruise, img_cruise, price_cruise, detail_cruise,from_to_cruise, isEditing }) => {
  return isEditing === true ? (
    <tr key={id_cruise}>
  
    <td> 
        <input
          type="text"
          name="name_cruise"
          defaultValue={name_cruise}
          onChange={(event) => updateNewDataCruise(event)}
        />
      </td>
    <td>  <input
          type="file"
          name="img_cruise"
          onChange={(event) => updateNewFileCruise(event)}
        /></td>
    <td><input
       type="text"
       name="price_cruise"
       defaultValue={price_cruise}
       onChange={(event) => updateNewDataCruise(event)}
       /></td>
    <td> <input
          type="text"
          name="detail_cruise"
          defaultValue={detail_cruise}
          onChange={(event) => updateNewDataCruise(event)}
        /></td>
    <td> <input
          type="text"
          name="from_to_cruise"
          defaultValue={from_to_cruise}
          onChange={(event) => updateNewDataCruise(event)}
        /></td>
    <td><button onClick={() => saveBtnCruise()} className="btn btn-success bt">SAVE</button></td>
    <td><button onClick={() => cancelEditCruise(id_cruise)} className="btn btn-success bt">CANCEL</button></td>
    </tr> 
  ) : (
     <tr key={id_cruise}>
     <td>{name_cruise}</td>
     <td><img src={link+img_cruise} height={200} width={250} /></td>
     <td>{price_cruise}</td>
     <td>{detail_cruise}</td>
     <td>{from_to_cruise}</td>
     <td><button onClick={() => Edit(id_cruise, name_cruise, img_cruise, price_cruise, detail_cruise,from_to_cruise)} className="btn btn-success bt">EDIT</button></td>
     <td><button onClick={() => deleteTourCruise(id_cruise)} className="btn btn-success bt">DELETE</button></td>
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
                  <form className="insertForm" onSubmit={addTourCruise}>
                      <div className="col-12 mt-3">
                        <input type="text" className="form-control"  onChange={(event) => addNewCruise(event)} placeholder="Name" name="name_cruise" />
                      </div>
                      <div className="col-12 mt-3">
                        <input type="file" className="form-control" onChange={(event) => addFileCruise(event)} placeholder="Img" name="img_cruise" />
                      </div>
                      <div className="col-12 mt-3">
                        <input type="number" className="form-control"  onChange={(event) => addNewCruise(event)} placeholder="Price" name="price_cruise" />
                      </div>
                      <div className="col-12 mt-3">
                        <input type="text" className="form-control"   onChange={(event) => addNewCruise(event)} placeholder="From_to" name="from_to_cruise" />
                      </div>
                      <div className="col-12 mt-3">
                        <input type="text" className="form-control"   onChange={(event) => addNewCruise(event)} placeholder="Detail" name="detail_cruise" />
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
export default Admincruise;

        
          