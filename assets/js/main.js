function douxItte() {
  const noms = [
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

  const adjectifs = [
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

  const nom = noms[Math.floor(Math.random() * noms.length)],
    adjectif = adjectifs[Math.floor(Math.random() * adjectifs.length)],
    verbMode = Math.random() < 0.5,
    $result = document.getElementById("result");

  let resultat;

  if (verbMode) {
    resultat = [nom, "est", adjectif].join(" ");
  } else {
    resultat = [adjectif, nom].join(" ");
  }

  $result.innerHTML = resultat;
}

const $btn = document.getElementById("regenerate");
$btn.addEventListener("click", douxItte);

$btn.dispatchEvent(new Event("click"));
