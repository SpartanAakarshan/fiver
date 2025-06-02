const express = require('express');
const path = require('path');
const app = express();

// Serve gym website
app.use('/gym', express.static(path.join(__dirname, 'gym')));

// Serve bakery website
app.use('/bakery', express.static(path.join(__dirname, 'bakery')));

// Serve clinic website
app.use('/clinic', express.static(path.join(__dirname, 'clinic')));

// Redirect root to gym website
app.get('/', (req, res) => {
  res.redirect('/gym');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Gym website: http://localhost:${PORT}/gym`);
  console.log(`Bakery website: http://localhost:${PORT}/bakery`);
  console.log(`Clinic website: http://localhost:${PORT}/clinic`);
}); 