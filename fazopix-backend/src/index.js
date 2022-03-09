const express = require("express");

require("dotenv").config();

// const db = require("./Database/database");

// async function getUser() {
//   const usuarios = await db.selectUser();
//   console.log(usuarios);
// }

// getUser();

// app
const app = express();
app.use(express.json());
const routes = require("./routes");
app.use(routes);

// env
const protocol = process.env.PROTOCOL || "http";
const ip = require("ip").address();
const port = process.env.PORT || 3030;

app.listen(port, () =>
  console.log(`
    Servidor iniciado no endereço http://localhost:${port} ou ${protocol}://${ip}:${port}
`)
);
