const {
  BaseService
} = require('xc-core');

class TypeNameService extends BaseService {

  constructor(app) {
    super(app);
    this.type_name = app.$dbs.primary.type_name;
  }

  async create(req, res) {
    let data = await this.type_name.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.type_name.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.type_name.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.type_name.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.type_name.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.type_name.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.type_name.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.type_name.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.type_name.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.type_name.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.type_name.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.type_name.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.type_name.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.type_name.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.type_name.delb(req.body);
    return data;
  }

}

module.exports = TypeNameService;