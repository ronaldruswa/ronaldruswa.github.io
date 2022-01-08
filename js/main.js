jQuery(function( $ ){

  $(document).ready(function(){
    $('#nav-icon4').click(function(){
      $(this).toggleClass('open');
      $(".mobile-menu").slideToggle(350);
    });
  });


});
