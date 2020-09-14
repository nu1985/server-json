const {
  BaseService
} = require('xc-core');

class MonBank3Service extends BaseService {

  constructor(app) {
    super(app);
    this.monBank3 = app.$dbs.primary.monBank3;
  }

  async create(req, res) {
    let data = await this.monBank3.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.monBank3.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.monBank3.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.monBank3.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.monBank3.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.monBank3.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.monBank3.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.monBank3.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.monBank3.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.monBank3.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.monBank3.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.monBank3.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.monBank3.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.monBank3.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.monBank3.delb(req.body);
    return data;
  }

}

module.exports = MonBank3Service;