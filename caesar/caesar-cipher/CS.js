const commands = require('./module/comandder');
const InpStr = require('./module/InputStr');
const OutStr = require('./module/OutputStr');
const Transf = require('./module/TransfStr');
const CS = require("./module/caesar");
const path = require('path');
const { pipeline } = require('stream');


let { action, shift, input, output } = commands.opts();
input = (input) ? path.join(__dirname, input) : '';
output = (output) ? path.join(__dirname, output) : '';


if (action !== 'decode' && action !== 'encode') {
  process.stderr.write('Введенные данные action (-a) неверны\n');
  process.exit(2);
}


if (shift === undefined || shift === '' || typeof +shift !== 'number') {
  process.stderr.write('Введенные данные shift (-s) неверны\n');
  process.exit(3);
}


const InSrteam = InpStr(input);
const OutStream = OutStr(output);
const TrStream = Transf(CS, shift, action);


pipeline(
    InSrteam,
    TrStream,
    OutStream,
    err => {
      if (err) {
        console.error("Системная ошибка", err);
        process.exit(4)
      } else {
        console.log('Работа окончена')
      }
    }
  );