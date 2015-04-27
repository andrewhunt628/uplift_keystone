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


  /* Accepts a new Enquiry from the enquiry modal */
  $('button#enquiry-form').click(function(){
    $.ajax({
      type: 'POST',
      url: '/api/enquiries',
      data: $('form#enquiry-form').serialize(),
      success: function(msg) {
        console.log(msg);
        window.location.reload(true);
      },
      error: function(err) {
        console.log(err);
        window.location.reload(true);
      }
    });

  });


});
