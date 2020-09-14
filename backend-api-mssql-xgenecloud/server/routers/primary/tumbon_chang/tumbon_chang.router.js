const {
  BaseRouter
} = require('xc-core');

class TumbonChangRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.TumbonChangService = app.$services.primary.TumbonChangService;
    this.TumbonChangMiddleware = app.$middlewares.primary.TumbonChangMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.TumbonChangService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.TumbonChangService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.TumbonChangService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.TumbonChangService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.TumbonChangService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.TumbonChangService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.TumbonChangService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.TumbonChangService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.TumbonChangService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.TumbonChangService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.TumbonChangService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.TumbonChangService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.TumbonChangService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.TumbonChangService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.TumbonChangService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/tumbon_chang*",this.TumbonChangMiddleware.default)

    router.get('/api/v1/tumbon_chang', this.TumbonChangMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/tumbon_chang', this.TumbonChangMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/tumbon_chang/findOne', this.TumbonChangMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/tumbon_chang/groupby/:columnName', this.TumbonChangMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/tumbon_chang/distribution/:columnName', this.TumbonChangMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/tumbon_chang/distinct/:columnName', this.TumbonChangMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/tumbon_chang/aggregate/:columnName', this.TumbonChangMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/tumbon_chang/count', this.TumbonChangMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/tumbon_chang/bulk', this.TumbonChangMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/tumbon_chang/bulk', this.TumbonChangMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/tumbon_chang/bulk', this.TumbonChangMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/tumbon_chang/:id', this.TumbonChangMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/tumbon_chang/:id', this.TumbonChangMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/tumbon_chang/:id', this.TumbonChangMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/tumbon_chang/:id/exists', this.TumbonChangMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = TumbonChangRouter;