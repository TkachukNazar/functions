function animals(animal, n) {
  for (let i = 1; i <= n; i++) {
    document.write(
      `<img src="./images/${animal}${i}.png" width = 280 height = 580 />`
    );
  }
}
let animal;
let n;
while (true) {
  animal = prompt("Enter animal (dog/cat): ");
  n = +prompt("Enter n(1 - 7): ");
  if ((animal == "dog" || animal == "cat") && !isNaN(n) && n >= 1 && n <= 7) {
    break;
  }
}
animals(animal, n);
