import {useContext, useState  } from "react";
import Best from './best';
import Flex from './flex';
import Hightlight from './hightlight';
import Mail from './mail';
import Testimonior from './testimonior';
import Tour from './tour';
import { AppContext } from "../../Context";


const All_tour=()=>{
  const [listsearch, setListsearch] = useState({});
  const link="images/";
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
const [kt, setKt] = useState(0);
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
    searchsearch,
    searchhot,
    searchcruise,
    searchsport,
    searchoffer,
    searchcapital,
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
  } = useContext(AppContext);

  const addSearch = (event) => {
    const target=event.target;
    const field =target.name;
    const value=target.value;
    setListsearch({
      ...listsearch,
      [field]: value,
    });
  };
  const timkiem = (e) => {
    e.preventDefault();
    setKt(kt+1);
    searchsearch(listsearch);
    e.target.reset();
  };
    return(
       <div>
        {/*====== LOADER =====*/}
        <div className="loader" />
        {/*======== SEARCH-OVERLAY =========*/}
        <div className="overlay">
          <a href="javascript:void(0)" id="close-button" className="closebtn">×</a>
          <div className="overlay-content">
            <div className="form-center">
              
              <form className="insertForm" onSubmit={timkiem}>
                <div className="form-group">
                  <div className="input-group">
                    <input type="text"  onChange={(event) => addSearch(event)} id="search" name="search" className="form-control" placeholder="Search by name..." required />
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
        <Flex />
       <Tour />
       <Hightlight />
       <Best />
       <Testimonior />
       <Mail />
      </div>
    );
  }
export default All_tour;