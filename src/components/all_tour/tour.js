import { useContext, useState } from "react";
import { AppContext } from "../../Context";

const Tour = () => {
  const [newCartCruise, setNewCartCruise] = useState({});
  const [nCruise, setNCruise] = useState({});
  const [newCartHot, setNewCartHot] = useState({});
  const [nHot, setNHot] = useState({});
  const [newCartOffer, setNewCartOffer] = useState({});
  const [nOffer, setNOffer] = useState({});
  const [newCartCapital, setNewCartCapital] = useState({});
  const [nCapital, setNCapital] = useState({});
  const [newCartSport, setNewCartSport] = useState({});
  const [nSport, setNSport] = useState({});
  const kq=1;
  const link="images/";
  const modalhot="MyModalHot";
  const callmodalhot="#MyModalHot";
  const modalcruise="MyModalCruise";
  const callmodalcruise="#MyModalCruise"; 
  const modalcapital="MyModalCapital";
  const callmodalcapital="#MyModalCapital"; 
  const modaloffer="MyModalOffer";
  const callmodaloffer="#MyModalOffer";
  const modalsport="MyModalSport";
  const callmodalsport="#MyModalSport";
  const {
    addCartCruise,
    addCartHot,
    addCartOffer,
    addCartSport,
    addCartCapital,
    tourhot,
    touroffer,
    tourcruise,
    toursport,  
    tourcapital,
    searchhot,
    searchcruise,
    searchcapital,
    searchsport,
    searchoffer
  } = useContext(AppContext);

  const addNewCartCruise = (event) => {
    const target=event.target;
    const field =target.name;
    const value=target.value;
    setNewCartCruise({
      ...newCartCruise,
      [field]: value,
    });
    console.log(newCartCruise);
  };
  const addNewCartCruiseAdults = (event,price_cruise) => {
    const target=event.target;
    const field =target.name;
    const value=target.value;
    setNCruise({
      ...nCruise,
      [field]: parseInt(price_cruise)+parseInt(price_cruise*(value*30/100)),
    });
    setNewCartCruise({
      ...newCartCruise,
      [field]: value,
    });
  };

  const addddCartCruise = (e,id_cruise) => {
    addCartCruise(newCartCruise,id_cruise,nCruise);
    e.target.reset();
  };

{/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
const addNewCartHot = (event) => {
  const target=event.target;
  const field =target.name;
  const value=target.value;
  setNewCartHot({
    ...newCartHot,
    [field]: value,
  });
};

const addNewCartHotAdults = (event,price_hot) => {
  const target=event.target;
  const field =target.name;
  const value=target.value;
  setNHot({
    ...nHot,
    [field]: parseInt(price_hot)+parseInt(price_hot*(value*30/100)),
  });
  setNewCartHot({
    ...newCartHot,
    [field]: value,
  });
};

const addddCartHot = (e,id_hot) => {
  addCartHot(newCartHot,id_hot,nHot);
  e.target.reset();
};

{/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
const addNewCartOffer = (event) => {
  const target=event.target;
  const field =target.name;
  const value=target.value;
  setNewCartOffer({
    ...newCartOffer,
    [field]: value,
  });
};

const addNewCartOfferAdults = (event,price_offer) => {
    const target=event.target;
    const field =target.name;
    const value=target.value;
    setNOffer({
      ...nOffer,
      [field]: parseInt(price_offer)+parseInt(price_offer*(value*30/100)),
    });
    setNewCartOffer({
      ...newCartOffer,
      [field]: value,
    });
  };

const addddCartOffer = (e,id_offer) => {
  addCartOffer(newCartOffer,id_offer,nOffer);
  e.target.reset();
};

{/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
const addNewCartCapital = (event) => {
  const target=event.target;
  const field =target.name;
  const value=target.value;
  setNewCartCapital({
    ...newCartCapital,
    [field]: value,
  });
};

const addNewCartCapitalAdults = (event,price_capital) => {
  const target=event.target;
  const field =target.name;
  const value=target.value;
  setNCapital({
    ...nCapital,
    [field]: parseInt(price_capital)+parseInt(price_capital*(value*30/100)),
  });
  setNewCartCapital({
    ...newCartCapital,
    [field]: value,
  });
};

const addddCartCapital = (e,id_capital) => {
  addCartCapital(newCartCapital,id_capital,nCapital);
  e.target.reset();
};

{/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
const addNewCartSport = (event) => {
  const target=event.target;
  const field =target.name;
  const value=target.value;
  setNewCartSport({
    ...newCartSport,
    [field]: value,
  });
};

const addNewCartSportAdults = (event,price_sport) => {
  const target=event.target;
  const field =target.name;
  const value=target.value;
  setNSport({
    ...nSport,
    [field]: parseInt(price_sport)+parseInt(price_sport*(value*30/100)),
  });
  setNewCartSport({
    ...newCartSport,
    [field]: value,
  });
};

const addddCartSport = (e,id_sport) => {
  addCartSport(newCartSport,id_sport,nSport);
  e.target.reset();
};

{/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}




let demhot=0;
  {searchhot.map((item) => {
             demhot=demhot+1;
  })}
  let demcruise=0;
  {searchcruise.map((item) => {
             demcruise=demcruise+1;
  })}
  let demoffer=0;
  {searchoffer.map((item) => {
             demoffer=demoffer+1;
  })}
  let demcapital=0;
  {searchcapital.map((item) => {
             demcapital=demcapital+1;
  })}
  let demsport=0;
  {searchsport.map((item) => {
             demsport=demsport+1;
  })}
  if((demhot<1) && (demcruise<1)&&(demoffer<1)&&(demcapital<1)&&(demsport<1)){
    return(
       <section id="cruise-capitals" className="section-padding">
       <div className="container">
         <div className="row">
           <div className="col-sm-12">
             <div className="page-heading">
               <h2>ALL TOURS</h2>
               <hr className="heading-line" />
             </div>
             {/* end page-heading */}
             <div className="row" id="show-list">
  {tourcruise.map(({ id_cruise, name_cruise, img_cruise, price_cruise, detail_cruise,from_to_cruise, isEditing }) => {
  return(
           <div className="col-sm-6 col-md-6">
                 <div className="main-block cruise-block">
                   <div className="row">
                     <div className="col-sm-12 col-md-6 col-md-push-6 no-pd-l">
                       <div className="main-img cruise-img">
                         <a>
                           <div data-toggle="modal" data-target={callmodalcruise+id_cruise}><img src={link+img_cruise} className="img-responsive" alt="cruise-img" /></div>
                           <div className="cruise-mask">
                             <p>7 Nights, 6 Days</p>
                           </div>
                         </a>
                       </div>
                     </div>
                     <div className="col-sm-12 col-md-6 col-md-pull-6 no-pd-r">
                       <div className="main-info cruise-info">
                         <div className="main-title cruise-title">
                           <a href="#">{name_cruise}</a>
                           <p>From: {from_to_cruise}</p>
                           <div className="rating">
                             <span><i className="fa fa-star orange" /></span>
                             <span><i className="fa fa-star orange" /></span>
                             <span><i className="fa fa-star orange" /></span>
                             <span><i className="fa fa-star orange" /></span>
                             <span><i className="fa fa-star lightgrey" /></span>
                           </div>
                           <span className="cruise-price">{price_cruise}</span>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
  )
})}

{tourcruise.map(({ id_cruise, name_cruise, img_cruise, price_cruise, detail_cruise,from_to_cruise, isEditing }) => {
  return(
    <div class="modal fade" id={modalcruise+id_cruise} role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      {/* Modal content*/}
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">×</button>
          <div className="row g-0">
            <div className="col-md-8">
              <img src={link+img_cruise} alt="" style={{width: '350px', height: '260px'}} />
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title">{name_cruise}</h5>
                <p className="card-text">{detail_cruise}</p>
                <p className="card-text">From:{from_to_cruise}</p>
                <p className="card-text"><medium className="text-muted"><b>{price_cruise} $</b></medium></p>
              </div>
            </div>
          </div>
        </div>

        <form className="insertForm" onSubmit={(event) => addddCartCruise(event,id_cruise)}>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-6">
          <label>Name: </label>
          <div className="form-group">
            <input type="text" className="form-control" onChange={(event) => addNewCartCruise(event)} id="Name" name="name_user" placeholder="Name" required />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-6">
          <label>Phone: </label>
          <div className="form-group">
            <input type="text" className="form-control" onChange={(event) => addNewCartCruise(event)} id="Phone" name="phone_user" placeholder="Phone" required />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-12">
          <label>Email: </label>
          <div className="form-group">
            <input type="text" className="form-control" onChange={(event) => addNewCartCruise(event)} id="Email" name="email_user" placeholder="Email" required />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 ">
          <label>Address: </label>
          <div className="form-group">
            <input type="text" className="form-control"  onChange={(event) => addNewCartCruise(event)} id="Address" name="address_user" placeholder="Address" required />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
          <label>Check In: </label>
          <div className="form-group left-icon">
            <input type="text" className="form-control dpd1" onChange={(event) => addNewCartCruise(event)} name="check_in" placeholder="Check In" />
            <i className="fa fa-calendar" />
          </div>
        </div>
        {/* end columns */}
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
          <label>Check Out: </label>
          <div className="form-group left-icon">
            <input type="text" className="form-control dpd2" onChange={(event) => addNewCartCruise(event)} name="check_out" placeholder="Check Out" />
            <i className="fa fa-calendar" />
          </div>
        </div>
        {/* end columns */}
        {/* end row */}
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
          <label>Adults: </label>
          <div className="form-group left-icon">
            <input type="number" className="form-control" onChange={(event) => addNewCartCruiseAdults(event,price_cruise)} id="Adults" name="adults" placeholder="Adults" required />
          </div>
        </div>
        <div className="form-group">
          <label>Name_tour: </label>
          <input type="text" className="form-control" id="Name_tour" name="name_cruise" defaultValue={name_cruise} readOnly />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
          <label>From-to: </label>
          <div className="form-group">
            <input type="text" className="form-control" id="From_to" name="From_to" defaultValue={from_to_cruise} readOnly />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
          <label>Price: </label>
          <div className="form-group">
            <input type="number" className="form-control" id="Price_tour" name="Price_tour" defaultValue={nCruise.adults} readOnly />
          </div>
        </div>
        <div className="col-xs-4 col-sm-4 col-md-5 col-lg-4">
          <label />
        </div>
        <div className="col-xs-4 col-sm-4 col-md-5 col-lg-4">
          <label />
        </div>
        <button type="submit" className="btn btn-primary" onclick>Add to cart</button>
      </form>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
    </div>
  )
})}
{/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}

  {tourhot.map(({ id_hot, name_hot, img_hot, price_hot, detail_hot,from_to_hot, isEditing }) => {
  return(
           <div className="col-sm-6 col-md-6">
                 <div className="main-block cruise-block">
                   <div className="row">
                     <div className="col-sm-12 col-md-6 col-md-push-6 no-pd-l">
                       <div className="main-img cruise-img">
                         <a>
                           <div data-toggle="modal" data-target={callmodalhot+id_hot}><img src={link+img_hot} className="img-responsive" alt="cruise-img" /></div>
                           <div className="cruise-mask">
                             <p>7 Nights, 6 Days</p>
                           </div>
                         </a>
                       </div>
                     </div>
                     <div className="col-sm-12 col-md-6 col-md-pull-6 no-pd-r">
                       <div className="main-info cruise-info">
                         <div className="main-title cruise-title">
                           <a href="#">{name_hot}</a>
                           <p>From: {from_to_hot}</p>
                           <div className="rating">
                             <span><i className="fa fa-star orange" /></span>
                             <span><i className="fa fa-star orange" /></span>
                             <span><i className="fa fa-star orange" /></span>
                             <span><i className="fa fa-star orange" /></span>
                             <span><i className="fa fa-star lightgrey" /></span>
                           </div>
                           <span className="cruise-price">{price_hot}</span>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
  )
})}

{tourhot.map(({ id_hot, name_hot, img_hot, price_hot, detail_hot,from_to_hot, isEditing }) => {
  return(
    <div class="modal fade" id={modalhot+id_hot} role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      {/* Modal content*/}
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">×</button>
          <div className="row g-0">
            <div className="col-md-8">
              <img src={link+img_hot} alt="" style={{width: '350px', height: '260px'}} />
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title">{name_hot}</h5>
                <p className="card-text">{detail_hot}</p>
                <p className="card-text">From:{from_to_hot}</p>
                <p className="card-text"><medium className="text-muted"><b>{price_hot} $</b></medium></p>
              </div>
            </div>
          </div>
        </div>
        <form className="insertForm" onSubmit={(event) => addddCartHot(event,id_hot)}>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-6">
          <label>Name: </label>
          <div className="form-group">
            <input type="text" className="form-control" onChange={(event) => addNewCartHot(event)} id="Name" name="name_user" placeholder="Name" required />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-6">
          <label>Phone: </label>
          <div className="form-group">
            <input type="text" className="form-control" onChange={(event) => addNewCartHot(event)} id="Phone" name="phone_user" placeholder="Phone" required />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-12">
          <label>Email: </label>
          <div className="form-group">
            <input type="text" className="form-control" onChange={(event) => addNewCartHot(event)} id="Email" name="email_user" placeholder="Email" required />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 ">
          <label>Address: </label>
          <div className="form-group">
            <input type="text" className="form-control"  onChange={(event) => addNewCartHot(event)} id="Address" name="address_user" placeholder="Address" required />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
          <label>Check In: </label>
          <div className="form-group left-icon">
            <input type="text" className="form-control dpd1" onChange={(event) => addNewCartHot(event)} name="check_in" placeholder="Check In" />
            <i className="fa fa-calendar" />
          </div>
        </div>
        {/* end columns */}
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
          <label>Check Out: </label>
          <div className="form-group left-icon">
            <input type="text" className="form-control dpd2" onChange={(event) => addNewCartHot(event)} name="check_out" placeholder="Check Out" />
            <i className="fa fa-calendar" />
          </div>
        </div>
        {/* end columns */}
        {/* end row */}
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
          <label>Adults: </label>
          <div className="form-group left-icon">
            <input type="number" className="form-control" onChange={(event) => addNewCartHotAdults(event,price_hot)} id="Adults" name="adults" placeholder="Adults" required />
          </div>
        </div>
        <div className="form-group">
          <label>Name_tour: </label>
          <input type="text" className="form-control" id="Name_tour" name="name_hot" defaultValue={name_hot} readOnly />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
          <label>From-to: </label>
          <div className="form-group">
            <input type="text" className="form-control" id="From_to" name="From_to" defaultValue={from_to_hot} readOnly />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
          <label>Price: </label>
          <div className="form-group">
            <input type="text" className="form-control" id="Price_tour" name="Price_tour" defaultValue={nHot.adults} readOnly />
          </div>
        </div>
        <div className="col-xs-4 col-sm-4 col-md-5 col-lg-4">
          <label />
        </div>
        <div className="col-xs-4 col-sm-4 col-md-5 col-lg-4">
          <label />
        </div>
        <button type="submit" className="btn btn-primary" onclick>Add to cart</button>
      </form>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
    </div>
  )
})}

{/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}

{tourcapital.map(({ id_capital, name_capital, img_capital, price_capital, detail_capital,from_to_capital, isEditing }) => {
  return(
           <div className="col-sm-6 col-md-6">
                 <div className="main-block cruise-block">
                   <div className="row">
                     <div className="col-sm-12 col-md-6 col-md-push-6 no-pd-l">
                       <div className="main-img cruise-img">
                         <a>
                           <div data-toggle="modal" data-target={callmodalcapital+id_capital}><img src={link+img_capital} className="img-responsive" alt="cruise-img" /></div>
                           <div className="cruise-mask">
                             <p>7 Nights, 6 Days</p>
                           </div>
                         </a>
                       </div>
                     </div>
                     <div className="col-sm-12 col-md-6 col-md-pull-6 no-pd-r">
                       <div className="main-info cruise-info">
                         <div className="main-title cruise-title">
                           <a href="#">{name_capital}</a>
                           <p>From: {from_to_capital}</p>
                           <div className="rating">
                             <span><i className="fa fa-star orange" /></span>
                             <span><i className="fa fa-star orange" /></span>
                             <span><i className="fa fa-star orange" /></span>
                             <span><i className="fa fa-star orange" /></span>
                             <span><i className="fa fa-star lightgrey" /></span>
                           </div>
                           <span className="cruise-price">{price_capital}</span>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
  )
})}

{tourcapital.map(({ id_capital, name_capital, img_capital, price_capital, detail_capital,from_to_capital, isEditing }) => {
  return(
    <div class="modal fade" id={modalcapital+id_capital} role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      {/* Modal content*/}
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">×</button>
          <div className="row g-0">
            <div className="col-md-8">
              <img src={link+img_capital} alt="" style={{width: '350px', height: '260px'}} />
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title">{name_capital}</h5>
                <p className="card-text">{detail_capital}</p>
                <p className="card-text">From:{from_to_capital}</p>
                <p className="card-text"><medium className="text-muted"><b>{price_capital} $</b></medium></p>
              </div>
            </div>
          </div>
        </div>
        <form className="insertForm" onSubmit={(event) => addddCartCapital(event,id_capital)}>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-6">
          <label>Name: </label>
          <div className="form-group">
            <input type="text" className="form-control" onChange={(event) => addNewCartCapital(event)} id="Name" name="name_user" placeholder="Name" required />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-6">
          <label>Phone: </label>
          <div className="form-group">
            <input type="text" className="form-control" onChange={(event) => addNewCartCapital(event)} id="Phone" name="phone_user" placeholder="Phone" required />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-12">
          <label>Email: </label>
          <div className="form-group">
            <input type="text" className="form-control" onChange={(event) => addNewCartCapital(event)} id="Email" name="email_user" placeholder="Email" required />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 ">
          <label>Address: </label>
          <div className="form-group">
            <input type="text" className="form-control"  onChange={(event) => addNewCartCapital(event)} id="Address" name="address_user" placeholder="Address" required />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
          <label>Check In: </label>
          <div className="form-group left-icon">
            <input type="text" className="form-control dpd1" onChange={(event) => addNewCartCapital(event)} name="check_in" placeholder="Check In" />
            <i className="fa fa-calendar" />
          </div>
        </div>
        {/* end columns */}
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
          <label>Check Out: </label>
          <div className="form-group left-icon">
            <input type="text" className="form-control dpd2" onChange={(event) => addNewCartCapital(event)} name="check_out" placeholder="Check Out" />
            <i className="fa fa-calendar" />
          </div>
        </div>
        {/* end columns */}
        {/* end row */}
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
          <label>Adults: </label>
          <div className="form-group left-icon">
            <input type="number" className="form-control" onChange={(event) => addNewCartCapitalAdults(event,price_capital)} id="Adults" name="adults" placeholder="Adults" required />
          </div>
        </div>
        <div className="form-group">
          <label>Name_tour: </label>
          <input type="text" className="form-control" id="Name_tour" name="name_hot" defaultValue={name_capital} readOnly />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
          <label>From-to: </label>
          <div className="form-group">
            <input type="text" className="form-control" id="From_to" name="From_to" defaultValue={from_to_capital} readOnly />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
          <label>Price: </label>
          <div className="form-group">
            <input type="text" className="form-control" id="Price_tour" name="Price_tour" defaultValue={nCapital.adults} readOnly />
          </div>
        </div>
        <div className="col-xs-4 col-sm-4 col-md-5 col-lg-4">
          <label />
        </div>
        <div className="col-xs-4 col-sm-4 col-md-5 col-lg-4">
          <label />
        </div>
        <button type="submit" className="btn btn-primary" onclick>Add to cart</button>
      </form>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
    </div>
  )
})}


   {/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}

   {touroffer.map(({ id_offer, name_offer, img_offer, price_offer, detail_offer,from_to_offer, isEditing }) => {
  return(
           <div className="col-sm-6 col-md-6">
                 <div className="main-block cruise-block">
                   <div className="row">
                     <div className="col-sm-12 col-md-6 col-md-push-6 no-pd-l">
                       <div className="main-img cruise-img">
                         <a>
                           <div data-toggle="modal" data-target={callmodaloffer+id_offer}><img src={link+img_offer} className="img-responsive" alt="cruise-img" /></div>
                           <div className="cruise-mask">
                             <p>7 Nights, 6 Days</p>
                           </div>
                         </a>
                       </div>
                     </div>
                     <div className="col-sm-12 col-md-6 col-md-pull-6 no-pd-r">
                       <div className="main-info cruise-info">
                         <div className="main-title cruise-title">
                           <a href="#">{name_offer}</a>
                           <p>From: {from_to_offer}</p>
                           <div className="rating">
                             <span><i className="fa fa-star orange" /></span>
                             <span><i className="fa fa-star orange" /></span>
                             <span><i className="fa fa-star orange" /></span>
                             <span><i className="fa fa-star orange" /></span>
                             <span><i className="fa fa-star lightgrey" /></span>
                           </div>
                           <span className="cruise-price">{price_offer}</span>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
  )
})}

{touroffer.map(({ id_offer, name_offer, img_offer, price_offer, detail_offer,from_to_offer, isEditing }) => {
  return(
    <div class="modal fade" id={modaloffer+id_offer} role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      {/* Modal content*/}
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">×</button>
          <div className="row g-0">
            <div className="col-md-8">
              <img src={link+img_offer} alt="" style={{width: '350px', height: '260px'}} />
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title">{name_offer}</h5>
                <p className="card-text">{detail_offer}</p>
                <p className="card-text">From:{from_to_offer}</p>
                <p className="card-text"><medium className="text-muted"><b>{price_offer} $</b></medium></p>
              </div>
            </div>
          </div>
        </div>
        <form className="insertForm" onSubmit={(event) => addddCartOffer(event,id_offer)}>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-6">
          <label>Name: </label>
          <div className="form-group">
            <input type="text" className="form-control" onChange={(event) => addNewCartOffer(event)} id="Name" name="name_user" placeholder="Name" required />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-6">
          <label>Phone: </label>
          <div className="form-group">
            <input type="text" className="form-control" onChange={(event) => addNewCartOffer(event)} id="Phone" name="phone_user" placeholder="Phone" required />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-12">
          <label>Email: </label>
          <div className="form-group">
            <input type="text" className="form-control" onChange={(event) => addNewCartOffer(event)} id="Email" name="email_user" placeholder="Email" required />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 ">
          <label>Address: </label>
          <div className="form-group">
            <input type="text" className="form-control"  onChange={(event) => addNewCartOffer(event)} id="Address" name="address_user" placeholder="Address" required />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
          <label>Check In: </label>
          <div className="form-group left-icon">
            <input type="text" className="form-control dpd1" onChange={(event) => addNewCartOffer(event)} name="check_in" placeholder="Check In" />
            <i className="fa fa-calendar" />
          </div>
        </div>
        {/* end columns */}
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
          <label>Check Out: </label>
          <div className="form-group left-icon">
            <input type="text" className="form-control dpd2" onChange={(event) => addNewCartOffer(event)} name="check_out" placeholder="Check Out" />
            <i className="fa fa-calendar" />
          </div>
        </div>
        {/* end columns */}
        {/* end row */}
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
          <label>Adults: </label>
          <div className="form-group left-icon">
            <input type="number" className="form-control" onChange={(event) => addNewCartOfferAdults(event,price_offer)} id="Adults" name="adults" placeholder="Adults" required />
          </div>
        </div>
        <div className="form-group">
          <label>Name_tour: </label>
          <input type="text" className="form-control" id="Name_tour" name="name_hot" defaultValue={name_offer} readOnly />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
          <label>From-to: </label>
          <div className="form-group">
            <input type="text" className="form-control" id="From_to" name="From_to" defaultValue={from_to_offer} readOnly />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
          <label>Price: </label>
          <div className="form-group">
            <input type="text" className="form-control" id="Price_tour" name="Price_tour" defaultValue={nOffer.adults} readOnly />
          </div>
        </div>
        <div className="col-xs-4 col-sm-4 col-md-5 col-lg-4">
          <label />
        </div>
        <div className="col-xs-4 col-sm-4 col-md-5 col-lg-4">
          <label />
        </div>
        <button type="submit" className="btn btn-primary" onclick>Add to cart</button>
      </form>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
    </div>
  )
})}     

{/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}

{toursport.map(({ id_sport, name_sport, img_sport, price_sport, detail_sport,from_to_sport, isEditing }) => {
  return(
           <div className="col-sm-6 col-md-6">
                 <div className="main-block cruise-block">
                   <div className="row">
                     <div className="col-sm-12 col-md-6 col-md-push-6 no-pd-l">
                       <div className="main-img cruise-img">
                         <a>
                           <div data-toggle="modal" data-target={callmodalsport+id_sport}><img src={link+img_sport} className="img-responsive" alt="cruise-img" /></div>
                           <div className="cruise-mask">
                             <p>7 Nights, 6 Days</p>
                           </div>
                         </a>
                       </div>
                     </div>
                     <div className="col-sm-12 col-md-6 col-md-pull-6 no-pd-r">
                       <div className="main-info cruise-info">
                         <div className="main-title cruise-title">
                           <a href="#">{name_sport}</a>
                           <p>From: {from_to_sport}</p>
                           <div className="rating">
                             <span><i className="fa fa-star orange" /></span>
                             <span><i className="fa fa-star orange" /></span>
                             <span><i className="fa fa-star orange" /></span>
                             <span><i className="fa fa-star orange" /></span>
                             <span><i className="fa fa-star lightgrey" /></span>
                           </div>
                           <span className="cruise-price">{price_sport}</span>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
  )
})}

{toursport.map(({ id_sport, name_sport, img_sport, price_sport, detail_sport,from_to_sport, isEditing }) => {
  return(
    <div class="modal fade" id={modalsport+id_sport} role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      {/* Modal content*/}
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">×</button>
          <div className="row g-0">
            <div className="col-md-8">
              <img src={link+img_sport} alt="" style={{width: '350px', height: '260px'}} />
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title">{name_sport}</h5>
                <p className="card-text">{detail_sport}</p>
                <p className="card-text">From:{from_to_sport}</p>
                <p className="card-text"><medium className="text-muted"><b>{price_sport} $</b></medium></p>
              </div>
            </div>
          </div>
        </div>
        <form className="insertForm" onSubmit={(event) => addddCartSport(event,id_sport)}>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-6">
          <label>Name: </label>
          <div className="form-group">
            <input type="text" className="form-control" onChange={(event) => addNewCartSport(event)} id="Name" name="name_user" placeholder="Name" required />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-6">
          <label>Phone: </label>
          <div className="form-group">
            <input type="text" className="form-control" onChange={(event) => addNewCartSport(event)} id="Phone" name="phone_user" placeholder="Phone" required />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-12">
          <label>Email: </label>
          <div className="form-group">
            <input type="text" className="form-control" onChange={(event) => addNewCartSport(event)} id="Email" name="email_user" placeholder="Email" required />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 ">
          <label>Address: </label>
          <div className="form-group">
            <input type="text" className="form-control"  onChange={(event) => addNewCartSport(event)} id="Address" name="address_user" placeholder="Address" required />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
          <label>Check In: </label>
          <div className="form-group left-icon">
            <input type="text" className="form-control dpd1" onChange={(event) => addNewCartSport(event)} name="check_in" placeholder="Check In" />
            <i className="fa fa-calendar" />
          </div>
        </div>
        {/* end columns */}
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
          <label>Check Out: </label>
          <div className="form-group left-icon">
            <input type="text" className="form-control dpd2" onChange={(event) => addNewCartSport(event)} name="check_out" placeholder="Check Out" />
            <i className="fa fa-calendar" />
          </div>
        </div>
        {/* end columns */}
        {/* end row */}
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
          <label>Adults: </label>
          <div className="form-group left-icon">
            <input type="number" className="form-control" onChange={(event) => addNewCartSportAdults(event,price_sport)} id="Adults" name="adults" placeholder="Adults" required />
          </div>
        </div>
        <div className="form-group">
          <label>Name_tour: </label>
          <input type="text" className="form-control" id="Name_tour" name="name_Sport" defaultValue={name_sport} readOnly />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
          <label>From-to: </label>
          <div className="form-group">
            <input type="text" className="form-control" id="From_to" name="From_to" defaultValue={from_to_sport} readOnly />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
          <label>Price: </label>
          <div className="form-group">
            <input type="text" className="form-control" id="Price_tour" name="Price_tour" defaultValue={nSport.adults} readOnly />
          </div>
        </div>
        <div className="col-xs-4 col-sm-4 col-md-5 col-lg-4">
          <label />
        </div>
        <div className="col-xs-4 col-sm-4 col-md-5 col-lg-4">
          <label />
        </div>
        <button type="submit" className="btn btn-primary" onclick>Add to cart</button>
      </form>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
    </div>
  )
})}
       
           
              
         
  </div>
  </div>
  </div>
  </div>
     </section>
    );}
    else{
      return(
        <section id="cruise-capitals" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="page-heading">
                <h2>ALL TOURS</h2>
                <hr className="heading-line" />
              </div>
              {/* end page-heading */}
              <div className="row" id="show-list">
 
              {searchhot.map(({ id_hot, name_hot, img_hot, price_hot, detail_hot,from_to_hot, isEditing }) => {
   return(
            <div className="col-sm-6 col-md-6">
                  <div className="main-block cruise-block">
                    <div className="row">
                      <div className="col-sm-12 col-md-6 col-md-push-6 no-pd-l">
                        <div className="main-img cruise-img">
                          <a>
                          <div data-toggle="modal" data-target={callmodalhot+id_hot}><img src={link+img_hot} className="img-responsive" alt="cruise-img" /></div>
                            <div className="cruise-mask">
                              <p>7 Nights, 6 Days</p>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6 col-md-pull-6 no-pd-r">
                        <div className="main-info cruise-info">
                          <div className="main-title cruise-title">
                            <a href="#">{name_hot}</a>
                            <p>From: {from_to_hot}</p>
                            <div className="rating">
                              <span><i className="fa fa-star orange" /></span>
                              <span><i className="fa fa-star orange" /></span>
                              <span><i className="fa fa-star orange" /></span>
                              <span><i className="fa fa-star orange" /></span>
                              <span><i className="fa fa-star lightgrey" /></span>
                            </div>
                            <span className="cruise-price">{price_hot}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
   )
 })}
 {tourhot.map(({ id_hot, name_hot, img_hot, price_hot, detail_hot,from_to_hot, isEditing }) => {
  return(
    <div class="modal fade" id={modalhot+id_hot} role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      {/* Modal content*/}
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">×</button>
          <div className="row g-0">
            <div className="col-md-8">
              <img src={link+img_hot} alt="" style={{width: '350px', height: '260px'}} />
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title">{name_hot}</h5>
                <p className="card-text">{detail_hot}</p>
                <p className="card-text">From:{from_to_hot}</p>
                <p className="card-text"><medium className="text-muted"><b>{price_hot} $</b></medium></p>
              </div>
            </div>
          </div>
        </div>
        <form className="insertForm" onSubmit={(event) => addddCartHot(event,id_hot)}>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-6">
          <label>Name: </label>
          <div className="form-group">
            <input type="text" className="form-control" onChange={(event) => addNewCartHot(event)} id="Name" name="name_user" placeholder="Name" required />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-6">
          <label>Phone: </label>
          <div className="form-group">
            <input type="text" className="form-control" onChange={(event) => addNewCartHot(event)} id="Phone" name="phone_user" placeholder="Phone" required />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-12">
          <label>Email: </label>
          <div className="form-group">
            <input type="text" className="form-control" onChange={(event) => addNewCartHot(event)} id="Email" name="email_user" placeholder="Email" required />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 ">
          <label>Address: </label>
          <div className="form-group">
            <input type="text" className="form-control"  onChange={(event) => addNewCartHot(event)} id="Address" name="address_user" placeholder="Address" required />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
          <label>Check In: </label>
          <div className="form-group left-icon">
            <input type="text" className="form-control dpd1" onChange={(event) => addNewCartHot(event)} name="check_in" placeholder="Check In" />
            <i className="fa fa-calendar" />
          </div>
        </div>
        {/* end columns */}
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
          <label>Check Out: </label>
          <div className="form-group left-icon">
            <input type="text" className="form-control dpd2" onChange={(event) => addNewCartHot(event)} name="check_out" placeholder="Check Out" />
            <i className="fa fa-calendar" />
          </div>
        </div>
        {/* end columns */}
        {/* end row */}
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
          <label>Adults: </label>
          <div className="form-group left-icon">
            <input type="number" className="form-control" onChange={(event) => addNewCartHotAdults(event,price_hot)} id="Adults" name="adults" placeholder="Adults" required />
          </div>
        </div>
        <div className="form-group">
          <label>Name_tour: </label>
          <input type="text" className="form-control" id="Name_tour" name="name_hot" defaultValue={name_hot} readOnly />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
          <label>From-to: </label>
          <div className="form-group">
            <input type="text" className="form-control" id="From_to" name="From_to" defaultValue={from_to_hot} readOnly />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
          <label>Price: </label>
          <div className="form-group">
            <input type="text" className="form-control" id="Price_tour" name="Price_tour" defaultValue={nHot.adults} readOnly />
          </div>
        </div>
        <div className="col-xs-4 col-sm-4 col-md-5 col-lg-4">
          <label />
        </div>
        <div className="col-xs-4 col-sm-4 col-md-5 col-lg-4">
          <label />
        </div>
        <button type="submit" className="btn btn-primary" onclick>Add to cart</button>
      </form>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
    </div>
  )
})}
 {searchcruise.map(({ id_cruise, name_cruise, img_cruise, price_cruise, detail_cruise,from_to_cruise, isEditing }) => {
  return(
           <div className="col-sm-6 col-md-6">
                 <div className="main-block cruise-block">
                   <div className="row">
                     <div className="col-sm-12 col-md-6 col-md-push-6 no-pd-l">
                       <div className="main-img cruise-img">
                         <a>
                         <div data-toggle="modal" data-target={callmodalcruise+id_cruise}><img src={link+img_cruise} className="img-responsive" alt="cruise-img" /></div>                          
                           <div className="cruise-mask">
                             <p>7 Nights, 6 Days</p>
                           </div>
                         </a>
                       </div>
                     </div>
                     <div className="col-sm-12 col-md-6 col-md-pull-6 no-pd-r">
                       <div className="main-info cruise-info">
                         <div className="main-title cruise-title">
                           <a href="#">{name_cruise}</a>
                           <p>From: {from_to_cruise}</p>
                           <div className="rating">
                             <span><i className="fa fa-star orange" /></span>
                             <span><i className="fa fa-star orange" /></span>
                             <span><i className="fa fa-star orange" /></span>
                             <span><i className="fa fa-star orange" /></span>
                             <span><i className="fa fa-star lightgrey" /></span>
                           </div>
                           <span className="cruise-price">{price_cruise}</span>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
  )
})}
{tourcruise.map(({ id_cruise, name_cruise, img_cruise, price_cruise, detail_cruise,from_to_cruise, isEditing }) => {
  return(
    <div class="modal fade" id={modalcruise+id_cruise} role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      {/* Modal content*/}
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">×</button>
          <div className="row g-0">
            <div className="col-md-8">
              <img src={link+img_cruise} alt="" style={{width: '350px', height: '260px'}} />
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title">{name_cruise}</h5>
                <p className="card-text">{detail_cruise}</p>
                <p className="card-text">From:{from_to_cruise}</p>
                <p className="card-text"><medium className="text-muted"><b>{price_cruise} $</b></medium></p>
              </div>
            </div>
          </div>
        </div>

        <form className="insertForm" onSubmit={(event) => addddCartCruise(event,id_cruise)}>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-6">
          <label>Name: </label>
          <div className="form-group">
            <input type="text" className="form-control" onChange={(event) => addNewCartCruise(event)} id="Name" name="name_user" placeholder="Name" required />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-6">
          <label>Phone: </label>
          <div className="form-group">
            <input type="text" className="form-control" onChange={(event) => addNewCartCruise(event)} id="Phone" name="phone_user" placeholder="Phone" required />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-12">
          <label>Email: </label>
          <div className="form-group">
            <input type="text" className="form-control" onChange={(event) => addNewCartCruise(event)} id="Email" name="email_user" placeholder="Email" required />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 ">
          <label>Address: </label>
          <div className="form-group">
            <input type="text" className="form-control"  onChange={(event) => addNewCartCruise(event)} id="Address" name="address_user" placeholder="Address" required />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
          <label>Check In: </label>
          <div className="form-group left-icon">
            <input type="text" className="form-control dpd1" onChange={(event) => addNewCartCruise(event)} name="check_in" placeholder="Check In" />
            <i className="fa fa-calendar" />
          </div>
        </div>
        {/* end columns */}
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
          <label>Check Out: </label>
          <div className="form-group left-icon">
            <input type="text" className="form-control dpd2" onChange={(event) => addNewCartCruise(event)} name="check_out" placeholder="Check Out" />
            <i className="fa fa-calendar" />
          </div>
        </div>
        {/* end columns */}
        {/* end row */}
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
          <label>Adults: </label>
          <div className="form-group left-icon">
            <input type="number" className="form-control" onChange={(event) => addNewCartCruiseAdults(event,price_cruise)} id="Adults" name="adults" placeholder="Adults" required />
          </div>
        </div>
        <div className="form-group">
          <label>Name_tour: </label>
          <input type="text" className="form-control" id="Name_tour" name="name_cruise" defaultValue={name_cruise} readOnly />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
          <label>From-to: </label>
          <div className="form-group">
            <input type="text" className="form-control" id="From_to" name="From_to" defaultValue={from_to_cruise} readOnly />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
          <label>Price: </label>
          <div className="form-group">
            <input type="number" className="form-control" id="Price_tour" name="Price_tour" defaultValue={nCruise.adults} readOnly />
          </div>
        </div>
        <div className="col-xs-4 col-sm-4 col-md-5 col-lg-4">
          <label />
        </div>
        <div className="col-xs-4 col-sm-4 col-md-5 col-lg-4">
          <label />
        </div>
        <button type="submit" className="btn btn-primary" onclick>Add to cart</button>
      </form>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
    </div>
  )
})}
{searchsport.map(({ id_sport, name_sport, img_sport, price_sport, detail_sport,from_to_sport, isEditing }) => {
  return(
           <div className="col-sm-6 col-md-6">
                 <div className="main-block sport-block">
                   <div className="row">
                     <div className="col-sm-12 col-md-6 col-md-push-6 no-pd-l">
                       <div className="main-img sport-img">
                         <a>
                         <div data-toggle="modal" data-target={callmodalsport+id_sport}><img src={link+img_sport} className="img-responsive" alt="cruise-img" /></div>
                           <div className="cruise-mask">
                             <p>7 Nights, 6 Days</p>
                           </div>
                         </a>
                       </div>
                     </div>
                     <div className="col-sm-12 col-md-6 col-md-pull-6 no-pd-r">
                       <div className="main-info cruise-info">
                         <div className="main-title cruise-title">
                           <a href="#">{name_sport}</a>
                           <p>From: {from_to_sport}</p>
                           <div className="rating">
                             <span><i className="fa fa-star orange" /></span>
                             <span><i className="fa fa-star orange" /></span>
                             <span><i className="fa fa-star orange" /></span>
                             <span><i className="fa fa-star orange" /></span>
                             <span><i className="fa fa-star lightgrey" /></span>
                           </div>
                           <span className="cruise-price">{price_sport}</span>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
  )
})}
{toursport.map(({ id_sport, name_sport, img_sport, price_sport, detail_sport,from_to_sport, isEditing }) => {
  return(
    <div class="modal fade" id={modalsport+id_sport} role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      {/* Modal content*/}
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">×</button>
          <div className="row g-0">
            <div className="col-md-8">
              <img src={link+img_sport} alt="" style={{width: '350px', height: '260px'}} />
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title">{name_sport}</h5>
                <p className="card-text">{detail_sport}</p>
                <p className="card-text">From:{from_to_sport}</p>
                <p className="card-text"><medium className="text-muted"><b>{price_sport} $</b></medium></p>
              </div>
            </div>
          </div>
        </div>
        <form className="insertForm" onSubmit={(event) => addddCartSport(event,id_sport)}>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-6">
          <label>Name: </label>
          <div className="form-group">
            <input type="text" className="form-control" onChange={(event) => addNewCartSport(event)} id="Name" name="name_user" placeholder="Name" required />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-6">
          <label>Phone: </label>
          <div className="form-group">
            <input type="text" className="form-control" onChange={(event) => addNewCartSport(event)} id="Phone" name="phone_user" placeholder="Phone" required />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-12">
          <label>Email: </label>
          <div className="form-group">
            <input type="text" className="form-control" onChange={(event) => addNewCartSport(event)} id="Email" name="email_user" placeholder="Email" required />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 ">
          <label>Address: </label>
          <div className="form-group">
            <input type="text" className="form-control"  onChange={(event) => addNewCartSport(event)} id="Address" name="address_user" placeholder="Address" required />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
          <label>Check In: </label>
          <div className="form-group left-icon">
            <input type="text" className="form-control dpd1" onChange={(event) => addNewCartSport(event)} name="check_in" placeholder="Check In" />
            <i className="fa fa-calendar" />
          </div>
        </div>
        {/* end columns */}
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
          <label>Check Out: </label>
          <div className="form-group left-icon">
            <input type="text" className="form-control dpd2" onChange={(event) => addNewCartSport(event)} name="check_out" placeholder="Check Out" />
            <i className="fa fa-calendar" />
          </div>
        </div>
        {/* end columns */}
        {/* end row */}
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
          <label>Adults: </label>
          <div className="form-group left-icon">
            <input type="number" className="form-control" onChange={(event) => addNewCartSportAdults(event,price_sport)} id="Adults" name="adults" placeholder="Adults" required />
          </div>
        </div>
        <div className="form-group">
          <label>Name_tour: </label>
          <input type="text" className="form-control" id="Name_tour" name="name_Sport" defaultValue={name_sport} readOnly />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
          <label>From-to: </label>
          <div className="form-group">
            <input type="text" className="form-control" id="From_to" name="From_to" defaultValue={from_to_sport} readOnly />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
          <label>Price: </label>
          <div className="form-group">
            <input type="text" className="form-control" id="Price_tour" name="Price_tour" defaultValue={nSport.adults} readOnly />
          </div>
        </div>
        <div className="col-xs-4 col-sm-4 col-md-5 col-lg-4">
          <label />
        </div>
        <div className="col-xs-4 col-sm-4 col-md-5 col-lg-4">
          <label />
        </div>
        <button type="submit" className="btn btn-primary" onclick>Add to cart</button>
      </form>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
    </div>
  )
})}
{searchoffer.map(({ id_offer, name_offer, img_offer, price_offer, detail_offer,from_to_offer, isEditing }) => {
  return(
           <div className="col-sm-6 col-md-6">
                 <div className="main-block cruise-block">
                   <div className="row">
                     <div className="col-sm-12 col-md-6 col-md-push-6 no-pd-l">
                       <div className="main-img cruise-img">
                         <a>
                         <div data-toggle="modal" data-target={callmodaloffer+id_offer}><img src={link+img_offer} className="img-responsive" alt="cruise-img" /></div>
                           <div className="cruise-mask">
                             <p>7 Nights, 6 Days</p>
                           </div>
                         </a>
                       </div>
                     </div>
                     <div className="col-sm-12 col-md-6 col-md-pull-6 no-pd-r">
                       <div className="main-info cruise-info">
                         <div className="main-title cruise-title">
                           <a href="#">{name_offer}</a>
                           <p>From: {from_to_offer}</p>
                           <div className="rating">
                             <span><i className="fa fa-star orange" /></span>
                             <span><i className="fa fa-star orange" /></span>
                             <span><i className="fa fa-star orange" /></span>
                             <span><i className="fa fa-star orange" /></span>
                             <span><i className="fa fa-star lightgrey" /></span>
                           </div>
                           <span className="cruise-price">{price_offer}</span>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
  )
})}
{touroffer.map(({ id_offer, name_offer, img_offer, price_offer, detail_offer,from_to_offer, isEditing }) => {
  return(
    <div class="modal fade" id={modaloffer+id_offer} role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      {/* Modal content*/}
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">×</button>
          <div className="row g-0">
            <div className="col-md-8">
              <img src={link+img_offer} alt="" style={{width: '350px', height: '260px'}} />
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title">{name_offer}</h5>
                <p className="card-text">{detail_offer}</p>
                <p className="card-text">From:{from_to_offer}</p>
                <p className="card-text"><medium className="text-muted"><b>{price_offer} $</b></medium></p>
              </div>
            </div>
          </div>
        </div>
        <form className="insertForm" onSubmit={(event) => addddCartOffer(event,id_offer)}>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-6">
          <label>Name: </label>
          <div className="form-group">
            <input type="text" className="form-control" onChange={(event) => addNewCartOffer(event)} id="Name" name="name_user" placeholder="Name" required />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-6">
          <label>Phone: </label>
          <div className="form-group">
            <input type="text" className="form-control" onChange={(event) => addNewCartOffer(event)} id="Phone" name="phone_user" placeholder="Phone" required />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-12">
          <label>Email: </label>
          <div className="form-group">
            <input type="text" className="form-control" onChange={(event) => addNewCartOffer(event)} id="Email" name="email_user" placeholder="Email" required />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 ">
          <label>Address: </label>
          <div className="form-group">
            <input type="text" className="form-control"  onChange={(event) => addNewCartOffer(event)} id="Address" name="address_user" placeholder="Address" required />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
          <label>Check In: </label>
          <div className="form-group left-icon">
            <input type="text" className="form-control dpd1" onChange={(event) => addNewCartOffer(event)} name="check_in" placeholder="Check In" />
            <i className="fa fa-calendar" />
          </div>
        </div>
        {/* end columns */}
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
          <label>Check Out: </label>
          <div className="form-group left-icon">
            <input type="text" className="form-control dpd2" onChange={(event) => addNewCartOffer(event)} name="check_out" placeholder="Check Out" />
            <i className="fa fa-calendar" />
          </div>
        </div>
        {/* end columns */}
        {/* end row */}
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
          <label>Adults: </label>
          <div className="form-group left-icon">
            <input type="number" className="form-control" onChange={(event) => addNewCartOfferAdults(event,price_offer)} id="Adults" name="adults" placeholder="Adults" required />
          </div>
        </div>
        <div className="form-group">
          <label>Name_tour: </label>
          <input type="text" className="form-control" id="Name_tour" name="name_hot" defaultValue={name_offer} readOnly />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
          <label>From-to: </label>
          <div className="form-group">
            <input type="text" className="form-control" id="From_to" name="From_to" defaultValue={from_to_offer} readOnly />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
          <label>Price: </label>
          <div className="form-group">
            <input type="text" className="form-control" id="Price_tour" name="Price_tour" defaultValue={nOffer.adults} readOnly />
          </div>
        </div>
        <div className="col-xs-4 col-sm-4 col-md-5 col-lg-4">
          <label />
        </div>
        <div className="col-xs-4 col-sm-4 col-md-5 col-lg-4">
          <label />
        </div>
        <button type="submit" className="btn btn-primary" onclick>Add to cart</button>
      </form>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
    </div>
  )
})}     
{searchcapital.map(({ id_capital, name_capital, img_capital, price_capital, detail_capital,from_to_capital, isEditing }) => {
  return(
           <div className="col-sm-6 col-md-6">
                 <div className="main-block cruise-block">
                   <div className="row">
                     <div className="col-sm-12 col-md-6 col-md-push-6 no-pd-l">
                       <div className="main-img cruise-img">
                         <a>
                         <div data-toggle="modal" data-target={callmodalcapital+id_capital}><img src={link+img_capital} className="img-responsive" alt="cruise-img" /></div>
                           <div className="cruise-mask">
                             <p>7 Nights, 6 Days</p>
                           </div>
                         </a>
                       </div>
                     </div>
                     <div className="col-sm-12 col-md-6 col-md-pull-6 no-pd-r">
                       <div className="main-info cruise-info">
                         <div className="main-title cruise-title">
                           <a href="#">{name_capital}</a>
                           <p>From: {from_to_capital}</p>
                           <div className="rating">
                             <span><i className="fa fa-star orange" /></span>
                             <span><i className="fa fa-star orange" /></span>
                             <span><i className="fa fa-star orange" /></span>
                             <span><i className="fa fa-star orange" /></span>
                             <span><i className="fa fa-star lightgrey" /></span>
                           </div>
                           <span className="cruise-price">{price_capital}</span>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
  )
})}
{tourcapital.map(({ id_capital, name_capital, img_capital, price_capital, detail_capital,from_to_capital, isEditing }) => {
  return(
    <div class="modal fade" id={modalcapital+id_capital} role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      {/* Modal content*/}
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">×</button>
          <div className="row g-0">
            <div className="col-md-8">
              <img src={link+img_capital} alt="" style={{width: '350px', height: '260px'}} />
            </div>
            <div className="col-md-4">
              <div className="card-body">
                <h5 className="card-title">{name_capital}</h5>
                <p className="card-text">{detail_capital}</p>
                <p className="card-text">From:{from_to_capital}</p>
                <p className="card-text"><medium className="text-muted"><b>{price_capital} $</b></medium></p>
              </div>
            </div>
          </div>
        </div>
        <form className="insertForm" onSubmit={(event) => addddCartCapital(event,id_capital)}>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-6">
          <label>Name: </label>
          <div className="form-group">
            <input type="text" className="form-control" onChange={(event) => addNewCartCapital(event)} id="Name" name="name_user" placeholder="Name" required />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-6">
          <label>Phone: </label>
          <div className="form-group">
            <input type="text" className="form-control" onChange={(event) => addNewCartCapital(event)} id="Phone" name="phone_user" placeholder="Phone" required />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-12">
          <label>Email: </label>
          <div className="form-group">
            <input type="text" className="form-control" onChange={(event) => addNewCartCapital(event)} id="Email" name="email_user" placeholder="Email" required />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 ">
          <label>Address: </label>
          <div className="form-group">
            <input type="text" className="form-control"  onChange={(event) => addNewCartCapital(event)} id="Address" name="address_user" placeholder="Address" required />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
          <label>Check In: </label>
          <div className="form-group left-icon">
            <input type="text" className="form-control dpd1" onChange={(event) => addNewCartCapital(event)} name="check_in" placeholder="Check In" />
            <i className="fa fa-calendar" />
          </div>
        </div>
        {/* end columns */}
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
          <label>Check Out: </label>
          <div className="form-group left-icon">
            <input type="text" className="form-control dpd2" onChange={(event) => addNewCartCapital(event)} name="check_out" placeholder="Check Out" />
            <i className="fa fa-calendar" />
          </div>
        </div>
        {/* end columns */}
        {/* end row */}
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
          <label>Adults: </label>
          <div className="form-group left-icon">
            <input type="number" className="form-control" onChange={(event) => addNewCartCapitalAdults(event,price_capital)} id="Adults" name="adults" placeholder="Adults" required />
          </div>
        </div>
        <div className="form-group">
          <label>Name_tour: </label>
          <input type="text" className="form-control" id="Name_tour" name="name_hot" defaultValue={name_capital} readOnly />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
          <label>From-to: </label>
          <div className="form-group">
            <input type="text" className="form-control" id="From_to" name="From_to" defaultValue={from_to_capital} readOnly />
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
          <label>Price: </label>
          <div className="form-group">
            <input type="text" className="form-control" id="Price_tour" name="Price_tour" defaultValue={nCapital.adults} readOnly />
          </div>
        </div>
        <div className="col-xs-4 col-sm-4 col-md-5 col-lg-4">
          <label />
        </div>
        <div className="col-xs-4 col-sm-4 col-md-5 col-lg-4">
          <label />
        </div>
        <button type="submit" className="btn btn-primary" onclick>Add to cart</button>
      </form>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
    </div>
  )
})}
 </div>
  </div>
  </div>
  </div>
     </section>
      );
    }
  }
export default Tour;