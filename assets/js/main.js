

const name = 'nom',
    adjective = 'adjectif';

var modes = [
  {
    "limitUp": 0.33,
    "limitdown": 0,
    "label": "N+A",
    "config": [name, adjective]
  },
  {
    "limitUp": 0.66,
    "limitdown": 0.34,
    "label": "A+N",
    "config": [adjective, name]
  },
  {
    "limitUp": 1,
    "limitdown": 0.67,
    "label": "N+N",
    "config": [name, name]
  }
];


function getRandomIndex(targetArray) {
  return Math.floor(Math.random() * targetArray.length);
}


function getIndexValue(targetArray, index= -1)
{
  if (index > 0) {
    return targetArray[index];
  } else {
    return targetArray[getRandomIndex(targetArray)];
  }
}


function getMode() {
  var rand = Math.random(),
      returnMode = modes[0];
  modes.forEach(function(mode) {
    if (rand >= mode.limitdown && rand <= mode.limitUp) {
      returnMode = mode;
    }
  });
  return returnMode;
}


function renderResult(elementId, content) {
  let $tag = document.getElementById(elementId);
  $tag.innerHTML = content;
}


function renderUIInfo() {
  renderResult("noms_count", "("+data.noms.length+")");
  renderResult("adjectifs_count", "("+data.adjectifs.length+")");
}


function addWordIn(word, targetData) {
  var canAddWord = true;
  //check if the word already exist.
  targetData.forEach(function(element) {
    if (word === element) {
      canAddWord = false;
    }
  });

  if (canAddWord) {
    //add the word to.
    targetData.push(word);
  }
  return targetData;
}


//encore btn - main action.
function douxItte() {
  var noms = data.noms,
      adjectifs = data.adjectifs;

  const nom = getIndexValue(noms),
    adjectif = getIndexValue(adjectifs);

  let resultat = [];
  var currentMode = getMode();

  currentMode.config.forEach(function(word, index) {
    let targetWord = "";
    if (word === name) {
      targetWord = getIndexValue(noms);
    }
    if (word === adjective) {
      targetWord = getIndexValue(adjectifs);
    }
    if (index > 0) {
      targetWord = targetWord.toLowerCase();
    }
    resultat.push(targetWord.toString());
  });

  resultat = resultat.join(" ");

  addHistoryLine("["+currentMode.label+"] "+ resultat);
  renderHistory();
  renderResult("result", resultat);
}


function addNom() {
  newNom = document.getElementById("new_nom").value;
  data.noms = addWordIn(newNom, data.noms);
  updateData();
  renderUIInfo();
}

function addAdjectif() {
  newAdjectif = document.getElementById("new_adjectif").value;
  data.adjectifs = addWordIn(newAdjectif, data.adjectifs);
  updateData();
  renderUIInfo();
}

function start() {
  if (data === null) {
    data = dataIfNoJSON;
    console.log("Loaded static json from js");
  }
  renderUIInfo();
  douxItte();
}


function init() {
  loadData();
  /*loadJSON(function(response) {
    // Parse JSON string into object
    data = JSON.parse(response);
    start();
  });*/
}


//  Assign callback to events.
const $btn = document.getElementById("regenerate"),
  $btnAddNoms = document.getElementById('add_nom'),
  $btnAddAdjectifs = document.getElementById('add_adjectif');

$btn.addEventListener("click", douxItte);
$btnAddNoms.addEventListener("click", addNom);
$btnAddAdjectifs.addEventListener("click", addAdjectif);
window.addEventListener('DataReady', start);


//  First load
//$btn.dispatchEvent(new Event("click"));
init();