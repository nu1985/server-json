const {
  BaseService
} = require('xc-core');

class PayService extends BaseService {

  constructor(app) {
    super(app);
    this.pay = app.$dbs.primary.pay;
  }

  async create(req, res) {
    let data = await this.pay.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.pay.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.pay.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.pay.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.pay.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.pay.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.pay.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.pay.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.pay.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.pay.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.pay.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.pay.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.pay.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.pay.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.pay.delb(req.body);
    return data;
  }

}

module.exports = PayService;