function oddNumbers(array) {
    let odd = [];
    let even = [];
    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        if(typeof item !== 'number'){
            continue
        }
        else if(item % 2 ===0) {
            odd.push(item)
        }
        else if(item % 2 !== 0){
            even.push(item)
        }
    }
console.log('Количество четных элементов в массиве: ' + odd.length)
console.log('Количество нечетных элементов в массиве: ' + even.length)
}
   
let numbers = [null, "54", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
oddNumbers(numbers);
console.log('Нулевой элемент: ' + numbers[0])