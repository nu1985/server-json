const {
  BaseService
} = require('xc-core');

class RubOtherService extends BaseService {

  constructor(app) {
    super(app);
    this.rub_other = app.$dbs.primary.rub_other;
  }

  async create(req, res) {
    let data = await this.rub_other.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.rub_other.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.rub_other.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.rub_other.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.rub_other.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.rub_other.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.rub_other.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.rub_other.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.rub_other.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.rub_other.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.rub_other.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.rub_other.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.rub_other.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.rub_other.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.rub_other.delb(req.body);
    return data;
  }

}

module.exports = RubOtherService;