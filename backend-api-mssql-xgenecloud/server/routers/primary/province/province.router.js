const {
  BaseRouter
} = require('xc-core');

class ProvinceRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.ProvinceService = app.$services.primary.ProvinceService;
    this.ProvinceMiddleware = app.$middlewares.primary.ProvinceMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.ProvinceService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.ProvinceService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.ProvinceService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.ProvinceService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.ProvinceService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.ProvinceService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.ProvinceService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.ProvinceService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.ProvinceService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.ProvinceService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.ProvinceService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.ProvinceService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.ProvinceService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.ProvinceService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.ProvinceService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/province*",this.ProvinceMiddleware.default)

    router.get('/api/v1/province', this.ProvinceMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/province', this.ProvinceMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/province/findOne', this.ProvinceMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/province/groupby/:columnName', this.ProvinceMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/province/distribution/:columnName', this.ProvinceMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/province/distinct/:columnName', this.ProvinceMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/province/aggregate/:columnName', this.ProvinceMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/province/count', this.ProvinceMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/province/bulk', this.ProvinceMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/province/bulk', this.ProvinceMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/province/bulk', this.ProvinceMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/province/:id', this.ProvinceMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/province/:id', this.ProvinceMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/province/:id', this.ProvinceMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/province/:id/exists', this.ProvinceMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = ProvinceRouter;