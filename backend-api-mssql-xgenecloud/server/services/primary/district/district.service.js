const {
  BaseService
} = require('xc-core');

class DistrictService extends BaseService {

  constructor(app) {
    super(app);
    this.district = app.$dbs.primary.district;
  }

  async create(req, res) {
    let data = await this.district.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.district.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.district.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.district.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.district.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.district.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.district.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.district.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.district.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.district.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.district.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.district.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.district.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.district.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.district.delb(req.body);
    return data;
  }

}

module.exports = DistrictService;