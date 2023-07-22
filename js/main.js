'use strict';

$(function(){

  $('.hamburger-menu').click(function(){
    hamburger();
  });

  $('.modal a').click(function(){
    hamburger();
  });

  function hamburger(){
    $('.hamburger-menu').toggleClass('open');
    if($('.hamburger-menu').hasClass('open')){
      $('.modal-wrapper').addClass('open');
    }else{
      $('.modal-wrapper').removeClass('open');
    }
  }


  $('.inview-slide-left').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if(isInView){
      // 要素が表示されたらslide-leftクラスを追加
      $(this).stop().addClass('slide-left');
    }
  });

  $('.inview-slide-right').on('inview',function(event,isInView,visiblePartX,visiblePartY){
    if(isInView){
      $(this).stop().addClass('slide-right')
    }
  })

  $('#review .content').on('inview',function(event,isInView,visiblePartX,visiblePartY){
    if(isInView){
      $(this).stop().addClass('baloon')
    }
  })


});