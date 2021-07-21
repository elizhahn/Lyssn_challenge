const userList = document.getElementById('userList')

window.addEventListener('load', generateList);

function generateList() {
  const names = users.map(user => {
     const currUser = new User(user.fname, user.lname);
     return currUser.formatName()
  });
  names.forEach(name => {
    userList.innerHTML += `<li class="user-list-name">${name}</li>`
  });
}

