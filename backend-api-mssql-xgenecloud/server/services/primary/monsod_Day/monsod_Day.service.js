const {
  BaseService
} = require('xc-core');

class MonsodDayService extends BaseService {

  constructor(app) {
    super(app);
    this.monsod_Day = app.$dbs.primary.monsod_Day;
  }

  async create(req, res) {
    let data = await this.monsod_Day.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.monsod_Day.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.monsod_Day.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.monsod_Day.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.monsod_Day.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.monsod_Day.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.monsod_Day.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.monsod_Day.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.monsod_Day.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.monsod_Day.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.monsod_Day.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.monsod_Day.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.monsod_Day.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.monsod_Day.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.monsod_Day.delb(req.body);
    return data;
  }

}

module.exports = MonsodDayService;