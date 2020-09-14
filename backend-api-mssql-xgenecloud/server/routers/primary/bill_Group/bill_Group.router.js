const {
  BaseRouter
} = require('xc-core');

class BillGroupRouter extends BaseRouter {

  constructor(app) {
    super(app);
    this.BillGroupService = app.$services.primary.BillGroupService;
    this.BillGroupMiddleware = app.$middlewares.primary.BillGroupMiddleware;
    this._mapRoutes(app.$router);
  }

  async list(req, res) {
    let data = await this.BillGroupService.list(req, res);
    res.json(data);
  }

  async create(req, res) {
    let data = await this.BillGroupService.create(req, res);
    res.json(data);
  }

  async update(req, res) {
    let data = await this.BillGroupService.update(req, res);
    res.json(data);
  }

  async delete(req, res) {
    let data = await this.BillGroupService.delete(req, res);
    res.json(data);
  }

  async read(req, res) {
    let data = await this.BillGroupService.read(req, res);
    res.json(data);
  }

  async count(req, res) {
    let data = await this.BillGroupService.count(req, res);
    res.json(data);
  }

  async exists(req, res) {
    let data = await this.BillGroupService.exists(req, res);
    res.json(data);
  }

  async groupBy(req, res) {
    let data = await this.BillGroupService.groupBy(req, res);
    res.json(data);
  }

  async aggregate(req, res) {
    let data = await this.BillGroupService.aggregate(req, res);
    res.json(data);
  }

  async distribution(req, res) {
    let data = await this.BillGroupService.distribution(req, res);
    res.json(data);
  }

  async distinct(req, res) {
    let data = await this.BillGroupService.distinct(req, res);
    res.json(data);
  }

  async findOne(req, res) {
    let data = await this.BillGroupService.findOne(req, res);
    res.json(data);
  }

  async createb(req, res) {
    let data = await this.BillGroupService.createb(req, res);
    res.json(data);
  }

  async updateb(req, res) {
    let data = await this.BillGroupService.updateb(req, res);
    res.json(data);
  }

  async deleteb(req, res) {
    let data = await this.BillGroupService.deleteb(req, res);
    res.json(data);
  }


  _mapRoutes(router) {

    // router.all("/api/v1/bill_Group*",this.BillGroupMiddleware.default)

    router.get('/api/v1/bill_Group', this.BillGroupMiddleware.default, this.catchErr(this.list))
    router.post('/api/v1/bill_Group', this.BillGroupMiddleware.default, this.catchErr(this.create))
    router.get('/api/v1/bill_Group/findOne', this.BillGroupMiddleware.default, this.catchErr(this.findOne))
    router.get('/api/v1/bill_Group/groupby/:columnName', this.BillGroupMiddleware.default, this.catchErr(this.groupBy))
    router.get('/api/v1/bill_Group/distribution/:columnName', this.BillGroupMiddleware.default, this.catchErr(this.distribution))
    router.get('/api/v1/bill_Group/distinct/:columnName', this.BillGroupMiddleware.default, this.catchErr(this.distinct))
    router.get('/api/v1/bill_Group/aggregate/:columnName', this.BillGroupMiddleware.default, this.catchErr(this.aggregate))
    router.get('/api/v1/bill_Group/count', this.BillGroupMiddleware.default, this.catchErr(this.count));
    router.post('/api/v1/bill_Group/bulk', this.BillGroupMiddleware.default, this.catchErr(this.createb))
    router.put('/api/v1/bill_Group/bulk', this.BillGroupMiddleware.default, this.catchErr(this.updateb))
    router.delete('/api/v1/bill_Group/bulk', this.BillGroupMiddleware.default, this.catchErr(this.deleteb))
    router.get('/api/v1/bill_Group/:id', this.BillGroupMiddleware.default, this.catchErr(this.read))
    router.put('/api/v1/bill_Group/:id', this.BillGroupMiddleware.default, this.catchErr(this.update))
    router.delete('/api/v1/bill_Group/:id', this.BillGroupMiddleware.default, this.catchErr(this.delete))
    router.get('/api/v1/bill_Group/:id/exists', this.BillGroupMiddleware.default, this.catchErr(this.exists))

  }

}

module.exports = BillGroupRouter;