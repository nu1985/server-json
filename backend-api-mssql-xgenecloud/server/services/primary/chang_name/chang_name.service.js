const {
  BaseService
} = require('xc-core');

class ChangNameService extends BaseService {

  constructor(app) {
    super(app);
    this.chang_name = app.$dbs.primary.chang_name;
  }

  async create(req, res) {
    let data = await this.chang_name.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.chang_name.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.chang_name.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.chang_name.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.chang_name.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.chang_name.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.chang_name.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.chang_name.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.chang_name.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.chang_name.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.chang_name.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.chang_name.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.chang_name.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.chang_name.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.chang_name.delb(req.body);
    return data;
  }

}

module.exports = ChangNameService;