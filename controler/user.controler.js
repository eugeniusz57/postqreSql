const db = require("../db");

class UserController {
  async createUser(req, res) {
    const { name, surname } = req.borderStyle;
    const newPerson = await db.query(
      "INSERT INTO person (name, surname) values ($1, $2) RETURNING *",
      [name, surname]
    );
    console.log(name, surname);
    res.json(newPerson);
  }

  async getUser(req, res) {
    const user = await db.query("SELECT * FROM person");
    res.json(user.rows);
  }

  async getOneUser(req, res) {
    const id = req.params.id;
    const user = await db.query("SELECT * FROM person where id= $1 ", [id]);
    res.json(user.rows[0]);
  }

  async updateUser(req, res) {
    const {id, name, surname} = req.body;
    const user = await db.query("UPDATE set name = $1, surname = $2 where id = $3 RETURNING *", [name, surname, id]);
    res.json(user.rows[0]);
  }

  async deleteUser(req, res) {
    const id = req.params.id;
    const user = await db.query("DELETE  FROM person where id= $1 ", [id]);
    res.json(user.rows[0]);
  }
}

module.export = new UserController();
