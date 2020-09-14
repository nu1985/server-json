const {
  BaseService
} = require('xc-core');

class MonRubService extends BaseService {

  constructor(app) {
    super(app);
    this.monRub = app.$dbs.primary.monRub;
  }

  async create(req, res) {
    let data = await this.monRub.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.monRub.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.monRub.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.monRub.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.monRub.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.monRub.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.monRub.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.monRub.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.monRub.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.monRub.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.monRub.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.monRub.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.monRub.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.monRub.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.monRub.delb(req.body);
    return data;
  }

}

module.exports = MonRubService;