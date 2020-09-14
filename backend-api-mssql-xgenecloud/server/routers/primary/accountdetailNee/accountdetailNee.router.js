const {
  BaseRouter
} = require('xc-core');

class AccountdetailNeeRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.AccountdetailNeeService = app.$services.primary.AccountdetailNeeService;
    this.AccountdetailNeeMiddleware = app.$middlewares.primary.AccountdetailNeeMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.AccountdetailNeeService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.AccountdetailNeeService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.AccountdetailNeeService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.AccountdetailNeeService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.AccountdetailNeeService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.AccountdetailNeeService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.AccountdetailNeeService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.AccountdetailNeeService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.AccountdetailNeeService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.AccountdetailNeeService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.AccountdetailNeeService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.AccountdetailNeeService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.AccountdetailNeeService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.AccountdetailNeeService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.AccountdetailNeeService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/accountdetailNee*",this.AccountdetailNeeMiddleware.default)

    router.get('/api/v1/accountdetailNee', this.AccountdetailNeeMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/accountdetailNee', this.AccountdetailNeeMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/accountdetailNee/findOne', this.AccountdetailNeeMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/accountdetailNee/groupby/:columnName', this.AccountdetailNeeMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/accountdetailNee/distribution/:columnName', this.AccountdetailNeeMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/accountdetailNee/distinct/:columnName', this.AccountdetailNeeMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/accountdetailNee/aggregate/:columnName', this.AccountdetailNeeMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/accountdetailNee/count', this.AccountdetailNeeMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/accountdetailNee/bulk', this.AccountdetailNeeMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/accountdetailNee/bulk', this.AccountdetailNeeMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/accountdetailNee/bulk', this.AccountdetailNeeMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/accountdetailNee/:id', this.AccountdetailNeeMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/accountdetailNee/:id', this.AccountdetailNeeMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/accountdetailNee/:id', this.AccountdetailNeeMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/accountdetailNee/:id/exists', this.AccountdetailNeeMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = AccountdetailNeeRouter;