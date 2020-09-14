const {
  BaseService
} = require('xc-core');

class SinpeememService extends BaseService {

  constructor(app) {
    super(app);
    this.sinpeemem = app.$dbs.primary.sinpeemem;
  }

  async create(req, res) {
    let data = await this.sinpeemem.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.sinpeemem.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.sinpeemem.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.sinpeemem.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.sinpeemem.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.sinpeemem.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.sinpeemem.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.sinpeemem.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.sinpeemem.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.sinpeemem.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.sinpeemem.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.sinpeemem.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.sinpeemem.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.sinpeemem.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.sinpeemem.delb(req.body);
    return data;
  }

}

module.exports = SinpeememService;