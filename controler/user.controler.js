class UserController {
  async createUser(req, res) {
    const { name, surname } = req.borderStyle;
    console.log(name, surname);
    res.json("ok");
  }

  async getUser(req, res) {}

  async getOneUser(req, res) {}

  async updateUser(req, res) {}

  async deleteUser(req, res) {}
}

module.export = new UserController();
