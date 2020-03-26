

$(function(changeColor) {
    $(window).scroll(function () {
       if ($(this).scrollTop() > 500) {
          $('nav').addClass('changeColor')
       }
       if ($(this).scrollTop() < 500) {
          $('nav').removeClass('changeColor')
       }
    });
 });