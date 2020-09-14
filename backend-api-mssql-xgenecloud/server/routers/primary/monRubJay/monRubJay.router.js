const {
  BaseRouter
} = require('xc-core');

class MonRubJayRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.MonRubJayService = app.$services.primary.MonRubJayService;
    this.MonRubJayMiddleware = app.$middlewares.primary.MonRubJayMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.MonRubJayService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.MonRubJayService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.MonRubJayService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.MonRubJayService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.MonRubJayService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.MonRubJayService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.MonRubJayService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.MonRubJayService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.MonRubJayService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.MonRubJayService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.MonRubJayService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.MonRubJayService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.MonRubJayService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.MonRubJayService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.MonRubJayService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/monRubJay*",this.MonRubJayMiddleware.default)

    router.get('/api/v1/monRubJay', this.MonRubJayMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/monRubJay', this.MonRubJayMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/monRubJay/findOne', this.MonRubJayMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/monRubJay/groupby/:columnName', this.MonRubJayMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/monRubJay/distribution/:columnName', this.MonRubJayMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/monRubJay/distinct/:columnName', this.MonRubJayMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/monRubJay/aggregate/:columnName', this.MonRubJayMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/monRubJay/count', this.MonRubJayMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/monRubJay/bulk', this.MonRubJayMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/monRubJay/bulk', this.MonRubJayMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/monRubJay/bulk', this.MonRubJayMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/monRubJay/:id', this.MonRubJayMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/monRubJay/:id', this.MonRubJayMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/monRubJay/:id', this.MonRubJayMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/monRubJay/:id/exists', this.MonRubJayMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = MonRubJayRouter;