const {
  BaseService
} = require('xc-core');

class ZipcodeService extends BaseService {

  constructor(app) {
    super(app);
    this.zipcode = app.$dbs.primary.zipcode;
  }

  async create(req, res) {
    let data = await this.zipcode.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.zipcode.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.zipcode.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.zipcode.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.zipcode.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.zipcode.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.zipcode.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.zipcode.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.zipcode.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.zipcode.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.zipcode.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.zipcode.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.zipcode.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.zipcode.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.zipcode.delb(req.body);
    return data;
  }

}

module.exports = ZipcodeService;