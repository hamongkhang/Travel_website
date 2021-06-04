import React, { Component } from 'react';
class Main extends Component {
  render() {
    return(
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
    );
  }
}
export default Main;