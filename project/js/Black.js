let tabs = document.querySelectorAll(".tabs li");
let tabsArray = Array.from(tabs);
let divs = document.querySelectorAll(".content > div");
let divsArray = Array.from(divs);


tabsArray.forEach((ele) =>{
  ele.addEventListener("click", function (e) {
    tabsArray.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    divsArray.forEach((div) => {
      div.style.display = "none";
    });
    document.querySelector(e.currentTarget.dataset.cont).style.display = "block"
  });
});

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

  if($(this).scrollTop()>=700)
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
