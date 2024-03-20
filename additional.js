// Реализовать функцию round5, которой передается целое число, функция должна
// возвращать ближайшее целое число к тому что было передано, без остатка делящееся
// на 5.

// Я заметила, что JS, как и многие другие языки, не умеет математически верно
// делить с остатком отрицательные числа.

function round5(val) {
  if (Number.isInteger(val)) {
    if (val >= 0) {
      if (val % 5 === 0) return val;
      if (val % 5 === 1) return val - 1;
      if (val % 5 === 2) return val - 2;
      if (val % 5 === 3) return val + 2;
      if (val % 5 === 4) return val + 1;
    } else {
      if (val % 5 === 0) return val;
      if (val % 5 === -1) return val + 1;
      if (val % 5 === -2) return val + 2;
      if (val % 5 === -3) return val - 2;
      if (val % 5 === -4) return val - 1;
    }
  } else {
    return "Неверное значение";
  }
}

console.log(round5(0)); // 0
console.log(round5(2)); // 0
console.log(round5(3)); // 5
console.log(round5(11)); // 10
console.log(round5(14)); // 15
console.log(round5(50)); // 50
console.log(round5(-2)); // 0
console.log(round5(-3)); // -5
