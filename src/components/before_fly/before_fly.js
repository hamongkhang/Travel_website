import React,{Component} from 'react';

class Before_fly extends Component{
  render(){
    return(
      <div>
      {/*====== LOADER =====*/}
      <div className="loader" />
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
      {/*================= PAGE-COVER ================*/}
      <section className="page-cover" id="cover-byf-info">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="page-title">Before You Fly</h1>
              <ul className="breadcrumb">
                <li><a href="index.php">Home</a></li>
                <li className="active">Before You Fly</li>
              </ul>
            </div>
            {/* end columns */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
      {/* end page-cover */}
      {/*==== INNERPAGE-WRAPPER =====*/}
      <section className="innerpage-wrapper">
        <div id="byf-guidelines" className="innerpage-section-padding">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 content-side byf-info">
                <div className="space-right">
                  <ul className="nav nav-tabs">
                    <li className="active"><a href="#airport-info" data-toggle="tab"><span><i className="fa fa-building" /></span>Airport Info</a></li>
                    <li><a href="#visa-passport" data-toggle="tab"><span><i className="fa fa-ticket" /></span>Visa &amp; Passport</a></li>
                    <li><a href="#check-in" data-toggle="tab"><span><i className="fa fa-check" /></span>Check In</a></li>
                    <li><a href="#baggage-info" data-toggle="tab"><span><i className="fa fa-suitcase" /></span>Baggage Information</a></li>
                  </ul>
                  <div className="tab-content">
                    <div id="airport-info" className="tab-pane in active">
                      <div className="byf-info-wrap">
                        <img src="images/VNA JPA aircraft.webp" className="img-responsive" alt="byf-info-img" />
                        <h3 className="byf-info-heading">Airport Information</h3>
                        <p>Tan Son Nhat International Airport (transaction name: Tan Son Nhat International Airport; IATA: SGN is the abbreviation of Saigon - Tan Son Nhat; ICAO: VVTS; before 1975 it was called Tan Son Nhut Airport. ) is
                          the largest international airport in Vietnam. Tan Son Nhat International Airport with an area of ​​850ha ranks first in terms of area and terminal capacity (with a design capacity of 28 million passengers /
                          year in 2018 and overloaded when the number of passengers is 38 million passengers / year). year [2], compared with the current capacity of Noi Bai airport is 20-25 million [3] and area of ​​815ha, Da Nang airport
                          is 13 million) and is also the airport with the largest number of passengers in Vietnam. . 8 km from the center of Ho Chi Minh City to the north, in Tan Binh district, Tan Son Nhat international airport is an
                          important traffic hub of the whole south. In 2014, this airport served 26,546,475 passengers, was in the group of 50 airports with the most customers in the world. In 2016, this airport served 32.6 million passengers,
                          an increase of 22.8% compared to 2015 and 38.5 million passengers in 2018. This airport is the main place of operation of all Vietnamese airlines, and is the headquarters of the Vietnam Airlines Corporation,
                          which manages all civil airports in Vietnam. Tan Son Nhat International Airport is under the management and operation of Vietnam Aviation Corporation (JSC), under the Ministry of Transport.</p>
                        <ul>
                          <li>Veniam delectus ei vis st atqui timeam mnesarchum at.</li>
                          <li>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri.</li>
                          <li>Est atqui timeam mnesarchum at, pro an eros perpetua ullamcorper.</li>
                          <li>Ad duo fugit aeque fabulas, in lucilius prodesset pri.</li>
                          <li>Veniam delectus ei vis st atqui timeam mnesarchum at.</li>
                        </ul>
                      </div>
                      {/* end byf-info-wrap */}
                      <div className="byf-info-wrap">
                        <h3 className="byf-info-heading">Airport Terminals</h3>
                        <p>The airport has two parallel runways, of which the 07L / 25R runway is 3,048m long and 45m wide, the 07R / 25L runway is 3,800m long and 45m wide, and can serve the flights of many types of aircraft. The international
                          terminal with 10 aerospace bridges (six more than the domestic terminal) can accommodate long-range wide-body jets such as Boeing 747-400, Boeing 777-200 / 300, Airbus A350, Boeing 767, Airbus A330, Boeing 787,
                          Airbus A380, ... The airport currently has two runways located close to each other, so it is not possible to take off and land on two flights at the same time, but have to take turns. Once one takes off, the
                          other can land. Consequently, the aircraft took off slowly, when it arrived at the local airports, it was also slow and the aircraft turned around slowly, forming a closed chain of flight delays of Vietnam's
                          aviation industry. From February 25 to October 25, 2015, the 07L / 25R runway was closed for repairs, reducing {'{'}\ displaystyle {'{'}\ tfrac {'{'}1{'}'} {'{'}3{'}'}{'}'}{'}'} {'{'}\ displaystyle {'{'}\ tfrac {'{'}1{'}'} {'{'}3 {'}'}{'}'}{'}'} The service capacity of this
                          airport, extending the waiting time for takeoff and landing of aircraft during peak hours. Currently, the average number of flights taking off and landing at Tan Son Nhat airport is more than 700 flights / day,
                          especially during the peak occasion, it is nearly 900 flights / day. Capacity through the runway is being coordinated 44 flights / hour, ie an average aircraft takes off or land every 1 minute 20 seconds.</p>
                      </div>
                      {/* end byf-info-wrap */}
                    </div>
                    {/* end airport-info */}
                    <div id="visa-passport" className="tab-pane">
                      <div className="byf-info-wrap">
                        <img src="images/thu-tuc-xin-visa-1.jpg" className="img-responsive" alt="byf-info-img" />
                        <h3 className="byf-info-heading">Passports &amp; Visas</h3>
                        <p>20 USD if applying for a visa to go under 90 days - 50 USD if applying for a one-time visa over 90 days - 60 USD if applying for a visa to go 2 times in a row in 6 months - 80 USD if applying for visa to go many
                          times * Conditions to be applied for multiple travel visas: apply to those who have entered Korea more than 4 times within the 2 years to the date. Intended visa date and does not violate the rules of immigration.
                          Visa is valid for 1 year, each entry does not exceed 30 days The rejected applications only return the passport and original documents. Failure to return documents and paid fees Separately for rejected Overseas
                          Student applications, in addition to the original passport, students will receive their original diploma, transcript and savings book l Time to receive application: Morning: From 09:00 ~ 12:00 / Afternoon: From
                          14:00 ~ 16:00 (Marriage visa only accepts applications in the morning) l Time to pay visa: From 14:00 ~ 16:00 l Note: - In case of applying for Marriage visa and Visiting relative: Brokerage organizations are
                          strictly forbidden to submit and obtain visas for brides, brides must directly come and collect visas. For relative visit visa, only the relative named in the family register of the person who wants to apply
                          for a visa can submit the application and receive the result.</p>
                      </div>
                      {/* end byf-info-wrap */}
                      <div className="byf-info-wrap">
                        <h3 className="byf-info-heading">Custom &amp; Immigration</h3>
                        <p>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis. Est atqui timeam mnesarchum at, pro an eros perpetua ullamcorper. Lorem ipsum dolor sit amet, ad duo fugit
                          aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis. Est atqui timeam mnesarchum at, pro an eros perpetua ullamcorper. Est atqui timeam mnesarchum at, pro an eros perpetua ullamcorper. Lorem ipsum
                          dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis. Est atqui timeam mnesarchum at, pro an eros perpetua ullamcorper.</p>
                        <ul>
                          <li>Veniam delectus ei vis st atqui timeam mnesarchum at.</li>
                          <li>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri.</li>
                          <li>Est atqui timeam mnesarchum at, pro an eros perpetua ullamcorper.</li>
                          <li>Ad duo fugit aeque fabulas, in lucilius prodesset pri.</li>
                          <li>Veniam delectus ei vis st atqui timeam mnesarchum at.</li>
                        </ul>
                      </div>
                      {/* end byf-info-wrap */}
                    </div>
                    {/* end visa-passport */}
                    <div id="check-in" className="tab-pane">
                      <div className="byf-info-wrap">
                        <img src="images/unnamed (1).jpg" className="img-responsive" alt="byf-info-img" />
                        <h3 className="byf-info-heading">Airport Check-In</h3>
                        <p>Check-in is now much easier and more convenient with online check-in service on the website and mobile app of Vietnam Airlines. Online check-in service is available to passengers traveling on domestic and international
                          flights operated by Vietnam Airlines, departing from a number of airports. For flights not operated by Vietnam Airlines, please contact the airlines operating the flight for check-in or airport check-in.</p>
                      </div>
                      {/* end byf-info-wrap */}
                      <div className="byf-info-wrap">
                        <h3 className="byf-info-heading">Website Check-In</h3>
                        <p>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis. Est atqui timeam mnesarchum at, pro an eros perpetua ullamcorper. Lorem ipsum dolor sit amet, ad duo fugit
                          aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis. Est atqui timeam mnesarchum at, pro an eros perpetua ullamcorper. Est atqui timeam mnesarchum at, pro an eros perpetua ullamcorper. Lorem ipsum
                          dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis. Est atqui timeam mnesarchum at, pro an eros perpetua ullamcorper.</p>
                      </div>
                      {/* end byf-info-wrap */}
                    </div>
                    {/* end check-in */}
                    <div id="baggage-info" className="tab-pane">
                      <div className="byf-info-wrap">
                        <img src="images/vdo12.jpg" className="img-responsive" alt="byf-info-img" />
                        <h3 className="byf-info-heading">Booking of Baggage</h3>
                        <p>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis. Est atqui timeam mnesarchum at, pro an eros perpetua ullamcorper. Lorem ipsum dolor sit amet, ad duo fugit
                          aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis. Est atqui timeam mnesarchum at, pro an eros perpetua ullamcorper. Est atqui timeam mnesarchum at, pro an eros perpetua ullamcorper. Lorem ipsum
                          dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis. Est atqui timeam mnesarchum at, pro an eros perpetua ullamcorper.</p>
                      </div>
                      {/* end byf-info-wrap */}
                      <div className="byf-info-wrap">
                        <h3 className="byf-info-heading">Max Limit Baggage</h3>
                        <p>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis. Est atqui timeam mnesarchum at, pro an eros perpetua ullamcorper. Lorem ipsum dolor sit amet, ad duo fugit
                          aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis. Est atqui timeam mnesarchum at, pro an eros perpetua ullamcorper.</p>
                        <p>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri. Veniam delectus ei vis. Est atqui timeam mnesarchum at, pro an eros perpetua ullamcorper. Lorem ipsum dolor sit amet, ad duo fugit
                          aeque fabulas, in lucilius prodesset pri.</p>
                        <ul>
                          <li>Veniam delectus ei vis st atqui timeam mnesarchum at.</li>
                          <li>Lorem ipsum dolor sit amet, ad duo fugit aeque fabulas, in lucilius prodesset pri.</li>
                          <li>Est atqui timeam mnesarchum at, pro an eros perpetua ullamcorper.</li>
                          <li>Ad duo fugit aeque fabulas, in lucilius prodesset pri.</li>
                          <li>Veniam delectus ei vis st atqui timeam mnesarchum at.</li>
                        </ul>
                      </div>
                      {/* end byf-info-wrap */}
                    </div>
                    {/* end baggage-info */}
                  </div>
                  {/* end tab-content */}
                </div>
                {/* end space-right */}
              </div>
              {/* end columns */}
              <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 side-bar blog-sidebar right-side-bar">
                <div className="row">
                  <div className="col-xs-12 col-sm-6 col-md-12">
                    <div className="side-bar-block categories">
                      <h2 className="side-bar-heading">Useful Links</h2>
                      <ul className="nav nav-pills nav-stacked">
                        <li><a href="#"><span><i className="fa fa-angle-right" /></span>Flight Stat</a></li>
                        <li><a href="#"><span><i className="fa fa-angle-right" /></span>Baggage Check-In</a></li>
                        <li><a href="#"><span><i className="fa fa-angle-right" /></span>Travel Policy</a></li>
                        <li><a href="#"><span><i className="fa fa-angle-right" /></span>Drink &amp; Meal</a></li>
                        <li><a href="#"><span><i className="fa fa-angle-right" /></span>Pet Allowance</a></li>
                        <li><a href="#"><span><i className="fa fa-angle-right" /></span>Child Booking</a></li>
                      </ul>
                    </div>
                    {/* end side-bar-block */}
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-12">
                    <div className="side-bar-block recent-post">
                      <h2 className="side-bar-heading">Recent Post</h2>
                      <div className="recent-block">
                        <div className="recent-img">
                          <a href="blog-detail-right-sidebar.php"><img src="images/727e5ea10a3f1852dcbdb06b3733cb7f.jpg" className="img-reponsive" alt="recent-blog-image" /></a>
                        </div>
                        {/* end recent-img */}
                        <div className="recent-text">
                          <a href="blog-detail-right-sidebar.php">
                            <h5>Host a Family Party</h5>
                          </a>
                          <span className="date">27 May, 2020</span>
                        </div>
                        {/* end recent-text */}
                      </div>
                      {/* end recent-block */}
                      <div className="recent-block">
                        <div className="recent-img">
                          <a href="blog-detail-right-sidebar.php"><img src="images/tải xuống (1).jfif" className="img-reponsive" alt="recent-blog-image" /></a>
                        </div>
                        {/* end recent-img */}
                        <div className="recent-text">
                          <a href="blog-detail-right-sidebar.php">
                            <h5>Host a Family Party</h5>
                          </a>
                          <span className="date">27 May, 2020</span>
                        </div>
                        {/* end recent-text */}
                      </div>
                      {/* end recent-block */}
                      <div className="recent-block">
                        <div className="recent-img">
                          <a href="blog-detail-right-sidebar.php"><img src="images/tải xuống (1).jfif" className="img-reponsive" alt="recent-blog-image" /></a>
                        </div>
                        {/* end recent-img */}
                        <div className="recent-text">
                          <a href="blog-detail-right-sidebar.php">
                            <h5>Host a Family Party</h5>
                          </a>
                          <span className="date">27 May, 2020</span>
                        </div>
                        {/* end recent-text */}
                      </div>
                      {/* end recent-block */}
                    </div>
                    {/* end side-bar-block */}
                  </div>
                  {/* end columns */}
                </div>
                {/* end row */}
                <div className="row">
                  <div className="col-xs-12 col-sm-6 col-md-12">
                    <div className="side-bar-block contact">
                      <h2 className="side-bar-heading">Contact Us</h2>
                      <div className="c-list">
                        <div className="icon"><span><i className="fa fa-envelope" /></span></div>
                        <div className="text">
                          <p>hamongkhang@gmail.com</p>
                        </div>
                      </div>
                      {/* end c-list */}
                      <div className="c-list">
                        <div className="icon"><span><i className="fa fa-phone" /></span></div>
                        <div className="text">
                          <p>039 649 8891</p>
                        </div>
                      </div>
                      {/* end c-list */}
                      <div className="c-list">
                        <div className="icon"><span><i className="fa fa-map-marker" /></span></div>
                        <div className="text">
                          <p>Street No: To Hien Thanh, Son Tra, Da Nang, Viet Nam </p>
                        </div>
                      </div>
                      {/* end c-list */}
                    </div>
                    {/* end side-bar-block */}
                  </div>
                  {/* end columns */}
                  <div className="col-xs-12 col-sm-6 col-md-12">
                    <div className="side-bar-block follow-us">
                      <h2 className="side-bar-heading">Follow Us</h2>
                      <ul className="list-unstyled list-inline">
                        <li><a href="https://www.facebook.com"><span><i className="fa fa-facebook" /></span></a></li>
                        <li><a href="https://www.twitter.com"><span><i className="fa fa-twitter" /></span></a></li>
                        <li><a href="https://istagram.com"><span><i className="fa fa-linkedin" /></span></a></li>
                        <li><a href="https://www.google.com"><span><i className="fa fa-google-plus" /></span></a></li>
                        <li><a href="https://pinterest.com"><span><i className="fa fa-pinterest-p" /></span></a></li>
                      </ul>
                    </div>
                    {/* end side-bar-block */}
                  </div>
                  {/* end columns */}
                </div>
                {/* end row */}
              </div>
              {/* end columns */}
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </div>
        {/* end byf-guidelines */}
      </section>
      {/* end innerpage-wrapper */}
      {/*======================= BEST FEATURES =====================*/}
      <section id="best-features" className="banner-padding black-features">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3">
              <div className="b-feature-block">
                <span><i className="fa fa-dollar" /></span>
                <h3>Best Price Guarantee</h3>
                <p>Our website brings you the best experiences and services with the most standard price. Our services are approved a resolution by Vietnam Travel Branch.</p>
              </div>
              {/* end b-feature-block */}
            </div>
            {/* end columns */}
            <div className="col-sm-6 col-md-3">
              <div className="b-feature-block">
                <span><i className="fa fa-lock" /></span>
                <h3>Safe and Secure</h3>
                <p>All your personal informations, supported informations will be kept and secured in the best way. Only you and administrators can know. Your informations never have leaked out and lost.</p>
              </div>
              {/* end b-feature-block */}
            </div>
            {/* end columns */}
            <div className="col-sm-6 col-md-3">
              <div className="b-feature-block">
                <span><i className="fa fa-thumbs-up" /></span>
                <h3>Best Travel Agents</h3>
                <p>We have related to the best Travel agency in Vietnam. Supported and admitted by many branches, we have been improving and broading our activities.</p>
              </div>
              {/* end b-feature-block */}
            </div>
            {/* end columns */}
            <div className="col-sm-6 col-md-3">
              <div className="b-feature-block">
                <span><i className="fa fa-bars" /></span>
                <h3>Travel Guidelines</h3>
                <p>All your questions will be replied by administrators and they will help you. We're always side by side and help you about any problems.</p>
              </div>
              {/* end b-feature-block */}
            </div>
            {/* end columns */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
      {/* end best-features */}
      {/*========================= NEWSLETTER-1 ==========================*/}
      <section id="newsletter-1" className="section-padding back-size newsletter">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
              <h2>Subscribe Our Newsletter</h2>
              <p>Subscibe to receive our interesting updates</p>
              <form>
                <div className="form-group">
                  <div className="input-group">
                    <input type="email" className="form-control input-lg" placeholder="Enter your email address" required />
                    <span className="input-group-btn"><button className="btn btn-lg"><i className="fa fa-envelope" /></button></span>
                  </div>
                </div>
              </form>
            </div>
            {/* end columns */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
      {/* end newsletter-1 */}
    </div>
    );
  }
}
export default Before_fly;