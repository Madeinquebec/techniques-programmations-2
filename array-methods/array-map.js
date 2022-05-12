const array = [1, 2, 3];

const newArray = array.map(num => num * num);

console.log(newArray);


// Map Method Content
const arrayMap = [2, 3, 4];

function map2 (ARRAY) {
    for(let i = 0; i < ARRAY.length; i++) {
        let product = ARRAY[i] * ARRAY[i];
        console.log(product);
    }
};

console.log(map2(arrayMap));


