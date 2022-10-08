function generateRandomNumber(digits){
    let multipiler = Math.pow(10,digits);
    return Math.floor(Math.random() * multipiler);
}

//----------------UC1 : Roll a dice till a number appears for 10 times-------------------

let DiceRollMap = new Map();

let limit = 0;
let dieResult = 0;

while (limit < 10){
    dieResult = (generateRandomNumber(1) % 6) + 1;
    if (DiceRollMap.has(dieResult))
        DiceRollMap.set(dieResult, DiceRollMap.get(dieResult) + 1);
    else
        DiceRollMap.set(dieResult,1);

    limit = (DiceRollMap.get(dieResult) > limit) ? DiceRollMap.get(dieResult) : limit;
}

for (let [key, value] of DiceRollMap)
    console.log("Dice Number : %d has repeated '%d' times",key,value);


//---------------UC2 : Find the number the turned up maximum times-----------

let maxKey = 0;
let maxValue = 0;
let minKey = 0;
let minValue = 11;

for (let [key, value] of DiceRollMap)
{
    if (value > maxValue)
    {
        maxValue = value;
        maxKey = key;
    }
    if (value < minValue)
    {
        minValue = value;
        minKey = key;
    }
}

console.log('\nDice Number - %d has repeated for a maximum of %d times \nDice Number - %d has repeated for %d times\n',maxKey,maxValue,minKey,minValue);

//---------------UC3 : Same birth months of users-----------

let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
let userMonthMap = new Map();

for (let i=0; i<50; i++)
{
    userMonthMap.set('User'+i,months[(generateRandomNumber(1)%12)]);
}

console.log('User wise birth month :');
for (let [key, value] of userMonthMap)
    console.log("%s : %s",key,value);

let monthUserMap = new Map();

console.log('\nMonth wise users :');
for (let [key, value] of userMonthMap)
{
    if(monthUserMap.has(value))
        monthUserMap.set(value,monthUserMap.get(value)+', '+key);
    else
        monthUserMap.set(value,key);
}

for (let [key, value] of monthUserMap)
    console.log("%s : %s",key,value);