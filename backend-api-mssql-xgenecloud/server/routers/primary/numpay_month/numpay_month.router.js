const {
  BaseRouter
} = require('xc-core');

class NumpayMonthRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.NumpayMonthService = app.$services.primary.NumpayMonthService;
    this.NumpayMonthMiddleware = app.$middlewares.primary.NumpayMonthMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.NumpayMonthService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.NumpayMonthService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.NumpayMonthService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.NumpayMonthService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.NumpayMonthService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.NumpayMonthService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.NumpayMonthService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.NumpayMonthService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.NumpayMonthService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.NumpayMonthService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.NumpayMonthService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.NumpayMonthService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.NumpayMonthService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.NumpayMonthService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.NumpayMonthService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/numpay_month*",this.NumpayMonthMiddleware.default)

    router.get('/api/v1/numpay_month', this.NumpayMonthMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/numpay_month', this.NumpayMonthMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/numpay_month/findOne', this.NumpayMonthMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/numpay_month/groupby/:columnName', this.NumpayMonthMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/numpay_month/distribution/:columnName', this.NumpayMonthMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/numpay_month/distinct/:columnName', this.NumpayMonthMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/numpay_month/aggregate/:columnName', this.NumpayMonthMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/numpay_month/count', this.NumpayMonthMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/numpay_month/bulk', this.NumpayMonthMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/numpay_month/bulk', this.NumpayMonthMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/numpay_month/bulk', this.NumpayMonthMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/numpay_month/:id', this.NumpayMonthMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/numpay_month/:id', this.NumpayMonthMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/numpay_month/:id', this.NumpayMonthMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/numpay_month/:id/exists', this.NumpayMonthMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = NumpayMonthRouter;