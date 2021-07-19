const http = require("http");

function express() {
  const fns = [];
  const app = function(req, res) {
    let index = 0;
    function next() {
      const task = fns[index++];
      if (!task) return res.end("middleware end now!!!");
      task(req, res, next);
    }
    next();
  };

  app.use = function(fn) {
    fns.push(fn);
    return this;
  };
  return app;
}

var app = express();
app
  .use(middlewareA)
  .use(middlewareB)
  .use(middlewareC);

http.createServer(app).listen("3000", function() {
  console.log("listening 3000....");
});

function middlewareA(req, res, next) {
  console.log("middlewareA before next()");
  next();
  console.log("middlewareA after next()");
}

function middlewareB(req, res, next) {
  console.log("middlewareB before next()");
  next();
  console.log("middlewareB after next()");
}

function middlewareC(req, res, next) {
  console.log("middlewareC before next()");
  next();
  console.log("middlewareC after next()");
}
