let testDelete = document.getElementsByClassName('k1zIA rSk4se');
testDelete.remove()
console.log(testDelete)
console.log('hello')
/*
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};

console.log('test');

let testDelete = document.getElementsByClassName('lnXdpd');

console.log(testDelete);

testDelete.innerHTML = '';

const testSports = function(num) {
  
    fetch(`https://curriculum-api.codesmith.io/messages`, 
    {

        mode: 'no-cors',
        // credentials: 'include', 
        // headers: {
        //'Access-Control-Allow-Origin': `*`,
        // 'Access-Control-Allow-Method': '*'
        // },
    })
  .then(data => data.json())
  .then((data) => {
    console.log('test')
    console.log(data);
    var image = data.img;
    console.log(image);
    var title = data.title;
    let div =  document.createElement('div');
    let imgTag = document.createElement('img');
    let comicName = document.createElement('p');
    imgTag.setAttribute('src', `${image}`);
    comicName.innerHTML(`${title}`);
    let appending = document.getElementsByClassName('o3j99 ikrT4e om7nvf');
    appending.appendChild(div);
    div.appendChild(imgTag);
    div.appendChild(comicName);
    })
  }

  function getPhoto(){
    let int = getRandomInt(1, 614);
    testSports(int);
  }

  getPhoto();*/