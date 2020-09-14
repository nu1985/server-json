const {
  BaseService
} = require('xc-core');

class YearsrecordService extends BaseService {

  constructor(app) {
    super(app);
    this.yearsrecord = app.$dbs.primary.yearsrecord;
  }

  async create(req, res) {
    let data = await this.yearsrecord.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.yearsrecord.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.yearsrecord.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.yearsrecord.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.yearsrecord.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.yearsrecord.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.yearsrecord.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.yearsrecord.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.yearsrecord.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.yearsrecord.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.yearsrecord.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.yearsrecord.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.yearsrecord.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.yearsrecord.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.yearsrecord.delb(req.body);
    return data;
  }

}

module.exports = YearsrecordService;