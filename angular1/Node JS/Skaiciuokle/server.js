const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/generate', (req, res) => {
    const difficulty = parseInt(req.query.difficulty);
    const totalCells = 100;
    const hiddenFields = Math.floor(totalCells * (difficulty / 100));
    const table = generateTable(hiddenFields);
    res.json(table);
});

function generateTable(hiddenFields) {
    let table = Array.from({ length: 10 }, (_, i) =>
        Array.from({ length: 10 }, (_, j) => ({ value: (i + 1) * (j + 1), hidden: false }))
    );

    let hiddenCount = 0;
    while (hiddenCount < hiddenFields) {
        const rowIndex = Math.floor(Math.random() * 10);
        const colIndex = Math.floor(Math.random() * 10);
        if (!table[rowIndex][colIndex].hidden) {
            table[rowIndex][colIndex].hidden = true;
            hiddenCount++;
        }
    }
    return table;
}

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});