let data,
    dataIfNoJSON = {
        "noms": [
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
            "Vérité"
        ],
        "adjectifs": [
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
            "Urbain"
        ]
    };

const localStorageJSONID = "namesandadjectives";


function loadJSON(callback) {
    let xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'https://mamarmite.github.io/expression-generator/noms.json', true);

    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}


function loadData() {
    data = window.localStorage.getItem(localStorageJSONID);
    if (!data) {
        loadJSON(function(response) {
            data = JSON.parse(response);
            window.localStorage.setItem(localStorageJSONID, response);
            window.dispatchEvent(new Event('DataReady'));
            console.log("Loaded from json");
        });
    } else {
        data = JSON.parse(data)
        console.log("Loaded from local storage");
        window.dispatchEvent(new Event('DataReady'));
    }
}



function updateData() {
    window.localStorage.setItem(localStorageJSONID, JSON.stringify(data));
}