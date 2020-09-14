const {
  BaseRouter
} = require('xc-core');

class RubRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.RubService = app.$services.primary.RubService;
    this.RubMiddleware = app.$middlewares.primary.RubMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.RubService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.RubService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.RubService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.RubService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.RubService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.RubService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.RubService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.RubService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.RubService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.RubService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.RubService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.RubService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.RubService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.RubService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.RubService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/rub*",this.RubMiddleware.default)

    router.get('/api/v1/rub', this.RubMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/rub', this.RubMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/rub/findOne', this.RubMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/rub/groupby/:columnName', this.RubMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/rub/distribution/:columnName', this.RubMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/rub/distinct/:columnName', this.RubMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/rub/aggregate/:columnName', this.RubMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/rub/count', this.RubMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/rub/bulk', this.RubMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/rub/bulk', this.RubMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/rub/bulk', this.RubMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/rub/:id', this.RubMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/rub/:id', this.RubMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/rub/:id', this.RubMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/rub/:id/exists', this.RubMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = RubRouter;