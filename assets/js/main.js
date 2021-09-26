var data;
var nomsIfNoJSON = [
  "Amour",
  "Amulette",
  "Ancêtre",
  "Anneau",
  "Assiette",
  "Bijou",
  "Biscuit",
  "Bonbon",
  "Burger",
  "Camion",
  "Canard",
  "Carotte",
  "Charité",
  "Chat",
  "Château",
  "Citron",
  "Clé",
  "Couteau",
  "Crabe",
  "Craquelin",
  "Crayon",
  "Culte",
  "Danger",
  "Diamant",
  "Énigme",
  "Fantôme",
  "Fraise",
  "Fruit",
  "Hasard",
  "Jus",
  "Laitue",
  "Liberté",
  "Lit",
  "Livraison",
  "Lutin",
  "Légumes",
  "Manette",
  "Miracle",
  "Mixture",
  "Montagne",
  "Moustache",
  "Nuit",
  "Oeuf",
  "Ogre",
  "Olive",
  "Ours",
  "Pain",
  "Parfum",
  "Patience",
  "Pierre",
  "Pieuvre",
  "Pirate",
  "Potage",
  "Rôti",
  "Sac",
  "Sage",
  "Salade",
  "Sept",
  "Soleil",
  "Soulier",
  "Système",
  "Tarte",
  "Tarôt",
  "Taxi",
  "Tempête",
  "Tricot",
  "Voilier",
  "Vérité",
];
var adjectifsIfNoJSON = [
  "Alpin",
  "Chaotique",
  "Chic",
  "Cru",
  "Dynamique",
  "Débutant",
  "Flamboyant",
  "Géant",
  "Incroyable",
  "Irrésistible",
  "Jumeaux",
  "Ludique",
  "Lumineux",
  "Merveilleux",
  "Nomade",
  "Patient",
  "Pollué",
  "Positif",
  "Spontané",
  "Urbain",
];



function loadJSON(callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', 'https://mamarmite.github.io/expression-generator/noms.json', true);
  xobj.onreadystatechange = function ()
  {
    if (xobj.readyState == 4 && xobj.status == "200")
    {
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}


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


function renderResult(elementId, content)
{
  let $tag = document.getElementById(elementId);
  $tag.innerHTML = content;
}


function renderUIInfo() {
  renderResult("noms_count", "("+data.noms.length+")");
  renderResult("adjectifs_count", "("+data.adjectifs.length+")");
}


function addWordIn(word, targetData)
{
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
  var noms, adjectifs;

  if (data !== null) {
    noms = data.noms;
    adjectifs = data.adjectifs;
    console.log("Loaded from json");
  } else {
    noms = nomsIfNoJSON;
    adjectifs = adjectifsIfNoJSON;
    console.log("Loaded from constants");
  }

  const nom = getIndexValue(noms),//noms[Math.floor(Math.random() * noms.length)],
    adjectif = getIndexValue(adjectifs),//adjectifs[Math.floor(Math.random() * adjectifs.length)],
    verbMode = Math.random() < 0.5;

  let resultat;

  if (verbMode) {
    resultat = [nom, "est", adjectif.toLowerCase()].join(" ");
  } else {
    resultat = [adjectif, nom.toLowerCase()].join(" ");
  }

  addHistoryLine(resultat);
  renderHistory();
  renderResult("result", resultat);
}


function addNom() {
  newNom = document.getElementById("new_nom").value;
  data.noms = addWordIn(newNom, data.noms);
  renderUIInfo();
}

function addAdjectif() {
  newAdjectif = document.getElementById("new_adjectif").value;
  data.adjectifs = addWordIn(newAdjectif, data.adjectifs);
  renderUIInfo();
}


function init() {
  loadJSON(function(response) {
    // Parse JSON string into object
    data = JSON.parse(response);
    renderUIInfo();
    douxItte();
  });
}

//  Assign callback to events.
const $btn = document.getElementById("regenerate"),
  $btnAddNoms = document.getElementById('add_nom'),
  $btnAddAdjectifs = document.getElementById('add_adjectif');

$btn.addEventListener("click", douxItte);
$btnAddNoms.addEventListener("click", addNom);
$btnAddAdjectifs.addEventListener("click", addAdjectif);


//  First load
//$btn.dispatchEvent(new Event("click"));
init();