'use strict';
$(document).ready(function() {
  /*
    LinkHelper - quick function for convert any selector in a link
    just need to have .linkHelper class and data-href attribute.
   */
  $('.linkHelper').on('click', function (event){
    event.preventDefault();
    location.href=$(this).data('href');
  });
});