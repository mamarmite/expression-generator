
var expressionHistory = [];

function addHistoryLine(line, render = true) {
    expressionHistory.push(line);
    if (render) {
        renderHistory();
    }
}

function renderHistory() {
    $historyContainer = document.getElementById('history');
    historyText = "";
    expressionHistory.forEach(function(line) {
        historyText += "<div>" + line + "</div>";
    });
    $historyContainer.innerHTML = historyText;
}