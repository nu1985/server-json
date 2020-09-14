const {
  BaseService
} = require('xc-core');

class TumbonChangService extends BaseService {

  constructor(app) {
    super(app);
    this.tumbon_chang = app.$dbs.primary.tumbon_chang;
  }

  async create(req, res) {
    let data = await this.tumbon_chang.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.tumbon_chang.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.tumbon_chang.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.tumbon_chang.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.tumbon_chang.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.tumbon_chang.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.tumbon_chang.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.tumbon_chang.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.tumbon_chang.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.tumbon_chang.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.tumbon_chang.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.tumbon_chang.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.tumbon_chang.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.tumbon_chang.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.tumbon_chang.delb(req.body);
    return data;
  }

}

module.exports = TumbonChangService;