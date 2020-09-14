const {
  BaseService
} = require('xc-core');

class StatusService extends BaseService {

  constructor(app) {
    super(app);
    this.status = app.$dbs.primary.status;
  }

  async create(req, res) {
    let data = await this.status.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.status.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.status.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.status.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.status.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.status.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.status.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.status.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.status.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.status.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.status.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.status.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.status.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.status.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.status.delb(req.body);
    return data;
  }

}

module.exports = StatusService;