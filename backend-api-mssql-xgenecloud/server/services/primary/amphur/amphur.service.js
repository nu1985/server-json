const {
  BaseService
} = require('xc-core');

class AmphurService extends BaseService {

  constructor(app) {
    super(app);
    this.amphur = app.$dbs.primary.amphur;
  }

  async create(req, res) {
    let data = await this.amphur.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.amphur.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.amphur.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.amphur.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.amphur.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.amphur.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.amphur.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.amphur.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.amphur.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.amphur.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.amphur.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.amphur.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.amphur.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.amphur.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.amphur.delb(req.body);
    return data;
  }

}

module.exports = AmphurService;