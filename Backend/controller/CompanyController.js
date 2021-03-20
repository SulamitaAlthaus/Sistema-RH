const CompanyModel = require("../model/company")


class UserController {

  async create(req, res) {
    const company = new CompanyModel(req.body);
    await company
      .save()
      .then(response => {
        return res.status(200).json(response.id)
      }).catch((err) => {
        return res.status(500).json("Houve um erro ao criar a empresa " + err)
      });
  }

  async update(req, res) {
    await CompanyModel.update(req.body,
      { where: { id: req.params.id } })
      .then(response => {
        return res.status(200).json(response);
      })
      .catch(error => {
        return res.status(500).json("Houve um erro ao tentar atualizar a empresa " + error);
      });
  }

  async all(req, res) {
    await CompanyModel.findAll({})
      .then(response => {
        return res.status(200).json(response);
      })
      .catch(error => {
        return res.status(500).json(error);
      });
  }

  async showId(req, res) {
    await CompanyModel.findOne({ where: { id: req.params.id } })
      .then(response => {
        if (response)
          return res.status(200).json(response);
        else
          return res.status(404).json({ error: 'Empresa não encontrado' });
      })
      .catch(error => {
        return res.status(500).json(error);
      })
  }

  async delete(req, res) {
    await CompanyModel.destroy({ where: { id: req.params.id } })
      .then(response => {
        return res.status(200).json(response);
      })
      .catch(error => {
        return res.status(500).json(error);
      })
  }


}

module.exports = new UserController();