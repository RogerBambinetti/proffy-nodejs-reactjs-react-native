import express from 'express';

const app = express();

app.use(express.json());

app.get('/test', (req, res) => { res.json({}) })

app.listen(3333);