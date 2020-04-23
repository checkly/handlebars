export default function (a, operator, b, options) {
  if (arguments.length < 4) {
    throw new Error('handlebars Helper {{compare}} expects 4 arguments');
  }

  let result;
  switch (operator) {
    case '==':
      result = a == b;
      break;
    case '===':
      result = a === b;
      break;
    case '!=':
      result = a != b;
      break;
    case '!==':
      result = a !== b;
      break;
    case '<':
      result = a < b;
      break;
    case '>':
      result = a > b;
      break;
    case '<=':
      result = a <= b;
      break;
    case '>=':
      result = a >= b;
      break;
    case 'typeof':
      result = typeof a === b;
      break;
    default: {
      throw new Error('helper {{compare}}: invalid operator: `' + operator + '`');
    }
  }

  return util.value(result, this, options);
};
