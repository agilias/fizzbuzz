function fizzBuzz(n) {
    if(n % 15 === 0) return 'FizzBuzz';
    if(n % 3 === 0) return 'Fizz';
    if(n % 5 === 0) return 'Buzz';
    return n;
}

function fizzBuzz2(n) {
    let result = '';
    (n % 3) || (result += 'Fizz');
    (n % 5) || (result += 'Buzz');
    return result || n;
}

function fizzBuzz3(n) {
    if(n % 3 === 0) {
        if(n % 5 === 0) {
            console.log('FizzBuzz');
        }
        else {
            console.log('Fizz');
        }
    }
    else if(n % 5 === 0) {
        if(n % 3 === 0) {
            console.log('FizzBuzz');
        }
        else {
            console.log('Buzz');
        }
    }
    else if(n % 3 !== 0 && n % 5 !== 0) {
        console.log(n);
    }
}

function fizzBuzz4(n) {
    if(Number.isInteger(n / 3)) {
        if(Number.isInteger(n / 5)) {
            console.log('FizzBuzz');
        }
        else {
            console.log('Fizz');
        }
    }
    else if(Number.isInteger(n / 5)) {
        if(Number.isInteger(n / 3)) {
            console.log('FizzBuzz');
        }
        else {
            console.log('Buzz');
        }
    }
    else if(!Number.isInteger(n / 3) && !Number.isInteger(n / 5)) {
        console.log(n);
    }
}

function fizzBuzz5(n) {
    for(var i = n; i > 0; i -= 3) {};
    for(var j = n; j > 0; j -= 5) {};
    return (i && j) ? n : (!i && j) ? 'Fizz' : (i && !j) ? 'Buzz' : 'FizzBuzz'
}

function fizzBuzz6(n) {
    let str = n.toString();
    let sumOfDigits = [...str].map(Number).reduce((a, b) => a + b);
    let lastDigit = +str[str.length - 1];
    let divisibleByThree = (function() { for(var i = sumOfDigits; i > 0; i -= 3) {}; return !i; })();
    let divisibleByFive = [0, 5].includes(lastDigit);
    let divisibleByFifteen = divisibleByThree && divisibleByFive;

    switch(true) {
        case divisibleByFifteen: return 'FizzBuzz';
        case divisibleByThree: return 'Fizz';
        case divisibleByFive: return 'Buzz';
        default: return n;
    }
}

for(let i = 0; i <= 100; i++) {
    console.log(fizzBuzz5(i))
}