const {
  BaseRouter
} = require('xc-core');

class MemberRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.MemberService = app.$services.primary.MemberService;
    this.MemberMiddleware = app.$middlewares.primary.MemberMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.MemberService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.MemberService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.MemberService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.MemberService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.MemberService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.MemberService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.MemberService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.MemberService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.MemberService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.MemberService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.MemberService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.MemberService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.MemberService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.MemberService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.MemberService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/member*",this.MemberMiddleware.default)

    router.get('/api/v1/member', this.MemberMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/member', this.MemberMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/member/findOne', this.MemberMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/member/groupby/:columnName', this.MemberMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/member/distribution/:columnName', this.MemberMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/member/distinct/:columnName', this.MemberMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/member/aggregate/:columnName', this.MemberMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/member/count', this.MemberMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/member/bulk', this.MemberMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/member/bulk', this.MemberMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/member/bulk', this.MemberMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/member/:id', this.MemberMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/member/:id', this.MemberMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/member/:id', this.MemberMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/member/:id/exists', this.MemberMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = MemberRouter;