const userList = document.getElementById('userList')

window.addEventListener('load', generateList);


function generateList() {
  const names = users.map(user => {
    return formatName(user.fname, user.lname)
  });
  names.forEach(name => {
    userList.innerHTML += `<li class="user-list-name">${name}</li>`
  })
}

