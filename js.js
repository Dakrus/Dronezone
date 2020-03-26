<<<<<<< HEAD


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
=======
$(function() {
   $(window).on("scroll", function(){
      if($(window).scrollTop() > 150){
         $("header").addClass("scrolled");
      } else {
         $("header").removeClass("scrolled");
      }
   });
});
>>>>>>> d290ac8d13a791a700b27c6f9313755038ddce2f
