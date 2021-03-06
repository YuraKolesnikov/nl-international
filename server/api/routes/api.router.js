const express = require("express");

const {userRouter} = require('./user');
const {adminRouter} = require('./admin');
const {orderRouter} = require('./order');


class ApiRouter {
  constructor(router, routes) {
    this.router = router;
    this.routes = routes;
    this.setupApiRoutes(routes);
  }

  get apiRouter() {
    return this.router;
  }

  addApiRoute(url, router) {
    this.router.use(url, router);
  }
  
  setupApiRoutes(routes) {
    routes.forEach((route) => {
      this.addApiRoute(route.url, route.router);
    });
  }
}
const routes = [
  { url: '/admin', router: adminRouter },
  { url: '/orders', router: orderRouter },
  { url: '/users', router: userRouter },
];
module.exports = {
  ApiRouter,
  apiRouter: new ApiRouter(express.Router(), routes).apiRouter
};