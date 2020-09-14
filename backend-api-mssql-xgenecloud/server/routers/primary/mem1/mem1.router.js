const {
  BaseRouter
} = require('xc-core');

class Mem1Router extends BaseRouter {

  constructor(app) {
    super(app);
    this.Mem1Service = app.$services.primary.Mem1Service;
    this.Mem1Middleware = app.$middlewares.primary.Mem1Middleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.Mem1Service.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.Mem1Service.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.Mem1Service.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.Mem1Service.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.Mem1Service.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.Mem1Service.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.Mem1Service.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.Mem1Service.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.Mem1Service.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.Mem1Service.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.Mem1Service.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.Mem1Service.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.Mem1Service.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.Mem1Service.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.Mem1Service.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/mem1*",this.Mem1Middleware.default)

    router.get('/api/v1/mem1', this.Mem1Middleware.default, this.catchErr(this.list))
    router.post('/api/v1/mem1', this.Mem1Middleware.default, this.catchErr(this.create))
    router.get('/api/v1/mem1/findOne', this.Mem1Middleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/mem1/groupby/:columnName', this.Mem1Middleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/mem1/distribution/:columnName', this.Mem1Middleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/mem1/distinct/:columnName', this.Mem1Middleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/mem1/aggregate/:columnName', this.Mem1Middleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/mem1/count', this.Mem1Middleware.default, this.catchErr(this.count));
    router.post('/api/v1/mem1/bulk', this.Mem1Middleware.default, this.catchErr(this.createb))
    router.put('/api/v1/mem1/bulk', this.Mem1Middleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/mem1/bulk', this.Mem1Middleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/mem1/:id', this.Mem1Middleware.default, this.catchErr(this.read))
    router.put('/api/v1/mem1/:id', this.Mem1Middleware.default, this.catchErr(this.update))
    router.delete('/api/v1/mem1/:id', this.Mem1Middleware.default, this.catchErr(this.delete))
    router.get('/api/v1/mem1/:id/exists', this.Mem1Middleware.default, this.catchErr(this.exists))

  }

}

module.exports = Mem1Router;