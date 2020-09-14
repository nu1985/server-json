const {
  BaseRouter
} = require('xc-core');

class NumpayYearsRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.NumpayYearsService = app.$services.primary.NumpayYearsService;
    this.NumpayYearsMiddleware = app.$middlewares.primary.NumpayYearsMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.NumpayYearsService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.NumpayYearsService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.NumpayYearsService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.NumpayYearsService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.NumpayYearsService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.NumpayYearsService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.NumpayYearsService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.NumpayYearsService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.NumpayYearsService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.NumpayYearsService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.NumpayYearsService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.NumpayYearsService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.NumpayYearsService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.NumpayYearsService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.NumpayYearsService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/numpay_years*",this.NumpayYearsMiddleware.default)

    router.get('/api/v1/numpay_years', this.NumpayYearsMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/numpay_years', this.NumpayYearsMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/numpay_years/findOne', this.NumpayYearsMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/numpay_years/groupby/:columnName', this.NumpayYearsMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/numpay_years/distribution/:columnName', this.NumpayYearsMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/numpay_years/distinct/:columnName', this.NumpayYearsMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/numpay_years/aggregate/:columnName', this.NumpayYearsMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/numpay_years/count', this.NumpayYearsMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/numpay_years/bulk', this.NumpayYearsMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/numpay_years/bulk', this.NumpayYearsMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/numpay_years/bulk', this.NumpayYearsMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/numpay_years/:id', this.NumpayYearsMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/numpay_years/:id', this.NumpayYearsMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/numpay_years/:id', this.NumpayYearsMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/numpay_years/:id/exists', this.NumpayYearsMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = NumpayYearsRouter;