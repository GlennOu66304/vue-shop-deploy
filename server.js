var express = require("express");

var app = express();
const port = process.env.PORT || 8088
var router = express.Router();
router.get("/", function(req, res, next) {
  req.url = "/index.html";
  next();
});

app.use(router);
// 接口数据
// 1、读取json数据
var banner = require("./source/json/banner.json");
// console.log(banner)
var sellingList = require("./source/json/selling-list.json");
// console.log(sellingList)
var window = require("./source/json/winnow.json");
var comments = require("./source/json/commend-list.json");
// console.log(comments);
var searchDetail = require("./source/json/search-detail.json");
var order = require("./source/json/order.json");
var assort = require("./source/json/assort.json");
var cart = require("./source/json/cart.json");
// 2、路由
var routes = express.Router();

// 3、编写接口
// test
routes.get("/", (resq, res) => {
  res.send("hello Test");
});

routes.get("/banner.json", (req, res) => {
  // 返回数据给客户端，返回json数据
  res.json(banner);
});

routes.get("/selling-list.json", (req, res) => {
  // 返回数据给客户端，返回json数据
  res.json(sellingList);
});

routes.get("/window.json", (req, res) => {
  // 返回数据给客户端，返回json数据
  res.json(window);
});

routes.get("/commend-list.json", (req, res) => {
  // 返回数据给客户端，返回json数据
  res.json(comments);
});

routes.get("/assort.json", (req, res) => {
  // 返回数据给客户端，返回json数据
  res.json(assort);
});

routes.get("/cart.json", (req, res) => {
  // 返回数据给客户端，返回json数据
  res.json(cart);
});

routes.get("/order.json", (req, res) => {
  // 返回数据给客户端，返回json数据
  res.json(order);
});

// search
routes.get("/search-detail.json", (req, res) => {
  // 返回数据给客户端，返回json数据
  res.json(searchDetail);
});

routes.get("/selling-list.json", (req, res) => {
  // 返回数据给客户端，返回json数据
  res.json(sellingList);
});

app.use(express.static('./dist'));

app.use("/api", routes);

app.use(express.static("img"));
const base_url = "http://localhost"+ port
app.listen(port, function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("http://localhost:" + port, "\n");
});
