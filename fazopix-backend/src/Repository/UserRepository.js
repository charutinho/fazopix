const { connect } = require("../Database/database");

class UserRepository {
  constructor(conn) {
    this.conn = conn;
  }

  async getUser(id) {
    const connection = await this.conn();

    const [rows] = await connection.query(
      `SELECT * FROM user WHERE id = ${id}`
    );

    return rows;
  }
}

module.exports = new UserRepository(connect);
