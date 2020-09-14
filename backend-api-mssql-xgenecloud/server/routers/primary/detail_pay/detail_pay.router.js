const {
  BaseRouter
} = require('xc-core');

class DetailPayRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.DetailPayService = app.$services.primary.DetailPayService;
    this.DetailPayMiddleware = app.$middlewares.primary.DetailPayMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.DetailPayService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.DetailPayService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.DetailPayService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.DetailPayService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.DetailPayService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.DetailPayService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.DetailPayService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.DetailPayService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.DetailPayService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.DetailPayService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.DetailPayService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.DetailPayService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.DetailPayService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.DetailPayService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.DetailPayService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/detail_pay*",this.DetailPayMiddleware.default)

    router.get('/api/v1/detail_pay', this.DetailPayMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/detail_pay', this.DetailPayMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/detail_pay/findOne', this.DetailPayMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/detail_pay/groupby/:columnName', this.DetailPayMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/detail_pay/distribution/:columnName', this.DetailPayMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/detail_pay/distinct/:columnName', this.DetailPayMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/detail_pay/aggregate/:columnName', this.DetailPayMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/detail_pay/count', this.DetailPayMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/detail_pay/bulk', this.DetailPayMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/detail_pay/bulk', this.DetailPayMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/detail_pay/bulk', this.DetailPayMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/detail_pay/:id', this.DetailPayMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/detail_pay/:id', this.DetailPayMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/detail_pay/:id', this.DetailPayMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/detail_pay/:id/exists', this.DetailPayMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = DetailPayRouter;