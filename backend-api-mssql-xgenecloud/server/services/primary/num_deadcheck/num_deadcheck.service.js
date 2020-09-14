const {
  BaseService
} = require('xc-core');

class NumDeadcheckService extends BaseService {

  constructor(app) {
    super(app);
    this.num_deadcheck = app.$dbs.primary.num_deadcheck;
  }

  async create(req, res) {
    let data = await this.num_deadcheck.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.num_deadcheck.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.num_deadcheck.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.num_deadcheck.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.num_deadcheck.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.num_deadcheck.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.num_deadcheck.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.num_deadcheck.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.num_deadcheck.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.num_deadcheck.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.num_deadcheck.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.num_deadcheck.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.num_deadcheck.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.num_deadcheck.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.num_deadcheck.delb(req.body);
    return data;
  }

}

module.exports = NumDeadcheckService;