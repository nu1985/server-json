const {
  BaseRouter
} = require('xc-core');

class NumnotpayRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.NumnotpayService = app.$services.primary.NumnotpayService;
    this.NumnotpayMiddleware = app.$middlewares.primary.NumnotpayMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.NumnotpayService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.NumnotpayService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.NumnotpayService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.NumnotpayService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.NumnotpayService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.NumnotpayService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.NumnotpayService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.NumnotpayService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.NumnotpayService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.NumnotpayService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.NumnotpayService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.NumnotpayService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.NumnotpayService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.NumnotpayService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.NumnotpayService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/numnotpay*",this.NumnotpayMiddleware.default)

    router.get('/api/v1/numnotpay', this.NumnotpayMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/numnotpay', this.NumnotpayMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/numnotpay/findOne', this.NumnotpayMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/numnotpay/groupby/:columnName', this.NumnotpayMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/numnotpay/distribution/:columnName', this.NumnotpayMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/numnotpay/distinct/:columnName', this.NumnotpayMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/numnotpay/aggregate/:columnName', this.NumnotpayMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/numnotpay/count', this.NumnotpayMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/numnotpay/bulk', this.NumnotpayMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/numnotpay/bulk', this.NumnotpayMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/numnotpay/bulk', this.NumnotpayMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/numnotpay/:id', this.NumnotpayMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/numnotpay/:id', this.NumnotpayMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/numnotpay/:id', this.NumnotpayMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/numnotpay/:id/exists', this.NumnotpayMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = NumnotpayRouter;