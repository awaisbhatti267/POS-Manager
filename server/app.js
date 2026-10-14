require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { setupDatabase } = require('./config/db');
const authRoutes = require('./routes/routes');

const app = express();

app.use(express.json());
app.use(cors({ origin: true }));
app.use(authRoutes);

async function startServer() {
  try {
    await setupDatabase();

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
}

startServer();