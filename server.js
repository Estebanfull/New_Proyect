const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Configurar la carpeta "public" para archivos estáticos (CSS y JS)
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal para servir el archivo `index.html` desde "html"
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'index.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
