const {
  BaseService
} = require('xc-core');

class MemnewIdUpdateService extends BaseService {

  constructor(app) {
    super(app);
    this.memnew_id_update = app.$dbs.primary.memnew_id_update;
  }

  async create(req, res) {
    let data = await this.memnew_id_update.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.memnew_id_update.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.memnew_id_update.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.memnew_id_update.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.memnew_id_update.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.memnew_id_update.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.memnew_id_update.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.memnew_id_update.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.memnew_id_update.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.memnew_id_update.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.memnew_id_update.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.memnew_id_update.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.memnew_id_update.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.memnew_id_update.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.memnew_id_update.delb(req.body);
    return data;
  }

}

module.exports = MemnewIdUpdateService;