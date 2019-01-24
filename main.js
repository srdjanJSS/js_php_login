let logBtn = document.querySelector('#logBtn');
let loginDiv = document.querySelector('.login');
usernameInput = document.querySelector('input[name="username"]');
passwordInput = document.querySelector('input[name="password"]');

logBtn.addEventListener('click',() => {
  DB.logUser(usernameInput.value,passwordInput.value)
  .then(function (res) {
    DB.checkSession().then(function (res) {
      if (res) {
        // ako je logovan
        console.log("logovan");
        loginDiv.style.display = "none";
      }else{
        // ako nije logovan registrovati ga
        console.log('nije logovan');

      }
    })
  })
})
