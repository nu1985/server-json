const {
  BaseRouter
} = require('xc-core');

class MonsodDayRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.MonsodDayService = app.$services.primary.MonsodDayService;
    this.MonsodDayMiddleware = app.$middlewares.primary.MonsodDayMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.MonsodDayService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.MonsodDayService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.MonsodDayService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.MonsodDayService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.MonsodDayService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.MonsodDayService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.MonsodDayService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.MonsodDayService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.MonsodDayService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.MonsodDayService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.MonsodDayService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.MonsodDayService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.MonsodDayService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.MonsodDayService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.MonsodDayService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/monsod_Day*",this.MonsodDayMiddleware.default)

    router.get('/api/v1/monsod_Day', this.MonsodDayMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/monsod_Day', this.MonsodDayMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/monsod_Day/findOne', this.MonsodDayMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/monsod_Day/groupby/:columnName', this.MonsodDayMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/monsod_Day/distribution/:columnName', this.MonsodDayMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/monsod_Day/distinct/:columnName', this.MonsodDayMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/monsod_Day/aggregate/:columnName', this.MonsodDayMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/monsod_Day/count', this.MonsodDayMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/monsod_Day/bulk', this.MonsodDayMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/monsod_Day/bulk', this.MonsodDayMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/monsod_Day/bulk', this.MonsodDayMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/monsod_Day/:id', this.MonsodDayMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/monsod_Day/:id', this.MonsodDayMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/monsod_Day/:id', this.MonsodDayMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/monsod_Day/:id/exists', this.MonsodDayMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = MonsodDayRouter;