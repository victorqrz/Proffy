import express from 'express';

const app = express();

app.get('/', (req, res) => {
  console.log('Acessou a rota !');
});

app.listen(3333);