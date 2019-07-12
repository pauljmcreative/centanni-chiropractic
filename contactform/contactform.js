$(document).ready(function() {
  let form = $('#form');
  let successMsg = $('.alert');

  $.validator.addMethod('letters', function(value, element) {
    return this.optional(element) || value == value.match(/^[a-zA-Z ]*$/);
  });

  form.validate({
    rules: {
      name: {
        required: true,
        minlength: 3,
        letters: true
      },
      email: {
        required: true,
        email: true
      },
      phone: {
        required: true,
        minlength: 7,
        letters: false
      },
      subject: {
        required: true,
        minlength: 3
      },
      message: {
        required: true,
        minlength: 5
      }
    },
    messages: {
      name: 'Please specify your name (only letters and spaces are allowed)',
      email: 'Please specify a valid email address',
      phone: 'Please specify a valid phone number',
      subject: 'Please specify a subject',
      message: 'Please specify a message'
    },
    submitHandler: function(form) {
      // Create variables from the form
      let name = $('#name').val();
      let email = $('#email').val();
      let phone = $('#phone').val();
      let subject = $('#subject').val();
      let message = $('#message').val();

      // The AJAX
      $.ajax({
        type: 'POST',
        url: action,
        data: str,
        success: function(msg) {
          successMsg.show();
          // Clear the form
          $(':input', '#form').val('');
          return false;
        },
        error: function() {
          alert(
            `I\'m sorry, your email did not send.  Please call to schedule.`
          );
        }
      });
      return false;
    }
  });
});
