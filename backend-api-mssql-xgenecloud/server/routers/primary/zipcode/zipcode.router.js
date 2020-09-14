const {
  BaseRouter
} = require('xc-core');

class ZipcodeRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.ZipcodeService = app.$services.primary.ZipcodeService;
    this.ZipcodeMiddleware = app.$middlewares.primary.ZipcodeMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.ZipcodeService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.ZipcodeService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.ZipcodeService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.ZipcodeService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.ZipcodeService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.ZipcodeService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.ZipcodeService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.ZipcodeService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.ZipcodeService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.ZipcodeService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.ZipcodeService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.ZipcodeService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.ZipcodeService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.ZipcodeService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.ZipcodeService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/zipcode*",this.ZipcodeMiddleware.default)

    router.get('/api/v1/zipcode', this.ZipcodeMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/zipcode', this.ZipcodeMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/zipcode/findOne', this.ZipcodeMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/zipcode/groupby/:columnName', this.ZipcodeMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/zipcode/distribution/:columnName', this.ZipcodeMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/zipcode/distinct/:columnName', this.ZipcodeMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/zipcode/aggregate/:columnName', this.ZipcodeMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/zipcode/count', this.ZipcodeMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/zipcode/bulk', this.ZipcodeMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/zipcode/bulk', this.ZipcodeMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/zipcode/bulk', this.ZipcodeMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/zipcode/:id', this.ZipcodeMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/zipcode/:id', this.ZipcodeMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/zipcode/:id', this.ZipcodeMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/zipcode/:id/exists', this.ZipcodeMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = ZipcodeRouter;