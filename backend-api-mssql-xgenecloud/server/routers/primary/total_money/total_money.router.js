const {
  BaseRouter
} = require('xc-core');

class TotalMoneyRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.TotalMoneyService = app.$services.primary.TotalMoneyService;
    this.TotalMoneyMiddleware = app.$middlewares.primary.TotalMoneyMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.TotalMoneyService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.TotalMoneyService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.TotalMoneyService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.TotalMoneyService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.TotalMoneyService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.TotalMoneyService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.TotalMoneyService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.TotalMoneyService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.TotalMoneyService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.TotalMoneyService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.TotalMoneyService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.TotalMoneyService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.TotalMoneyService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.TotalMoneyService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.TotalMoneyService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/total_money*",this.TotalMoneyMiddleware.default)

    router.get('/api/v1/total_money', this.TotalMoneyMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/total_money', this.TotalMoneyMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/total_money/findOne', this.TotalMoneyMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/total_money/groupby/:columnName', this.TotalMoneyMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/total_money/distribution/:columnName', this.TotalMoneyMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/total_money/distinct/:columnName', this.TotalMoneyMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/total_money/aggregate/:columnName', this.TotalMoneyMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/total_money/count', this.TotalMoneyMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/total_money/bulk', this.TotalMoneyMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/total_money/bulk', this.TotalMoneyMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/total_money/bulk', this.TotalMoneyMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/total_money/:id', this.TotalMoneyMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/total_money/:id', this.TotalMoneyMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/total_money/:id', this.TotalMoneyMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/total_money/:id/exists', this.TotalMoneyMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = TotalMoneyRouter;