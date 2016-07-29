var Hashids = require('hashids'),
  sourcePath = process.argv[2],
  salt = process.argv[3],
  fs = require('fs'),
  csv = require('csv-string');


var csvString = fs.readFileSync(sourcePath, 'utf8');
var hashes = csv.parse(csvString);
var resultsArray = [];
var hashids = new Hashids(salt);

hashes.forEach(function (hash) {
  var result = hashids.decode(hash[0]);
  resultsArray.push([result]);
});
csvString = csv.stringify(resultsArray);
fs.writeFileSync('results.csv', csvString);
