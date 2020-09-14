const {
  BaseRouter
} = require('xc-core');

class MonBank4Router extends BaseRouter {

  constructor(app) {
    super(app);
    this.MonBank4Service = app.$services.primary.MonBank4Service;
    this.MonBank4Middleware = app.$middlewares.primary.MonBank4Middleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.MonBank4Service.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.MonBank4Service.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.MonBank4Service.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.MonBank4Service.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.MonBank4Service.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.MonBank4Service.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.MonBank4Service.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.MonBank4Service.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.MonBank4Service.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.MonBank4Service.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.MonBank4Service.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.MonBank4Service.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.MonBank4Service.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.MonBank4Service.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.MonBank4Service.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/monBank4*",this.MonBank4Middleware.default)

    router.get('/api/v1/monBank4', this.MonBank4Middleware.default, this.catchErr(this.list))
    router.post('/api/v1/monBank4', this.MonBank4Middleware.default, this.catchErr(this.create))
    router.get('/api/v1/monBank4/findOne', this.MonBank4Middleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/monBank4/groupby/:columnName', this.MonBank4Middleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/monBank4/distribution/:columnName', this.MonBank4Middleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/monBank4/distinct/:columnName', this.MonBank4Middleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/monBank4/aggregate/:columnName', this.MonBank4Middleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/monBank4/count', this.MonBank4Middleware.default, this.catchErr(this.count));
    router.post('/api/v1/monBank4/bulk', this.MonBank4Middleware.default, this.catchErr(this.createb))
    router.put('/api/v1/monBank4/bulk', this.MonBank4Middleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/monBank4/bulk', this.MonBank4Middleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/monBank4/:id', this.MonBank4Middleware.default, this.catchErr(this.read))
    router.put('/api/v1/monBank4/:id', this.MonBank4Middleware.default, this.catchErr(this.update))
    router.delete('/api/v1/monBank4/:id', this.MonBank4Middleware.default, this.catchErr(this.delete))
    router.get('/api/v1/monBank4/:id/exists', this.MonBank4Middleware.default, this.catchErr(this.exists))

  }

}

module.exports = MonBank4Router;