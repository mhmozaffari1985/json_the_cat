const request = require("request");
let args = process.argv.splice(2);
request(
  `https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`,
  function(err, res, body) {
    //console.log(body);
    console.log(typeof body);
    const data = JSON.parse(body);
    console.log(data[0].description);
    console.log(typeof data);
  }
);
