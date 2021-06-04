import React,{Component} from 'react';
import Page from './page';
import Form from './form';
import Feature from './feature';
import Mail from './mail';
import Menu from '../menu/menu';
import Menunu from '../menunu/menunu';
class LoginHeader extends Component{
    render(){
        return(
            <div>
          
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
            <Menu />
            <Menunu />
            <Page />
            <Form />
            <Feature />
            <Mail />
          </div>
        );
    }
}
export default LoginHeader;