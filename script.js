function validateSignup() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  var email = document.getElementById("email").value;

  var errorMessage = document.getElementById("errorMessage");
  var messageBox = document.getElementById("messageBox");

  errorMessage.textContent = "";
  messageBox.style.borderColor = "#f9f9f9";
  messageBox.style.backgroundColor = "#f9f9f9";

  var errorOccured = false;
  
  if (!isValidUsername(username)) {
      displayErrorMessage("Invalid username format.");
      errorOccured = true;
  }


  if (!isValidPassword(password)) {
      displayErrorMessage("Invalid password format.");
      errorOccured = true;
  }

  
  if (password !== confirmPassword) {
      displayErrorMessage("Passwords do not match.");
      errorOccured = true;
  }

  
  if (!isValidEmail(email)) {
      displayErrorMessage("Invalid email format.");
      errorOccured = true;
  }

  if (errorOccured) {
      return;
  }
  
  displaySuccessMessage("Signup successful!");
}

function isValidUsername(username) {
 
  var usernameRegex = /^[a-zA-Z][a-zA-Z0-9_-]{2,19}$/;
  return usernameRegex.test(username);
}

function isValidPassword(password) {

  var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+[\]{}|;:'",.<>?/`~])[A-Za-z\d!@#$%^&*()-_=+[\]{}|;:'",.<>?/`~]{8,}$/;
  return passwordRegex.test(password);
}

function isValidEmail(email) {

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function displayErrorMessage(message) {
  var errorMessage = document.getElementById("errorMessage");
  var messageBox = document.getElementById("messageBox");

  errorMessage.innerHTML += message + "<br>";
  messageBox.style.borderColor = "red";
  messageBox.style.backgroundColor = "#ffecec"; 
}

function displaySuccessMessage(message) {
  var errorMessage = document.getElementById("errorMessage");
  var messageBox = document.getElementById("messageBox");

  errorMessage.textContent = message;
  messageBox.style.borderColor = "#2ecc71"; 
  messageBox.style.backgroundColor = "#e6ffec"; 
}


