const {
  BaseRouter
} = require('xc-core');

class MonlukneeRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.MonlukneeService = app.$services.primary.MonlukneeService;
    this.MonlukneeMiddleware = app.$middlewares.primary.MonlukneeMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.MonlukneeService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.MonlukneeService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.MonlukneeService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.MonlukneeService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.MonlukneeService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.MonlukneeService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.MonlukneeService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.MonlukneeService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.MonlukneeService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.MonlukneeService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.MonlukneeService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.MonlukneeService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.MonlukneeService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.MonlukneeService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.MonlukneeService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/monluknee*",this.MonlukneeMiddleware.default)

    router.get('/api/v1/monluknee', this.MonlukneeMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/monluknee', this.MonlukneeMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/monluknee/findOne', this.MonlukneeMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/monluknee/groupby/:columnName', this.MonlukneeMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/monluknee/distribution/:columnName', this.MonlukneeMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/monluknee/distinct/:columnName', this.MonlukneeMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/monluknee/aggregate/:columnName', this.MonlukneeMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/monluknee/count', this.MonlukneeMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/monluknee/bulk', this.MonlukneeMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/monluknee/bulk', this.MonlukneeMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/monluknee/bulk', this.MonlukneeMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/monluknee/:id', this.MonlukneeMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/monluknee/:id', this.MonlukneeMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/monluknee/:id', this.MonlukneeMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/monluknee/:id/exists', this.MonlukneeMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = MonlukneeRouter;