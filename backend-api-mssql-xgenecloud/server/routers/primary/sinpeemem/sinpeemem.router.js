const {
  BaseRouter
} = require('xc-core');

class SinpeememRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.SinpeememService = app.$services.primary.SinpeememService;
    this.SinpeememMiddleware = app.$middlewares.primary.SinpeememMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.SinpeememService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.SinpeememService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.SinpeememService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.SinpeememService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.SinpeememService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.SinpeememService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.SinpeememService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.SinpeememService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.SinpeememService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.SinpeememService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.SinpeememService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.SinpeememService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.SinpeememService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.SinpeememService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.SinpeememService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/sinpeemem*",this.SinpeememMiddleware.default)

    router.get('/api/v1/sinpeemem', this.SinpeememMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/sinpeemem', this.SinpeememMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/sinpeemem/findOne', this.SinpeememMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/sinpeemem/groupby/:columnName', this.SinpeememMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/sinpeemem/distribution/:columnName', this.SinpeememMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/sinpeemem/distinct/:columnName', this.SinpeememMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/sinpeemem/aggregate/:columnName', this.SinpeememMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/sinpeemem/count', this.SinpeememMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/sinpeemem/bulk', this.SinpeememMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/sinpeemem/bulk', this.SinpeememMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/sinpeemem/bulk', this.SinpeememMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/sinpeemem/:id', this.SinpeememMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/sinpeemem/:id', this.SinpeememMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/sinpeemem/:id', this.SinpeememMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/sinpeemem/:id/exists', this.SinpeememMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = SinpeememRouter;