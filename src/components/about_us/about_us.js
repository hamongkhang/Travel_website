import React,{Component} from 'react';
import Feature from './feature';
import Mail from './mail';
import Page from './page';
import Content from './content';
class About_us extends Component{
  render(){
    return(
      <div>
 <div className="loader" />
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
      <Page />
      <Content />
      <Feature />
      <Mail />
      </div>
    );
  }
}
export default About_us;