const {
  BaseService
} = require('xc-core');

class MonlukneeService extends BaseService {

  constructor(app) {
    super(app);
    this.monluknee = app.$dbs.primary.monluknee;
  }

  async create(req, res) {
    let data = await this.monluknee.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.monluknee.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.monluknee.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.monluknee.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.monluknee.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.monluknee.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.monluknee.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.monluknee.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.monluknee.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.monluknee.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.monluknee.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.monluknee.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.monluknee.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.monluknee.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.monluknee.delb(req.body);
    return data;
  }

}

module.exports = MonlukneeService;