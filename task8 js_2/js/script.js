var users = []
var userNumber = Number(prompt('Enter number of users:'))
function addUser(num) {
  for (let i = 1; i <= num; i++) {
    var id = Number(prompt("Enter ID for user" +i ))
    var name = prompt("Enter name for user" + i)
    var balance = Number(prompt("Enter balance for user" +i))
    var user = {
      id: id, name: name, balance: balance
    }
    users.push(user)
  }
  console.table(users)
}

function editUserBalanceById() {
  var id = Number(prompt('Enter id of user who you want to modify:'))
  var newBalance = Number(prompt('Enter newbalance of user:'))
  var index = users.findIndex(user => user.id === id)
  var updatedUser = users[index].balance = newBalance
  console.table(users)
}

function deleteUser() {
  var id = Number(prompt('Enter id of user who you want to delete:'))
  var x = users.findIndex(user => user.id == id)
  users.splice(x, 1)
  console.table(users)
}

addUser(userNumber)
editUserBalanceById()
deleteUser()

