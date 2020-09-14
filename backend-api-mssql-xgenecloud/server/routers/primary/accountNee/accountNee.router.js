const {
  BaseRouter
} = require('xc-core');

class AccountNeeRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.AccountNeeService = app.$services.primary.AccountNeeService;
    this.AccountNeeMiddleware = app.$middlewares.primary.AccountNeeMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.AccountNeeService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.AccountNeeService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.AccountNeeService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.AccountNeeService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.AccountNeeService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.AccountNeeService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.AccountNeeService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.AccountNeeService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.AccountNeeService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.AccountNeeService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.AccountNeeService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.AccountNeeService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.AccountNeeService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.AccountNeeService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.AccountNeeService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/accountNee*",this.AccountNeeMiddleware.default)

    router.get('/api/v1/accountNee', this.AccountNeeMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/accountNee', this.AccountNeeMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/accountNee/findOne', this.AccountNeeMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/accountNee/groupby/:columnName', this.AccountNeeMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/accountNee/distribution/:columnName', this.AccountNeeMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/accountNee/distinct/:columnName', this.AccountNeeMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/accountNee/aggregate/:columnName', this.AccountNeeMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/accountNee/count', this.AccountNeeMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/accountNee/bulk', this.AccountNeeMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/accountNee/bulk', this.AccountNeeMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/accountNee/bulk', this.AccountNeeMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/accountNee/:id', this.AccountNeeMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/accountNee/:id', this.AccountNeeMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/accountNee/:id', this.AccountNeeMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/accountNee/:id/exists', this.AccountNeeMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = AccountNeeRouter;