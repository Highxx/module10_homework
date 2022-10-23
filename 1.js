let x = prompt('Введите выражение')
x = +x
console.log (x)
console.log(typeof x === 'number')
if (typeof x !== 'number') {
  console.log('Упс, кажется, вы ошиблись')
}
else if (isNaN(x)){
  console.log('Это не число')
}
else if (x % 2 !== 0) {
  console.log('Число нечетное')
}
else if (x % 2 === 0 ) {
  console.log('Число четное')
}