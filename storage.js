var users = [];
var lName, fName, eMail, pass, gender, dobMonth, dobYear;
function UserInfo(Fname, Lname, Email, Pass, Gender, Dobmonth, Dobyear) {
  this.lName = Lname;
  this.fName = Fname;
  this.eMail = Email;
  this.pass = Pass;
  this.gender = Gender;
  this.dobMonth = Dobmonth;
  this.dobYear = Dobyear;
  this.userTodos = [];
}
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $("form")
      .children()
      .each(function() {
        var fieldId = $(this).attr("id");
        switch (fieldId) {
          case "f-name":
            fName = $(this).val();
            break;
          case "l-name":
            lName = $(this).val();
            break;
          case "email":
            eMail = $(this).val();
            break;
          case "pass":
            pass = $(this).val();
            break;
          case "gender":
            gender = $(this).val();
            break;
          case "dob-month":
            dobMonth = $(this).val();
            break;
          case "dob-year":
            dobYear = $(this).val();
            break;
        }
      });
    if (isEmailValid == true && isPassValid == true) {
      users.push(
        new UserInfo(fName, lName, eMail, pass, gender, dobMonth, dobYear)
      );
      localStorage.setItem("userInfos", JSON.stringify(users));
      alert("Account Has been successfully Created.");
      location.href = "log-in.html";
    }
  });
});
