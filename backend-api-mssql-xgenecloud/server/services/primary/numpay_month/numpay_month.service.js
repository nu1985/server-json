const {
  BaseService
} = require('xc-core');

class NumpayMonthService extends BaseService {

  constructor(app) {
    super(app);
    this.numpay_month = app.$dbs.primary.numpay_month;
  }

  async create(req, res) {
    let data = await this.numpay_month.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.numpay_month.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.numpay_month.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.numpay_month.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.numpay_month.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.numpay_month.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.numpay_month.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.numpay_month.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.numpay_month.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.numpay_month.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.numpay_month.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.numpay_month.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.numpay_month.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.numpay_month.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.numpay_month.delb(req.body);
    return data;
  }

}

module.exports = NumpayMonthService;