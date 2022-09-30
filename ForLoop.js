function generateRandomNumber(digits){
    let multipiler = Math.pow(10,digits);
    return Math.floor(Math.random() * multipiler);
}

let randNum = generateRandomNumber(1);
console.log('Random User Input : %d\n',randNum);

for(let i=0; i<=randNum; i++){
    console.log("2 to the power of %d = %d",i,Math.pow(2,i));
};

let nHarmonic = 0;
for(let i=1; i<=randNum; i++){
    nHarmonic += 1/i;
};
console.log('\n%d-th Harmonic Number :',randNum,nHarmonic);

for(let i=2; i<=Math.floor(randNum/2);i++){
    if(randNum % i == 0){
        console.log('\n%d is Not a prime number',randNum);
        break;
    }
    
    if(i==Math.floor(randNum/2))
        console.log('\n%d is a Prime number',randNum);
};

let factorial = 1;
for(let i=1;i<=randNum;i++){
    factorial = factorial * i;
};
console.log('\nFactorial of %d is : %d',randNum,factorial);
