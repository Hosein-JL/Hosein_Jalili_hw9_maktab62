$(document).ready(function () {
  $(".character").html("Password input is empty");

  $("#password").keyup(function (e) {
    e.preventDefault();

    const strongRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );

    const inputVal = $(this).val();

    if (inputVal.match(strongRegex)) {
      console.log("yes");
      $("#color").removeClass("text-primary");
      $("#color").removeClass("text-Danger");
      $("#color").addClass("text-success");
      $(".character").html("Good :D");
      $(".character").addClass("text-success");
      $(".character").removeClass("text-Danger");
      $("#password").addClass("border-success");
      $("#password").removeClass("border-danger");
    } else {
      console.log("no");
      $("#color").removeClass("text-primary");
      $("#color").removeClass("text-success");
      $("#color").addClass("text-Danger");
      $(".character").html(
        "Min 8 characters with at insert one capital letter, a number and a special character."
      );
      $(".character").addClass("text-Danger");
      $(".character").removeClass("text-success");
      $("#password").addClass("border-danger");
      $("#password").removeClass("border-success");
    }
  });
});

// //icon slash and password type

const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function (e) {
  // toggle the type attribute
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  // toggle the eye / eye slash icon
  this.classList.toggle("bi-eye");
});
