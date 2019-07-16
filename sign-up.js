var isFormValid, isEmailValid, isPassValid;
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $("form")
      .children("input.text-field")
      .each(function() {
        var fieldId = $(this).attr("id");
        //To Check If the Field is Filled OR Not.
        if ($(this).val() == "") {
          if (
            !$(this)
              .next()
              .is("p.alert-p")
          ) {
            $(this).after("<p class='alert-p'>This field is required.</p>");
          }
        } else if (
          $(this)
            .next()
            .is("p.alert-p")
        ) {
          $(this)
            .next()
            .remove();
        }
        //To Check If the Email is Valid OR Not.
        if (fieldId == "email" && $(this).val() !== "") {
          var eEntered = $(this).val();
          var checkRate = eEntered.indexOf("@");
          var checkCom = eEntered.indexOf(".com");
          var checkBlank = eEntered.indexOf(" ");
          if (
            checkRate < 4 ||
            checkCom < eEntered.length - 4 ||
            checkBlank !== -1
          ) {
            $(this).after("<p class='alert-p'>Email entered is Invalid.</p>");
            isEmailValid = false;
          } else {
            isEmailValid = true;
          }
        }
        //To Check If the Password is 8 Characters long.
        if (fieldId == "pass" && $(this).val() !== "") {
          if ($(this).val().length < 8) {
            $(this).after(
              "<p class='alert-p'>Password should be atleast 8 characters long.</p>"
            );
            isPassValid = false;
          } else if ($(this).val().length > 8) {
            isPassValid = true;
          }
        }
        //To Cehck If the Confirmed Password Match.
        if (fieldId == "c-pass" && $(this).val() !== "") {
          if ($(this).val() !== $("input#pass").val()) {
            $(this).after("<p class='alert-p'>Password does not Match.</p>");
            isPassValid = false;
          } else if ($(this).val() == $("input#pass").val()) {
            isPassValid = true;
          }
        }
      });
  });
});
