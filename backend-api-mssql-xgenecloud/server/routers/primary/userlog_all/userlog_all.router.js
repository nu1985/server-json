const {
  BaseRouter
} = require('xc-core');

class UserlogAllRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.UserlogAllService = app.$services.primary.UserlogAllService;
    this.UserlogAllMiddleware = app.$middlewares.primary.UserlogAllMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.UserlogAllService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.UserlogAllService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.UserlogAllService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.UserlogAllService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.UserlogAllService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.UserlogAllService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.UserlogAllService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.UserlogAllService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.UserlogAllService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.UserlogAllService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.UserlogAllService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.UserlogAllService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.UserlogAllService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.UserlogAllService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.UserlogAllService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/userlog_all*",this.UserlogAllMiddleware.default)

    router.get('/api/v1/userlog_all', this.UserlogAllMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/userlog_all', this.UserlogAllMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/userlog_all/findOne', this.UserlogAllMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/userlog_all/groupby/:columnName', this.UserlogAllMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/userlog_all/distribution/:columnName', this.UserlogAllMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/userlog_all/distinct/:columnName', this.UserlogAllMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/userlog_all/aggregate/:columnName', this.UserlogAllMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/userlog_all/count', this.UserlogAllMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/userlog_all/bulk', this.UserlogAllMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/userlog_all/bulk', this.UserlogAllMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/userlog_all/bulk', this.UserlogAllMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/userlog_all/:id', this.UserlogAllMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/userlog_all/:id', this.UserlogAllMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/userlog_all/:id', this.UserlogAllMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/userlog_all/:id/exists', this.UserlogAllMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = UserlogAllRouter;