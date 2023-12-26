import 'normalize.css';
import './index.less';
import { render } from 'less';

var editState = -1;
const spinner = document.querySelector('.cards-block-cards__spinner.spinner-border')

const API_URL = 'http://localhost:3001/api/v1/art';

async function get_author(){
  const res = await fetch(API_URL + '/author/');
  const data = await res.json();
  const logo = document.getElementById('logo');
  logo.textContent = `${data}`
}
get_author();


function renderNewCard (name, description, linkToImage, code, author) 
{
  let html = `
    <div class="card" id="card-${code}">
            <h3 class="card-id">id: ${code}</h3>
            <h4 class="card-title">${name}</h4>
            <img class="card-img" src="${linkToImage}" alt="${name}" />
            <div class="card-text">
              <p class="card-text-body">${description}</p>
              <p class="card-text-author">Автор: ${author}</p>
            </div>
            <div class="card-btns">
              <button class="card-btns-btn__edit" id=delete-${code}>Редактировать</button>
              <button class="card-btns-btn__delete" id="delete-${code}">Удалить</button>
            </div>
          </div>
    `;
    const cardsContainer = document.getElementById('cards');
    cardsContainer.innerHTML += html;
    addEventListeners();
};

function renderCards(cards) {
  const cardsContainer = document.getElementById('cards');
  cardsContainer.innerHTML = '';
  cards.forEach((item) => {
    renderNewCard(item.name, item.description, item.linkToImage, item.id, item.author);
  });
}

function addEventListeners() {
  const deleteButtons = document.querySelectorAll('.card-btns-btn__delete');
  deleteButtons.forEach((item) => {
    item.addEventListener('click', () => deleteCard(item.id.split('-')[1]));
  });

  const editButtons = document.querySelectorAll('.card-btns-btn__edit');
  editButtons.forEach((item) => {
    item.addEventListener('click', () => editCard(item.id.split('-')[1]));
  });
}

async function getAllArts(){
  spinner.style.display = 'flex';
  const res = await fetch(API_URL + '/');
  spinner.style.display = 'none';
  return await res.json();
}

async function getDefaultArts() {
  spinner.style.display = 'flex';
  const res = await fetch(API_URL + '/default/');
  spinner.style.display = 'none';
  return await res.json();
}

function setupDefaultCards() {
  getDefaultArts().then((items) => {renderCards(items)});
}

async function deleteArt(id){
  spinner.style.display = 'flex';
  await fetch(API_URL + `/${id}`,{
      method: 'DELETE',
  });
  spinner.style.display = 'none';
}

async function addArt(obj){
  spinner.style.display = 'flex';
  const res = await fetch(API_URL + '/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  spinner.style.display = 'none';
  return await res.json();
}

function deleteCard(id) {
  const item = document.getElementById(`card-${id}`);
  deleteArt(id).catch(console.error);
  item.remove();
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
    return;
  } else {
    const obj = {};
    const inputs = evt.target.querySelectorAll('input');
    inputs.forEach((item) => (obj[item.id] = item.value));
    const cardsContainer = document.getElementById('cards');
    addArt(obj).then((res)=>renderNewCard(res.name, res.description, res.linkToImage, res.id, res.author));
  }
});

(function onLoad(){
  getAllArts().then((items) => items.map((item) => renderNewCard(item.name, item.description, item.linkToImage, item.id, item.author)));
}());
