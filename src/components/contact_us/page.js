import React,{Component} from 'react';

class Page extends Component{
    render(){
        return(
    <section className="page-cover" id="cover-contact-us">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h1 className="page-title">Contact Us</h1>
          <ul className="breadcrumb">
            <li><a href="index.php">Home</a></li>
            <li className="active">Contact Us Page</li>
          </ul>
        </div>
        {/* end columns */}
      </div>
      {/* end row */}
    </div>
    {/* end container */}
  </section>
        );
    }
}
export default Page;