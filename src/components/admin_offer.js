import { useContext, useState } from "react";
import { AppContext } from "../Context";


const Adminoffer = () => {
  //Tour Hot
  const [newOffer, setNewOffer] = useState({});
  const [newDataOffer, setNewDataOffer] = useState({});
  const link="images/";
  const {
    addOffer,
    touroffer,
    deleteOffer,
    updateOffer,
    cancelEditOffer,
    editModeOffer
  } = useContext(AppContext);

  const addFileOffer = (event) => {
    const target=event.target;
    const field =target.name;
    console.log(event.target.files[0].name);
    setNewOffer({
      ...newOffer,
      [field]: event.target.files[0].name,
    });
  };

  const addNewOffer = (event) => {
    const target=event.target;
    const field =target.name;
    const value=target.value;
    setNewOffer({
      ...newOffer,
      [field]: value,
    });
  };

  const addTourOffer = (e) => {
    e.preventDefault();
    addOffer(newOffer);
    e.target.reset();
  };

  const deleteTourOffer = (id) => {
    if (window.confirm("Are you sure?")) {
      deleteOffer(id);
    }
  };

  const saveBtnOffer = () => {
    updateOffer(newDataOffer);
  };

  const updateNewDataOffer = (event) => {
    const target=event.target;
    const field =target.name;
    const value=target.value;
    setNewDataOffer({
      ...newDataOffer,
      [field]: value,
    });
  };

  const updateNewFileOffer = (event) => {
    const target=event.target;
    const field =target.name;
    console.log(event.target.files[0].name);
    setNewDataOffer({
      ...newDataOffer,
      [field]: event.target.files[0].name,
    });
  };

  const Edit = (id_offer, name_offer, img_offer, price_offer, detail_offer,from_to_offer) => {
    setNewDataOffer({ id_offer, name_offer, img_offer, price_offer, detail_offer,from_to_offer });
    editModeOffer(id_offer);
  };
  

  return(
    <div className="container">
              <div className="card-header py-3" data-toggle="modal" data-target="#Modal_hot">
                <button id="add_hot" className="btn btn-primary">Add Offer</button>
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
      {touroffer.map(({ id_offer, name_offer, img_offer, price_offer, detail_offer,from_to_offer, isEditing }) => {
  return isEditing === true ? (
    <tr key={id_offer}>
  
    <td> 
        <input
          type="text"
          name="name_offer"
          defaultValue={name_offer}
          onChange={(event) => updateNewDataOffer(event)}
        />
      </td>
    <td>  <input
          type="file"
          name="img_offer"
          onChange={(event) => updateNewFileOffer(event)}
        /></td>
    <td><input
       type="text"
       name="price_offer"
       defaultValue={price_offer}
       onChange={(event) => updateNewDataOffer(event)}
       /></td>
    <td> <input
          type="text"
          name="detail_offer"
          defaultValue={detail_offer}
          onChange={(event) => updateNewDataOffer(event)}
        /></td>
    <td> <input
          type="text"
          name="from_to_offer"
          defaultValue={from_to_offer}
          onChange={(event) => updateNewDataOffer(event)}
        /></td>
    <td><button onClick={() => saveBtnOffer()} className="btn btn-success bt">SAVE</button></td>
    <td><button onClick={() => cancelEditOffer(id_offer)} className="btn btn-success bt">CANCEL</button></td>
    </tr> 
  ) : (
     <tr key={id_offer}>
     <td>{name_offer}</td>
     <td><img src={link+img_offer} height={200} width={250} /></td>
     <td>{price_offer}</td>
     <td>{detail_offer}</td>
     <td>{from_to_offer}</td>
     <td><button onClick={() => Edit(id_offer, name_offer, img_offer, price_offer, detail_offer,from_to_offer)} className="btn btn-success bt">EDIT</button></td>
     <td><button onClick={() => deleteTourOffer(id_offer)} className="btn btn-success bt">DELETE</button></td>
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
                  <form className="insertForm" onSubmit={addTourOffer}>
                      <div className="col-12 mt-3">
                        <input type="text" className="form-control"  onChange={(event) => addNewOffer(event)} placeholder="Name" name="name_offer" />
                      </div>
                      <div className="col-12 mt-3">
                        <input type="file" className="form-control" onChange={(event) => addFileOffer(event)} placeholder="Img" name="img_offer" />
                      </div>
                      <div className="col-12 mt-3">
                        <input type="number" className="form-control"  onChange={(event) => addNewOffer(event)} placeholder="Price" name="price_offer" />
                      </div>
                      <div className="col-12 mt-3">
                        <input type="text" className="form-control"   onChange={(event) => addNewOffer(event)} placeholder="From_to" name="from_to_offer" />
                      </div>
                      <div className="col-12 mt-3">
                        <input type="text" className="form-control"   onChange={(event) => addNewOffer(event)} placeholder="Detail" name="detail_offer" />
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
export default Adminoffer;

        
          