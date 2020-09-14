const {
  BaseRouter
} = require('xc-core');

class RubOtherRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.RubOtherService = app.$services.primary.RubOtherService;
    this.RubOtherMiddleware = app.$middlewares.primary.RubOtherMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.RubOtherService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.RubOtherService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.RubOtherService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.RubOtherService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.RubOtherService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.RubOtherService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.RubOtherService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.RubOtherService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.RubOtherService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.RubOtherService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.RubOtherService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.RubOtherService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.RubOtherService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.RubOtherService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.RubOtherService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/rub_other*",this.RubOtherMiddleware.default)

    router.get('/api/v1/rub_other', this.RubOtherMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/rub_other', this.RubOtherMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/rub_other/findOne', this.RubOtherMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/rub_other/groupby/:columnName', this.RubOtherMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/rub_other/distribution/:columnName', this.RubOtherMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/rub_other/distinct/:columnName', this.RubOtherMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/rub_other/aggregate/:columnName', this.RubOtherMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/rub_other/count', this.RubOtherMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/rub_other/bulk', this.RubOtherMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/rub_other/bulk', this.RubOtherMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/rub_other/bulk', this.RubOtherMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/rub_other/:id', this.RubOtherMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/rub_other/:id', this.RubOtherMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/rub_other/:id', this.RubOtherMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/rub_other/:id/exists', this.RubOtherMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = RubOtherRouter;