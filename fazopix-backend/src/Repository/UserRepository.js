const bcrypt = require("bcrypt");

const { connect } = require("../Database/database");

class UserRepository {
  constructor(conn) {
    this.conn = conn;
  }

  async getUser(id) {
    const connection = await this.conn();
    const [user] = await connection.query(
      `SELECT * FROM user WHERE id = ${id};`
    );
    return user;
  }

  async createUser(name, email, password) {
    const connection = await this.conn();

    const [verifyEmail] = await connection.query(`
      SELECT email FROM user WHERE email = '${email}';
    `);

    if (verifyEmail.length !== 0) return;

    const cryptographedPassword = bcrypt.hashSync(password, 10);

    const sql = "INSERT INTO user (name, email, password) VALUES (?, ?, ?);";
    const values = [name, email, cryptographedPassword];
    await connection.query(sql, values);
    return { name, email };
  }
}

module.exports = new UserRepository(connect);
