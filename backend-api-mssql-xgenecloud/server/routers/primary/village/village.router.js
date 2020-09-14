const {
  BaseRouter
} = require('xc-core');

class VillageRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.VillageService = app.$services.primary.VillageService;
    this.VillageMiddleware = app.$middlewares.primary.VillageMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.VillageService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.VillageService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.VillageService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.VillageService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.VillageService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.VillageService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.VillageService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.VillageService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.VillageService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.VillageService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.VillageService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.VillageService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.VillageService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.VillageService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.VillageService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/village*",this.VillageMiddleware.default)

    router.get('/api/v1/village', this.VillageMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/village', this.VillageMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/village/findOne', this.VillageMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/village/groupby/:columnName', this.VillageMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/village/distribution/:columnName', this.VillageMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/village/distinct/:columnName', this.VillageMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/village/aggregate/:columnName', this.VillageMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/village/count', this.VillageMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/village/bulk', this.VillageMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/village/bulk', this.VillageMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/village/bulk', this.VillageMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/village/:id', this.VillageMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/village/:id', this.VillageMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/village/:id', this.VillageMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/village/:id/exists', this.VillageMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = VillageRouter;