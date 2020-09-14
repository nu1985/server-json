const {
  BaseRouter
} = require('xc-core');

class PayOtherRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.PayOtherService = app.$services.primary.PayOtherService;
    this.PayOtherMiddleware = app.$middlewares.primary.PayOtherMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.PayOtherService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.PayOtherService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.PayOtherService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.PayOtherService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.PayOtherService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.PayOtherService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.PayOtherService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.PayOtherService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.PayOtherService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.PayOtherService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.PayOtherService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.PayOtherService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.PayOtherService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.PayOtherService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.PayOtherService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/pay_other*",this.PayOtherMiddleware.default)

    router.get('/api/v1/pay_other', this.PayOtherMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/pay_other', this.PayOtherMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/pay_other/findOne', this.PayOtherMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/pay_other/groupby/:columnName', this.PayOtherMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/pay_other/distribution/:columnName', this.PayOtherMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/pay_other/distinct/:columnName', this.PayOtherMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/pay_other/aggregate/:columnName', this.PayOtherMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/pay_other/count', this.PayOtherMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/pay_other/bulk', this.PayOtherMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/pay_other/bulk', this.PayOtherMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/pay_other/bulk', this.PayOtherMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/pay_other/:id', this.PayOtherMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/pay_other/:id', this.PayOtherMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/pay_other/:id', this.PayOtherMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/pay_other/:id/exists', this.PayOtherMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = PayOtherRouter;