const {
  BaseRouter
} = require('xc-core');

class DistrictRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.DistrictService = app.$services.primary.DistrictService;
    this.DistrictMiddleware = app.$middlewares.primary.DistrictMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.DistrictService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.DistrictService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.DistrictService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.DistrictService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.DistrictService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.DistrictService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.DistrictService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.DistrictService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.DistrictService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.DistrictService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.DistrictService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.DistrictService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.DistrictService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.DistrictService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.DistrictService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/district*",this.DistrictMiddleware.default)

    router.get('/api/v1/district', this.DistrictMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/district', this.DistrictMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/district/findOne', this.DistrictMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/district/groupby/:columnName', this.DistrictMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/district/distribution/:columnName', this.DistrictMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/district/distinct/:columnName', this.DistrictMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/district/aggregate/:columnName', this.DistrictMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/district/count', this.DistrictMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/district/bulk', this.DistrictMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/district/bulk', this.DistrictMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/district/bulk', this.DistrictMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/district/:id', this.DistrictMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/district/:id', this.DistrictMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/district/:id', this.DistrictMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/district/:id/exists', this.DistrictMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = DistrictRouter;