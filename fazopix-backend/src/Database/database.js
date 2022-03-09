const mysql = require("mysql2/promise");

async function connect() {
  if (global.connection && global.connection.state !== "disconnected")
    return global.connection;

  const connection = mysql.createConnection({
    host: process.env.SERVERHOST,
    user: process.env.SERVERUSER,
    password: process.env.SERVERPASSWORD,
    database: process.env.SERVERDATABASE,
  });

  global.connection = connection;

  console.log("Conectou no MySQL");
  return connection;
}

connect();

// async function selectUser() {
//   const conn = await connect();
//   const [rows] = await conn.query("SELECT * FROM user WHERE id = 1");
//   return rows;
// }

module.exports = { connect };
