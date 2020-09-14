const {
  BaseRouter
} = require('xc-core');

class DetailNameRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.DetailNameService = app.$services.primary.DetailNameService;
    this.DetailNameMiddleware = app.$middlewares.primary.DetailNameMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.DetailNameService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.DetailNameService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.DetailNameService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.DetailNameService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.DetailNameService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.DetailNameService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.DetailNameService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.DetailNameService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.DetailNameService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.DetailNameService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.DetailNameService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.DetailNameService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.DetailNameService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.DetailNameService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.DetailNameService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/detail_name*",this.DetailNameMiddleware.default)

    router.get('/api/v1/detail_name', this.DetailNameMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/detail_name', this.DetailNameMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/detail_name/findOne', this.DetailNameMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/detail_name/groupby/:columnName', this.DetailNameMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/detail_name/distribution/:columnName', this.DetailNameMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/detail_name/distinct/:columnName', this.DetailNameMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/detail_name/aggregate/:columnName', this.DetailNameMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/detail_name/count', this.DetailNameMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/detail_name/bulk', this.DetailNameMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/detail_name/bulk', this.DetailNameMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/detail_name/bulk', this.DetailNameMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/detail_name/:id', this.DetailNameMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/detail_name/:id', this.DetailNameMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/detail_name/:id', this.DetailNameMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/detail_name/:id/exists', this.DetailNameMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = DetailNameRouter;