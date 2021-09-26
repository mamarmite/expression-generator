
var expressionHistory = [];

function addHistoryLine(line) {
    expressionHistory.push(line);
}

function renderHistory() {
    $historyContainer = document.getElementById('history');
    historyText = "";
    expressionHistory.forEach(function(line) {
        historyText += "<div>" + line + "</div>";
    });
    $historyContainer.innerHTML = historyText;
}