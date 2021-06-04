import { useContext, useState } from "react";
import { AppContext } from "../Context";


const Adminsport = () => {
  //Tour Hot
  const [newSport, setNewSport] = useState({});
  const [newDataSport, setNewDataSport] = useState({});
  const link="images/";
  const {
    addSport,
    toursport,
    deleteSport,
    updateSport,
    cancelEditSport,
    editModeSport
  } = useContext(AppContext);

  const addFileSport = (event) => {
    const target=event.target;
    const field =target.name;
    console.log(event.target.files[0].name);
    setNewSport({
      ...newSport,
      [field]: event.target.files[0].name,
    });
  };

  const addNewSport = (event) => {
    const target=event.target;
    const field =target.name;
    const value=target.value;
    setNewSport({
      ...newSport,
      [field]: value,
    });
  };

  const addTourSport = (e) => {
    e.preventDefault();
    addSport(newSport);
    e.target.reset();
  };

  const deleteTourSport = (id) => {
    if (window.confirm("Are you sure?")) {
      deleteSport(id);
    }
  };

  const saveBtnSport = () => {
    updateSport(newDataSport);
  };

  const updateNewDataSport = (event) => {
    const target=event.target;
    const field =target.name;
    const value=target.value;
    setNewDataSport({
      ...newDataSport,
      [field]: value,
    });
  };

  const updateNewFileSport = (event) => {
    const target=event.target;
    const field =target.name;
    console.log(event.target.files[0].name);
    setNewDataSport({
      ...newDataSport,
      [field]: event.target.files[0].name,
    });
  };

  const Edit = (id_sport, name_sport, img_sport, price_sport, detail_sport,from_to_sport) => {
    setNewDataSport({ id_sport, name_sport, img_sport, price_sport, detail_sport,from_to_sport });
    editModeSport(id_sport);
  };
  

  return(
    <div className="container">
              <div className="card-header py-3" data-toggle="modal" data-target="#Modal_hot">
                <button id="add_hot" className="btn btn-primary">Add Sport</button>
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
      {toursport.map(({ id_sport, name_sport, img_sport, price_sport, detail_sport,from_to_sport, isEditing }) => {
  return isEditing === true ? (
    <tr key={id_sport}>
  
    <td> 
        <input
          type="text"
          name="name_sport"
          defaultValue={name_sport}
          onChange={(event) => updateNewDataSport(event)}
        />
      </td>
    <td>  <input
          type="file"
          name="img_sport"
          onChange={(event) => updateNewFileSport(event)}
        /></td>
    <td><input
       type="text"
       name="price_sport"
       defaultValue={price_sport}
       onChange={(event) => updateNewDataSport(event)}
       /></td>
    <td> <input
          type="text"
          name="detail_sport"
          defaultValue={detail_sport}
          onChange={(event) => updateNewDataSport(event)}
        /></td>
    <td> <input
          type="text"
          name="from_to_sport"
          defaultValue={from_to_sport}
          onChange={(event) => updateNewDataSport(event)}
        /></td>
    <td><button onClick={() => saveBtnSport()} className="btn btn-success bt">SAVE</button></td>
    <td><button onClick={() => cancelEditSport(id_sport)} className="btn btn-success bt">CANCEL</button></td>
    </tr> 
  ) : (
     <tr key={id_sport}>
     <td>{name_sport}</td>
     <td><img src={link+img_sport} height={200} width={250} /></td>
     <td>{price_sport}</td>
     <td>{detail_sport}</td>
     <td>{from_to_sport}</td>
     <td><button onClick={() => Edit(id_sport, name_sport, img_sport, price_sport, detail_sport,from_to_sport)} className="btn btn-success bt">EDIT</button></td>
     <td><button onClick={() => deleteTourSport(id_sport)} className="btn btn-success bt">DELETE</button></td>
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
                  <form className="insertForm" onSubmit={addTourSport}>
                      <div className="col-12 mt-3">
                        <input type="text" className="form-control"  onChange={(event) => addNewSport(event)} placeholder="Name" name="name_sport" />
                      </div>
                      <div className="col-12 mt-3">
                        <input type="file" className="form-control" onChange={(event) => addFileSport(event)} placeholder="Img" name="img_sport" />
                      </div>
                      <div className="col-12 mt-3">
                        <input type="number" className="form-control"  onChange={(event) => addNewSport(event)} placeholder="Price" name="price_sport" />
                      </div>
                      <div className="col-12 mt-3">
                        <input type="text" className="form-control"   onChange={(event) => addNewSport(event)} placeholder="From_to" name="from_to_sport" />
                      </div>
                      <div className="col-12 mt-3">
                        <input type="text" className="form-control"   onChange={(event) => addNewSport(event)} placeholder="Detail" name="detail_sport" />
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
export default Adminsport;

        
          