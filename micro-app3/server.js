const express = require('express');

const app = express();
const router = express.Router();

const allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  // res.header("Content-Type", "application/json;charset=utf-8");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Credentials","true");
  res.header("X-Powered-By",' 3.2.1');
  if(req.method.toUpperCase() === "OPTIONS") res.send(200);/*让options请求快速返回*/
  else  next();
};
app.use(allowCrossDomain);


// app.use(express.static('./meri-design'))
// app.use(express.static('./production'));
app.use(express.static('./production'));
router.get('/', (req, res, next) => {
  req.url = 'index.html';
  next();
});

app.use(router);

// const open = require('opn');

// 启动成功打开网页
const port = 3552; // 端口号
module.exports = app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  // open(`http://localhost:${port}`);
  console.log(`Listening at http://localhost:${port}\n`);
});
