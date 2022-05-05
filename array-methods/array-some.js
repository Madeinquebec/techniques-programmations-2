const array = [1, 2, 3];

const oneHigherThanTwo = array.some(num => num >= 2);
const allHigherThanTwo = array.every(num => num >= 2);

console.log(oneHigherThanTwo);
console.log(allHigherThanTwo);


// Some Method Content
const newArray = [4, 5, 6];

function some2(ARRAY) {
    for(let i = 0; i < ARRAY.length; i++) {
        if(ARRAY[i] >= 5){
            console.log(true);
        } else {
            console.log(false);
        }
    }
};

console.log(some2(newArray));