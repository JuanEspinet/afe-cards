$(document).ready(function(){
  $('.card-description-button').on('click',function(event){
    event.preventDefault();
    var holder = $(this).parents('.card-holder');
    holder.toggleClass('open');
  });
  $('.card-holder').on('mouseleave',function(event){
    $(this).removeClass('open');
  });
});
