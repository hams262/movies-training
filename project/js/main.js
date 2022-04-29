

$(document).ready(function(){
  $('.slickslider').slick({

    autoplaySpeed:1000,
    infinite:true,
    slidesToShow:6,
    slidesToScroll:5
  });
});

//$('.item img').mouseenter(function(){
//  $('.ite').fadeIn();
//});

//$('.ite').mouseleave(function(){
  //$('.ite').fadeOut();
//});

$(function(){
  $("body").niceScroll();
});

$(function(){
  $('.navbar li a').click( function (e){
    e.preventDefult();

    $('html,body').animate({

     scrollTop: $('#' + $(this).data('scroll')).offset().top

   },1000);
  });
});

var scrollButton=$("#scroll-top");

$(window).scroll(function()
{

  if($(this).scrollTop()>=1000)
  {
    scrollButton.show(1000);
  }
  else
  {
    scrollButton.hide(1000);
  }
  });

  scrollButton.click(function(){
    $("html,body").animate({scrollTop:0},600);
});
