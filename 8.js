let cars = new Map ([
    ['Nissan', 'Red'],
    ['Porsche', 'Blue'],
    ['Lada', 'Orange'],
    ['VW', 'Black']
]);
for (let x of cars.keys()){
    console.log(`Ключ — ${x}, значение — ${cars.get(x)}`)
}