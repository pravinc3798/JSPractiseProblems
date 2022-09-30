function generateRandomNumber(digits){
    let multipiler = Math.pow(10,digits);
    return Math.floor(Math.random() * multipiler);
}

let randNum = generateRandomNumber(1);
console.log('Random User Input : %d\n',randNum);

let power = 0;
while(power <= randNum && power <= 8){
    console.log("2 to the power of %d = %d",power,Math.pow(2,power));
    power++;
};

let flips = heads = tails = 0;

while(heads < 11 && tails < 11)
{
    (generateRandomNumber(1) % 2 == 1) ? heads++ : tails++;
    flips++;
}
console.log('\nResult for %d Coin Flips :\nHeads : %d , Tails : %d',flips,heads,tails);

let bets=0;
let start=100;
let target=200;

while(start > 0 && start < target)
{
    (generateRandomNumber(1) % 2 == 1) ? start++ : start--;
    bets++;
}

console.log('\nAfter %d bets : Gambler has %d',bets,start);
