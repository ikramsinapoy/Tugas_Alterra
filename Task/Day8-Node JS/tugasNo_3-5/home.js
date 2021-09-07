const express = require("express");
const app = express();
const port = 8888;

// static
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/img", express.static(__dirname + "public/img"));

// EJS
app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/contact", (req, res) => {
  function funcPromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(res.render("contact_us"));
      }, 5000);
    });
  }

  async function funcAsync() {
    const coba = await funcPromise();
    console.log(coba);
  }

  funcAsync();
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});

// let promise = new Promise((resolve, reject) => {
//   res.render("contact_us");
//   setTimeout(function(){
//     resolve(res.render("contact_us"));
//   }, 5000);
// });

// promise.then(function(value){
//   console.log(value);
// });

// console.log(promise);

// function cobaPromise() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(res.render("contact_us"));
//     }, 5000);
//   });
// }

// async function cobaAsync() {
//   const coba = await cobaPromise();
//   console.log(coba);
// }

// cobaAsync();
