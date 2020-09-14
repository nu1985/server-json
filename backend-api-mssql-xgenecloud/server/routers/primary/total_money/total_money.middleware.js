const {
  BaseMiddleware
} = require('xc-core');

class TotalMoneyMiddleware extends BaseMiddleware {

  constructor(app) {
    super({
      app
    });
    this.permissions = require('./total_money.policy').permissions;
    // this.$acl = app.acl;
    // this.$acl.addPolicy(require('./total_money.policy').acl);
  }


  async default (req, res, next) {

    console.log('TotalMoney middleware;')

    let roles = req.user ? req.user.roles : {
      guest: true
    };
    const params = {
      method: req.method.toLowerCase(),
      url: req.route.path,
      roles,
      permissions: this.permissions
    }

    const allowed = await this.isAllowed(params);

    if (allowed) {
      //any additional rules can be made here
      return next();
    } else {
      const msg = roles.guest ? `Access Denied : Please Login or Signup for a new account` : `Access Denied for this account`;
      return res.status(403).json({
        msg
      });
    }


  }

}

module.exports = TotalMoneyMiddleware;