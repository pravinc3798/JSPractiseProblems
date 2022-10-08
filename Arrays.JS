function generateRandomNumber(digits){
    let multipiler = Math.pow(10,digits);
    return Math.floor(Math.random() * multipiler);
}

//-------------- UC1 : Find Second Largest Number Without Sorting-----------------------------

let numbers =[];
for(let i=0; i<10; i++)
    numbers.push(generateRandomNumber(3));

console.log('Random Numbers : %s',numbers.toString());

let largestNumber = numbers.reduce((max,item) => max = (item > max) ? item : max);
numbers.splice(numbers.indexOf(largestNumber),1);
let secondLargestNumber = numbers.reduce((max,item) => max = (item > max) ? item : max);
console.log('Second Largest Number : %d',secondLargestNumber);

numbers.push(largestNumber);

//-------------- UC2 : Find Second Largest Number With Sorting-----------------------------

numbers.sort();
console.log('\nSorted Numbers : %s',numbers.toString());
console.log('Second Largest Number : %d',numbers[(numbers.length - 2)]);

//-------------- UC3 : Find two consecutive repeating digits in an array---------------------

let repeatedDigitNumbers = '';
numbers.forEach(number => {
    if(number.toString()[0] == number.toString()[1] || number.toString()[1] == number.toString()[2])
        repeatedDigitNumbers += (number + " ");
});

console.log('\nNumbers with repeated digits : %s',repeatedDigitNumbers);

//-------------- UC3 : Find two consecutive repeating digits in an array---------------------