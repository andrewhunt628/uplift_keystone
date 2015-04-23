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


  /* Accepts Enquiry from the enquiry modal */
  $('button#enquiry-form').click(function(){
    console.log('submitting form');
    $.ajax({
      type: 'POST',
      url: '/enquiry',
      data: $('form.contact').serialize(),
      success: function(msg) {
        alert('Thanks!' + msg);
      },
      error: function() {
        alert('Sorry, something went wrong while trying to send the enquiry');
      }
    });

  });


});
