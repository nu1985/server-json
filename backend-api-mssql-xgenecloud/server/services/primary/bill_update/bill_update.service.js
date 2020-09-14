const {
  BaseService
} = require('xc-core');

class BillUpdateService extends BaseService {

  constructor(app) {
    super(app);
    this.bill_update = app.$dbs.primary.bill_update;
  }

  async create(req, res) {
    let data = await this.bill_update.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.bill_update.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.bill_update.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.bill_update.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.bill_update.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.bill_update.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.bill_update.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.bill_update.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.bill_update.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.bill_update.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.bill_update.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.bill_update.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.bill_update.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.bill_update.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.bill_update.delb(req.body);
    return data;
  }

}

module.exports = BillUpdateService;