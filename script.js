$(function(){



    jQuery('.icon-hamburger').on('click', function() {
      if(jQuery('.menu-container .menu-right').css('display') === 'block') {
        jQuery('.menu-container .menu-right').slideUp('1500');
      }else {
        jQuery('.menu-container .menu-right').slideDown('1500');
      }
    });


});
