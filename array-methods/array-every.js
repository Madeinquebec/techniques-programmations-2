const array = [1, 2, 3];

const oneHigherThanTwo = array.some(num => num >= 2);
const allHigherThanTwo = array.every(num => num >= 2);

console.log(oneHigherThanTwo);
console.log(allHigherThanTwo);


// Every Method Content
const newArray = [4, 5, 6];

function every2(ARRAY) {
    for(let i = 0; i < ARRAY.length; i++) {
        if(ARRAY[i] >= 5){
            return true;
        } else {
            return false;
        }
    }
};

console.log(every2(newArray));