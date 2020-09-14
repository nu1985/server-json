const {
  BaseService
} = require('xc-core');

class UseradminService extends BaseService {

  constructor(app) {
    super(app);
    this.useradmin = app.$dbs.primary.useradmin;
  }

  async create(req, res) {
    let data = await this.useradmin.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.useradmin.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.useradmin.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.useradmin.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.useradmin.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.useradmin.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.useradmin.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.useradmin.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.useradmin.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.useradmin.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.useradmin.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.useradmin.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.useradmin.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.useradmin.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.useradmin.delb(req.body);
    return data;
  }

}

module.exports = UseradminService;