function generateTable() {
    const rows = parseInt(document.getElementById('rows').value);
    const cols = parseInt(document.getElementById('cols').value);

    document.getElementById('tableContainer').innerHTML = '';

    if (isNaN(rows) || isNaN(cols)) {
        alert("Please enter numbers in both fields");
        return;
    }
    if (rows < 2 || rows > 10 || cols < 2 || cols > 10) {
        alert("Please enter numbers between 2 and 10");
        return;
    }

    let tableHTML = "<table border='1' cellpadding='5' cellspacing='0'>";
    
    for (let i = 1; i <= rows; i++) {
        tableHTML += "<tr>";
        for (let j = 1; j <= cols; j++) {
            tableHTML += `<td>${i * j}</td>`;
        }
        tableHTML += "</tr>";
    }

    tableHTML += "</table>";
    document.getElementById('tableContainer').innerHTML = tableHTML;
}