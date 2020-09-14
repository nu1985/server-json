const {
  BaseRouter
} = require('xc-core');

class CauseRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.CauseService = app.$services.primary.CauseService;
    this.CauseMiddleware = app.$middlewares.primary.CauseMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.CauseService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.CauseService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.CauseService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.CauseService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.CauseService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.CauseService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.CauseService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.CauseService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.CauseService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.CauseService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.CauseService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.CauseService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.CauseService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.CauseService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.CauseService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/cause*",this.CauseMiddleware.default)

    router.get('/api/v1/cause', this.CauseMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/cause', this.CauseMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/cause/findOne', this.CauseMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/cause/groupby/:columnName', this.CauseMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/cause/distribution/:columnName', this.CauseMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/cause/distinct/:columnName', this.CauseMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/cause/aggregate/:columnName', this.CauseMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/cause/count', this.CauseMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/cause/bulk', this.CauseMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/cause/bulk', this.CauseMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/cause/bulk', this.CauseMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/cause/:id', this.CauseMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/cause/:id', this.CauseMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/cause/:id', this.CauseMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/cause/:id/exists', this.CauseMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = CauseRouter;