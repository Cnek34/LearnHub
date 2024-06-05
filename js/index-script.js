let role = document.querySelector('.role');
let aboutMe = document.querySelector('.about-me');
let contacts = document.querySelector('.contacts');
let button = document.querySelector('.btn');

const arrayObject = [];

button.onclick = function () {
    let arr = [];
    arr.push(role.value, aboutMe.value, contacts.value);
    arrayObject.push(arr);
    console.log(arrayObject);

    let cardItem = ''

    let out = document.getElementById('out')
    arrayObject.forEach ((menu) => {
        cardItem +=
        `

        <div class="new-user">
        <p class="name-user">${'Name'}</p>
        <p>${menu[1]}</p>
        <p class="about-me-user">${menu[2]}</p>
        <p>${menu[3]}</p>
        </div>

        `
    })
    out.insertAdjacentHTML('beforeend', cardItem);
}