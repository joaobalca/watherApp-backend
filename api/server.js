require('dotenv').config();
const express = require('express');
const connectDB = require('./config/dbConfig');
const weatherRoutes = require('./routes/weatherRoutes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api', weatherRoutes);


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  
module.exports = app;
  
