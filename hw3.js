const numbers = [3,7,2,9,12,6,15,8,4];

const even_list = numbers.filter(num => num%2 == 0);
const square_list = even_list.map((num) => num**2);
const sum = square_list.reduce((prev, cur) => prev+cur, 0);

console.log(even_list);
console.log(square_list);
console.log(sum);