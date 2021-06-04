import React, {Component} from 'react';

class Video extends Component{
  render(){
    return(
 <section id="video-banner" className="banner-padding back-size">
 <div className="container">
   <div className="row">
     <div className="col-sm-12">
       <h2>Take a Video Tour</h2>
       <p>Starttravels brings about the most memorable moments in life, the unprecedented impressions. We brings the beauty of Viet Nam being world-famous. Let's experience througt our video and feel it.</p>
       <a href="https://www.youtube.com/watch?v=Au6LqK1UH8g" className="popup-youtube" id="play-button"><span><i className="fa fa-play" /></span></a>
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
export default Video;