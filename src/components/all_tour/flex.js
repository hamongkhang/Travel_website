import React,{Component} from 'react';

class Flex extends Component{
  render(){
    return(
        <section className="flexslider-container" id="flexslider-container-5">
        <div className="flexslider slider" id="slider-5">
          <ul className="slides">
            <li className="item-1 back-size" style={{background: 'linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(images/co-nen-di-du-lich-da-nang-vao-thang-11-h1.jpg) 50% 65%', backgroundSize: '142%', height: '100%'}}>
              <div className="meta">
                <div className="container">
                  <h2>Da Nang Boat Tour</h2>
                  <p>Where nature blends with curves. Cheap price, beautiful scene is nothing more.</p>
                  <span className="highlight-price">STARTING FROM 1200$ ONLY</span>
                </div>
                {/* end container */}
              </div>
              {/* end meta */}
            </li>
            {/* end item-1 */}
            <li className="item-2 back-size" style={{background: 'linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(images/ĐN.jpg) 50% 65%', backgroundSize: '142%', height: '100%'}}>
              <div className=" meta">
                <div className="container">
                  <h2>Da Nang Boat Tour</h2>
                  <p>Where nature blends with curves. Cheap price, beautiful scene is nothing more.</p>
                  <span className="highlight-price">STARTING FROM 1200$ ONLY</span>
                </div>
                {/* end container */}
              </div>
              {/* end meta */}
            </li>
            {/* end item-2 */}
            <li className="item-1 back-size" style={{background: 'linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(images/du-lich-da-nang.jpg) 50% 65%', backgroundSize: '142%', height: '100%'}}>
              <div className="meta">
                <div className="container">
                  <h2>Da Nang Boat Tour</h2>
                  <p>Where nature blends with curves. Cheap price, beautiful scene is nothing more.</p>
                  <span className="highlight-price">STARTING FROM 1200$ ONLY</span>
                </div>
                {/* end container */}
              </div>
              {/* end meta */}
            </li>
            {/* end item-1 */}
          </ul>
        </div>
        {/* end slider */}
        <div className="search-tabs" id="search-tabs-5">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="tab-content">
                  <div id="cruise" className="tab-pane active">
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
    );
  }
}
export default Flex;