const {
  BaseRouter
} = require('xc-core');

class ChangNameRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.ChangNameService = app.$services.primary.ChangNameService;
    this.ChangNameMiddleware = app.$middlewares.primary.ChangNameMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.ChangNameService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.ChangNameService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.ChangNameService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.ChangNameService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.ChangNameService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.ChangNameService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.ChangNameService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.ChangNameService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.ChangNameService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.ChangNameService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.ChangNameService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.ChangNameService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.ChangNameService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.ChangNameService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.ChangNameService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/chang_name*",this.ChangNameMiddleware.default)

    router.get('/api/v1/chang_name', this.ChangNameMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/chang_name', this.ChangNameMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/chang_name/findOne', this.ChangNameMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/chang_name/groupby/:columnName', this.ChangNameMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/chang_name/distribution/:columnName', this.ChangNameMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/chang_name/distinct/:columnName', this.ChangNameMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/chang_name/aggregate/:columnName', this.ChangNameMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/chang_name/count', this.ChangNameMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/chang_name/bulk', this.ChangNameMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/chang_name/bulk', this.ChangNameMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/chang_name/bulk', this.ChangNameMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/chang_name/:id', this.ChangNameMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/chang_name/:id', this.ChangNameMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/chang_name/:id', this.ChangNameMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/chang_name/:id/exists', this.ChangNameMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = ChangNameRouter;