const {
  BaseService
} = require('xc-core');

class MonBank2Service extends BaseService {

  constructor(app) {
    super(app);
    this.monBank2 = app.$dbs.primary.monBank2;
  }

  async create(req, res) {
    let data = await this.monBank2.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.monBank2.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.monBank2.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.monBank2.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.monBank2.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.monBank2.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.monBank2.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.monBank2.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.monBank2.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.monBank2.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.monBank2.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.monBank2.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.monBank2.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.monBank2.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.monBank2.delb(req.body);
    return data;
  }

}

module.exports = MonBank2Service;