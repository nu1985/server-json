const {
  BaseRouter
} = require('xc-core');

class AccountrecRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.AccountrecService = app.$services.primary.AccountrecService;
    this.AccountrecMiddleware = app.$middlewares.primary.AccountrecMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.AccountrecService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.AccountrecService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.AccountrecService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.AccountrecService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.AccountrecService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.AccountrecService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.AccountrecService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.AccountrecService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.AccountrecService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.AccountrecService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.AccountrecService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.AccountrecService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.AccountrecService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.AccountrecService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.AccountrecService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/accountrec*",this.AccountrecMiddleware.default)

    router.get('/api/v1/accountrec', this.AccountrecMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/accountrec', this.AccountrecMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/accountrec/findOne', this.AccountrecMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/accountrec/groupby/:columnName', this.AccountrecMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/accountrec/distribution/:columnName', this.AccountrecMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/accountrec/distinct/:columnName', this.AccountrecMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/accountrec/aggregate/:columnName', this.AccountrecMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/accountrec/count', this.AccountrecMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/accountrec/bulk', this.AccountrecMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/accountrec/bulk', this.AccountrecMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/accountrec/bulk', this.AccountrecMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/accountrec/:id', this.AccountrecMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/accountrec/:id', this.AccountrecMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/accountrec/:id', this.AccountrecMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/accountrec/:id/exists', this.AccountrecMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = AccountrecRouter;