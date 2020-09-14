const {
  BaseRouter
} = require('xc-core');

class AccountdetailRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.AccountdetailService = app.$services.primary.AccountdetailService;
    this.AccountdetailMiddleware = app.$middlewares.primary.AccountdetailMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.AccountdetailService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.AccountdetailService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.AccountdetailService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.AccountdetailService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.AccountdetailService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.AccountdetailService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.AccountdetailService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.AccountdetailService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.AccountdetailService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.AccountdetailService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.AccountdetailService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.AccountdetailService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.AccountdetailService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.AccountdetailService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.AccountdetailService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/accountdetail*",this.AccountdetailMiddleware.default)

    router.get('/api/v1/accountdetail', this.AccountdetailMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/accountdetail', this.AccountdetailMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/accountdetail/findOne', this.AccountdetailMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/accountdetail/groupby/:columnName', this.AccountdetailMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/accountdetail/distribution/:columnName', this.AccountdetailMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/accountdetail/distinct/:columnName', this.AccountdetailMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/accountdetail/aggregate/:columnName', this.AccountdetailMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/accountdetail/count', this.AccountdetailMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/accountdetail/bulk', this.AccountdetailMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/accountdetail/bulk', this.AccountdetailMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/accountdetail/bulk', this.AccountdetailMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/accountdetail/:id', this.AccountdetailMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/accountdetail/:id', this.AccountdetailMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/accountdetail/:id', this.AccountdetailMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/accountdetail/:id/exists', this.AccountdetailMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = AccountdetailRouter;