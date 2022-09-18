const h1= document.querySelector(".h1");

const random1=[0,0];
let i=0;
function random(){
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    random1[i]=randomNumber;
    i++;
    return randomNumber;
}
function randomDiceGenerator(){
    const url =`images/dice${random().toString()}.png`
    return url
}

//img2.setAttribute("src",);
const img1= document.querySelector(".img1").setAttribute("src",randomDiceGenerator());
const img2= document.querySelector(".img2").setAttribute("src",randomDiceGenerator());
if(random1[0]>random1[1]){
    h1.textContent="Player 1st Wins";
}
else if(random1[0]==random1[1]){
    h1.textContent="Tie!"
}
else{
    h1.textContent="Player 2nd Wins";
}