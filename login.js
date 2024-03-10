document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector("form");
    const messageBox = document.createElement("div");
    messageBox.id = "messageBox";
    document.querySelector(".login").appendChild(messageBox);
  
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const username = document.getElementById("Username").value;
      const password = document.getElementById("Password").value;

      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          if (!response.ok) {
            throw new Error("API call unsuccessful");
          }
          return response.json();
        })
        .then((data) => {
  
          const userData = data.map((user) => ({
            name: user.name,
            email: user.email,
          }));
  
          const isValidUser = userData.some(
            (user) => user.name === username && user.email === password
          );
  
      
          const messageText = document.createElement("p");
          messageText.textContent = isValidUser
            ? "Login successful"
            : "Invalid username or password";
          messageBox.innerHTML = "";
          messageBox.appendChild(messageText);
        })
        .catch((error) => {
        
          alert("API call unsuccessful");
        });
    });
  });
  