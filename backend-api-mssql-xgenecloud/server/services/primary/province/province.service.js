const {
  BaseService
} = require('xc-core');

class ProvinceService extends BaseService {

  constructor(app) {
    super(app);
    this.province = app.$dbs.primary.province;
  }

  async create(req, res) {
    let data = await this.province.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.province.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.province.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.province.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.province.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.province.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.province.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.province.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.province.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.province.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.province.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.province.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.province.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.province.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.province.delb(req.body);
    return data;
  }

}

module.exports = ProvinceService;