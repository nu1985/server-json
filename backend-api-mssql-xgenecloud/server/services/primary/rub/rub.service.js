const {
  BaseService
} = require('xc-core');

class RubService extends BaseService {

  constructor(app) {
    super(app);
    this.rub = app.$dbs.primary.rub;
  }

  async create(req, res) {
    let data = await this.rub.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.rub.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.rub.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.rub.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.rub.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.rub.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.rub.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.rub.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.rub.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.rub.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.rub.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.rub.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.rub.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.rub.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.rub.delb(req.body);
    return data;
  }

}

module.exports = RubService;