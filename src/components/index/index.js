import { useContext, useState } from "react";
import { AppContext } from '../../Context';
import {BrowserRouter as Router,Switch,Route,Link,useHistory} from 'react-router-dom';


const Index = () => { 
  const { insertUser } = useContext(AppContext);
  const [newUser, setNewUser] = useState({});
  const link="images/";
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
    searchoffer,
    blog
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
      <div id="main-homepage">
        {/*====== LOADER =====*/}
                {/*====== LOADER =====*/}
                <div className="loader" />
        {/*======== SEARCH-OVERLAY =========*/}
        <div className="overlay">
          <a href="javascript:void(0)" id="close-button" className="closebtn">×</a>
          <div className="overlay-content">
            <div className="form-center">
              <form>
                <div className="form-group">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search..." required />
                    <span className="input-group-btn"><button type="submit" className="btn"><span><i className="fa fa-search" /></span></button>
                    </span>
                  </div>
                  {/* end input-group */}
                </div>
                {/* end form-group */}
              </form>
            </div>
            {/* end form-center */}
          </div>
          {/* end overlay-content */}
        </div>
        {/* end overlay */}
        {/*========================= FLEX SLIDER =====================*/}
        <section className="flexslider-container" id="flexslider-container-1">
          <div className="flexslider slider" id="slider-1">
            <ul className="slides">
              <li className="item-1" style={{background: 'linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(images/co-nen-di-du-lich-da-nang-vao-thang-11-h1.jpg) 50% 0%', backgroundSize: 'cover', height: '100%'}}>
                <div className=" meta">
                  <div className="container">
                    <h2>Discover</h2>
                    <h1>Da Nang City</h1>
                    <a href="#" className="btn btn-default">View More</a>
                  </div>
                  {/* end container */}
                </div>
                {/* end meta */}
              </li>
              {/* end item-1 */}
              <li className="item-2" style={{background: 'linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(images/ĐN.jpg) 50% 0%', backgroundSize: 'cover', height: '100%'}}>
                <div className=" meta">
                  <div className="container">
                    <h2>Discover</h2>
                    <h1>Da Nang City</h1>
                    <a href="#" className="btn btn-default">View More</a>
                  </div>
                  {/* end container */}
                </div>
                {/* end meta */}
              </li>
              {/* end item-2 */}
              <li className="item-2" style={{background: 'linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(images/du-lich-da-nang.jpg) 50% 0%', backgroundSize: 'cover', height: '100%'}}>
                <div className=" meta">
                  <div className="container">
                    <h2>Discover</h2>
                    <h1>Da Nang City</h1>
                    <a href="#" className="btn btn-default">View More</a>
                  </div>
                  {/* end container */}
                </div>
                {/* end meta */}
              </li>
            </ul>
          </div>
          {/* end slider */}
          <div className="search-tabs" id="search-tabs-1">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <ul className="nav nav-tabs center-tabs">
                    <li className="active"><a href="#flights" data-toggle="tab"><span><i className="fa fa-plane" /></span><span className="st-text">Flights</span></a></li>
                    <li><a href="#hotels" data-toggle="tab"><span><i className="fa fa-building" /></span><span className="st-text">Hotels</span></a></li>
                    <li><a href="#tours" data-toggle="tab"><span><i className="fa fa-suitcase" /></span><span className="st-text">Tours</span></a></li>
                    <li><a href="#cruise" data-toggle="tab"><span><i className="fa fa-ship" /></span><span className="st-text">Cruise</span></a></li>
                    <li><a href="#cars" data-toggle="tab"><span><i className="fa fa-car" /></span><span className="st-text">Cars</span></a></li>
                  </ul>
                  <div className="tab-content">
                    <div id="flights" className="tab-pane in active">
                      <form>
                        <div className="row">
                          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
                            <div className="row">
                              <div className="col-xs-12 col-sm-6 col-md-6">
                                <div className="form-group left-icon">
                                  <input type="text" className="form-control" placeholder="From" />
                                  <i className="fa fa-map-marker" />
                                </div>
                              </div>
                              {/* end columns */}
                              <div className="col-xs-12 col-sm-6 col-md-6">
                                <div className="form-group left-icon">
                                  <input type="text" className="form-control" placeholder="To" />
                                  <i className="fa fa-map-marker" />
                                </div>
                              </div>
                              {/* end columns */}
                            </div>
                            {/* end row */}
                          </div>
                          {/* end columns */}
                          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
                            <div className="row">
                              <div className="col-xs-6 col-sm-6 col-md-6">
                                <div className="form-group left-icon">
                                  <input type="text" className="form-control dpd1" placeholder="Check In" />
                                  <i className="fa fa-calendar" />
                                </div>
                              </div>
                              {/* end columns */}
                              <div className="col-xs-6 col-sm-6 col-md-6">
                                <div className="form-group left-icon">
                                  <input type="text" className="form-control dpd2" placeholder="Check Out" />
                                  <i className="fa fa-calendar" />
                                </div>
                              </div>
                              {/* end columns */}
                            </div>
                            {/* end row */}
                          </div>
                          {/* end columns */}
                          <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                            <div className="form-group right-icon">
                              <select className="form-control">
                                <option selected>Adults</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                              </select>
                              <i className="fa fa-angle-down" />
                            </div>
                          </div>
                          {/* end columns */}
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-2 search-btn">
                            <button className="btn btn-orange">Search</button>
                          </div>
                          {/* end columns */}
                        </div>
                        {/* end row */}
                      </form>
                    </div>
                    {/* end flights */}
                    <div id="hotels" className="tab-pane">
                      <form>
                        <div className="row">
                          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-5">
                            <div className="row">
                              <div className="col-xs-12 col-sm-6">
                                <div className="form-group left-icon">
                                  <input type="text" className="form-control dpd1" placeholder="Check In" />
                                  <i className="fa fa-calendar" />
                                </div>
                              </div>
                              {/* end columns */}
                              <div className="col-xs-12 col-sm-6">
                                <div className="form-group left-icon">
                                  <input type="text" className="form-control dpd2" placeholder="Check Out" />
                                  <i className="fa fa-calendar" />
                                </div>
                              </div>
                              {/* end columns */}
                            </div>
                            {/* end row */}
                          </div>
                          {/* end columns */}
                          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-5">
                            <div className="row">
                              <div className="col-xs-12 col-sm-12 col-md-4">
                                <div className="form-group right-icon">
                                  <select className="form-control">
                                    <option selected>Rooms</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                  </select>
                                  <i className="fa fa-angle-down" />
                                </div>
                              </div>
                              {/* end columns */}
                              <div className="col-xs-6 col-sm-6 col-md-4">
                                <div className="form-group right-icon">
                                  <select className="form-control">
                                    <option selected>Adults</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                  </select>
                                  <i className="fa fa-angle-down" />
                                </div>
                              </div>
                              {/* end columns */}
                              <div className="col-xs-6 col-sm-6 col-md-4">
                                <div className="form-group right-icon">
                                  <select className="form-control">
                                    <option selected>Kids</option>
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                  </select>
                                  <i className="fa fa-angle-down" />
                                </div>
                              </div>
                              {/* end columns */}
                            </div>
                            {/* end row */}
                          </div>
                          {/* end columns */}
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-2 search-btn">
                            <button className="btn btn-orange">Search</button>
                          </div>
                          {/* end columns */}
                        </div>
                        {/* end row */}
                      </form>
                    </div>
                    {/* end hotels */}
                    <div id="tours" className="tab-pane">
                      <form>
                        <div className="row">
                          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-4">
                            <div className="form-group left-icon">
                              <input type="text" className="form-control" placeholder="City,Country" />
                              <i className="fa fa-map-marker" />
                            </div>
                          </div>
                          {/* end columns */}
                          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                            <div className="form-group right-icon">
                              <select className="form-control">
                                <option selected>Month</option>
                                <option>January</option>
                                <option>February</option>
                                <option>March</option>
                                <option>April</option>
                                <option>May</option>
                                <option>June</option>
                                <option>July</option>
                                <option>August</option>
                                <option>September</option>
                                <option>October</option>
                                <option>November</option>
                                <option>December</option>
                              </select>
                              <i className="fa fa-angle-down" />
                            </div>
                          </div>
                          {/* end columns */}
                          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                            <div className="row">
                              <div className="col-xs-12 col-sm-6">
                                <div className="form-group right-icon">
                                  <select className="form-control">
                                    <option selected>Adults</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                  </select>
                                  <i className="fa fa-angle-down" />
                                </div>
                              </div>
                              {/* end columns */}
                              <div className="col-xs-12 col-sm-6">
                                <div className="form-group right-icon">
                                  <select className="form-control">
                                    <option selected>Kids</option>
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                  </select>
                                  <i className="fa fa-angle-down" />
                                </div>
                              </div>
                              {/* end columns */}
                            </div>
                            {/* end row */}
                          </div>
                          {/* end columns */}
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-2 search-btn">
                            <button className="btn btn-orange">Search</button>
                          </div>
                          {/* end columns */}
                        </div>
                        {/* end row */}
                      </form>
                    </div>
                    {/* end tours */}
                    <div id="cruise" className="tab-pane">
                      <form>
                        <div className="row">
                          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
                            <div className="row">
                              <div className="col-xs-12 col-sm-6 col-md-6">
                                <div className="form-group left-icon">
                                  <input type="text" className="form-control" placeholder="From" />
                                  <i className="fa fa-map-marker" />
                                </div>
                              </div>
                              {/* end columns */}
                              <div className="col-xs-12 col-sm-6 col-md-6">
                                <div className="form-group left-icon">
                                  <input type="text" className="form-control" placeholder="To" />
                                  <i className="fa fa-map-marker" />
                                </div>
                              </div>
                              {/* end columns */}
                            </div>
                            {/* end row */}
                          </div>
                          {/* end columns */}
                          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
                            <div className="row">
                              <div className="col-xs-6 col-sm-6 col-md-6">
                                <div className="form-group left-icon">
                                  <input type="text" className="form-control dpd1" placeholder="Check In" />
                                  <i className="fa fa-calendar" />
                                </div>
                              </div>
                              {/* end columns */}
                              <div className="col-xs-6 col-sm-6 col-md-6">
                                <div className="form-group left-icon">
                                  <input type="text" className="form-control dpd2" placeholder="Check Out" />
                                  <i className="fa fa-calendar" />
                                </div>
                              </div>
                              {/* end columns */}
                            </div>
                            {/* end row */}
                          </div>
                          {/* end columns */}
                          <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                            <div className="form-group right-icon">
                              <select className="form-control">
                                <option selected>Adults</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                              </select>
                              <i className="fa fa-angle-down" />
                            </div>
                          </div>
                          {/* end columns */}
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-2 search-btn">
                            <button className="btn btn-orange">Search</button>
                          </div>
                          {/* end columns */}
                        </div>
                        {/* end columns */}
                      </form>
                    </div>
                    {/* end cruises */}
                    <div id="cars" className="tab-pane">
                      <form>
                        <div className="row">
                          <div className="col-xs-12 col-sm-12 col-md-7 col-lg-6">
                            <div className="row">
                              <div className="col-sm-6 col-md-4">
                                <div className="form-group left-icon">
                                  <input type="text" className="form-control" placeholder="Country" />
                                  <i className="fa fa-globe" />
                                </div>
                              </div>
                              {/* end columns */}
                              <div className="col-sm-6 col-md-4">
                                <div className="form-group left-icon">
                                  <input type="text" className="form-control" placeholder="City" />
                                  <i className="fa fa-map-marker" />
                                </div>
                              </div>
                              {/* end columns */}
                              <div className="col-sm-12 col-md-4">
                                <div className="form-group left-icon">
                                  <input type="text" className="form-control" placeholder="Location" />
                                  <i className="fa fa-street-view" />
                                </div>
                              </div>
                              {/* end columns */}
                            </div>
                            {/* end row */}
                          </div>
                          {/* end columns */}
                          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4">
                            <div className="row">
                              <div className="col-xs-6 col-sm-6 col-md-6">
                                <div className="form-group left-icon">
                                  <input type="text" className="form-control dpd1" placeholder="Check In" />
                                  <i className="fa fa-calendar" />
                                </div>
                              </div>
                              {/* end columns */}
                              <div className="col-xs-6 col-sm-6 col-md-6">
                                <div className="form-group left-icon">
                                  <input type="text" className="form-control dpd2" placeholder="Check Out" />
                                  <i className="fa fa-calendar" />
                                </div>
                              </div>
                              {/* end columns */}
                            </div>
                            {/* end row */}
                          </div>
                          {/* end columns */}
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-2 search-btn">
                            <button className="btn btn-orange">Search</button>
                          </div>
                          {/* end columns */}
                        </div>
                        {/* end row */}
                      </form>
                    </div>
                    {/* end cars */}
                  </div>
                  {/* end tab-content */}
                </div>
                {/* end columns */}
              </div>
              {/* end row */}
            </div>
            {/* end container */}
          </div>
          {/* end search-tabs */}
        </section>
        {/* end flexslider-container */}
        {/*=============== HOTEL OFFERS ===============*/}
        <section id="hotel-offers" className="section-padding">
          <div className="container">
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
            <div className="row">
              <div className="col-sm-12">
                <div className="page-heading">
                  <h2>Tour Hot</h2>
                  <hr className="heading-line" />
                </div>
                <div className="row">
                {tourhot.map(({ id_hot, name_hot, img_hot, price_hot, detail_hot,from_to_hot, isEditing }) => {
  return(
              <div class='col-sm-6 col-md-4'>
                  <div className="main-block vehicle-block">
                    <div className="main-img vehicle-img">
                      <a href="#"><img src={link+img_hot} className="img-responsive" alt="tour-img" /></a>
                      <div className="vehicle-time"><p><span><i className="fa fa-clock-o" /></span>22/h</p></div>
                    </div>
                    <div className='main-mask'>
                                                    <ul className='list-unstyled list-inline offer-price-1'>
                                                        <li className='price'>{price_hot}<span className='divider'>|</span><span className='pkg'>Avg/Week</span></li>
                                                            <li className='rating'>
                                                                <span><i className='fa fa-star orange'></i></span>
                                                                <span><i className='fa fa-star orange'></i></span>
                                                                <span><i className='fa fa-star orange'></i></span>
                                                                <span><i className='fa fa-star orange'></i></span>
                                                                <span><i className='fa fa-star lightgrey'></i></span>
                                                            </li>
                                                    </ul>
                                                </div>
                                                <div class='main-info hotel-info'>
                                                <div class='arrow'>
                                                    <div data-toggle='modal' data-target={callmodalhot+id_hot}><i class='fa fa-angle-right'></i></div>
                                                </div>
                                                <div class='main-title hotel-title'>
                                                    <a href='#'>{name_hot}</a>
                                                    <p>From: {from_to_hot}</p>
                                                </div>
                                            </div>
                  </div>
                </div>
  )})}
              </div>
              <div className="view-all text-center">
                <Link to="/Tour_homepage"><a href="cruise-homepage.php" className="btn btn-orange">View All</a></Link>
              </div>
              {/* end view-all */}
            </div>
            {/* end columns */}
          </div>
          </div>
          {/* end row */}
          {/* end container */}
        </section>
        {/* end hotel-offers */}
        {/*======================= BEST FEATURES =====================*/}
        <section id="best-features" className="banner-padding black-features">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3">
                <div className="b-feature-block">
                  <span><i className="fa fa-dollar" /></span>
                  <h3>Best Price Guarantee</h3>
                  <p>Our website brings you the best experiences and services with the most standard price. Our services are approved a resolution by Vietnam Travel Branch.</p>
                </div>
                {/* end b-feature-block */}
              </div>
              {/* end columns */}
              <div className="col-sm-6 col-md-3">
                <div className="b-feature-block">
                  <span><i className="fa fa-lock" /></span>
                  <h3>Safe and Secure</h3>
                  <p>All your personal informations, supported informations will be kept and secured in the best way. Only you and administrators can know. Your informations never have leaked out and lost.</p>
                </div>
                {/* end b-feature-block */}
              </div>
              {/* end columns */}
              <div className="col-sm-6 col-md-3">
                <div className="b-feature-block">
                  <span><i className="fa fa-thumbs-up" /></span>
                  <h3>Best Travel Agents</h3>
                  <p>We have related to the best Travel agency in Vietnam. Supported and admitted by many branches, we have been improving and broading our activities.</p>
                </div>
                {/* end b-feature-block */}
              </div>
              {/* end columns */}
              <div className="col-sm-6 col-md-3">
                <div className="b-feature-block">
                  <span><i className="fa fa-bars" /></span>
                  <h3>Travel Guidelines</h3>
                  <p>All your questions will be replied by administrators and they will help you. We're always side by side and help you about any problems.</p>
                </div>
                {/* end b-feature-block */}
              </div>
              {/* end columns */}
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </section>
        {/* end best-features */}
        {/*=============== TOUR OFFERS ===============*/}
        <section id="tour-offers" className="section-padding">
          <div className="container">
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
            <div className="row">
              <div className="col-sm-12">
                <div className="page-heading">
                  <h2>Tour Offers</h2>
                  <hr className="heading-line" />
                </div>
                {/* end page-heading */}
                <div className="row">
                {touroffer.map(({ id_offer, name_offer, img_offer, price_offer, detail_offer,from_to_offer, isEditing }) => {
  return(     
              <div class='col-sm-6 col-md-4'>
                  <div className="main-block vehicle-block">
                    <div className="main-img vehicle-img">
                      <a href="#"><img src={link+img_offer} className="img-responsive" alt="tour-img" /></a>
                      <div className="vehicle-time"><p><span><i className="fa fa-clock-o" /></span>22/h</p></div>
                    </div>
                    <div className='main-mask'>
                                                    <ul className='list-unstyled list-inline offer-price-1'>
                                                        <li className='price'>{price_offer}<span className='divider'>|</span><span className='pkg'>Avg/Week</span></li>
                                                            <li className='rating'>
                                                                <span><i className='fa fa-star orange'></i></span>
                                                                <span><i className='fa fa-star orange'></i></span>
                                                                <span><i className='fa fa-star orange'></i></span>
                                                                <span><i className='fa fa-star orange'></i></span>
                                                                <span><i className='fa fa-star lightgrey'></i></span>
                                                            </li>
                                                    </ul>
                                                </div>
                                                <div class='main-info hotel-info'>
                                                <div class='arrow'>
                                                    <div data-toggle='modal' data-target={callmodaloffer+id_offer}><i class='fa fa-angle-right'></i></div>
                                                </div>
                                                <div class='main-title hotel-title'>
                                                    <a href='#'>{name_offer}</a>
                                                    <p>From: {from_to_offer}</p>
                                                </div>
                                            </div>
                  </div>
                </div>
  )})}
              </div>
                {/* end owl-tour-offers */}
                <div className="view-all text-center">
                  <Link to="/Tour_homepage"><a href="#" className="btn btn-orange">View All</a></Link>
                </div>
                {/* end view-all */}
              </div>
              {/* end columns */}
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </section>
        {/* end tour-offers */}
        {/*=============== CRUISE OFFERS ===============*/}
        <section id="cruise-offers" className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-heading">
                  <h2>Cruise Offers</h2>
                  <hr className="heading-line" />
                </div>
                {/* end page-heading */}
                <div className="row">
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
                              <a href="#"> {name_cruise}</a>
                              <p>From: {from_to_cruise}</p>
                              <div className="rating">
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star orange" /></span>
                                <span><i className="fa fa-star lightgrey" /></span>
                              </div>
                              <span className="cruise-price">{price_cruise} $</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
  )})}
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
                </div>
              
              </div>
              <div className="view-all text-center">
                <Link to="/Tour_homepage"><a href="cruise-homepage.php" className="btn btn-orange">View All</a></Link>
              </div>
              {/* end view-all */}
            </div>
            {/* end columns */}
          </div>
          {/* end row */}
          {/* end container */}
        </section>
        {/* end cruise-offers */}
        {/*==================== VIDEO BANNER ===================*/}
        <section id="video-banner" className="banner-padding back-size">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h2>Take a Video Tour</h2>
                <p>Starttravels brings about the most memorable moments in life, the unprecedented impressions. We brings the beauty of Viet Nam being world-famous. Let's experience througt our video and feel it.</p>
                <a href="https://www.youtube.com/watch?v=Au6LqK1UH8g" className="popup-youtube" id="play-button"><span><i className="fa fa-play" /></span></a>
              </div>
              {/* end columns */}
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </section>
        {/* end video-banner */}
        {/*================= FLIGHT OFFERS =============*/}
        <section id="flight-offers" className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-heading">
                  <h2>Harzadous sports tour</h2>
                  <hr className="heading-line" />
                </div>
                {/* end page-heading */}
                <div className="row">
                {toursport.map(({ id_sport, name_sport, img_sport, price_sport, detail_sport,from_to_sport, isEditing }) => {
  return(
                 <div className="col-sm-6 col-md-4">
                    <div className="main-block flight-block">
                      <a>
                        <div className="flight-img">
                          <div data-toggle="modal" data-target={callmodalsport+id_sport}><img src={link+img_sport} className="img-responsive" alt="flight-img" /></div>
                        </div>
                        {/* end flight-img */}
                        <div className="flight-info">
                          <div className="flight-title">
                            <h3><span className="flight-destination">{name_sport}</span>|<span className="flight-type">{name_sport}</span></h3>
                          </div>
                          {/* end flight-title */}
                          <div className="flight-timing">
                            <ul className="list-unstyled">
                              <li><span><i className="fa fa-plane" /></span><span className="date">Aug, 02-2017 </span>(8:40 PM)</li>
                              <li><span><i className="fa fa-plane" /></span><span className="date">Aug, 03-2017 </span>(8:40 PM)</li>
                            </ul>
                          </div>
                          {/* end flight-timing */}
                          <ul className="list-unstyled list-inline offer-price-1">
                            <li className="price">{price_sport}<span className="pkg">Avg/Person</span></li>
                            <li className="rating">
                              <span><i className="fa fa-star orange" /></span>
                              <span><i className="fa fa-star orange" /></span>
                              <span><i className="fa fa-star orange" /></span>
                              <span><i className="fa fa-star orange" /></span>
                              <span><i className="fa fa-star lightgrey" /></span>
                            </li>
                          </ul>
                        </div>
                      </a>
                    </div>
                  </div>
  )})}
                </div>
                {/* end row */}
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

              <div className="view-all text-center">
                <Link to="/Tour_homepage"><a href="cruise-homepage.php" className="btn btn-orange">View All</a></Link>
              </div>
              {/* end view-all */}
            </div>
            {/* end columns */}
          </div>
          {/* end row */}
          {/* end container */}
        </section>
        {/* end flight-offers */}
        {/*==================== HIGHLIGHTS ====================*/}
        <section id="highlights" className="section-padding back-size">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="row">
                  <div id="boxes">
                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                      <div className="highlight-box">
                        <div className="h-icon">
                          <span><i className="fa fa-plane" /></span>
                        </div>
                        {/* end h-icon */}
                        <div className="h-text">
                          <span className="numbers">2496</span>
                          <p>Outstanding Tours</p>
                        </div>
                        {/* end h-text */}
                      </div>
                      {/* end highlight-box */}
                    </div>
                    {/* end columns */}
                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                      <div className="highlight-box">
                        <div className="h-icon">
                          <span><i className="fa fa-ship" /></span>
                        </div>
                        {/* end h-icon */}
                        <div className="h-text cruise">
                          <span className="numbers">1906</span>
                          <p>Worldwide Cruise</p>
                        </div>
                        {/* end h-text */}
                      </div>
                      {/* end highlight-box */}
                    </div>
                    {/* end columns */}
                    <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                      <div className="highlight-box">
                        <div className="h-icon">
                          <span><i className="fa fa-taxi" /></span>
                        </div>
                        {/* end h-icon */}
                        <div className="h-text taxi">
                          <span className="numbers">2033</span>
                          <p>Luxury Car Booking</p>
                        </div>
                        {/* end h-text */}
                      </div>
                      {/* end highlight-box */}
                    </div>
                    {/* end columns */}
                  </div>
                  {/* end boxes */}
                </div>
                {/* end row */}
              </div>
              {/* end columns */}
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </section>
        {/* end highlights */}
        {/*================ VEHICLE OFFERS ==============*/}
        <section id="vehicle-offers" className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-heading">
                  <h2>Capital tour</h2>
                  <hr className="heading-line" />
                </div>
                {/* end page-heading */}
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
                <div className="row">
                {tourcapital.map(({ id_capital, name_capital, img_capital, price_capital, detail_capital,from_to_capital, isEditing }) => {
  return(                
              <div class='col-sm-6 col-md-4'>
                  <div className="main-block vehicle-block">
                    <div className="main-img vehicle-img">
                      <a href="#"><img src={link+img_capital} className="img-responsive" alt="tour-img" /></a>
                      <div className="vehicle-time"><p><span><i className="fa fa-clock-o" /></span>22/h</p></div>
                    </div>
                    <div className="offer-price-2">
                      <ul className="list-unstyled">
                        <li className="price">{price_capital}<a data-toggle="modal" data-target={callmodalcapital+id_capital}><span className="arrow"><i className="fa fa-angle-right" /></span></a></li>
                      </ul>
                    </div>
                    <div className="main-info vehicle-info">
                      <div className="main-title vehicle-title">
                        <a href="#"> {name_capital}</a>
                        <p>Ha Noi</p>
                        <div className="rating">
                          <span><i className="fa fa-star orange" /></span>
                          <span><i className="fa fa-star orange" /></span>
                          <span><i className="fa fa-star orange" /></span>
                          <span><i className="fa fa-star orange" /></span>
                          <span><i className="fa fa-star lightgrey" /></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  )})}
              </div>
              {/* end row */}
              <div className="view-all text-center">
                <Link to="/Tour_homepage"><a href="cruise-homepage.php" className="btn btn-orange">View All</a></Link>
              </div>
              </div>
              {/* end view-all */}
            </div>
            {/* end columns */}
          </div>
          {/* end row */}
          {/* end container */}
        </section>
        {/* end vehicle-offers */}
        {/*==================== TESTIMONIALS ====================*/}
        <section id="testimonials" className="section-padding back-size">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-heading white-heading">
                  <h2>Testimonials</h2>
                  <hr className="heading-line" />
                </div>
                {/* end page-heading */}
                <div className="carousel slide" data-ride="carousel" id="quote-carousel">
                  <div className="carousel-inner text-center">
                    <div className="item active">
                      <blockquote>introducing, I am a administrator of this website. I am really happy because of your feedback. I am so glad to bring a place like that to you. I will try to do more and more for your joys. Why don't you come here and experience
                        if you want to know how this place can pay attention to a lot of people. Welcome to StrartTravel.</blockquote>
                      <div className="rating">
                        <span><i className="fa fa-star orange" /></span>
                        <span><i className="fa fa-star orange" /></span>
                        <span><i className="fa fa-star orange" /></span>
                        <span><i className="fa fa-star orange" /></span>
                        <span><i className="fa fa-star lightgrey" /></span>
                      </div>
                      {/* end rating */}
                      <small>Khang Ha</small>
                    </div>
                    {/* end item */}
                    <div className="item">
                      <blockquote>I feel this is a prestige and interesting place. You will get the joys in life when coming there. I visited there many times and I am satisfied with the views, people and services at here. Unintentionally, I knew there
                        through friends' suggestions. I feel there is a fantastic place, you can have confidence in there. Hope you're funny.</blockquote>
                      <div className="rating">
                        <span><i className="fa fa-star orange" /></span>
                        <span><i className="fa fa-star orange" /></span>
                        <span><i className="fa fa-star orange" /></span>
                        <span><i className="fa fa-star orange" /></span>
                        <span><i className="fa fa-star lightgrey" /></span>
                      </div>
                      {/* end rating */}
                      <small>Hang Ho</small>
                    </div>
                    {/* end item */}
                    <div className="item">
                      <blockquote>I knew this place unintentionally through my friends. They suggested me to visit it and I have already gone to there. For me, It is a fantastic and nice place. You can have a confidence in there. Let's go to visit and enjoy
                        it, you will be funny. I am quite satisfied with the harmonious and eye-catching design, everything is easy to distinguish and feels comfortable.</blockquote>
                      <div className="rating">
                        <span><i className="fa fa-star orange" /></span>
                        <span><i className="fa fa-star orange" /></span>
                        <span><i className="fa fa-star orange" /></span>
                        <span><i className="fa fa-star orange" /></span>
                        <span><i className="fa fa-star lightgrey" /></span>
                      </div>
                      {/* end rating */}
                      <small>Huan Nguyen</small>
                    </div>
                    {/* end item */}
                  </div>
                  {/* end carousel-inner */}
                  <ol className="carousel-indicators">
                    <li data-target="#quote-carousel" data-slide-to={0} className="active"><img src="images/IMG_6909.jpg" className="img-responsive" alt="client-img" />
                    </li>
                    <li data-target="#quote-carousel" data-slide-to={1}><img src="images/IMG_6916.jpg" className="img-responsive" alt="client-img" />
                    </li>
                    <li data-target="#quote-carousel" data-slide-to={2}><img src="images/IMG_6949.jpg" className="img-responsive" alt="client-img" />
                    </li>
                  </ol>
                </div>
                {/* end quote-carousel */}
              </div>
              {/* end columns */}
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </section>
        {/* end testimonials */}
        {/*================ LATEST BLOG ==============*/}
        <section id="latest-blog" className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="page-heading">
                  <h2>Our Latest Blogs</h2>
                  <hr className="heading-line" />
                </div>
                <div className="row">
                {blog.map(({ id_blog, author_blog, img_blog, time_blog, title_blog,content_blog, isEditing }) => {
  return(
  <div className="col-sm-6 col-md-4">
                    <div className="main-block latest-block">
                      <div className="main-img latest-img">
                      <Link to="/Blog_homepage"><a href="#">
                          <img src={link+img_blog} className="img-responsive" alt="blog-img" />
                        </a></Link>
                      </div>
                      <div className="latest-info">
                        <ul className="list-unstyled">
                          <li><span><i className="fa fa-calendar-minus-o" /></span>{time_blog}<span className="author">by: <a href="#">{author_blog}</a></span></li>
                        </ul>
                      </div>
                      <div className="main-info latest-desc">
                        <div className="row">
                          <div className="col-xs-10 col-sm-10 main-title">
                            <a href="#">{title_blog}</a>
                            <p>{content_blog}</p>
                          </div>
                        </div>
                        <Link to="/Blog_homepage"><span className="arrow"><a href="#"><i className="fa fa-angle-right" /></a></span></Link>
                      </div>
                    </div>
                  </div>
  )})}
                </div>
                {/* end row */}
                <div className="view-all text-center">
                 <Link to="/Blog_homepage"><a href="#" className="btn btn-orange">View All</a></Link> 
                </div>
                {/* end view-all */}
              </div>
              {/* end columns */}
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </section>
        {/* end latest-blog */}
        {/*========================= NEWSLETTER-1 ==========================*/}
        <section id="newsletter-1" className="section-padding back-size newsletter">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                <h2>Subscribe Our Newsletter</h2>
                <p>Subscibe to receive our interesting updates</p>
                <form action="email.php" method="post">
                  <div className="form-group">
                    <div className="input-group">
                      <input type="email" name="email" className="form-control input-lg" placeholder="Enter your email address" required />
                      <span className="input-group-btn"><button type="submit" className="btn btn-lg"><i className="fa fa-envelope" /></button></span>
                    </div>
                  </div>
                </form>
              </div>
              {/* end columns */}
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </section>
      </div>
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
      );}
  }
export default Index;