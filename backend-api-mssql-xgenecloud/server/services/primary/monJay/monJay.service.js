const {
  BaseService
} = require('xc-core');

class MonJayService extends BaseService {

  constructor(app) {
    super(app);
    this.monJay = app.$dbs.primary.monJay;
  }

  async create(req, res) {
    let data = await this.monJay.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.monJay.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.monJay.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.monJay.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.monJay.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.monJay.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.monJay.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.monJay.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.monJay.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.monJay.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.monJay.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.monJay.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.monJay.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.monJay.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.monJay.delb(req.body);
    return data;
  }

}

module.exports = MonJayService;