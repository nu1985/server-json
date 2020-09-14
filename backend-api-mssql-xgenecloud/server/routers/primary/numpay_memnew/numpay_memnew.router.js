const {
  BaseRouter
} = require('xc-core');

class NumpayMemnewRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.NumpayMemnewService = app.$services.primary.NumpayMemnewService;
    this.NumpayMemnewMiddleware = app.$middlewares.primary.NumpayMemnewMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.NumpayMemnewService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.NumpayMemnewService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.NumpayMemnewService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.NumpayMemnewService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.NumpayMemnewService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.NumpayMemnewService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.NumpayMemnewService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.NumpayMemnewService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.NumpayMemnewService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.NumpayMemnewService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.NumpayMemnewService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.NumpayMemnewService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.NumpayMemnewService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.NumpayMemnewService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.NumpayMemnewService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/numpay_memnew*",this.NumpayMemnewMiddleware.default)

    router.get('/api/v1/numpay_memnew', this.NumpayMemnewMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/numpay_memnew', this.NumpayMemnewMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/numpay_memnew/findOne', this.NumpayMemnewMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/numpay_memnew/groupby/:columnName', this.NumpayMemnewMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/numpay_memnew/distribution/:columnName', this.NumpayMemnewMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/numpay_memnew/distinct/:columnName', this.NumpayMemnewMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/numpay_memnew/aggregate/:columnName', this.NumpayMemnewMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/numpay_memnew/count', this.NumpayMemnewMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/numpay_memnew/bulk', this.NumpayMemnewMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/numpay_memnew/bulk', this.NumpayMemnewMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/numpay_memnew/bulk', this.NumpayMemnewMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/numpay_memnew/:id', this.NumpayMemnewMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/numpay_memnew/:id', this.NumpayMemnewMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/numpay_memnew/:id', this.NumpayMemnewMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/numpay_memnew/:id/exists', this.NumpayMemnewMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = NumpayMemnewRouter;