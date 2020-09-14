const {
  BaseRouter
} = require('xc-core');

class TypeNameRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.TypeNameService = app.$services.primary.TypeNameService;
    this.TypeNameMiddleware = app.$middlewares.primary.TypeNameMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.TypeNameService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.TypeNameService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.TypeNameService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.TypeNameService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.TypeNameService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.TypeNameService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.TypeNameService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.TypeNameService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.TypeNameService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.TypeNameService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.TypeNameService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.TypeNameService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.TypeNameService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.TypeNameService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.TypeNameService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/type_name*",this.TypeNameMiddleware.default)

    router.get('/api/v1/type_name', this.TypeNameMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/type_name', this.TypeNameMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/type_name/findOne', this.TypeNameMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/type_name/groupby/:columnName', this.TypeNameMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/type_name/distribution/:columnName', this.TypeNameMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/type_name/distinct/:columnName', this.TypeNameMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/type_name/aggregate/:columnName', this.TypeNameMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/type_name/count', this.TypeNameMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/type_name/bulk', this.TypeNameMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/type_name/bulk', this.TypeNameMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/type_name/bulk', this.TypeNameMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/type_name/:id', this.TypeNameMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/type_name/:id', this.TypeNameMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/type_name/:id', this.TypeNameMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/type_name/:id/exists', this.TypeNameMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = TypeNameRouter;