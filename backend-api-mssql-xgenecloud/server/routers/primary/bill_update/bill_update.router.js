const {
  BaseRouter
} = require('xc-core');

class BillUpdateRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.BillUpdateService = app.$services.primary.BillUpdateService;
    this.BillUpdateMiddleware = app.$middlewares.primary.BillUpdateMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.BillUpdateService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.BillUpdateService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.BillUpdateService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.BillUpdateService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.BillUpdateService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.BillUpdateService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.BillUpdateService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.BillUpdateService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.BillUpdateService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.BillUpdateService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.BillUpdateService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.BillUpdateService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.BillUpdateService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.BillUpdateService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.BillUpdateService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/bill_update*",this.BillUpdateMiddleware.default)

    router.get('/api/v1/bill_update', this.BillUpdateMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/bill_update', this.BillUpdateMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/bill_update/findOne', this.BillUpdateMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/bill_update/groupby/:columnName', this.BillUpdateMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/bill_update/distribution/:columnName', this.BillUpdateMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/bill_update/distinct/:columnName', this.BillUpdateMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/bill_update/aggregate/:columnName', this.BillUpdateMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/bill_update/count', this.BillUpdateMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/bill_update/bulk', this.BillUpdateMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/bill_update/bulk', this.BillUpdateMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/bill_update/bulk', this.BillUpdateMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/bill_update/:id', this.BillUpdateMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/bill_update/:id', this.BillUpdateMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/bill_update/:id', this.BillUpdateMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/bill_update/:id/exists', this.BillUpdateMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = BillUpdateRouter;