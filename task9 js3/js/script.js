var users = [];
var form = document.querySelector('#myForm');

var outputDiv = document.createElement('div');
document.body.appendChild(outputDiv);
form.addEventListener('submit', (e) => {
  e.preventDefault();
  var user = {
    name: e.target[0].value,
    email: e.target[1].value
  };
  users.push(user);
  var userDiv = document.createElement('div');
  var nameP = document.createElement('p');
  nameP.textContent =  user.name;
  var emailP = document.createElement('p');
  emailP.textContent =  user.email;

  userDiv.appendChild(nameP);
  userDiv.appendChild(emailP);
  outputDiv.appendChild(userDiv);
  form.reset();
});