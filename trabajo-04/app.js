const express = require('express');
const app = express();
const port = 3000;

// Configurar EJS como el motor de plantillas
app.set('view engine', 'ejs');

// Rutas estáticas (archivos en la carpeta 'public')
app.use(express.static('public'));

// Ruta principal
app.get('/', (req, res) => {
  res.render('index');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
