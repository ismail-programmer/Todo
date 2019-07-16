var userTodos = [];
$(document).ready(function() {
  // Method to focus on input after loading
  $("#todo-in").focus();
  var x = JSON.parse(localStorage.getItem("userInfos"));
  // Method to add new to-do Item
  $(".add-btns").click(function() {
    var toDoValue = $("#todo-in").val();
    if (toDoValue !== "") {
      if (userTodos.indexOf(toDoValue) == -1) {
        $("#main-todo").append(
          "<li class = 'tasks'>" +
            "<span class='done-btns'>" +
            "\u2713" +
            "</span>" +
            "<span id='task'>" +
            toDoValue +
            "</span>" +
            "<span class='rem-btns'>" +
            "\u2715" +
            "</span>" +
            "</li>"
        );
        userTodos.push(toDoValue);
        $("#todo-in").val("");
        $("#todo-in").focus();
      } else {
        alert("Already in your List.");
        $("#todo-in").focus();
      }
    } else {
      alert("Enter something in the Input Field");
    }
  });

  // Method to make Remove button
  $("#main-todo").on("click", ".rem-btns", function() {
    userTodos.splice(
      userTodos.indexOf(
        $(this)
          .siblings("#task")
          .text()
      ),
      1
    );
    $(this)
      .parent()
      .remove();
  });

  // Method to make done and undone button
  $("#main-todo").on("click", ".done-btns", function() {
    $(this)
      .next()
      .toggleClass("done");
  });
  $("#save").click(function() {
    x[0].userTodos = userTodos;
    localStorage.setItem("userInfos", JSON.stringify(x));
  });
});
