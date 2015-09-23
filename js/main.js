$(document).ready(function(){
  $('.card-description-button').on('click',function(event){
    event.preventDefault();
    var backcard = $(this).parents('.card-holder');
    backcard.toggleClass('open');
  });
});
