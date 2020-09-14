const {
  BaseRouter
} = require('xc-core');

class MonRubRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.MonRubService = app.$services.primary.MonRubService;
    this.MonRubMiddleware = app.$middlewares.primary.MonRubMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.MonRubService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.MonRubService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.MonRubService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.MonRubService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.MonRubService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.MonRubService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.MonRubService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.MonRubService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.MonRubService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.MonRubService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.MonRubService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.MonRubService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.MonRubService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.MonRubService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.MonRubService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/monRub*",this.MonRubMiddleware.default)

    router.get('/api/v1/monRub', this.MonRubMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/monRub', this.MonRubMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/monRub/findOne', this.MonRubMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/monRub/groupby/:columnName', this.MonRubMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/monRub/distribution/:columnName', this.MonRubMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/monRub/distinct/:columnName', this.MonRubMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/monRub/aggregate/:columnName', this.MonRubMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/monRub/count', this.MonRubMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/monRub/bulk', this.MonRubMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/monRub/bulk', this.MonRubMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/monRub/bulk', this.MonRubMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/monRub/:id', this.MonRubMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/monRub/:id', this.MonRubMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/monRub/:id', this.MonRubMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/monRub/:id/exists', this.MonRubMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = MonRubRouter;