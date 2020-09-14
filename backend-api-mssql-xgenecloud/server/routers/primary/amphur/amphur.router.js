const {
  BaseRouter
} = require('xc-core');

class AmphurRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.AmphurService = app.$services.primary.AmphurService;
    this.AmphurMiddleware = app.$middlewares.primary.AmphurMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.AmphurService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.AmphurService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.AmphurService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.AmphurService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.AmphurService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.AmphurService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.AmphurService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.AmphurService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.AmphurService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.AmphurService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.AmphurService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.AmphurService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.AmphurService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.AmphurService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.AmphurService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/amphur*",this.AmphurMiddleware.default)

    router.get('/api/v1/amphur', this.AmphurMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/amphur', this.AmphurMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/amphur/findOne', this.AmphurMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/amphur/groupby/:columnName', this.AmphurMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/amphur/distribution/:columnName', this.AmphurMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/amphur/distinct/:columnName', this.AmphurMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/amphur/aggregate/:columnName', this.AmphurMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/amphur/count', this.AmphurMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/amphur/bulk', this.AmphurMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/amphur/bulk', this.AmphurMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/amphur/bulk', this.AmphurMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/amphur/:id', this.AmphurMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/amphur/:id', this.AmphurMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/amphur/:id', this.AmphurMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/amphur/:id/exists', this.AmphurMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = AmphurRouter;