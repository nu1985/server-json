const {
  BaseService
} = require('xc-core');

class NumpayService extends BaseService {

  constructor(app) {
    super(app);
    this.numpay = app.$dbs.primary.numpay;
  }

  async create(req, res) {
    let data = await this.numpay.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.numpay.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.numpay.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.numpay.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.numpay.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.numpay.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.numpay.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.numpay.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.numpay.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.numpay.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.numpay.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.numpay.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.numpay.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.numpay.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.numpay.delb(req.body);
    return data;
  }

}

module.exports = NumpayService;