const {
  BaseService
} = require('xc-core');

class TumbonService extends BaseService {

  constructor(app) {
    super(app);
    this.tumbon = app.$dbs.primary.tumbon;
  }

  async create(req, res) {
    let data = await this.tumbon.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.tumbon.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.tumbon.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.tumbon.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.tumbon.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.tumbon.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.tumbon.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.tumbon.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.tumbon.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.tumbon.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.tumbon.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.tumbon.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.tumbon.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.tumbon.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.tumbon.delb(req.body);
    return data;
  }

}

module.exports = TumbonService;