//objeto req = vai conter todos os detalhes da requisição
//res = resposta que a gente vaid ar pra requisição
//a gente faz uma requisição e devolve uma resposta pro usuário

const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o DB
mongoose.connect(
  "mongodb://localhost:27017/nodeapi",
{ useNewUrlParser: true }
);
requireDir('./src/models');

// Rotas
app.use("/api", require("./src/routes"));

app.listen(3001);