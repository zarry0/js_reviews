
const img = document.querySelector('.pic-section');
const person = document.querySelector('.name');
const rol = document.querySelector('.rol');
const review = document.querySelector('.review');
const prev = document.querySelector('.previous');
const next = document.querySelector('.next');
const randBtn = document.querySelector('.randBtn');

let id = 0;
let jsonData;
getData();

prev.addEventListener('click', () => {
    id = (id <= 0) ? id : id - 1;
    updateReview(id);
});
next.addEventListener('click', () => {
    id = (id >= 3) ? id : id + 1;
    updateReview(id);
});
randBtn.addEventListener('click', () => {
    id = getRandomInt(0,4);
    updateReview(id);
});

async function getData() {
    const result = await fetch('./data.json');
    const datos =  await result.json();
    jsonData = datos.people;
}

function updateReview(i) {
    img.style['background-image'] = `url(${jsonData[i].img})`;
    person.innerHTML = jsonData[i].name;
    rol.innerHTML = jsonData[i].job;
    review.innerHTML = jsonData[i].text;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }