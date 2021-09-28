
const expressionHistory = [];

function addHistoryLine(line, render = true) {
    expressionHistory.push(line);
    if (render) {
        renderHistory();
    }
}

function renderHistory() {
    let historyText = "";

    expressionHistory.forEach(function(line) {
        historyText += "<div>" + line + "</div>";
    });
    $history.innerHTML = historyText;
}