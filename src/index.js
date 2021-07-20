const userList = document.getElementById('userList')

window.addEventListener('load', generateList);


function generateList() {
  formatName(users[0].fname, users[0].lname)
}

