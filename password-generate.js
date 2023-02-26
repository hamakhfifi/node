const passGen = require('generate-password')


var password = passGen.generate({
	length: 30,
	numbers: true,
  uppercase:true,
  symbols:true
});

module.exports = password