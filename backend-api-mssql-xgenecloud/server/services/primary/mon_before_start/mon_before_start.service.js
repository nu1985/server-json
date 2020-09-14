const {
  BaseService
} = require('xc-core');

class MonBeforeStartService extends BaseService {

  constructor(app) {
    super(app);
    this.mon_before_start = app.$dbs.primary.mon_before_start;
  }

  async create(req, res) {
    let data = await this.mon_before_start.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.mon_before_start.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.mon_before_start.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.mon_before_start.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.mon_before_start.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.mon_before_start.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.mon_before_start.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.mon_before_start.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.mon_before_start.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.mon_before_start.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.mon_before_start.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.mon_before_start.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.mon_before_start.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.mon_before_start.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.mon_before_start.delb(req.body);
    return data;
  }

}

module.exports = MonBeforeStartService;