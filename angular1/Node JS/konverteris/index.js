const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
    <html>
      <body>
        <form action="/convert" method="post">
          <label for="centimeters">Enter distance in centimeters:</label>
          <input type="text" id="centimeters" name="centimeters" required>
          <button type="submit">Convert</button>
        </form>
      </body>
    </html>
  `);
});

app.post('/convert', (req, res) => {
    const centimeters = parseFloat(req.body.centimeters);
    const inches = centimeters / 2.54;
    res.send(`
    <html>
      <body>
        <p>${centimeters} cm is equal to ${inches.toFixed(2)} inches.</p>
        <a href="/">Convert another</a>
      </body>
    </html>
  `);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});