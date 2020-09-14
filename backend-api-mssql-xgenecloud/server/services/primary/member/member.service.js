const {
  BaseService
} = require('xc-core');

class MemberService extends BaseService {

  constructor(app) {
    super(app);
    this.member = app.$dbs.primary.member;
  }

  async create(req, res) {
    let data = await this.member.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.member.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.member.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.member.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.member.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.member.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.member.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.member.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.member.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.member.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.member.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.member.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.member.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.member.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.member.delb(req.body);
    return data;
  }

}

module.exports = MemberService;