const {
  BaseRouter
} = require('xc-core');

class RangRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.RangService = app.$services.primary.RangService;
    this.RangMiddleware = app.$middlewares.primary.RangMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.RangService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.RangService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.RangService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.RangService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.RangService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.RangService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.RangService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.RangService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.RangService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.RangService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.RangService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.RangService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.RangService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.RangService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.RangService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/rang*",this.RangMiddleware.default)

    router.get('/api/v1/rang', this.RangMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/rang', this.RangMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/rang/findOne', this.RangMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/rang/groupby/:columnName', this.RangMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/rang/distribution/:columnName', this.RangMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/rang/distinct/:columnName', this.RangMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/rang/aggregate/:columnName', this.RangMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/rang/count', this.RangMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/rang/bulk', this.RangMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/rang/bulk', this.RangMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/rang/bulk', this.RangMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/rang/:id', this.RangMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/rang/:id', this.RangMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/rang/:id', this.RangMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/rang/:id/exists', this.RangMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = RangRouter;