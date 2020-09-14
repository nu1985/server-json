const {
  BaseRouter
} = require('xc-core');

class BankNameRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.BankNameService = app.$services.primary.BankNameService;
    this.BankNameMiddleware = app.$middlewares.primary.BankNameMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.BankNameService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.BankNameService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.BankNameService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.BankNameService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.BankNameService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.BankNameService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.BankNameService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.BankNameService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.BankNameService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.BankNameService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.BankNameService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.BankNameService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.BankNameService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.BankNameService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.BankNameService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/bank_name*",this.BankNameMiddleware.default)

    router.get('/api/v1/bank_name', this.BankNameMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/bank_name', this.BankNameMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/bank_name/findOne', this.BankNameMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/bank_name/groupby/:columnName', this.BankNameMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/bank_name/distribution/:columnName', this.BankNameMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/bank_name/distinct/:columnName', this.BankNameMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/bank_name/aggregate/:columnName', this.BankNameMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/bank_name/count', this.BankNameMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/bank_name/bulk', this.BankNameMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/bank_name/bulk', this.BankNameMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/bank_name/bulk', this.BankNameMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/bank_name/:id', this.BankNameMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/bank_name/:id', this.BankNameMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/bank_name/:id', this.BankNameMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/bank_name/:id/exists', this.BankNameMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = BankNameRouter;