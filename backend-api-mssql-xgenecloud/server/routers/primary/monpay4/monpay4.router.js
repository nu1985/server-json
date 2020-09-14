const {
  BaseRouter
} = require('xc-core');

class Monpay4Router extends BaseRouter {

  constructor(app) {
    super(app);
    this.Monpay4Service = app.$services.primary.Monpay4Service;
    this.Monpay4Middleware = app.$middlewares.primary.Monpay4Middleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.Monpay4Service.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.Monpay4Service.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.Monpay4Service.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.Monpay4Service.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.Monpay4Service.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.Monpay4Service.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.Monpay4Service.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.Monpay4Service.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.Monpay4Service.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.Monpay4Service.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.Monpay4Service.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.Monpay4Service.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.Monpay4Service.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.Monpay4Service.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.Monpay4Service.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/monpay4*",this.Monpay4Middleware.default)

    router.get('/api/v1/monpay4', this.Monpay4Middleware.default, this.catchErr(this.list))
    router.post('/api/v1/monpay4', this.Monpay4Middleware.default, this.catchErr(this.create))
    router.get('/api/v1/monpay4/findOne', this.Monpay4Middleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/monpay4/groupby/:columnName', this.Monpay4Middleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/monpay4/distribution/:columnName', this.Monpay4Middleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/monpay4/distinct/:columnName', this.Monpay4Middleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/monpay4/aggregate/:columnName', this.Monpay4Middleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/monpay4/count', this.Monpay4Middleware.default, this.catchErr(this.count));
    router.post('/api/v1/monpay4/bulk', this.Monpay4Middleware.default, this.catchErr(this.createb))
    router.put('/api/v1/monpay4/bulk', this.Monpay4Middleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/monpay4/bulk', this.Monpay4Middleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/monpay4/:id', this.Monpay4Middleware.default, this.catchErr(this.read))
    router.put('/api/v1/monpay4/:id', this.Monpay4Middleware.default, this.catchErr(this.update))
    router.delete('/api/v1/monpay4/:id', this.Monpay4Middleware.default, this.catchErr(this.delete))
    router.get('/api/v1/monpay4/:id/exists', this.Monpay4Middleware.default, this.catchErr(this.exists))

  }

}

module.exports = Monpay4Router;