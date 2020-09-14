const {
  BaseRouter
} = require('xc-core');

class Mem3Router extends BaseRouter {

  constructor(app) {
    super(app);
    this.Mem3Service = app.$services.primary.Mem3Service;
    this.Mem3Middleware = app.$middlewares.primary.Mem3Middleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.Mem3Service.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.Mem3Service.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.Mem3Service.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.Mem3Service.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.Mem3Service.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.Mem3Service.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.Mem3Service.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.Mem3Service.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.Mem3Service.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.Mem3Service.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.Mem3Service.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.Mem3Service.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.Mem3Service.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.Mem3Service.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.Mem3Service.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/mem3*",this.Mem3Middleware.default)

    router.get('/api/v1/mem3', this.Mem3Middleware.default, this.catchErr(this.list))
    router.post('/api/v1/mem3', this.Mem3Middleware.default, this.catchErr(this.create))
    router.get('/api/v1/mem3/findOne', this.Mem3Middleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/mem3/groupby/:columnName', this.Mem3Middleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/mem3/distribution/:columnName', this.Mem3Middleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/mem3/distinct/:columnName', this.Mem3Middleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/mem3/aggregate/:columnName', this.Mem3Middleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/mem3/count', this.Mem3Middleware.default, this.catchErr(this.count));
    router.post('/api/v1/mem3/bulk', this.Mem3Middleware.default, this.catchErr(this.createb))
    router.put('/api/v1/mem3/bulk', this.Mem3Middleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/mem3/bulk', this.Mem3Middleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/mem3/:id', this.Mem3Middleware.default, this.catchErr(this.read))
    router.put('/api/v1/mem3/:id', this.Mem3Middleware.default, this.catchErr(this.update))
    router.delete('/api/v1/mem3/:id', this.Mem3Middleware.default, this.catchErr(this.delete))
    router.get('/api/v1/mem3/:id/exists', this.Mem3Middleware.default, this.catchErr(this.exists))

  }

}

module.exports = Mem3Router;