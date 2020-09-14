const {
  BaseRouter
} = require('xc-core');

class GeographyRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.GeographyService = app.$services.primary.GeographyService;
    this.GeographyMiddleware = app.$middlewares.primary.GeographyMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.GeographyService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.GeographyService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.GeographyService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.GeographyService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.GeographyService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.GeographyService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.GeographyService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.GeographyService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.GeographyService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.GeographyService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.GeographyService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.GeographyService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.GeographyService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.GeographyService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.GeographyService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/geography*",this.GeographyMiddleware.default)

    router.get('/api/v1/geography', this.GeographyMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/geography', this.GeographyMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/geography/findOne', this.GeographyMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/geography/groupby/:columnName', this.GeographyMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/geography/distribution/:columnName', this.GeographyMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/geography/distinct/:columnName', this.GeographyMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/geography/aggregate/:columnName', this.GeographyMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/geography/count', this.GeographyMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/geography/bulk', this.GeographyMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/geography/bulk', this.GeographyMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/geography/bulk', this.GeographyMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/geography/:id', this.GeographyMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/geography/:id', this.GeographyMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/geography/:id', this.GeographyMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/geography/:id/exists', this.GeographyMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = GeographyRouter;