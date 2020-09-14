const {
  BaseRouter
} = require('xc-core');

class NumdeadUpRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.NumdeadUpService = app.$services.primary.NumdeadUpService;
    this.NumdeadUpMiddleware = app.$middlewares.primary.NumdeadUpMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.NumdeadUpService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.NumdeadUpService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.NumdeadUpService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.NumdeadUpService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.NumdeadUpService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.NumdeadUpService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.NumdeadUpService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.NumdeadUpService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.NumdeadUpService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.NumdeadUpService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.NumdeadUpService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.NumdeadUpService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.NumdeadUpService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.NumdeadUpService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.NumdeadUpService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/numdead_up*",this.NumdeadUpMiddleware.default)

    router.get('/api/v1/numdead_up', this.NumdeadUpMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/numdead_up', this.NumdeadUpMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/numdead_up/findOne', this.NumdeadUpMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/numdead_up/groupby/:columnName', this.NumdeadUpMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/numdead_up/distribution/:columnName', this.NumdeadUpMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/numdead_up/distinct/:columnName', this.NumdeadUpMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/numdead_up/aggregate/:columnName', this.NumdeadUpMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/numdead_up/count', this.NumdeadUpMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/numdead_up/bulk', this.NumdeadUpMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/numdead_up/bulk', this.NumdeadUpMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/numdead_up/bulk', this.NumdeadUpMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/numdead_up/:id', this.NumdeadUpMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/numdead_up/:id', this.NumdeadUpMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/numdead_up/:id', this.NumdeadUpMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/numdead_up/:id/exists', this.NumdeadUpMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = NumdeadUpRouter;