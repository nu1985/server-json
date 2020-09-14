const {
  BaseService
} = require('xc-core');

class AdminlogService extends BaseService {

  constructor(app) {
    super(app);
    this.adminlog = app.$dbs.primary.adminlog;
  }

  async create(req, res) {
    let data = await this.adminlog.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.adminlog.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.adminlog.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.adminlog.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.adminlog.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.adminlog.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.adminlog.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.adminlog.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.adminlog.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.adminlog.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.adminlog.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.adminlog.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.adminlog.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.adminlog.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.adminlog.delb(req.body);
    return data;
  }

}

module.exports = AdminlogService;