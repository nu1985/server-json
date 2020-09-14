const {
  BaseService
} = require('xc-core');

class DatePresentService extends BaseService {

  constructor(app) {
    super(app);
    this.date_present = app.$dbs.primary.date_present;
  }

  async create(req, res) {
    let data = await this.date_present.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.date_present.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.date_present.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.date_present.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.date_present.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.date_present.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.date_present.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.date_present.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.date_present.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.date_present.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.date_present.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.date_present.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.date_present.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.date_present.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.date_present.delb(req.body);
    return data;
  }

}

module.exports = DatePresentService;