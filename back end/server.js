const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

// Configuración de CORS (permite peticiones desde el frontend)
app.use(cors());

// Configuración del puerto
const PORT = process.env.PORT || 3000;

// Configuración del endpoint
app.get('/api/users', async (req, res) => {
  try {
    const response = await axios.get('https://randomuser.me/api/', {
      params: {
        results: 10,
        inc: 'name,gender,location,email,dob,picture',
        noinfo: true
      }
    });
    // ... resto del código
  } catch (error) {
    // Configuración de manejo de errores
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});