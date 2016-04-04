$(document).ready(function(){
  $('#Home').click(function(){
    $('html,body').animate({
       scrollTop: $(".head").offset().top
    });
  });
  $('#About').click(function(){
    $('html,body').animate({
       scrollTop: $(".about").offset().top
    });
  });
  $('#Services').click(function(){
    $('html,body').animate({
       scrollTop: $(".services").offset().top
    });
  });
  $('#Contact').click(function(){
    $('html,body').animate({
       scrollTop: $(".contact").offset().top
    });
  });
});