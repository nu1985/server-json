const {
  BaseRouter
} = require('xc-core');

class SetupMoneyRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.SetupMoneyService = app.$services.primary.SetupMoneyService;
    this.SetupMoneyMiddleware = app.$middlewares.primary.SetupMoneyMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.SetupMoneyService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.SetupMoneyService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.SetupMoneyService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.SetupMoneyService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.SetupMoneyService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.SetupMoneyService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.SetupMoneyService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.SetupMoneyService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.SetupMoneyService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.SetupMoneyService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.SetupMoneyService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.SetupMoneyService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.SetupMoneyService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.SetupMoneyService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.SetupMoneyService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/setup_money*",this.SetupMoneyMiddleware.default)

    router.get('/api/v1/setup_money', this.SetupMoneyMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/setup_money', this.SetupMoneyMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/setup_money/findOne', this.SetupMoneyMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/setup_money/groupby/:columnName', this.SetupMoneyMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/setup_money/distribution/:columnName', this.SetupMoneyMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/setup_money/distinct/:columnName', this.SetupMoneyMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/setup_money/aggregate/:columnName', this.SetupMoneyMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/setup_money/count', this.SetupMoneyMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/setup_money/bulk', this.SetupMoneyMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/setup_money/bulk', this.SetupMoneyMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/setup_money/bulk', this.SetupMoneyMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/setup_money/:id', this.SetupMoneyMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/setup_money/:id', this.SetupMoneyMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/setup_money/:id', this.SetupMoneyMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/setup_money/:id/exists', this.SetupMoneyMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = SetupMoneyRouter;