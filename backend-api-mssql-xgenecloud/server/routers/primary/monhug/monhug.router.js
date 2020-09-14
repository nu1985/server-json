const {
  BaseRouter
} = require('xc-core');

class MonhugRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.MonhugService = app.$services.primary.MonhugService;
    this.MonhugMiddleware = app.$middlewares.primary.MonhugMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.MonhugService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.MonhugService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.MonhugService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.MonhugService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.MonhugService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.MonhugService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.MonhugService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.MonhugService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.MonhugService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.MonhugService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.MonhugService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.MonhugService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.MonhugService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.MonhugService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.MonhugService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/monhug*",this.MonhugMiddleware.default)

    router.get('/api/v1/monhug', this.MonhugMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/monhug', this.MonhugMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/monhug/findOne', this.MonhugMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/monhug/groupby/:columnName', this.MonhugMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/monhug/distribution/:columnName', this.MonhugMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/monhug/distinct/:columnName', this.MonhugMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/monhug/aggregate/:columnName', this.MonhugMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/monhug/count', this.MonhugMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/monhug/bulk', this.MonhugMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/monhug/bulk', this.MonhugMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/monhug/bulk', this.MonhugMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/monhug/:id', this.MonhugMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/monhug/:id', this.MonhugMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/monhug/:id', this.MonhugMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/monhug/:id/exists', this.MonhugMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = MonhugRouter;