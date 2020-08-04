// Local storage data for contact us page
let userInfo = JSON.parse(localStorage.getItem("userInfo"));
let submitBtn = $("#submit-btn");
let usersInfoArr = [];
$(document).on("click", function (event) {
  event.preventDefault();
});

function getUsersInfo() {
  let userInfoObj = {
    firstname: firstName,
    lastname: lastName,
    Email: email,
    text: message,
  };

  usersInfoArr.push(userInfoObj);
  localStorage.setItem("userInfo", JSON.stringify(usersInfoArr));
}

function clearBoard() {
  $("#first_name").val("");
  $("#last_name").val("");
  $("#email").val("");
  $("#message").val("");
}

$(document).on("click", "#submit-btn", () => {
  let firstName = $("#first_name").val();
  let lastName = $("#last_name").val();
  let email = $("#email").val();
  let message = $("#message").val();
  if (firstName === "" || lastName === "" || email === "" || message === "") {
    return false;
  } else {
    getUsersInfo(firstName, lastName, email, message);
    clearBoard();
  }
});
