function generateRandomNumber(digits){
    let multipiler = Math.pow(10,digits)
    return Math.floor(Math.random() * multipiler);
}

function reductionForMax(max,item){
    if (item > max)
        max = item;
    
    return max;
}

function reductionForMin(min,item){
    if (item < min)
        min = item;
    
    return min;
}

let numbers = [];
for(let i=0; i<5; i++){
    numbers.push(generateRandomNumber(3))
}

console.log("\n5 Random 2 digits numbers are :",numbers.toString());
console.log("\nMaximum Number is :",numbers.reduce(reductionForMax));
console.log("Minimum Number is :",numbers.reduce(reductionForMin));

//not reading inputs from console as javascript needs browser's environment from prompt()

function checkLeap(year){
    if(year/1000 >=1 && year%4 ==0)
        return true;
    return false;
}

console.log("\nIs %d a leap year :",y=generateRandomNumber(4),checkLeap(y));

let coinFlip = (generateRandomNumber(1) < 5) ? 'Heads' : 'Tails';
console.log('\nFlipping a coin :',coinFlip);