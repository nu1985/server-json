const {
  BaseService
} = require('xc-core');

class BankNameService extends BaseService {

  constructor(app) {
    super(app);
    this.bank_name = app.$dbs.primary.bank_name;
  }

  async create(req, res) {
    let data = await this.bank_name.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.bank_name.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.bank_name.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.bank_name.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.bank_name.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.bank_name.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.bank_name.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.bank_name.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.bank_name.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.bank_name.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.bank_name.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.bank_name.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.bank_name.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.bank_name.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.bank_name.delb(req.body);
    return data;
  }

}

module.exports = BankNameService;