
//  Assign callback to events.
const $btn = document.getElementById("regenerate"),
    $btnAddNoms = document.getElementById('add_nom'),
    $btnAddAdjectifs = document.getElementById('add_adjectif'),
    $history = document.getElementById('history');
    $btnHistoryToggler = document.getElementById('history_toggler');



function renderUIInfo() {
  renderResult("noms_count", "("+data.noms.length+")");
  renderResult("adjectifs_count", "("+data.adjectifs.length+")");
}

function renderResult(elementId, content) {
  let $tag = document.getElementById(elementId);
  $tag.innerHTML = content;
  historyLabel();
}

function toggleHistory() {
  $history.classList.toggle("closed");
  $btnHistoryToggler.classList.toggle("closed");
  historyLabel();
}

function historyLabel() {
  if ($btnHistoryToggler.classList.contains("closed")) {
    $btnHistoryToggler.innerHTML = "("+$history.childElementCount+")" + " &rarr;";
  } else {
    $btnHistoryToggler.innerHTML = "&larr; "+"("+$history.childElementCount+")";
  }
}

function setBtnInteractivity() {
  $btn.addEventListener("click", douxItte);
  $btnAddNoms.addEventListener("click", addNom);
  $btnAddAdjectifs.addEventListener("click", addAdjectif);
  $btnHistoryToggler.addEventListener("click", toggleHistory);

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
