const {
  BaseRouter
} = require('xc-core');

class MonJayRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.MonJayService = app.$services.primary.MonJayService;
    this.MonJayMiddleware = app.$middlewares.primary.MonJayMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.MonJayService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.MonJayService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.MonJayService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.MonJayService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.MonJayService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.MonJayService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.MonJayService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.MonJayService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.MonJayService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.MonJayService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.MonJayService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.MonJayService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.MonJayService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.MonJayService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.MonJayService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/monJay*",this.MonJayMiddleware.default)

    router.get('/api/v1/monJay', this.MonJayMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/monJay', this.MonJayMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/monJay/findOne', this.MonJayMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/monJay/groupby/:columnName', this.MonJayMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/monJay/distribution/:columnName', this.MonJayMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/monJay/distinct/:columnName', this.MonJayMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/monJay/aggregate/:columnName', this.MonJayMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/monJay/count', this.MonJayMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/monJay/bulk', this.MonJayMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/monJay/bulk', this.MonJayMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/monJay/bulk', this.MonJayMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/monJay/:id', this.MonJayMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/monJay/:id', this.MonJayMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/monJay/:id', this.MonJayMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/monJay/:id/exists', this.MonJayMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = MonJayRouter;