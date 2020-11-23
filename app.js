//Elements
const vvodArea = document.querySelector('#vvod-id');
const resultArea = document.querySelector('#resalt1');

const btnPlay = document.querySelector('.btn-outline-info');

//Events
btnPlay.addEventListener('click', function() {
  let arrId = vvodSplit(vvodArea.value);
  const arrLinks = createLinks(arrId);
  resultArea.value = inResalt(arrLinks);
})

//Functions

function vvodSplit(a) {
  let b = a.split('\n')
  console.log(b)
  return b;
}

function createLinks(id) {
  const prefix = "https://vk.com/";
  const newArr = id.map(element => {
    return element = prefix + element;
  });
  console.log(newArr);
  return newArr;
}

function inResalt (links) {
  let b = links.join('\n')
  console.log(b)
  return b;
}