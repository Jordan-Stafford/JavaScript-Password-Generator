var lengthPrompt = window.prompt("How long do you want your password to be?")
var lowercasePrompt = window.confirm("Do you want your password to contain lowercase letters?")
var uppercasePrompt = window.confirm("Do you want your password to contain uppercase letters?")
var numbersPrompt = window.confirm("Do you want your password to contain numbers?")
var symbolsPrompt = window.confirm("Do you want your password to contain symbols?")
var resultId = document.getElementById('result');
var generateId = document.getElementById('generate');

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);
    if (typesCount === 0) {
        return '';
    }
    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        });
    }
    const finalPassword = generatedPassword.slice(0, length);
    return finalPassword;
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
    return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
    const symbols = '/?.>,<";:]}[{=+-_)(*&^%$#@!`~'
    return symbols[Math.floor(Math.random() * symbols.length)];
}

generateId.addEventListener('click', () => {
    const length = lengthPrompt;
    const Lower = lowercasePrompt;
    const Upper = uppercasePrompt;
    const Number = numbersPrompt;
    const Symbol = symbolsPrompt;
    resultId.innerText = generatePassword(Lower, Upper, Number, Symbol, length)
});