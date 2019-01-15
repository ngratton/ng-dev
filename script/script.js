$(document).ready(function() {

  $("#nav li:nth-child(1)").click(function() {
    $('html, body').animate({
        scrollTop:  $(".header").offset().top-65
    }, 1000);
  });
  
  $("#nav li:nth-child(2)").click(function() {
    $('html, body').animate({
        scrollTop:  $(".cv").offset().top-65
    }, 1000);
  });
  
  $("#nav li:nth-child(3)").click(function() {
    $('html, body').animate({
        scrollTop:  $(".portfolio").offset().top-65
    }, 1000);
  });
  
  $("#nav li:nth-child(4)").click(function() {
    $('html, body').animate({
        scrollTop:  $(".contact").offset().top-65
    }, 1000);
  });
  
// Slider & description  
  $('.slider-desc').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-proj'
  });
  $('.slider-proj').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '80px',
    asNavFor: '.slider-desc',
    dots: true,
    draggable: true,
    arrows: false,
    focusOnSelect: true
  });

});