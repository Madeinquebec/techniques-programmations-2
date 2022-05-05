
const array = [1, 2, 3];

const number = array.find(num => num >= 2);

console.log(number);


// Find Method Content
const newArray = [4, 5, 6];

function find2(ARRAY) {
    for(let i = 0; i < ARRAY.length; i++){
        if(ARRAY[i] >= 5){
            return console.log(ARRAY[i]);
        }
    }
};

find2(newArray);