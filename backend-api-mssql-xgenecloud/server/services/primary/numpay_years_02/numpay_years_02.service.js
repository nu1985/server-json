const {
  BaseService
} = require('xc-core');

class NumpayYears02Service extends BaseService {

  constructor(app) {
    super(app);
    this.numpay_years_02 = app.$dbs.primary.numpay_years_02;
  }

  async create(req, res) {
    let data = await this.numpay_years_02.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.numpay_years_02.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.numpay_years_02.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.numpay_years_02.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.numpay_years_02.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.numpay_years_02.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.numpay_years_02.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.numpay_years_02.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.numpay_years_02.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.numpay_years_02.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.numpay_years_02.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.numpay_years_02.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.numpay_years_02.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.numpay_years_02.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.numpay_years_02.delb(req.body);
    return data;
  }

}

module.exports = NumpayYears02Service;