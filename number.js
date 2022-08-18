//for decimal points roundOff Game
const decimalAnswer=  document.querySelector('.roundoffNumber');
const decimalSubmit=  document.querySelector('.decimalSubmit');
const decimalNumber=  document.querySelector('.decimalNumber');
const decimalPlace =  document.querySelector('.decimalPlaces');
function roundOffNumber(){
    const userNumber = Number(decimalNumber.value);
    const userPlace = Number(decimalPlace.value);
    const result= userNumber.toFixed(userPlace);
    decimalAnswer.textContent=result;
}
decimalSubmit.addEventListener('click',roundOffNumber);


//for string + number Game
const stringAnswer=  document.querySelector('.additionToString');
const numberAnswer=  document.querySelector('.additionToNumber');
const stringSubmit=  document.querySelector('.stringSubmit');
const numberToAdd=  document.querySelector('.numberToAdd');
const stringNumber =  document.querySelector('.stringNumber');

function stringNumberAddition(){
    const userString = Number(stringNumber.value);
    const userInput = stringNumber.value;
    const userNumber = Number(numberToAdd.value);
    const result= userNumber+ userString;
    stringAnswer.textContent=userInput+userNumber;
    numberAnswer.textContent=result;
}
stringSubmit.addEventListener('click',stringNumberAddition);