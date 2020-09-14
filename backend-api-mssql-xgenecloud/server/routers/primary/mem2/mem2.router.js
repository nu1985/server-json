const {
  BaseRouter
} = require('xc-core');

class Mem2Router extends BaseRouter {

  constructor(app) {
    super(app);
    this.Mem2Service = app.$services.primary.Mem2Service;
    this.Mem2Middleware = app.$middlewares.primary.Mem2Middleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.Mem2Service.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.Mem2Service.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.Mem2Service.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.Mem2Service.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.Mem2Service.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.Mem2Service.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.Mem2Service.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.Mem2Service.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.Mem2Service.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.Mem2Service.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.Mem2Service.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.Mem2Service.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.Mem2Service.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.Mem2Service.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.Mem2Service.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/mem2*",this.Mem2Middleware.default)

    router.get('/api/v1/mem2', this.Mem2Middleware.default, this.catchErr(this.list))
    router.post('/api/v1/mem2', this.Mem2Middleware.default, this.catchErr(this.create))
    router.get('/api/v1/mem2/findOne', this.Mem2Middleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/mem2/groupby/:columnName', this.Mem2Middleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/mem2/distribution/:columnName', this.Mem2Middleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/mem2/distinct/:columnName', this.Mem2Middleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/mem2/aggregate/:columnName', this.Mem2Middleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/mem2/count', this.Mem2Middleware.default, this.catchErr(this.count));
    router.post('/api/v1/mem2/bulk', this.Mem2Middleware.default, this.catchErr(this.createb))
    router.put('/api/v1/mem2/bulk', this.Mem2Middleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/mem2/bulk', this.Mem2Middleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/mem2/:id', this.Mem2Middleware.default, this.catchErr(this.read))
    router.put('/api/v1/mem2/:id', this.Mem2Middleware.default, this.catchErr(this.update))
    router.delete('/api/v1/mem2/:id', this.Mem2Middleware.default, this.catchErr(this.delete))
    router.get('/api/v1/mem2/:id/exists', this.Mem2Middleware.default, this.catchErr(this.exists))

  }

}

module.exports = Mem2Router;