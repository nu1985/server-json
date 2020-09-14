const {
  BaseRouter
} = require('xc-core');

class PayRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.PayService = app.$services.primary.PayService;
    this.PayMiddleware = app.$middlewares.primary.PayMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.PayService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.PayService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.PayService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.PayService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.PayService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.PayService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.PayService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.PayService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.PayService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.PayService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.PayService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.PayService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.PayService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.PayService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.PayService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/pay*",this.PayMiddleware.default)

    router.get('/api/v1/pay', this.PayMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/pay', this.PayMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/pay/findOne', this.PayMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/pay/groupby/:columnName', this.PayMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/pay/distribution/:columnName', this.PayMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/pay/distinct/:columnName', this.PayMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/pay/aggregate/:columnName', this.PayMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/pay/count', this.PayMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/pay/bulk', this.PayMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/pay/bulk', this.PayMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/pay/bulk', this.PayMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/pay/:id', this.PayMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/pay/:id', this.PayMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/pay/:id', this.PayMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/pay/:id/exists', this.PayMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = PayRouter;