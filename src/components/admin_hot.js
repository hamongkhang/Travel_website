import { useContext, useState } from "react";
import { AppContext } from "../Context";


const Adminhot = () => {
  //Tour Hot
  const [newHot, setNewHot] = useState({});
  const [newDataHot, setNewDataHot] = useState({});
  const link="images/";
  const {
    addHot,
    tourhot,
    tourhotLength,
    deleteHot,
    updateHot,
    cancelEditHot,
    editModeHot
  } = useContext(AppContext);

  const addFileHot = (event) => {
    const target=event.target;
    const field =target.name;
    console.log(event.target.files[0].name);
    setNewHot({
      ...newHot,
      [field]: event.target.files[0].name,
    });
  };

  const addNewHot = (event) => {
    const target=event.target;
    const field =target.name;
    const value=target.value;
    setNewHot({
      ...newHot,
      [field]: value,
    });
  };

  const addTourHot = (e) => {
    e.preventDefault();
    addHot(newHot);
    e.target.reset();
  };

  const deleteTourHot = (id) => {
    if (window.confirm("Are you sure?")) {
      deleteHot(id);
    }
  };

  const saveBtnHot = () => {
    updateHot(newDataHot);
  };

  const updateNewDataHot = (event) => {
    const target=event.target;
    const field =target.name;
    const value=target.value;
    setNewDataHot({
      ...newDataHot,
      [field]: value,
    });
  };

  const updateNewFileHot = (event) => {
    const target=event.target;
    const field =target.name;
    console.log(event.target.files[0].name);
    setNewDataHot({
      ...newDataHot,
      [field]: event.target.files[0].name,
    });
  };

  const Edit = (id_hot, name_hot, img_hot, price_hot, detail_hot,from_to_hot) => {
    setNewDataHot({ id_hot, name_hot, img_hot, price_hot, detail_hot,from_to_hot });
    editModeHot(id_hot);
  };
  
  //end Tour Hot

  return(
    <div className="container">
              <div className="card-header py-3" data-toggle="modal" data-target="#Modal_hot">
                <button id="add_hot" className="btn btn-primary">Add Hot</button>
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
      {tourhot.map(({ id_hot, name_hot, img_hot, price_hot, detail_hot,from_to_hot, isEditing }) => {
  return isEditing === true ? (
    <tr key={id_hot}>
  
    <td> 
        <input
          type="text"
          name="name_hot"
          defaultValue={name_hot}
          onChange={(event) => updateNewDataHot(event)}
        />
      </td>
    <td>  <input
          type="file"
          name="img_hot"
          onChange={(event) => updateNewFileHot(event)}
        /></td>
    <td><input
       type="text"
       name="price_hot"
       defaultValue={price_hot}
       onChange={(event) => updateNewDataHot(event)}
       /></td>
    <td> <input
          type="text"
          name="detail_hot"
          defaultValue={detail_hot}
          onChange={(event) => updateNewDataHot(event)}
        /></td>
    <td> <input
          type="text"
          name="from_to_hot"
          defaultValue={from_to_hot}
          onChange={(event) => updateNewDataHot(event)}
        /></td>
    <td><button onClick={() => saveBtnHot()} className="btn btn-success bt">SAVE</button></td>
    <td><button onClick={() => cancelEditHot(id_hot)} className="btn btn-success bt">CANCEL</button></td>
    </tr> 
  ) : (
     <tr key={id_hot}>
     <td>{name_hot}</td>
     <td><img src={link+img_hot} height={200} width={250} /></td>
     <td>{price_hot}</td>
     <td>{detail_hot}</td>
     <td>{from_to_hot}</td>
     <td><button onClick={() => Edit(id_hot, name_hot, img_hot, price_hot, detail_hot,from_to_hot)} className="btn btn-success bt">EDIT</button></td>
     <td><button onClick={() => deleteTourHot(id_hot)} className="btn btn-success bt">DELETE</button></td>
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
                  <form className="insertForm" onSubmit={addTourHot}>
                      <div className="col-12 mt-3">
                        <input type="text" className="form-control"  onChange={(event) => addNewHot(event)} placeholder="Name" name="name_hot" />
                      </div>
                      <div className="col-12 mt-3">
                        <input type="file" className="form-control" onChange={(event) => addFileHot(event)} placeholder="Img" name="img_hot" />
                      </div>
                      <div className="col-12 mt-3">
                        <input type="number" className="form-control"  onChange={(event) => addNewHot(event)} placeholder="Price" name="price_hot" />
                      </div>
                      <div className="col-12 mt-3">
                        <input type="text" className="form-control"   onChange={(event) => addNewHot(event)} placeholder="From_to" name="from_to_hot" />
                      </div>
                      <div className="col-12 mt-3">
                        <input type="text" className="form-control"   onChange={(event) => addNewHot(event)} placeholder="Detail" name="detail_hot" />
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
export default Adminhot;

        
          