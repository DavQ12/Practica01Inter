const express = require('express');
const app = express();

app.use(express.json()); // Middleware para parsear JSON
app.use(express.urlencoded({ extended: true })); // Middleware para parsear URL-encoded data

//uri o dirección base
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hola Mundo'
  });
});

app.get('/api', (req, res) => {
  res.status(200).json({
    message: 'Hola API'
  });
});

//metodo post
// se recibe un objeto json
app.post('/datos', (req, res) => {
    console.log(req.body);
    console.log(req.headers);
    console.log(req.query);
  // Aquí podrías procesar los datos recibidos
  res.status(201).json(
    req.body
  );
});

app.post('/datos2', (req, res) => {
    console.log(req.body);
  // Aquí podrías procesar los datos recibidos
  const saludo = {
    message: 'Hola, ' + req.body.nombre
  }
  res.status(201).json(
    saludo
  );
});

app.listen(3000, function() {
  console.log('http://localhost:'+3000);//url base
});
