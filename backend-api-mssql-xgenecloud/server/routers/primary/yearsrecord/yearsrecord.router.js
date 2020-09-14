const {
  BaseRouter
} = require('xc-core');

class YearsrecordRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.YearsrecordService = app.$services.primary.YearsrecordService;
    this.YearsrecordMiddleware = app.$middlewares.primary.YearsrecordMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.YearsrecordService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.YearsrecordService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.YearsrecordService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.YearsrecordService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.YearsrecordService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.YearsrecordService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.YearsrecordService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.YearsrecordService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.YearsrecordService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.YearsrecordService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.YearsrecordService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.YearsrecordService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.YearsrecordService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.YearsrecordService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.YearsrecordService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/yearsrecord*",this.YearsrecordMiddleware.default)

    router.get('/api/v1/yearsrecord', this.YearsrecordMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/yearsrecord', this.YearsrecordMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/yearsrecord/findOne', this.YearsrecordMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/yearsrecord/groupby/:columnName', this.YearsrecordMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/yearsrecord/distribution/:columnName', this.YearsrecordMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/yearsrecord/distinct/:columnName', this.YearsrecordMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/yearsrecord/aggregate/:columnName', this.YearsrecordMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/yearsrecord/count', this.YearsrecordMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/yearsrecord/bulk', this.YearsrecordMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/yearsrecord/bulk', this.YearsrecordMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/yearsrecord/bulk', this.YearsrecordMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/yearsrecord/:id', this.YearsrecordMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/yearsrecord/:id', this.YearsrecordMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/yearsrecord/:id', this.YearsrecordMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/yearsrecord/:id/exists', this.YearsrecordMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = YearsrecordRouter;