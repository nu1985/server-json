const {
  BaseService
} = require('xc-core');

class MonRubJayService extends BaseService {

  constructor(app) {
    super(app);
    this.monRubJay = app.$dbs.primary.monRubJay;
  }

  async create(req, res) {
    let data = await this.monRubJay.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.monRubJay.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.monRubJay.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.monRubJay.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.monRubJay.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.monRubJay.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.monRubJay.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.monRubJay.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.monRubJay.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.monRubJay.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.monRubJay.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.monRubJay.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.monRubJay.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.monRubJay.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.monRubJay.delb(req.body);
    return data;
  }

}

module.exports = MonRubJayService;