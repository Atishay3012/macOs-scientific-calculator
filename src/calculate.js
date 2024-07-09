import { evaluate, pi, e } from 'mathjs';

let memory = 0;
let radians = true;

function calculate(value, buttonName) {
  switch (buttonName) {
    case 'C':
      return '0';
    case '=':
      try {
        return evaluate(value).toString();
      } catch (e) {
        return 'Error';
      }
    case 'MC':
      memory = 0;
      return value;
    case 'M+':
      memory += parseFloat(value);
      return value;
    case 'M-':
      memory -= parseFloat(value);
      return value;
    case 'MR':
      return memory.toString();
    case '2nd':
       
      return value;
    case 'x^2':
      return Math.pow(parseFloat(value), 2).toString();
    case 'x^3':
      return Math.pow(parseFloat(value), 3).toString();
    case 'x^y':
      return value + '^';
    case 'e^x':
      return Math.exp(parseFloat(value)).toString();
    case '10^x':
      return Math.pow(10, parseFloat(value)).toString();
    case '1/x':
      return (1 / parseFloat(value)).toString();
    case '2√x':
      return Math.sqrt(parseFloat(value)).toString();
    case '3√x':
      return Math.cbrt(parseFloat(value)).toString();
    case 'y√x':
      return value + '√';
    case 'ln':
      return Math.log(parseFloat(value)).toString();
    case 'log10':
      return Math.log10(parseFloat(value)).toString();
    case 'x!':
      return factorial(parseFloat(value)).toString();
    case 'sin':
      return Math.sin(parseFloat(value) * (radians ? 1 : (pi / 180))).toString();
    case 'cos':
      return Math.cos(parseFloat(value) * (radians ? 1 : (pi / 180))).toString();
    case 'tan':
      return Math.tan(parseFloat(value) * (radians ? 1 : (pi / 180))).toString();
    case 'e':
      return e.toString();
    case 'EE':
      return value + 'e';
    case 'Rad':
      radians = !radians;
      return value;
    case 'sinh':
      return Math.sinh(parseFloat(value)).toString();
    case 'cosh':
      return Math.cosh(parseFloat(value)).toString();
    case 'tanh':
      return Math.tanh(parseFloat(value)).toString();
    case 'π':
      return pi.toString();
    case 'Rand':
      return Math.random().toString();
    case '+/-':
      return (parseFloat(value) * -1).toString();
    case '%':
      return (parseFloat(value) / 100).toString();
    default:
      return value === '0' ? buttonName : value + buttonName;
  }
}

function factorial(n) {
  if (n < 0) return 'Error';
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

export default calculate;
