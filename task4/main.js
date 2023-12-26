import 'normalize.css';
import './index.less';

var editState = -1;

const renderCard = (name, description, linkToImage, code, author) => {
  return `
    <div class="card">
            <h3 class="card-id">id: ${code}</h3>
            <h4 class="card-title">${name}</h4>
            <img class="card-img" src="${linkToImage}" alt="${name}" />
            <div class="card-text">
              <p class="card-text-body">${description}</p>
              <p class="card-text-author">Автор: ${author}</p>
            </div>
            <div class="card-btns">
              <button class="card-btns-btn__edit">Редактировать</button>
              <button class="card-btns-btn__delete">Удалить</button>
            </div>
          </div>
    `;
};

const artList = [
  {
    id: 0,
    name: 'Богатыри',
    description: 'Над картиной работали около двадцати лет.',
    linkToImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Viktor_Vasnetsov_-_%D0%91%D0%BE%D0%B3%D0%B0%D1%82%D1%8B%D1%80%D0%B8_-_Google_Art_Project.jpg/760px-Viktor_Vasnetsov_-_%D0%91%D0%BE%D0%B3%D0%B0%D1%82%D1%8B%D1%80%D0%B8_-_Google_Art_Project.jpg',
    author: 'Виктор Васнецов',
  },
  {
    id: 1,
    name: 'Опять двойка',
    description: 'Хранится в Третьяковской галере.',
    linkToImage:
      'https://upload.wikimedia.org/wikipedia/ru/thumb/1/14/Opyat_dvoyka.jpg/300px-Opyat_dvoyka.jpg',
    author: 'Фёдор Решетников',
  },
  {
    id: 2,
    name: 'Лютнист',
    description: 'Картина существует в трёх версиях.',
    linkToImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Michelangelo_Caravaggio_020.jpg/680px-Michelangelo_Caravaggio_020.jpg',
    author: 'Караваджо',
  },
  {
    id: 3,
    name: 'Кружевница',
    description: 'Находится в парижском музее Лувр.',
    linkToImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Johannes_Vermeer_-_The_lacemaker_%28c.1669-1671%29.jpg/700px-Johannes_Vermeer_-_The_lacemaker_%28c.1669-1671%29.jpg',
    author: 'Ян Вермеер',
  },
  {
    id: 4,
    name: 'Неизвестная',
    description: 'Портрет часто ошибочно называют «Незнакомка».',
    linkToImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Kramskoy_Portrait_of_a_Woman.jpg/650px-Kramskoy_Portrait_of_a_Woman.jpg',
    author: 'Иван Крамской',
  },
];

function generateArtCardsHTML(cardsList = artList) {
  let cards = '';
  if (!cardsList) {
    return cards;
  }
  for (let i = 0; i < cardsList.length; i++) {
    cards += renderCard(
      cardsList[i].name,
      cardsList[i].description,
      cardsList[i].linkToImage,
      cardsList[i].id,
      cardsList[i].author
    );
  }
  return cards;
}

function setupDefaultCards() {
  localStorage.setItem('cards', JSON.stringify(artList));
  renderCards();
}

function renderCards() {
  const cards = JSON.parse(localStorage.getItem('cards'));
  const cardsHtml = generateArtCardsHTML(cards);
  const cardsBlock = document.getElementById('cards');
  cardsBlock.innerHTML = cardsHtml;
  const deleteButtons = document.querySelectorAll('.card-btns-btn__delete');
  deleteButtons.forEach((item) => {
    item.addEventListener('click', (evt) => {
      const id = evt.target.parentElement.parentElement
        .querySelector('.card-id')
        .textContent.split(' ')[1];
      deleteCard(id);
    });
  });

  const editButtons = document.querySelectorAll('.card-btns-btn__edit');
  editButtons.forEach((item) => {
    item.addEventListener('click', (evt) => {
      const id = evt.target.parentElement.parentElement
        .querySelector('.card-id')
        .textContent.split(' ')[1];
      editCard(id);
    });
  });
}

function deleteCard(id) {
  const cards = JSON.parse(localStorage.getItem('cards'));
  const newCards = cards.filter((item) => item.id != id);
  localStorage.setItem('cards', JSON.stringify(newCards));
  renderCards();
}

function editCard(id) {
  editState = id;
  const formTitle = document.getElementById('form-title');
  formTitle.textContent = 'Редактирование картины ' + id;

  const inputs = form.querySelectorAll('input');
  const cards = JSON.parse(localStorage.getItem('cards'));
  const card = cards.find((item) => item.id == id);
  inputs.forEach((item) => {
    item.value = card[item.id];
  });
}

const setupButton = document.getElementById('setup-button');
setupButton.addEventListener('click', setupDefaultCards);

const form = document.forms[0];

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  var cards = JSON.parse(window.localStorage.getItem('cards'));

  if (editState !== -1) {
    const inputs = evt.target.querySelectorAll('input');
    const obj = {};
    inputs.forEach((item) => (obj[item.id] = item.value));
    obj.id = editState;
    cards[editState] = obj;
    editState = -1;
    const formTitle = document.getElementById('form-title');
    formTitle.textContent = 'Добавление картины';
    inputs.forEach((item) => {
      item.value = '';
    });
    window.localStorage.setItem('cards', JSON.stringify(cards));
    renderCards();
    return;
  } else {
    const obj = {};
    const inputs = evt.target.querySelectorAll('input');
    inputs.forEach((item) => (obj[item.id] = item.value));
    obj.id = cards.length;
    cards.push(obj);
    console.log(cards);
    window.localStorage.setItem('cards', JSON.stringify(cards));
    renderCards();
  }
});

renderCards();
