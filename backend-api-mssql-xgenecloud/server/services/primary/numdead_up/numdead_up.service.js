const {
  BaseService
} = require('xc-core');

class NumdeadUpService extends BaseService {

  constructor(app) {
    super(app);
    this.numdead_up = app.$dbs.primary.numdead_up;
  }

  async create(req, res) {
    let data = await this.numdead_up.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.numdead_up.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.numdead_up.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.numdead_up.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.numdead_up.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.numdead_up.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.numdead_up.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.numdead_up.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.numdead_up.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.numdead_up.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.numdead_up.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.numdead_up.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.numdead_up.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.numdead_up.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.numdead_up.delb(req.body);
    return data;
  }

}

module.exports = NumdeadUpService;