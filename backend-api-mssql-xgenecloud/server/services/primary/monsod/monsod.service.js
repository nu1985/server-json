const {
  BaseService
} = require('xc-core');

class MonsodService extends BaseService {

  constructor(app) {
    super(app);
    this.monsod = app.$dbs.primary.monsod;
  }

  async create(req, res) {
    let data = await this.monsod.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.monsod.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.monsod.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.monsod.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.monsod.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.monsod.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.monsod.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.monsod.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.monsod.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.monsod.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.monsod.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.monsod.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.monsod.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.monsod.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.monsod.delb(req.body);
    return data;
  }

}

module.exports = MonsodService;