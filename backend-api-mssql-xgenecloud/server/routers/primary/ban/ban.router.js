const {
  BaseRouter
} = require('xc-core');

class BanRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.BanService = app.$services.primary.BanService;
    this.BanMiddleware = app.$middlewares.primary.BanMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.BanService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.BanService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.BanService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.BanService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.BanService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.BanService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.BanService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.BanService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.BanService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.BanService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.BanService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.BanService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.BanService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.BanService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.BanService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/ban*",this.BanMiddleware.default)

    router.get('/api/v1/ban', this.BanMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/ban', this.BanMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/ban/findOne', this.BanMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/ban/groupby/:columnName', this.BanMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/ban/distribution/:columnName', this.BanMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/ban/distinct/:columnName', this.BanMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/ban/aggregate/:columnName', this.BanMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/ban/count', this.BanMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/ban/bulk', this.BanMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/ban/bulk', this.BanMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/ban/bulk', this.BanMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/ban/:id', this.BanMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/ban/:id', this.BanMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/ban/:id', this.BanMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/ban/:id/exists', this.BanMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = BanRouter;