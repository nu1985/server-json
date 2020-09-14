const {
  BaseRouter
} = require('xc-core');

class MemberPayRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.MemberPayService = app.$services.primary.MemberPayService;
    this.MemberPayMiddleware = app.$middlewares.primary.MemberPayMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.MemberPayService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.MemberPayService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.MemberPayService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.MemberPayService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.MemberPayService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.MemberPayService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.MemberPayService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.MemberPayService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.MemberPayService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.MemberPayService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.MemberPayService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.MemberPayService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.MemberPayService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.MemberPayService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.MemberPayService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/member_pay*",this.MemberPayMiddleware.default)

    router.get('/api/v1/member_pay', this.MemberPayMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/member_pay', this.MemberPayMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/member_pay/findOne', this.MemberPayMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/member_pay/groupby/:columnName', this.MemberPayMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/member_pay/distribution/:columnName', this.MemberPayMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/member_pay/distinct/:columnName', this.MemberPayMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/member_pay/aggregate/:columnName', this.MemberPayMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/member_pay/count', this.MemberPayMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/member_pay/bulk', this.MemberPayMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/member_pay/bulk', this.MemberPayMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/member_pay/bulk', this.MemberPayMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/member_pay/:id', this.MemberPayMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/member_pay/:id', this.MemberPayMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/member_pay/:id', this.MemberPayMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/member_pay/:id/exists', this.MemberPayMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = MemberPayRouter;