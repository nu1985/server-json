const {
  BaseRouter
} = require('xc-core');

class StatusRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.StatusService = app.$services.primary.StatusService;
    this.StatusMiddleware = app.$middlewares.primary.StatusMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.StatusService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.StatusService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.StatusService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.StatusService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.StatusService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.StatusService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.StatusService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.StatusService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.StatusService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.StatusService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.StatusService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.StatusService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.StatusService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.StatusService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.StatusService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/status*",this.StatusMiddleware.default)

    router.get('/api/v1/status', this.StatusMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/status', this.StatusMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/status/findOne', this.StatusMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/status/groupby/:columnName', this.StatusMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/status/distribution/:columnName', this.StatusMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/status/distinct/:columnName', this.StatusMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/status/aggregate/:columnName', this.StatusMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/status/count', this.StatusMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/status/bulk', this.StatusMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/status/bulk', this.StatusMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/status/bulk', this.StatusMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/status/:id', this.StatusMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/status/:id', this.StatusMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/status/:id', this.StatusMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/status/:id/exists', this.StatusMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = StatusRouter;