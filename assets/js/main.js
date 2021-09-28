const name = 'nom',
    adjective = 'adjectif';

const modes = [
  {
    "limitUp": 0.33,
    "limitDown": 0,
    "label": "N+A",
    "config": [name, adjective]
  },
  {
    "limitUp": 0.66,
    "limitDown": 0.34,
    "label": "A+N",
    "config": [adjective, name]
  },
  {
    "limitUp": 1,
    "limitDown": 0.67,
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
  let rand = Math.random(),
      returnMode = modes[0];
  modes.forEach(function(mode) {
    if (rand >= mode.limitDown && rand <= mode.limitUp) {
      returnMode = mode;
    }
  });
  return returnMode;
}


function addWordIn(word, targetData) {
  let canAddWord = true;
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


/**
 * Main action
 * triggered on Click of "encore" btn.
 * And on Start.
 */
function douxItte() {
  let noms = data.noms,
      adjectifs = data.adjectifs,
      resultat = [],
      currentMode = getMode();

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

  addHistoryLine("["+currentMode.label+"] "+ resultat);//render automatically.
  renderResult("result", resultat);
}


function addNom() {
  let newNom = document.getElementById("new_nom").value;
  data.noms = addWordIn(newNom, data.noms);
  updateData();
  renderUIInfo();
}


function addAdjectif() {
  let newAdjectif = document.getElementById("new_adjectif").value;
  data.adjectifs = addWordIn(newAdjectif, data.adjectifs);
  updateData();
  renderUIInfo();
}


// Execute when DataReady is sent.
function start() {
  if (data === null) {
    data = dataIfNoJSON;
    console.log("Loaded static json from js");
  }
  renderUIInfo();
  douxItte();
}


function init() {
  setBtnInteractivity();
  loadData();
}

window.addEventListener('DataReady', start);


//  First load
//$btn.dispatchEvent(new Event("click"));
init();