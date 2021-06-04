import React, {Component} from 'react';

class Testimonior extends Component{
  render(){
    return(
  <section id="testimonials" className="section-padding back-size">
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <div className="page-heading white-heading">
          <h2>Testimonials</h2>
          <hr className="heading-line" />
        </div>
        {/* end page-heading */}
        <div className="carousel slide" data-ride="carousel" id="quote-carousel">
          <div className="carousel-inner text-center">
            <div className="item active">
              <blockquote>introducing, I am a administrator of this website. I am really happy because of your feedback. I am so glad to bring a place like that to you. I will try to do more and more for your joys. Why don't you come here and experience
                if you want to know how this place can pay attention to a lot of people. Welcome to StrartTravel.</blockquote>
              <div className="rating">
                <span><i className="fa fa-star orange" /></span>
                <span><i className="fa fa-star orange" /></span>
                <span><i className="fa fa-star orange" /></span>
                <span><i className="fa fa-star orange" /></span>
                <span><i className="fa fa-star lightgrey" /></span>
              </div>
              {/* end rating */}
              <small>Khang Ha</small>
            </div>
            {/* end item */}
            <div className="item">
              <blockquote>I feel this is a prestige and interesting place. You will get the joys in life when coming there. I visited there many times and I am satisfied with the views, people and services at here. Unintentionally, I knew there
                through friends' suggestions. I feel there is a fantastic place, you can have confidence in there. Hope you're funny.</blockquote>
              <div className="rating">
                <span><i className="fa fa-star orange" /></span>
                <span><i className="fa fa-star orange" /></span>
                <span><i className="fa fa-star orange" /></span>
                <span><i className="fa fa-star orange" /></span>
                <span><i className="fa fa-star lightgrey" /></span>
              </div>
              {/* end rating */}
              <small>Hang Ho</small>
            </div>
            {/* end item */}
            <div className="item">
              <blockquote>I knew this place unintentionally through my friends. They suggested me to visit it and I have already gone to there. For me, It is a fantastic and nice place. You can have a confidence in there. Let's go to visit and enjoy
                it, you will be funny. I am quite satisfied with the harmonious and eye-catching design, everything is easy to distinguish and feels comfortable.</blockquote>
              <div className="rating">
                <span><i className="fa fa-star orange" /></span>
                <span><i className="fa fa-star orange" /></span>
                <span><i className="fa fa-star orange" /></span>
                <span><i className="fa fa-star orange" /></span>
                <span><i className="fa fa-star lightgrey" /></span>
              </div>
              {/* end rating */}
              <small>Huan Nguyen</small>
            </div>
            {/* end item */}
          </div>
          {/* end carousel-inner */}
          <ol className="carousel-indicators">
            <li data-target="#quote-carousel" data-slide-to={0} className="active"><img src="images/IMG_6909.jpg" className="img-responsive" alt="client-img" />
            </li>
            <li data-target="#quote-carousel" data-slide-to={1}><img src="images/IMG_6916.jpg" className="img-responsive" alt="client-img" />
            </li>
            <li data-target="#quote-carousel" data-slide-to={2}><img src="images/IMG_6949.jpg" className="img-responsive" alt="client-img" />
            </li>
          </ol>
        </div>
        {/* end quote-carousel */}
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
export default Testimonior;