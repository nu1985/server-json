const {
  BaseRouter
} = require('xc-core');

class MemnewIdUpdateRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.MemnewIdUpdateService = app.$services.primary.MemnewIdUpdateService;
    this.MemnewIdUpdateMiddleware = app.$middlewares.primary.MemnewIdUpdateMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.MemnewIdUpdateService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.MemnewIdUpdateService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.MemnewIdUpdateService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.MemnewIdUpdateService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.MemnewIdUpdateService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.MemnewIdUpdateService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.MemnewIdUpdateService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.MemnewIdUpdateService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.MemnewIdUpdateService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.MemnewIdUpdateService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.MemnewIdUpdateService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.MemnewIdUpdateService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.MemnewIdUpdateService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.MemnewIdUpdateService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.MemnewIdUpdateService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/memnew_id_update*",this.MemnewIdUpdateMiddleware.default)

    router.get('/api/v1/memnew_id_update', this.MemnewIdUpdateMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/memnew_id_update', this.MemnewIdUpdateMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/memnew_id_update/findOne', this.MemnewIdUpdateMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/memnew_id_update/groupby/:columnName', this.MemnewIdUpdateMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/memnew_id_update/distribution/:columnName', this.MemnewIdUpdateMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/memnew_id_update/distinct/:columnName', this.MemnewIdUpdateMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/memnew_id_update/aggregate/:columnName', this.MemnewIdUpdateMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/memnew_id_update/count', this.MemnewIdUpdateMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/memnew_id_update/bulk', this.MemnewIdUpdateMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/memnew_id_update/bulk', this.MemnewIdUpdateMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/memnew_id_update/bulk', this.MemnewIdUpdateMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/memnew_id_update/:id', this.MemnewIdUpdateMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/memnew_id_update/:id', this.MemnewIdUpdateMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/memnew_id_update/:id', this.MemnewIdUpdateMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/memnew_id_update/:id/exists', this.MemnewIdUpdateMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = MemnewIdUpdateRouter;