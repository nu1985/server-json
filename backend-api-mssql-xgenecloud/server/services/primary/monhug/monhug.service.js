const {
  BaseService
} = require('xc-core');

class MonhugService extends BaseService {

  constructor(app) {
    super(app);
    this.monhug = app.$dbs.primary.monhug;
  }

  async create(req, res) {
    let data = await this.monhug.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.monhug.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.monhug.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.monhug.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.monhug.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.monhug.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.monhug.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.monhug.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.monhug.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.monhug.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.monhug.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.monhug.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.monhug.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.monhug.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.monhug.delb(req.body);
    return data;
  }

}

module.exports = MonhugService;