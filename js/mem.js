
var listSrcPicture = [
  "as_tr.png",
  "2_tr.png",
  "3_tr.png",
  "4_tr.png",
  "5_tr.png",
  "6_tr.png",
  "7_tr.png",
  "8_tr.png",
  "9_tr.png",
  "10_tr.png",
  "valet_tr.png",
  "dame_tr.png",
  "roi_tr.png",
  "as_co.png",
  "2_co.png",
  "3_co.png",
  "4_co.png",
  "5_co.png",
  "6_co.png",
  "7_co.png",
  "8_co.png",
  "9_co.png",
  "10_co.png",
  "valet_co.png",
  "dame_co.png",
  "roi_co.png",
  "as_tr.png",
  "2_tr.png",
  "3_tr.png",
  "4_tr.png",
  "5_tr.png",
  "6_tr.png",
  "7_tr.png",
  "8_tr.png",
  "9_tr.png",
  "10_tr.png",
  "valet_tr.png",
  "dame_tr.png",
  "roi_tr.png",
  "as_co.png",
  "2_co.png",
  "3_co.png",
  "4_co.png",
  "5_co.png",
  "6_co.png",
  "7_co.png",
  "8_co.png",
  "9_co.png",
  "10_co.png",
  "valet_co.png",
  "dame_co.png",
  "roi_co.png"
];
listSrcPicture = shuffle(listSrcPicture);

var main = document.getElementsByTagName('main')[0];

for (var k = 0; k < listSrcPicture.length; k++) {
  card = document.createElement("div");
  card.classList.add('card');

  faceImgElement = document.createElement("img");
  faceImgElement.classList.add("recto");
  faceImgElement.src = "img/" + listSrcPicture[k];

  backImgElement = document.createElement("img");
  backImgElement.classList.add("verso");
  backImgElement.src = "img/back.png";
  card.appendChild(faceImgElement);
  card.appendChild(backImgElement);
  main.appendChild(card);
}

var divList = document.getElementsByClassName('card');
var nbrTry = 0;
var score = 0;
var triedList = [];
var srcList = [];
var displayScore = document.getElementById('score');

for (var i = 0; i < divList.length; i++) {
  div = divList[i];
  div.addEventListener('click', function(){
    this.classList.add('turned');
    src = this.childNodes[0].src;
    if (srcList[0] != srcList[1]) {
      if (triedList.length > 1) {
        for (var j = 0; j < triedList.length; j++) {
          tried = triedList[j];
          tried.classList.remove('turned');
        }
        triedList = [];
        srcList = [];
      }
    } else if (srcList[0] && srcList[1]){
      console.log(srcList[0]);
      console.log(srcList[1]);
      triedList = [];
      srcList = [];
      score++;
      if (score < 2) {
        displayScore.innerHTML = "Score: " + score + " point";
      } else {
        displayScore.innerHTML = "Score: " + score + " points";
      }
    }
    triedList.push(this);
    srcList.push(src);
    nbrTry++;
    if (score > 24) {
      displayScore.innerHTML = "Bravo, c'est gagné! Try again";
    }
  })
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
