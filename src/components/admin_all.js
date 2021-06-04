import { useContext, useState } from "react";
import { AppContext } from "../Context";


const Adminall = () => {
  //Tour Hot
  const [newHot, setNewHot] = useState({});
  const [newDataHot, setNewDataHot] = useState({});
  const [newOffer, setNewOffer] = useState({});
  const [newDataOffer, setNewDataOffer] = useState({});
  const link="images/";
  const {
    addHot,
    tourhot,
    tourhotLength,
    deleteHot,
    updateHot,
    cancelEditHot,
    editModeHot,
    addOffer,
    touroffer,
    deleteOffer,
    updateOffer,
    cancelEditOffer,
    editModeOffer,
    addCruise,
    tourcruise,
    deleteCruise,
    updateCruise,
    cancelEditCruise,
    editModeCruise,
    addSport,
    toursport,
    deleteSport,
    updateSport,
    cancelEditSport,
    editModeSport,
    addCapital,
    tourcapital,
    deleteCapital,
    updateCapital,
    cancelEditCapital,
    editModeCapital
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

  const EditHot = (id_hot, name_hot, img_hot, price_hot, detail_hot,from_to_hot) => {
    setNewDataHot({ id_hot, name_hot, img_hot, price_hot, detail_hot,from_to_hot });
    editModeHot(id_hot);
  };
  
  //////////////////////////////////////////////////////////////////////////////////////



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

  const EditOffer = (id_offer, name_offer, img_offer, price_offer, detail_offer,from_to_offer) => {
    setNewDataOffer({ id_offer, name_offer, img_offer, price_offer, detail_offer,from_to_offer });
    editModeOffer(id_offer);
  };


////////////////////////////////////////////////////////////////////////////////////////////
const [newCruise, setNewCruise] = useState({});
  const [newDataCruise, setNewDataCruise] = useState({});
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

  const EditCruise = (id_cruise, name_cruise, img_cruise, price_cruise, detail_cruise,from_to_cruise) => {
    setNewDataCruise({ id_cruise, name_cruise, img_cruise, price_cruise, detail_cruise,from_to_cruise });
    editModeCruise(id_cruise);
  };

///////////////////////////////////////////////////////////////////////////////////
const [newSport, setNewSport] = useState({});
  const [newDataSport, setNewDataSport] = useState({});

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

  const EditSport = (id_sport, name_sport, img_sport, price_sport, detail_sport,from_to_sport) => {
    setNewDataSport({ id_sport, name_sport, img_sport, price_sport, detail_sport,from_to_sport });
    editModeSport(id_sport);
  };
////////////////////////////////////////////////////////////////////////////////////////
 

const [newCapital, setNewCapital] = useState({});
  const [newDataCapital, setNewDataCapital] = useState({});
  
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

  const EditCapital = (id_capital, name_capital, img_capital, price_capital, detail_capital,from_to_capital) => {
    setNewDataCapital({ id_capital, name_capital, img_capital, price_capital, detail_capital,from_to_capital });
    editModeCapital(id_capital);
  };


/////////////////////////////////////////////////////////////////////////////////////////////

//end Tour Hot

  return(
    <div className="container">
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
     <td><button onClick={() => EditHot(id_hot, name_hot, img_hot, price_hot, detail_hot,from_to_hot)} className="btn btn-success bt">EDIT</button></td>
     <td><button onClick={() => deleteTourHot(id_hot)} className="btn btn-success bt">DELETE</button></td>
     </tr> 
  )
})}
</tbody>
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
     <td><button onClick={() => EditOffer(id_offer, name_offer, img_offer, price_offer, detail_offer,from_to_offer)} className="btn btn-success bt">EDIT</button></td>
     <td><button onClick={() => deleteTourOffer(id_offer)} className="btn btn-success bt">DELETE</button></td>
     </tr> 
  )
})}
</tbody>
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
     <td><button onClick={() => EditCruise(id_cruise, name_cruise, img_cruise, price_cruise, detail_cruise,from_to_cruise)} className="btn btn-success bt">EDIT</button></td>
     <td><button onClick={() => deleteTourCruise(id_cruise)} className="btn btn-success bt">DELETE</button></td>
     </tr> 
  )
})}
</tbody>
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
     <td><button onClick={() => EditSport(id_sport, name_sport, img_sport, price_sport, detail_sport,from_to_sport)} className="btn btn-success bt">EDIT</button></td>
     <td><button onClick={() => deleteTourSport(id_sport)} className="btn btn-success bt">DELETE</button></td>
     </tr> 
  )
})}
</tbody>
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
     <td><button onClick={() => EditCapital(id_capital, name_capital, img_capital, price_capital, detail_capital,from_to_capital)} className="btn btn-success bt">EDIT</button></td>
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
export default Adminall;

        
          