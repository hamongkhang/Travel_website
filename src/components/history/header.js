import React,{Component} from 'react';

class Header extends Component{
    render(){
        return(
<div id="top-bar" className="tb-text-white">
<div className="container">
  <div className="row">
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
      <div id="info">
        <ul className="list-unstyled list-inline">
          <li><span><i className="fa fa-map-marker" /></span>Passerellesnumériques Viet Nam</li>
          <li><span><i className="fa fa-phone" /></span>+03 964 988 91</li>
        </ul>
      </div>
      {/* end info */}
    </div>
    {/* end columns */}
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
      <div id="links">
        <ul className="list-unstyled list-inline">
          <li><a href="login.php" id="thanh1"><span><i className="fa fa-lock" /></span>Login</a></li>
          <li><a href="registration.php" id="thanh2"><span><i className="fa fa-plus" /></span>Sign up</a></li>
          <li><a href="logout.php" id="thanh3"><span><i className="fa fa-sign-out" /></span>Logout</a></li>
          <li><a href="cart.php" id="thanh4"><span><i className="fa fa-shopping-cart" /></span>Cart</a>
          </li>
          <li>
            <form>
              <ul className="list-inline">
                <li>
                  <div className="form-group currency">
                    <span><i className="fa fa-angle-down" /></span>
                    <select className="form-control">
                      <option value>$</option>
                      <option value>đ</option>
                      <option value>£</option>
                    </select>
                  </div>
                  {/* end form-group */}
                </li>
                <li>
                  <div className="form-group language">
                    <span><i className="fa fa-angle-down" /></span>
                    <select className="form-control">
                      <option value>EN</option>
                      <option value>VI</option>
                      <option value>FR</option>
                    </select>
                  </div>
                  {/* end form-group */}
                </li>
                <li>
                  <a id="ten"><span><i className="fa fa-circle blackiconcolor" /></span>
                    {/*?php
                                      include('login_set.php');
                                      $ten = new user();
                                      $rows = $ten-*/}fetch();
                    if (!empty($rows)) {'{'}
                    foreach ($rows as $row) {'{'}
                    $name = $row['activity_name'];
                    {'}'}
                    echo $name;
                    {'}'}
                    ?&gt;</a>
                </li>
              </ul>
            </form>
          </li>
        </ul>
      </div>
    </div>
    {/* end links */}
  </div>
  {/* end columns */}
</div>
{/* end row */}
</div>
        );
    }
}
export default Header;