const {
  BaseService
} = require('xc-core');

class VillageService extends BaseService {

  constructor(app) {
    super(app);
    this.village = app.$dbs.primary.village;
  }

  async create(req, res) {
    let data = await this.village.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.village.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.village.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.village.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.village.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.village.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.village.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.village.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.village.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.village.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.village.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.village.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.village.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.village.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.village.delb(req.body);
    return data;
  }

}

module.exports = VillageService;