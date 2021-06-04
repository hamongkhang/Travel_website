import React,{Component} from 'react';
import Page from './page';
import Myhistory from './myhistory';
class History extends Component{
    render(){
        return(
            <div>
            {/*====== LOADER =====*/}
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
            <Page />
            <h1 className="text-center"><b>HISTORY</b></h1>
            <Myhistory />
                  <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
            {/*======================= FOOTER =======================*/}
          </div>
        );
    }
}
export default History;