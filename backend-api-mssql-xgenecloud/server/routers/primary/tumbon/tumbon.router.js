const {
  BaseRouter
} = require('xc-core');

class TumbonRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.TumbonService = app.$services.primary.TumbonService;
    this.TumbonMiddleware = app.$middlewares.primary.TumbonMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.TumbonService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.TumbonService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.TumbonService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.TumbonService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.TumbonService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.TumbonService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.TumbonService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.TumbonService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.TumbonService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.TumbonService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.TumbonService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.TumbonService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.TumbonService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.TumbonService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.TumbonService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/tumbon*",this.TumbonMiddleware.default)

    router.get('/api/v1/tumbon', this.TumbonMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/tumbon', this.TumbonMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/tumbon/findOne', this.TumbonMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/tumbon/groupby/:columnName', this.TumbonMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/tumbon/distribution/:columnName', this.TumbonMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/tumbon/distinct/:columnName', this.TumbonMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/tumbon/aggregate/:columnName', this.TumbonMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/tumbon/count', this.TumbonMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/tumbon/bulk', this.TumbonMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/tumbon/bulk', this.TumbonMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/tumbon/bulk', this.TumbonMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/tumbon/:id', this.TumbonMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/tumbon/:id', this.TumbonMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/tumbon/:id', this.TumbonMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/tumbon/:id/exists', this.TumbonMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = TumbonRouter;