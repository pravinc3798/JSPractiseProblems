function generateRandomNumber(digits){
    let multipiler = Math.pow(10,digits)
    return Math.floor(Math.random() * multipiler);
}

function reductionForMax(max,item){
    if (item > max)
        max = item;
    
    return max;
}

function reductionForAvg(sum,item){
    return sum += item;
}

console.log("Single Digit Random Number :", generateRandomNumber(1));
console.log("\nRandom Dice Number :", generateRandomNumber(1)%7);
console.log("\nAddition of two Dice Number : %d + %d = %d", a = generateRandomNumber(1)%7, b = generateRandomNumber(1)%7, a+b);

let numbers = [];
for(let i=0; i<5; i++){
    numbers.push(generateRandomNumber(2))
}

console.log("\n5 Random 2 digits numbers are :",numbers.toString());
console.log("\nMaximum Number is :",numbers.reduce(reductionForMax));
console.log("Average is :",numbers.reduce(reductionForAvg)/numbers.length);
