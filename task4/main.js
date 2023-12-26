import 'normalize.css';
import './index.less';

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
}

const artList = [
    {
        name: 'Богатыри',
        description: 'Над картиной работали около двадцати лет.',
        linkToImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Viktor_Vasnetsov_-_%D0%91%D0%BE%D0%B3%D0%B0%D1%82%D1%8B%D1%80%D0%B8_-_Google_Art_Project.jpg/760px-Viktor_Vasnetsov_-_%D0%91%D0%BE%D0%B3%D0%B0%D1%82%D1%8B%D1%80%D0%B8_-_Google_Art_Project.jpg',
        author: 'Виктор Васнецов'
    },
    {
        name: 'Опять двойка',
        description: 'Хранится в Третьяковской галере.',
        linkToImage: 'https://upload.wikimedia.org/wikipedia/ru/thumb/1/14/Opyat_dvoyka.jpg/300px-Opyat_dvoyka.jpg',
        author: 'Фёдор Решетников'
    },
    {
        name: 'Лютнист',
        description: 'Картина существует в трёх версиях.',
        linkToImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Michelangelo_Caravaggio_020.jpg/680px-Michelangelo_Caravaggio_020.jpg',
        author: 'Караваджо'
    },
    {
        name: 'Кружевница',
        description: 'Находится в парижском музее Лувр.',
        linkToImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Johannes_Vermeer_-_The_lacemaker_%28c.1669-1671%29.jpg/700px-Johannes_Vermeer_-_The_lacemaker_%28c.1669-1671%29.jpg',
        author: 'Ян Вермеер'
    },
    {
        name: 'Неизвестная',
        description: 'Портрет часто ошибочно называют «Незнакомка».',
        linkToImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Kramskoy_Portrait_of_a_Woman.jpg/650px-Kramskoy_Portrait_of_a_Woman.jpg',
        author: 'Иван Крамской'
    }
];

function generateArtCards(cardsList = artList) {
    let cards = '';
    if (!cardsList) {
        return cards;
    }
    cardsList.map((item, index) => {
        cards += renderCard(item.name, item.description, item.linkToImage, index, item.author);
    });
    return cards;
}

function setupDefaultCards() {
    localStorage.setItem('cards', JSON.stringify(artList));
    renderCards();
}

function renderCards() {
    const cards = JSON.parse(localStorage.getItem('cards'));
    const cardsHtml = generateArtCards(cards);
    const cardsBlock = document.getElementById('cards');
    cardsBlock.innerHTML = cardsHtml;
}

const setupButton = document.getElementById('setup-button');
setupButton.addEventListener('click', setupDefaultCards);

const form = document.forms[0];

form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    var cards = JSON.parse(window.localStorage.getItem("cards"));

    const obj = {};
    const inputs = evt.target.querySelectorAll("input");
    inputs.forEach((item) => (obj[item.id] = item.value));
    const newCard = renderCard(obj.name, obj.description, obj.linkToImage, cards.length, obj.author);
    cards += newCard;
    window.localStorage.setItem("cards", JSON.stringify(cards));
});

renderCards();
