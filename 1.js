"use strict";

/*
Создайте функцию которая принимает число, возводит переданное число в куб и 
возвращает полученное значение. 
Необходимо продемонстрировать вызов данной функции, с выводом результата, 
который получаем от функции, в консоль.
*/

function calcThirdPower(number) {
  const exponentiation = number ** 3;
  const result = Math.round(exponentiation * 1000) / 1000;
  return result;
}

console.log(calcThirdPower(0.5)); // 0.125
console.log(calcThirdPower(12)); // 1728
console.log(calcThirdPower(-0.2)); // -0.008
console.log(calcThirdPower(-0.3)); // -0.027
