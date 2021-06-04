import {useContext, useState  } from "react";
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Adminhot from './admin_hot';
import Adminall from './admin_all';
import Admincruise from './admin_cruise';
import Adminsport from './admin_sport';
import Admincapital from './admin_capital';
import Adminblog from './admin_blog';
import Adminaccount from './admin_account';
import Admincart from './admin_cart';
import Adminoffer from './admin_offer';
import Adminexit from './admin_exit';
import Login from "./login/login";
import { AppContext } from "../Context";
import Chat from "./chat";

const Menu=()=>{
  const [listsearch, setListsearch] = useState({});
  const [newadMess, setNewadMess] = useState({});
  function mapRevers2(reverse) {
    let reversed = reverse.map( (num,index,reverse) => reverse[(reverse.length-1)-index] );
    return reversed;
}
  const addNewadMess = (event) => {
    const target=event.target;
    const field =target.name;
    const value=target.value;
    setNewadMess({
      ...newadMess,
      [field]: value,
    });
  };

  const addddddMess = (e,id_account) => {
    e.preventDefault();
    addadmess(newadMess,id_account);
    e.target.reset();
  };
  const {
    searchsearch,
    searchhot,
    searchcruise,
    searchsport,
    searchoffer,
    searchcapital,
    addMess,
    mess,
    active,
    messad,
    show,
    showmesss,
    addadmess
  } = useContext(AppContext);
  const [kt, setKt] = useState(0);
  const [idtest, setIdtest] = useState(0);
  const [ktt, setKtt] = useState(0);
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
    setKt(kt+1);
    searchsearch(listsearch);
    console.log(listsearch);
  };
  const kiemtramess = (id) => {
    if(ktt===0){
      setIdtest(idtest+id);
    setKtt(ktt+1);}else{
      setKtt(ktt-1);
      setIdtest(0);
    }
    showmesss(id);
  };
  if(ktt===0){
    return (
      <Router>
      <div>
         <nav className="navbar navbar-default main-navbar navbar-custom navbar-white" id="mynavbar-1">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" id="menu-button">
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <div className="header-search hidden-lg">
                <a href="javascript:void(0)" className="search-button"><span><i className="fa fa-search" /></span></a>
              </div>
              <Link to={'/'} className="navbar-brand"><span><i className="fa fa-plane" />START</span>TRAVELS</Link>
            </div>
          {/* end overlay-content */}
            {/* end navbar-header */}
            <div className="collapse navbar-collapse" id="myNavbar1">           
              <ul className="nav navbar-nav navbar-right navbar-search-link">
              
       
                <li className="dropdown active"><a href="#" className="dropdown-toggle" data-toggle="dropdown">HOME<span><i className="fa fa-angle-down" /></span></a>
                  <ul className="dropdown-menu">
                    <li><Link to={'/All_tour'}>All tour</Link></li>
                    <li><Link to={'/Tour_hots'}>Tour hot</Link></li>
                    <li><Link to={'/Tour_offers'}>Tour offer</Link></li>
                    <li><Link to={'/Tour_cruises'}>Cruise Offers</Link></li>
                    <li><Link to={'/Tour_sports'}>Harzadous Sports Tour</Link></li>
                    <li><Link to={'/Tour_capitals'}>Capital Tour</Link></li>
                    <li><Link to={'/Blogs'}>Our Latest Blogs</Link></li>
                    <li><Link to={'/Accounts'}>Accounts</Link></li>
                    <li><Link to={'/Cart'}>Cart</Link></li>
                    <li><Link to={'/'}>Exit</Link></li>
                  </ul>
                </li>
                <li >
            <form className="insertForm" onSubmit={timkiem}>
                <div className="form-group">
                  <div className="input-group">
                    <input type="text" id="search" onChange={(event) => addSearch(event)} className="form-control" name="search" placeholder="Search..." required />
                    <Link to={'/'}><button type="submit" onClick={() => timkiem()} className="btn"><span><i className="fa fa-search" /></span></button></Link>
                  </div>               
                </div>
              </form>

              </li>
              </ul>
            </div>
            {/* end navbar collapse */}
          </div>
          {/* end container */}



          <div class="chat-popup2" id="myForm">
        <div class="form-container">
        <div id="test">
        {mapRevers2(messad).map(({id_account,summess,name_account}) => {
        return(
                <button onClick={() => kiemtramess(id_account)}  className="usermess"><b>{name_account}</b><span class="iconsss"><i className="fa fa-angle-right" /></span><br></br>{summess} message</button>
        )})}
         </div>
      </div>
   </div>






        </nav>
        <Switch>
          <Route exact path ='/All_tour' component={Adminall} />
          <Route path ='/Tour_hots' component={Adminhot} />
          <Route path ='/Tour_offers' component={Adminoffer} />
          <Route path ='/Tour_cruises' component={Admincruise} />
          <Route path ='/Tour_sports' component={Adminsport} />
          <Route path ='/Tour_capitals' component={Admincapital} />
          <Route path ='/Blogs' component={Adminblog} />
          <Route path ='/Accounts' component={Adminaccount} />
          <Route path ='/Cart' component={Admincart} />
          <Route path ='/' component={Adminexit} />
          <Route path ='/Login' component={Login} />
          <Route path ='/Chat' component={Chat} />
        </Switch>
      </div>
      </Router>
    );}else{
      return (
        <Router>
        <div>
           <nav className="navbar navbar-default main-navbar navbar-custom navbar-white" id="mynavbar-1">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" id="menu-button">
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <div className="header-search hidden-lg">
                  <a href="javascript:void(0)" className="search-button"><span><i className="fa fa-search" /></span></a>
                </div>
                <Link to={'/'} className="navbar-brand"><span><i className="fa fa-plane" />START</span>TRAVELS</Link>
              </div>
            {/* end overlay-content */}
              {/* end navbar-header */}
              <div className="collapse navbar-collapse" id="myNavbar1">           
                <ul className="nav navbar-nav navbar-right navbar-search-link">
                
         
                  <li className="dropdown active"><a href="#" className="dropdown-toggle" data-toggle="dropdown">HOME<span><i className="fa fa-angle-down" /></span></a>
                    <ul className="dropdown-menu">
                      <li><Link to={'/All_tour'}>All tour</Link></li>
                      <li><Link to={'/Tour_hots'}>Tour hot</Link></li>
                      <li><Link to={'/Tour_offers'}>Tour offer</Link></li>
                      <li><Link to={'/Tour_cruises'}>Cruise Offers</Link></li>
                      <li><Link to={'/Tour_sports'}>Harzadous Sports Tour</Link></li>
                      <li><Link to={'/Tour_capitals'}>Capital Tour</Link></li>
                      <li><Link to={'/Blogs'}>Our Latest Blogs</Link></li>
                      <li><Link to={'/Accounts'}>Accounts</Link></li>
                      <li><Link to={'/Cart'}>Cart</Link></li>
                      <li><Link to={'/'}>Exit</Link></li>
                    </ul>
                  </li>
                  <li >
              <form className="insertForm" onSubmit={timkiem}>
                  <div className="form-group">
                    <div className="input-group">
                      <input type="text" id="search" onChange={(event) => addSearch(event)} className="form-control" name="search" placeholder="Search..." required />
                      <Link to={'/'}><button type="submit" onClick={() => timkiem()} className="btn"><span><i className="fa fa-search" /></span></button></Link>
                    </div>               
                  </div>
                </form>
  
                </li>
                </ul>
              </div>
              {/* end navbar collapse */}
            </div>
            {/* end container */}
  
            
          <div class="chat-popup2" id="myForm">
              {/* /////////////////////////////////////// */}
              <div >
      <form class="form-container" onSubmit={(event) => addddddMess(event,idtest)} >
      <div id="test">
      {mapRevers2(show).map(({id_account,content_mess,time_mess,name_account}) => {
      if ((name_account==="admin")||(!name_account)){
            return(
              <div>
                  <input type="text" value={content_mess} className="mess2" disabled />
                  <h4 className="ttad">{time_mess} by me</h4>
              </div>
            )
          }else{
 return(
    <div>
        <input type="text" value={content_mess} className="mess" disabled />
        <h4 className="ttad2">{time_mess} by {name_account}</h4>
    </div>
  )}})}
 </div>
        <div className="sub">
      <input type="text" id="messa" placeholder="Type message.." onChange={(event) => addNewadMess(event)} name="content_mess" required></input>
      <button type="submit" class="btnbtn">Send</button>
      </div>
    </form>
  </div>
            
     {/* /////////////////////////////////////// */}
              <div class="form-container">
            <div id="test">
            {mapRevers2(messad).map(({id_account,summess,name_account,content_mess}) => {
        return(
                <button onClick={() => kiemtramess(id_account)}  className="usermess"><b>{name_account}</b><span class="iconsss"><i className="fa fa-angle-right" /></span><br></br>{summess} message</button>
        )})}
         </div>
           </div>
     </div>
    

  
          </nav>
          <Switch>
            <Route exact path ='/All_tour' component={Adminall} />
            <Route path ='/Tour_hots' component={Adminhot} />
            <Route path ='/Tour_offers' component={Adminoffer} />
            <Route path ='/Tour_cruises' component={Admincruise} />
            <Route path ='/Tour_sports' component={Adminsport} />
            <Route path ='/Tour_capitals' component={Admincapital} />
            <Route path ='/Blogs' component={Adminblog} />
            <Route path ='/Accounts' component={Adminaccount} />
            <Route path ='/Cart' component={Admincart} />
            <Route path ='/' component={Adminexit} />
            <Route path ='/Login' component={Login} />
            <Route path ='/Chat' component={Chat} />
          </Switch>
        </div>
        </Router>
      );
    }
  }
export default Menu;
