

function renderUIInfo() {
  renderResult("noms_count", "("+data.noms.length+")");
  renderResult("adjectifs_count", "("+data.adjectifs.length+")");
}

function renderResult(elementId, content) {
  let $tag = document.getElementById(elementId);
  $tag.innerHTML = content;
}

//  Assign callback to events.
const $btn = document.getElementById("regenerate"),
    $btnAddNoms = document.getElementById('add_nom'),
    $btnAddAdjectifs = document.getElementById('add_adjectif');


function setBtnInteractivity() {
  $btn.addEventListener("click", douxItte);
  $btnAddNoms.addEventListener("click", addNom);
  $btnAddAdjectifs.addEventListener("click", addAdjectif);

  document.getElementById("new_adjectif").addEventListener("keyup", event => {
    if(event.key !== "Enter") return;
    $btnAddAdjectifs.click();
    event.preventDefault();
    event.target.value = "";
  });

  document.getElementById("new_nom").addEventListener("keyup", event => {
    if(event.key !== "Enter") return;
    $btnAddNoms.click();
    event.preventDefault();
    event.target.value = "";
  });

}
