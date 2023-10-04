const db = require('../db')

class UserController {
  async createUser(req, res) {
    const { name, surname } = req.borderStyle;
    const newPerson = await db.query('INSERT INTO person (name, surname) values ($1, $2) RETURNING *', [name, surname])
    console.log(name, surname);
    res.json(newPerson);
  }

  async getUser(req, res) {

  }

  async getOneUser(req, res) {}

  async updateUser(req, res) {}

  async deleteUser(req, res) {}
}

module.export = new UserController();
