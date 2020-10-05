const { Transform } = require("stream");

class Transf extends Transform {
  constructor(func, shift, action) {
    super();
    this.func = func
    this.shift = shift
    this.action = action
  }
  _transform(data, encoding, callback) {
    this.push(this.func(data.toString(), this.shift, this.action));
    callback();
  }
};

module.exports = TransfStream = (func, shift, action) => new Transf(func, shift, action)