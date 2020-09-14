const {
  BaseRouter
} = require('xc-core');

class AdminlogRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.AdminlogService = app.$services.primary.AdminlogService;
    this.AdminlogMiddleware = app.$middlewares.primary.AdminlogMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.AdminlogService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.AdminlogService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.AdminlogService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.AdminlogService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.AdminlogService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.AdminlogService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.AdminlogService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.AdminlogService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.AdminlogService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.AdminlogService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.AdminlogService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.AdminlogService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.AdminlogService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.AdminlogService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.AdminlogService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/adminlog*",this.AdminlogMiddleware.default)

    router.get('/api/v1/adminlog', this.AdminlogMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/adminlog', this.AdminlogMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/adminlog/findOne', this.AdminlogMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/adminlog/groupby/:columnName', this.AdminlogMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/adminlog/distribution/:columnName', this.AdminlogMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/adminlog/distinct/:columnName', this.AdminlogMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/adminlog/aggregate/:columnName', this.AdminlogMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/adminlog/count', this.AdminlogMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/adminlog/bulk', this.AdminlogMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/adminlog/bulk', this.AdminlogMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/adminlog/bulk', this.AdminlogMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/adminlog/:id', this.AdminlogMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/adminlog/:id', this.AdminlogMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/adminlog/:id', this.AdminlogMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/adminlog/:id/exists', this.AdminlogMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = AdminlogRouter;