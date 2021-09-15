var fs = require("fs"),
  request = require("request");

var download = function (uri, filename, callback) {
  request.head(uri, function (err, res, body) {
    request(uri).pipe(fs.createWriteStream(filename)).on("close", callback);
  });
};

const padNumber = (number) => {
  number = number.toString();

  while (number.length < 4) {
    number = "0" + number;
  }

  return number;
};

let i = 0;
setInterval(() => {
  i++;

  let name = `${padNumber(i)}.gif`;
  download(`http://www.porngif.top/gif/prsa/${name}`, name, function () {
    console.log(name);
  });
}, 3000);
