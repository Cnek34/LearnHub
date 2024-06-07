let role = document.querySelector('.role');
let aboutMe = document.querySelector('.about-me');
let contacts = document.querySelector('.contacts');
let button = document.querySelector('.btn');

button.onclick = function () {
    // Получаем значения полей
    let roleValue = role.value.trim();
    let aboutMeValue = aboutMe.value.trim();
    let contactsValue = contacts.value.trim();

    // Проверяем, чтобы все поля были заполнены
    if (roleValue === '' || aboutMeValue === '' || contactsValue === '') {
        alert('Пожалуйста, заполните все поля.');
        return;
    }

    // Создаем массив для хранения информации о пользователе
    let arrayObject = [roleValue, aboutMeValue, contactsValue];

    // Создаем HTML для новой карточки
    let cardItem = `
        <div class="new-user">
            <p class="name-user">${'Name'}</p>
            <p>${arrayObject[0]}</p>
            <p class="about-me-user">${arrayObject[1]}</p>
            <p class="contacts-user">${arrayObject[2]}</p>
        </div>
    `;

    // Получаем контейнер для вывода и вставляем новую карточку
    let out = document.getElementById('out');
    out.insertAdjacentHTML('beforeend', cardItem);

    // Очищаем поля ввода после добавления карточки
    role.value = '';
    aboutMe.value = '';
    contacts.value = '';
};


function slowScroll(id) {
    var offset = 90;
    $('html, body').animate({
        scrollTop: $(id).offset().top - offset
    }, 1000);
    return false;
}