const {
  BaseRouter
} = require('xc-core');

class NumDeadcheckRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.NumDeadcheckService = app.$services.primary.NumDeadcheckService;
    this.NumDeadcheckMiddleware = app.$middlewares.primary.NumDeadcheckMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.NumDeadcheckService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.NumDeadcheckService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.NumDeadcheckService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.NumDeadcheckService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.NumDeadcheckService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.NumDeadcheckService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.NumDeadcheckService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.NumDeadcheckService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.NumDeadcheckService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.NumDeadcheckService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.NumDeadcheckService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.NumDeadcheckService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.NumDeadcheckService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.NumDeadcheckService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.NumDeadcheckService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/num_deadcheck*",this.NumDeadcheckMiddleware.default)

    router.get('/api/v1/num_deadcheck', this.NumDeadcheckMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/num_deadcheck', this.NumDeadcheckMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/num_deadcheck/findOne', this.NumDeadcheckMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/num_deadcheck/groupby/:columnName', this.NumDeadcheckMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/num_deadcheck/distribution/:columnName', this.NumDeadcheckMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/num_deadcheck/distinct/:columnName', this.NumDeadcheckMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/num_deadcheck/aggregate/:columnName', this.NumDeadcheckMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/num_deadcheck/count', this.NumDeadcheckMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/num_deadcheck/bulk', this.NumDeadcheckMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/num_deadcheck/bulk', this.NumDeadcheckMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/num_deadcheck/bulk', this.NumDeadcheckMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/num_deadcheck/:id', this.NumDeadcheckMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/num_deadcheck/:id', this.NumDeadcheckMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/num_deadcheck/:id', this.NumDeadcheckMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/num_deadcheck/:id/exists', this.NumDeadcheckMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = NumDeadcheckRouter;