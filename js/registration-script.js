let name = document.querySelector('.username');
let password = document.querySelector('.password');
let buttonRegistration = document.querySelector('.btn-reg');

let users = {};

function User(name, password) {
    this.name = name;
    this.password = password;
}

function createId(users) {
    return Object.keys(users).length;
}

buttonRegistration.onclick = function () {
    const nameUser = name.value;
    const passwordUser = password.value;

    const user = new User(nameUser, passwordUser);
    const userId = 'User' + createId(users);
    users[userId] = user;
    console.log(users);

    localStorage.setItem('userName', nameUser);

    window.location.href='index.html';

    name.value = '';
    password.value = '';
};