const {
  BaseRouter
} = require('xc-core');

class MemberPay2Router extends BaseRouter {

  constructor(app) {
    super(app);
    this.MemberPay2Service = app.$services.primary.MemberPay2Service;
    this.MemberPay2Middleware = app.$middlewares.primary.MemberPay2Middleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.MemberPay2Service.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.MemberPay2Service.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.MemberPay2Service.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.MemberPay2Service.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.MemberPay2Service.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.MemberPay2Service.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.MemberPay2Service.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.MemberPay2Service.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.MemberPay2Service.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.MemberPay2Service.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.MemberPay2Service.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.MemberPay2Service.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.MemberPay2Service.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.MemberPay2Service.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.MemberPay2Service.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/member_pay_2*",this.MemberPay2Middleware.default)

    router.get('/api/v1/member_pay_2', this.MemberPay2Middleware.default, this.catchErr(this.list))
    router.post('/api/v1/member_pay_2', this.MemberPay2Middleware.default, this.catchErr(this.create))
    router.get('/api/v1/member_pay_2/findOne', this.MemberPay2Middleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/member_pay_2/groupby/:columnName', this.MemberPay2Middleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/member_pay_2/distribution/:columnName', this.MemberPay2Middleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/member_pay_2/distinct/:columnName', this.MemberPay2Middleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/member_pay_2/aggregate/:columnName', this.MemberPay2Middleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/member_pay_2/count', this.MemberPay2Middleware.default, this.catchErr(this.count));
    router.post('/api/v1/member_pay_2/bulk', this.MemberPay2Middleware.default, this.catchErr(this.createb))
    router.put('/api/v1/member_pay_2/bulk', this.MemberPay2Middleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/member_pay_2/bulk', this.MemberPay2Middleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/member_pay_2/:id', this.MemberPay2Middleware.default, this.catchErr(this.read))
    router.put('/api/v1/member_pay_2/:id', this.MemberPay2Middleware.default, this.catchErr(this.update))
    router.delete('/api/v1/member_pay_2/:id', this.MemberPay2Middleware.default, this.catchErr(this.delete))
    router.get('/api/v1/member_pay_2/:id/exists', this.MemberPay2Middleware.default, this.catchErr(this.exists))

  }

}

module.exports = MemberPay2Router;