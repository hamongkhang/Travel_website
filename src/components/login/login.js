import React,{Component} from 'react';
import Page from './page';
import Form from './form';
import Feature from './feature';
import Mail from './mail';
import { AppContext } from "../../Context";
import { useContext, useState } from "react";
import Error_page from '../error_page/error_page';
import Index from '../index';
import Hello from '../cart/hello';


const Login = () => {
  const {
    logout,
    active
  } = useContext(AppContext);
 
  let dem=0;
  {active.map((item) => {
             dem=dem+1;
  })}
  if(dem<1){
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
            <Page />
            <Form />
            <Feature />
            <Mail />
          </div>
        );}
        else{
          return(
            <Hello />
          );
        }
    }
export default Login;