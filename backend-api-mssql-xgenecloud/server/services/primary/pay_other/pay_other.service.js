const {
  BaseService
} = require('xc-core');

class PayOtherService extends BaseService {

  constructor(app) {
    super(app);
    this.pay_other = app.$dbs.primary.pay_other;
  }

  async create(req, res) {
    let data = await this.pay_other.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.pay_other.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.pay_other.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.pay_other.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.pay_other.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.pay_other.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.pay_other.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.pay_other.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.pay_other.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.pay_other.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.pay_other.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.pay_other.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.pay_other.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.pay_other.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.pay_other.delb(req.body);
    return data;
  }

}

module.exports = PayOtherService;