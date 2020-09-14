const {
  BaseRouter
} = require('xc-core');

class NumpayYears02Router extends BaseRouter {

  constructor(app) {
    super(app);
    this.NumpayYears02Service = app.$services.primary.NumpayYears02Service;
    this.NumpayYears02Middleware = app.$middlewares.primary.NumpayYears02Middleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.NumpayYears02Service.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.NumpayYears02Service.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.NumpayYears02Service.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.NumpayYears02Service.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.NumpayYears02Service.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.NumpayYears02Service.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.NumpayYears02Service.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.NumpayYears02Service.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.NumpayYears02Service.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.NumpayYears02Service.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.NumpayYears02Service.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.NumpayYears02Service.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.NumpayYears02Service.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.NumpayYears02Service.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.NumpayYears02Service.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/numpay_years_02*",this.NumpayYears02Middleware.default)

    router.get('/api/v1/numpay_years_02', this.NumpayYears02Middleware.default, this.catchErr(this.list))
    router.post('/api/v1/numpay_years_02', this.NumpayYears02Middleware.default, this.catchErr(this.create))
    router.get('/api/v1/numpay_years_02/findOne', this.NumpayYears02Middleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/numpay_years_02/groupby/:columnName', this.NumpayYears02Middleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/numpay_years_02/distribution/:columnName', this.NumpayYears02Middleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/numpay_years_02/distinct/:columnName', this.NumpayYears02Middleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/numpay_years_02/aggregate/:columnName', this.NumpayYears02Middleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/numpay_years_02/count', this.NumpayYears02Middleware.default, this.catchErr(this.count));
    router.post('/api/v1/numpay_years_02/bulk', this.NumpayYears02Middleware.default, this.catchErr(this.createb))
    router.put('/api/v1/numpay_years_02/bulk', this.NumpayYears02Middleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/numpay_years_02/bulk', this.NumpayYears02Middleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/numpay_years_02/:id', this.NumpayYears02Middleware.default, this.catchErr(this.read))
    router.put('/api/v1/numpay_years_02/:id', this.NumpayYears02Middleware.default, this.catchErr(this.update))
    router.delete('/api/v1/numpay_years_02/:id', this.NumpayYears02Middleware.default, this.catchErr(this.delete))
    router.get('/api/v1/numpay_years_02/:id/exists', this.NumpayYears02Middleware.default, this.catchErr(this.exists))

  }

}

module.exports = NumpayYears02Router;