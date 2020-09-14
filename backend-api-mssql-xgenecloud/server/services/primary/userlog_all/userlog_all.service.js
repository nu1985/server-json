const {
  BaseService
} = require('xc-core');

class UserlogAllService extends BaseService {

  constructor(app) {
    super(app);
    this.userlog_all = app.$dbs.primary.userlog_all;
  }

  async create(req, res) {
    let data = await this.userlog_all.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.userlog_all.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.userlog_all.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.userlog_all.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.userlog_all.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.userlog_all.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.userlog_all.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.userlog_all.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.userlog_all.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.userlog_all.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.userlog_all.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.userlog_all.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.userlog_all.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.userlog_all.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.userlog_all.delb(req.body);
    return data;
  }

}

module.exports = UserlogAllService;