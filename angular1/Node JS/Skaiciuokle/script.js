function generateTable() {
    const difficulty = document.getElementById('difficulty').value;
    fetch(`/generate?difficulty=${difficulty}`)
        .then(response => response.json())
        .then(data => {
            const tableContainer = document.getElementById('tableContainer');
            tableContainer.innerHTML = '';
            const table = document.createElement('table');
            data.forEach(row => {
                const tr = document.createElement('tr');
                row.forEach(cell => {
                    const td = document.createElement('td');
                    td.textContent = cell.hidden ? '' : cell.value;
                    if (cell.hidden) {
                        td.classList.add('hidden');
                    }
                    tr.appendChild(td);
                });
                table.appendChild(tr);
            });
            tableContainer.appendChild(table);
        });
}