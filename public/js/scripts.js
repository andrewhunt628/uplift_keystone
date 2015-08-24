'use strict';
$(document).ready(function() {
  toastr.options = {
    'closeButton': false,
    'debug': false,
    'newestOnTop': false,
    'progressBar': false,
    'positionClass': 'toast-top-full-width',
    'preventDuplicates': false,
    'onclick': null,
    'showDuration': '300',
    'hideDuration': '1000',
    'timeOut': '5000',
    'extendedTimeOut': '1000',
    'showEasing': 'swing',
    'hideEasing': 'linear',
    'showMethod': 'fadeIn',
    'hideMethod': 'fadeOut'
  };



  /*
    LinkHelper - quick function for convert any selector in a link
    just need to have .linkHelper class and data-href attribute.
   */
  $('.linkHelper').on('click', function (event){
    event.preventDefault();
    location.href=$(this).data('href');
  });

  $(".modal").on('shown', function() {
          $(this).find("[autofocus]:first").focus();
      });

      
  /* Accepts a new Enquiry from the enquiry modal */
  $('button#enquiry-form').click(function(){
    var data = $('form#enquiry-form').serialize();
    sendEnquiry(data);
  });

  $('button#enquiry-form-2').click(function(){
    var data = $('form#enquiry-form-2').serialize();
    sendEnquiry(data);
  });


  $('button#home-enquiry').click(function(){
    var data = $('form#home-enquiry').serialize();
    sendEnquiry(data);
  });

  $('button#contact-form').click(function(){
    var data = $('form#contact-form').serialize();
    sendEnquiry(data);
    sendEnquiry('contact-form');
  });

  function sendEnquiry(data) {
    console.log(data);
    $.ajax({
      type: 'POST',
      url: '/api/enquiries',
      data: data,
      success: function(resp) {
        if(resp.success) {
          toastr.success(resp.message);
        } else {
          toastr.error(resp.message);
        }

      },
      error: function(err) {
        toastr.error(err);
      }
    });
  }

});
