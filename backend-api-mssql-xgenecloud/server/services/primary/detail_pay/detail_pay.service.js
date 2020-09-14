const {
  BaseService
} = require('xc-core');

class DetailPayService extends BaseService {

  constructor(app) {
    super(app);
    this.detail_pay = app.$dbs.primary.detail_pay;
  }

  async create(req, res) {
    let data = await this.detail_pay.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.detail_pay.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.detail_pay.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.detail_pay.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.detail_pay.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.detail_pay.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.detail_pay.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.detail_pay.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.detail_pay.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.detail_pay.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.detail_pay.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.detail_pay.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.detail_pay.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.detail_pay.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.detail_pay.delb(req.body);
    return data;
  }

}

module.exports = DetailPayService;