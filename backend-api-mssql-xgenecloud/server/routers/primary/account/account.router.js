const {
  BaseRouter
} = require('xc-core');

class AccountRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.AccountService = app.$services.primary.AccountService;
    this.AccountMiddleware = app.$middlewares.primary.AccountMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.AccountService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.AccountService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.AccountService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.AccountService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.AccountService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.AccountService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.AccountService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.AccountService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.AccountService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.AccountService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.AccountService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.AccountService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.AccountService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.AccountService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.AccountService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/account*",this.AccountMiddleware.default)

    router.get('/api/v1/account', this.AccountMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/account', this.AccountMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/account/findOne', this.AccountMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/account/groupby/:columnName', this.AccountMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/account/distribution/:columnName', this.AccountMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/account/distinct/:columnName', this.AccountMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/account/aggregate/:columnName', this.AccountMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/account/count', this.AccountMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/account/bulk', this.AccountMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/account/bulk', this.AccountMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/account/bulk', this.AccountMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/account/:id', this.AccountMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/account/:id', this.AccountMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/account/:id', this.AccountMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/account/:id/exists', this.AccountMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = AccountRouter;