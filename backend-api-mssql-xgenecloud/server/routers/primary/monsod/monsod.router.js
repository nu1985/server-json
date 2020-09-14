const {
  BaseRouter
} = require('xc-core');

class MonsodRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.MonsodService = app.$services.primary.MonsodService;
    this.MonsodMiddleware = app.$middlewares.primary.MonsodMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.MonsodService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.MonsodService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.MonsodService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.MonsodService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.MonsodService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.MonsodService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.MonsodService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.MonsodService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.MonsodService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.MonsodService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.MonsodService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.MonsodService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.MonsodService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.MonsodService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.MonsodService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/monsod*",this.MonsodMiddleware.default)

    router.get('/api/v1/monsod', this.MonsodMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/monsod', this.MonsodMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/monsod/findOne', this.MonsodMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/monsod/groupby/:columnName', this.MonsodMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/monsod/distribution/:columnName', this.MonsodMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/monsod/distinct/:columnName', this.MonsodMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/monsod/aggregate/:columnName', this.MonsodMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/monsod/count', this.MonsodMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/monsod/bulk', this.MonsodMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/monsod/bulk', this.MonsodMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/monsod/bulk', this.MonsodMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/monsod/:id', this.MonsodMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/monsod/:id', this.MonsodMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/monsod/:id', this.MonsodMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/monsod/:id/exists', this.MonsodMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = MonsodRouter;