const {
  BaseRouter
} = require('xc-core');

class MonBeforeStartRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.MonBeforeStartService = app.$services.primary.MonBeforeStartService;
    this.MonBeforeStartMiddleware = app.$middlewares.primary.MonBeforeStartMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.MonBeforeStartService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.MonBeforeStartService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.MonBeforeStartService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.MonBeforeStartService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.MonBeforeStartService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.MonBeforeStartService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.MonBeforeStartService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.MonBeforeStartService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.MonBeforeStartService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.MonBeforeStartService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.MonBeforeStartService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.MonBeforeStartService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.MonBeforeStartService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.MonBeforeStartService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.MonBeforeStartService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/mon_before_start*",this.MonBeforeStartMiddleware.default)

    router.get('/api/v1/mon_before_start', this.MonBeforeStartMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/mon_before_start', this.MonBeforeStartMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/mon_before_start/findOne', this.MonBeforeStartMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/mon_before_start/groupby/:columnName', this.MonBeforeStartMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/mon_before_start/distribution/:columnName', this.MonBeforeStartMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/mon_before_start/distinct/:columnName', this.MonBeforeStartMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/mon_before_start/aggregate/:columnName', this.MonBeforeStartMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/mon_before_start/count', this.MonBeforeStartMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/mon_before_start/bulk', this.MonBeforeStartMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/mon_before_start/bulk', this.MonBeforeStartMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/mon_before_start/bulk', this.MonBeforeStartMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/mon_before_start/:id', this.MonBeforeStartMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/mon_before_start/:id', this.MonBeforeStartMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/mon_before_start/:id', this.MonBeforeStartMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/mon_before_start/:id/exists', this.MonBeforeStartMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = MonBeforeStartRouter;