const {
  BaseService
} = require('xc-core');

class NumpayYearsService extends BaseService {

  constructor(app) {
    super(app);
    this.numpay_years = app.$dbs.primary.numpay_years;
  }

  async create(req, res) {
    let data = await this.numpay_years.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.numpay_years.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.numpay_years.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.numpay_years.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.numpay_years.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.numpay_years.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.numpay_years.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.numpay_years.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.numpay_years.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.numpay_years.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.numpay_years.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.numpay_years.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.numpay_years.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.numpay_years.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.numpay_years.delb(req.body);
    return data;
  }

}

module.exports = NumpayYearsService;