const {
  BaseService
} = require('xc-core');

class NumpayMemnewService extends BaseService {

  constructor(app) {
    super(app);
    this.numpay_memnew = app.$dbs.primary.numpay_memnew;
  }

  async create(req, res) {
    let data = await this.numpay_memnew.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.numpay_memnew.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.numpay_memnew.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.numpay_memnew.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.numpay_memnew.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.numpay_memnew.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.numpay_memnew.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.numpay_memnew.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.numpay_memnew.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.numpay_memnew.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.numpay_memnew.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.numpay_memnew.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.numpay_memnew.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.numpay_memnew.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.numpay_memnew.delb(req.body);
    return data;
  }

}

module.exports = NumpayMemnewService;