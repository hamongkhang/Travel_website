import React, {Component} from 'react';

class Blog extends Component{
  render(){
    return(
  <section id="latest-blog" className="section-padding">
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <div className="page-heading">
          <h2>Our Latest Blogs</h2>
          <hr className="heading-line" />
        </div>
        <div className="row">
          {/*?php
                $tourCapital = new blog();
                $sql = "select * from blog";
                $rows = $tourCapital-*/}fetch($sql);
          if (!empty($rows)) {'{'}
          foreach ($rows as $row) {'{'}
          $id_blog = $row['id_blog'];
          $img_blog = $row['img_blog'];
          $author_blog = $row['author_blog'];
          $time_blog = $row['time_blog'];
          $title_blog = $row['title_blog'];
          $content_blog = $row['content_blog'];
          echo "<div className="col-sm-6 col-md-4">
            <div className="main-block latest-block">
              <div className="main-img latest-img">
                <a href="blog-detail-right-sidebar.php">
                  <img src="images/$img_blog" className="img-responsive" alt="blog-img" />
                </a>
              </div>
              <div className="latest-info">
                <ul className="list-unstyled">
                  <li><span><i className="fa fa-calendar-minus-o" /></span>$time_blog<span className="author">by: <a href="blog-detail-right-sidebar.php">$author_blog</a></span></li>
                </ul>
              </div>
              <div className="main-info latest-desc">
                <div className="row">
                  <div className="col-xs-10 col-sm-10 main-title">
                    <a href="blog-detail-right-sidebar.php">$title_blog</a>
                    <p>$content_blog</p>
                  </div>
                </div>
                <span className="arrow"><a href="blog-listing-right-sidebar.php"><i className="fa fa-angle-right" /></a></span>
              </div>
            </div>
          </div>
          ";
          {'}'}
          {'}'}
          ?&gt;
        </div>
        {/* end row */}
        <div className="view-all text-center">
          <a href="blog-listing-right-sidebar.php" className="btn btn-orange">View All</a>
        </div>
        {/* end view-all */}
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
export default Blog;