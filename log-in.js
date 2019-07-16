var x, isEmailValid, isPassValid;
$(document).ready(function() {
  $("input#email").focus();
  $("form").submit(function(event) {
    event.preventDefault();
    x = JSON.parse(localStorage.getItem("userInfos"));
    //Form Validation
    $("form")
      .children("input")
      .each(function() {
        var fieldId = $(this).attr("id");
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
          var checkRate = $(this)
            .val()
            .indexOf("@");
          var checkCom = $(this)
            .val()
            .indexOf(".com");
          var checkBlank = $(this)
            .val()
            .indexOf(" ");
          if (
            checkRate < 4 ||
            checkCom < $(this).val().length - 4 ||
            checkBlank !== -1
          ) {
            $(this).after("<p class='alert-p'>Email entered is Invalid.</p>");
            isEmailValid = false;
          } else if ($(this).val() !== x[0].eMail) {
            $(this).after("<p class='alert-p'>Account Not Found.</p>");
            isEmailValid = false;
          } else {
            isEmailValid = true;
          }
        }
        //To Check If the Password is 8 Characters long.
        if (fieldId == "pass" && $(this).val() !== "") {
          passEntered = $(this).val();
          if ($(this).val().length < 5) {
            $(this).after(
              "<p class='alert-p'>Password should be atleast 8 characters long.</p>"
            );
            isPassValid = false;
          } else if ($(this).val() !== x[0].pass) {
            $(this).after("<p class='alert-p'>Wrong Password.</p>");
            isPassValid = false;
          } else {
            isPassValid = true;
          }
        }
      });
      if(isEmailValid=true&&isPassValid==true){
          location.href="Todo App.html"
      }
  });
});
