const {
  BaseService
} = require('xc-core');

class BillGroupService extends BaseService {

  constructor(app) {
    super(app);
    this.bill_Group = app.$dbs.primary.bill_Group;
  }

  async create(req, res) {
    let data = await this.bill_Group.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.bill_Group.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.bill_Group.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.bill_Group.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.bill_Group.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.bill_Group.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.bill_Group.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.bill_Group.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.bill_Group.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.bill_Group.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.bill_Group.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.bill_Group.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.bill_Group.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.bill_Group.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.bill_Group.delb(req.body);
    return data;
  }

}

module.exports = BillGroupService;