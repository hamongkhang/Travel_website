import React, {Component} from 'react';

class Hot extends Component{
  render(){
    return(   
              <div class='main-block hotel-block'>
                      <div class='main-img'>
                          <a href='#'><img src='images/11.' class='img-responsive' alt='hotel-img'/></a>
                          <div class='main-mask'>
                              <ul class='list-unstyled list-inline offer-price-1'>
                                  <li class='price'>{this.props.name}<span class='divider'>|</span><span class='pkg'>Avg/Week</span></li>
                                      <li class='rating'>
                                          <span><i class='fa fa-star orange'></i></span>
                                          <span><i class='fa fa-star orange'></i></span>
                                          <span><i class='fa fa-star orange'></i></span>
                                          <span><i class='fa fa-star orange'></i></span>
                                          <span><i class='fa fa-star lightgrey'></i></span>
                                      </li>
                              </ul>
                          </div>
                      </div>
                      <div class='main-info hotel-info'>
                          <div class='arrow'>
                              <div data-toggle='modal' data-target='#myModalHot$id_hot'><i class='fa fa-angle-right'></i></div>
                          </div>
                          <div class='main-title hotel-title'>
                              <a href='#'> $name_hot</a>
                              <p>From: $from_to_hot</p>
                          </div>
                      </div>
                      </div>
                  
      );
                    }
                  }
                  export default Hot;