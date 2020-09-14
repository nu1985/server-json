const {
  BaseService
} = require('xc-core');

class GeographyService extends BaseService {

  constructor(app) {
    super(app);
    this.geography = app.$dbs.primary.geography;
  }

  async create(req, res) {
    let data = await this.geography.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.geography.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.geography.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.geography.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.geography.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.geography.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.geography.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.geography.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.geography.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.geography.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.geography.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.geography.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.geography.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.geography.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.geography.delb(req.body);
    return data;
  }

}

module.exports = GeographyService;