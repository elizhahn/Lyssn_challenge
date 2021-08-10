const userList = document.getElementById('userList')

window.addEventListener('load', generateList);
userList.addEventListener('click', revealInfo); 


function generateList() {
  const usersList = users.map(user => {
     const currUser = new User(user.fname, user.lname, user.isTherapist, user.id);
     return currUser
  });
  usersList.forEach(user => {
    const name = user.formatName(); 
    //First Solution
    // userList.innerHTML += 
    // `<li class= "user-list-name" id= ${user.id}>
    //    ${name}<span class="material-icons ${user.isTherapist ? "orange" : "purple"}">${user.isTherapist ? "medication" : "info"}</span>
    // </li>`

    //Second solution
    userList.innerHTML += 
    `<li class= "user-list-item" id= ${user.id}>
      <p class="user-list-name" >${name}<span class="material-icons ${user.isTherapist ? "orange" : "purple"}">${user.isTherapist ? "medication" : "info"}</span>
      </p>
      <p class="hidden user-list-info">${user.id}, ${user.isTherapist ? 'is a therapist' : 'is not a therapist'}
      </p>
    </li>`
});
}

function revealInfo(event) { 
 //First Solution
  // event.target.insertAdjacentHTML('afterend',  `<li class="user-list-info">${event.target.getAttribute('id')}, ${event.target.innerHTML.includes('medication') ? 'is a therapist' : 'is not a therapist'}
  // </li>`);

  //Second solution
   event.target.parentNode.children[1].classList.toggle('hidden');
}


//STEPS
// want to click a username and reveal a userId and if they are a therapist or not a therapist
// add event listener for when user name is clicked
// insert html with the userId and is therapist or not therapist with a class of hidden
// on click, reveal the hidden element

