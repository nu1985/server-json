const {
  BaseRouter
} = require('xc-core');

class MonRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.MonService = app.$services.primary.MonService;
    this.MonMiddleware = app.$middlewares.primary.MonMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.MonService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.MonService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.MonService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.MonService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.MonService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.MonService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.MonService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.MonService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.MonService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.MonService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.MonService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.MonService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.MonService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.MonService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.MonService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/mon*",this.MonMiddleware.default)

    router.get('/api/v1/mon', this.MonMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/mon', this.MonMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/mon/findOne', this.MonMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/mon/groupby/:columnName', this.MonMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/mon/distribution/:columnName', this.MonMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/mon/distinct/:columnName', this.MonMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/mon/aggregate/:columnName', this.MonMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/mon/count', this.MonMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/mon/bulk', this.MonMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/mon/bulk', this.MonMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/mon/bulk', this.MonMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/mon/:id', this.MonMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/mon/:id', this.MonMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/mon/:id', this.MonMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/mon/:id/exists', this.MonMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = MonRouter;