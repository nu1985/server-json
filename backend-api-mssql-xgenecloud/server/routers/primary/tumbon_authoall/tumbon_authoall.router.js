const {
  BaseRouter
} = require('xc-core');

class TumbonAuthoallRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.TumbonAuthoallService = app.$services.primary.TumbonAuthoallService;
    this.TumbonAuthoallMiddleware = app.$middlewares.primary.TumbonAuthoallMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.TumbonAuthoallService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.TumbonAuthoallService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.TumbonAuthoallService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.TumbonAuthoallService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.TumbonAuthoallService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.TumbonAuthoallService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.TumbonAuthoallService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.TumbonAuthoallService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.TumbonAuthoallService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.TumbonAuthoallService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.TumbonAuthoallService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.TumbonAuthoallService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.TumbonAuthoallService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.TumbonAuthoallService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.TumbonAuthoallService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/tumbon_authoall*",this.TumbonAuthoallMiddleware.default)

    router.get('/api/v1/tumbon_authoall', this.TumbonAuthoallMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/tumbon_authoall', this.TumbonAuthoallMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/tumbon_authoall/findOne', this.TumbonAuthoallMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/tumbon_authoall/groupby/:columnName', this.TumbonAuthoallMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/tumbon_authoall/distribution/:columnName', this.TumbonAuthoallMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/tumbon_authoall/distinct/:columnName', this.TumbonAuthoallMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/tumbon_authoall/aggregate/:columnName', this.TumbonAuthoallMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/tumbon_authoall/count', this.TumbonAuthoallMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/tumbon_authoall/bulk', this.TumbonAuthoallMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/tumbon_authoall/bulk', this.TumbonAuthoallMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/tumbon_authoall/bulk', this.TumbonAuthoallMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/tumbon_authoall/:id', this.TumbonAuthoallMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/tumbon_authoall/:id', this.TumbonAuthoallMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/tumbon_authoall/:id', this.TumbonAuthoallMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/tumbon_authoall/:id/exists', this.TumbonAuthoallMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = TumbonAuthoallRouter;