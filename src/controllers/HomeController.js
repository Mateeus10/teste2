class HomeController {
  async index(req, res) {
    res.json('Olá Mundo');
  }
}

export default new HomeController();
