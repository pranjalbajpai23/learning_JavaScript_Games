//For Concatination
const string1      = document.querySelector(".string1");
const string2      = document.querySelector(".string2");
const stringSubmitConcat = document.querySelector(".stringSubmitConcat");
const answerStringConcatination = document.querySelector(".answerStringConcatination");

function concatinateString(){
    const userString1=string1.value;
    const userString2=string2.value;
    answerStringConcatination.textContent=userString1+" "+userString2;

}
stringSubmitConcat.addEventListener('click',concatinateString);

//For Length
const stringLength      = document.querySelector(".stringLength");
const stringSubmitLength = document.querySelector(".stringSubmitLength");
const answerStringLength = document.querySelector(".answerStringLength");

function lengthString(){
    const userString=stringLength.value;
    answerStringLength.textContent=userString.length;
}
stringSubmitLength.addEventListener('click',lengthString);

//For substring
const largerString      = document.querySelector(".largerString");
const subString      = document.querySelector(".subString");
const stringSubmitSubstring = document.querySelector(".stringSubmitSubstring");
const answerStringSubstring = document.querySelector(".answerStringSubstring");
const reccurance = document.querySelector(".reccurance");

function stringSubstring(){
    
    const userString1=largerString.value;
    const userString2=subString.value;
    if(userString1.includes(userString2)){
        let firstOccurance=userString1.indexOf(userString2);
        let count=0
        answerStringSubstring.textContent= "Substring found at index: "+userString1.indexOf(userString2);
        while(firstOccurance!=-1) {
            count++;
            firstOccurance=userString1.indexOf(userString2,firstOccurance+1);
        }
        reccurance.textContent=count;
    }
    else{
        answerStringSubstring.textContent="Substring not found";
        reccurance.textContent=0;
    }

}
stringSubmitSubstring.addEventListener('click',stringSubstring);
//For replace part
const largerStringR     = document.querySelector(".largerStringR");
const subStringR      = document.querySelector(".subStringR");
const stringSubmitReplace = document.querySelector(".stringSubmitReplace");
const answerStringReplace = document.querySelector(".answerStringReplace");
const replace=document.querySelector('.replace');


function stringReplace(){
    
    const userString1=largerStringR.value;
    const userString2=subStringR.value;
    const userReplace=replace.value;
    answerStringReplace.textContent=userString1.replace(userString2,userReplace);


}
stringSubmitReplace.addEventListener('click',stringReplace);