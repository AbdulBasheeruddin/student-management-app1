const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Home route
app.get('/', (req, res) => {
  res.send('Student Management API is running');
});

// ✅ CONNECT ROUTER
const studentRoutes = require('./studentRoutes');
app.use('/students', studentRoutes);

// Server start
app.listen(PORT, () => {
  console.log('Server running on port ${PORT}');
});