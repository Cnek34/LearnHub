/*Имя пользователя*/
let userName = localStorage.getItem('userName');

window.onload = function () {
    if (userName != null) {
        let cardItem1 = `
            <li class="site-navigation-name">
                <a>${userName}</a>
            </li>
        `;

        let out1 = document.getElementById('navigation-out');
        out1.insertAdjacentHTML('beforeend', cardItem1);
    }
}

/*Добавление нового пользователя*/
let role = document.querySelector('.input-filter');
let aboutMe = document.querySelector('.about-me');
let contacts = document.querySelector('.contacts');
let button = document.querySelector('.btn');

button.onclick = function () {
    // Получаем значения полей
    let roleValue = role.value;
    let aboutMeValue = aboutMe.value.trim();
    let contactsValue = contacts.value.trim();
    console.log(roleValue);

    // Проверяем, чтобы все поля были заполнены
    if (aboutMeValue === '' || contactsValue === '') {
        alert('Пожалуйста, заполните все поля.');
        return;
    }

    if (roleValue === 'all') {
        alert('Выберите роль.');
        return;
    }

    if (userName === null) {
        alert('Для начала давай зарегистрируемся.');
        return;
    }

    // Создаем массив для хранения информации о пользователе
    let arrayObject = [role.options[role.selectedIndex].textContent, aboutMeValue, contactsValue];

    // Создаем HTML для новой карточки
    let cardItem = `
        <div class="new-user" data-category="${roleValue}">
            <p class="name-user">${userName}</p>
            <p>${arrayObject[0]}</p>
            <p class="about-me-user">${arrayObject[1]}</p>
            <p class="contacts-user">${arrayObject[2]}</p>
        </div>
    `;

    // Получаем контейнер для вывода и вставляем новую карточку
    let out = document.getElementById('out');
    out.insertAdjacentHTML('beforeend', cardItem);

    console.log(document.querySelectorAll('.new-user'));

    // Очищаем поля ввода после добавления карточки
    role.value = 'all';
    aboutMe.value = '';
    contacts.value = '';
};

/*Плавный скролл*/
function slowScroll(id) {
    var offset = 90;
    $('html, body').animate({
        scrollTop: $(id).offset().top - offset
    }, 1000);
    return false;
}


/*Фильтер*/
let filter = document.querySelector('.filter');

filter.onchange = function () {
    let articles = document.querySelectorAll('.new-user');
  for (let article of articles) {
    if (article.dataset.category !== filter.value && filter.value !== 'all') {
      article.classList.add('hidden');
    } else {
        article.classList.remove('hidden');
    }
  }
};