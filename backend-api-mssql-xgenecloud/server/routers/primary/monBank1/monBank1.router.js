const {
  BaseRouter
} = require('xc-core');

class MonBank1Router extends BaseRouter {

  constructor(app) {
    super(app);
    this.MonBank1Service = app.$services.primary.MonBank1Service;
    this.MonBank1Middleware = app.$middlewares.primary.MonBank1Middleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.MonBank1Service.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.MonBank1Service.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.MonBank1Service.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.MonBank1Service.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.MonBank1Service.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.MonBank1Service.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.MonBank1Service.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.MonBank1Service.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.MonBank1Service.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.MonBank1Service.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.MonBank1Service.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.MonBank1Service.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.MonBank1Service.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.MonBank1Service.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.MonBank1Service.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/monBank1*",this.MonBank1Middleware.default)

    router.get('/api/v1/monBank1', this.MonBank1Middleware.default, this.catchErr(this.list))
    router.post('/api/v1/monBank1', this.MonBank1Middleware.default, this.catchErr(this.create))
    router.get('/api/v1/monBank1/findOne', this.MonBank1Middleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/monBank1/groupby/:columnName', this.MonBank1Middleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/monBank1/distribution/:columnName', this.MonBank1Middleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/monBank1/distinct/:columnName', this.MonBank1Middleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/monBank1/aggregate/:columnName', this.MonBank1Middleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/monBank1/count', this.MonBank1Middleware.default, this.catchErr(this.count));
    router.post('/api/v1/monBank1/bulk', this.MonBank1Middleware.default, this.catchErr(this.createb))
    router.put('/api/v1/monBank1/bulk', this.MonBank1Middleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/monBank1/bulk', this.MonBank1Middleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/monBank1/:id', this.MonBank1Middleware.default, this.catchErr(this.read))
    router.put('/api/v1/monBank1/:id', this.MonBank1Middleware.default, this.catchErr(this.update))
    router.delete('/api/v1/monBank1/:id', this.MonBank1Middleware.default, this.catchErr(this.delete))
    router.get('/api/v1/monBank1/:id/exists', this.MonBank1Middleware.default, this.catchErr(this.exists))

  }

}

module.exports = MonBank1Router;