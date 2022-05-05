const array = [1, 2, 3];
const numbers = array.filter(num => num >= 2);
console.log(numbers);


// Filter Method Content
const arrayFilter = [1, 2, 3, 4, 5, 6, 7];

function filter2(ARRAY) {
    for(let i = 0; i < ARRAY.length; i++) {
        if(ARRAY[i] >= 3) {
            console.log(ARRAY[i]);
        }
    }
}

filter2(arrayFilter);