"use strict";
let drinksPrice = {
  еспресо: 40,
  латте: 60,
  капучино: 50,
  "гарячий шоколад": 30,
};
function coffee(...drinks) {
  let str = "Фіскальний чек\n";
  let sum = 0;
  for (let i = 0; i < drinks.length; i++) {
    if (drinksPrice[drinks[i]] != undefined) {
      str += drinks[i];
      str += `: ${drinksPrice[drinks[i]]} грн\n`;
      sum += drinksPrice[drinks[i]];
    }
  }
  str += `Загальна вартість: ${sum} грн`;
  alert(str);
}
let orderDrinks = [];
let order = "";
while (true) {
  if (order == "!") break;
  else {
    do {
      order = prompt(
        "Введіть назву напою, або ! для завершення замовлення (максимальна к-сть напоїв в замовленні - 4)"
      );
      if (order == "!") break;
    } while (drinksPrice[order] == undefined);
    orderDrinks.push(order);
  }
}
coffee(orderDrinks[0], orderDrinks[1], orderDrinks[2], orderDrinks[3]);
