$(document).ready(function()
{
  $('.nav').onePageNav();
});

$(document).ready(function(){
   $(".main-slider").owlCarousel({
    items:1,
    loop: false,
    dots: true,
    nav: true,
    navText: ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"]
  });

});
$('.image-link').magnificPopup({
  type:'image',
  gallery:{
    enabled: true
  }
});
 $(window).on('scroll', function() {
      if ($(this).scrollTop() > 400) {
        $('.scrollToTop').fadeIn();
      } else {
        $('.scrollToTop').fadeOut();
      }
    });