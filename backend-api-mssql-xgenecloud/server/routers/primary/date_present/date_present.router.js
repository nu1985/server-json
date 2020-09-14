const {
  BaseRouter
} = require('xc-core');

class DatePresentRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.DatePresentService = app.$services.primary.DatePresentService;
    this.DatePresentMiddleware = app.$middlewares.primary.DatePresentMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.DatePresentService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.DatePresentService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.DatePresentService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.DatePresentService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.DatePresentService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.DatePresentService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.DatePresentService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.DatePresentService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.DatePresentService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.DatePresentService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.DatePresentService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.DatePresentService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.DatePresentService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.DatePresentService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.DatePresentService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/date_present*",this.DatePresentMiddleware.default)

    router.get('/api/v1/date_present', this.DatePresentMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/date_present', this.DatePresentMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/date_present/findOne', this.DatePresentMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/date_present/groupby/:columnName', this.DatePresentMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/date_present/distribution/:columnName', this.DatePresentMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/date_present/distinct/:columnName', this.DatePresentMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/date_present/aggregate/:columnName', this.DatePresentMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/date_present/count', this.DatePresentMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/date_present/bulk', this.DatePresentMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/date_present/bulk', this.DatePresentMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/date_present/bulk', this.DatePresentMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/date_present/:id', this.DatePresentMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/date_present/:id', this.DatePresentMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/date_present/:id', this.DatePresentMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/date_present/:id/exists', this.DatePresentMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = DatePresentRouter;