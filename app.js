const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static('public'));

// Route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
