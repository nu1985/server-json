const {
  BaseRouter
} = require('xc-core');

class NumpayRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.NumpayService = app.$services.primary.NumpayService;
    this.NumpayMiddleware = app.$middlewares.primary.NumpayMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.NumpayService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.NumpayService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.NumpayService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.NumpayService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.NumpayService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.NumpayService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.NumpayService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.NumpayService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.NumpayService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.NumpayService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.NumpayService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.NumpayService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.NumpayService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.NumpayService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.NumpayService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/numpay*",this.NumpayMiddleware.default)

    router.get('/api/v1/numpay', this.NumpayMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/numpay', this.NumpayMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/numpay/findOne', this.NumpayMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/numpay/groupby/:columnName', this.NumpayMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/numpay/distribution/:columnName', this.NumpayMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/numpay/distinct/:columnName', this.NumpayMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/numpay/aggregate/:columnName', this.NumpayMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/numpay/count', this.NumpayMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/numpay/bulk', this.NumpayMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/numpay/bulk', this.NumpayMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/numpay/bulk', this.NumpayMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/numpay/:id', this.NumpayMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/numpay/:id', this.NumpayMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/numpay/:id', this.NumpayMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/numpay/:id/exists', this.NumpayMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = NumpayRouter;