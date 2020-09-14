const {
  BaseService
} = require('xc-core');

class MonService extends BaseService {

  constructor(app) {
    super(app);
    this.mon = app.$dbs.primary.mon;
  }

  async create(req, res) {
    let data = await this.mon.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.mon.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.mon.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.mon.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.mon.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.mon.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.mon.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.mon.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.mon.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.mon.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.mon.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.mon.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.mon.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.mon.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.mon.delb(req.body);
    return data;
  }

}

module.exports = MonService;