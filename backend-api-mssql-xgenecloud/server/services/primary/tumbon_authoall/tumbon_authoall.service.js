const {
  BaseService
} = require('xc-core');

class TumbonAuthoallService extends BaseService {

  constructor(app) {
    super(app);
    this.tumbon_authoall = app.$dbs.primary.tumbon_authoall;
  }

  async create(req, res) {
    let data = await this.tumbon_authoall.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.tumbon_authoall.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.tumbon_authoall.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.tumbon_authoall.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.tumbon_authoall.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.tumbon_authoall.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.tumbon_authoall.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.tumbon_authoall.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.tumbon_authoall.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.tumbon_authoall.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.tumbon_authoall.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.tumbon_authoall.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.tumbon_authoall.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.tumbon_authoall.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.tumbon_authoall.delb(req.body);
    return data;
  }

}

module.exports = TumbonAuthoallService;