const {
  BaseRouter
} = require('xc-core');

class MonBank3Router extends BaseRouter {

  constructor(app) {
    super(app);
    this.MonBank3Service = app.$services.primary.MonBank3Service;
    this.MonBank3Middleware = app.$middlewares.primary.MonBank3Middleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.MonBank3Service.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.MonBank3Service.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.MonBank3Service.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.MonBank3Service.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.MonBank3Service.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.MonBank3Service.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.MonBank3Service.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.MonBank3Service.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.MonBank3Service.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.MonBank3Service.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.MonBank3Service.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.MonBank3Service.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.MonBank3Service.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.MonBank3Service.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.MonBank3Service.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/monBank3*",this.MonBank3Middleware.default)

    router.get('/api/v1/monBank3', this.MonBank3Middleware.default, this.catchErr(this.list))
    router.post('/api/v1/monBank3', this.MonBank3Middleware.default, this.catchErr(this.create))
    router.get('/api/v1/monBank3/findOne', this.MonBank3Middleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/monBank3/groupby/:columnName', this.MonBank3Middleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/monBank3/distribution/:columnName', this.MonBank3Middleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/monBank3/distinct/:columnName', this.MonBank3Middleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/monBank3/aggregate/:columnName', this.MonBank3Middleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/monBank3/count', this.MonBank3Middleware.default, this.catchErr(this.count));
    router.post('/api/v1/monBank3/bulk', this.MonBank3Middleware.default, this.catchErr(this.createb))
    router.put('/api/v1/monBank3/bulk', this.MonBank3Middleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/monBank3/bulk', this.MonBank3Middleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/monBank3/:id', this.MonBank3Middleware.default, this.catchErr(this.read))
    router.put('/api/v1/monBank3/:id', this.MonBank3Middleware.default, this.catchErr(this.update))
    router.delete('/api/v1/monBank3/:id', this.MonBank3Middleware.default, this.catchErr(this.delete))
    router.get('/api/v1/monBank3/:id/exists', this.MonBank3Middleware.default, this.catchErr(this.exists))

  }

}

module.exports = MonBank3Router;