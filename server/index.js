const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const projectRoutes = require('./routes/projectRoutes');

app.use(cors());
app.use(express.json());
app.use('/api', projectRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});