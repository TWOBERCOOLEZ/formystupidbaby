const falling = document.querySelector(".falling");


const symbols = [
"🩷",
"🎀",
"🍓",
"✨",
"🌸",
"🇷🇺"
];


for(let i=0;i<35;i++){

let el=document.createElement("div");

el.className="item";

el.innerHTML=
symbols[Math.floor(Math.random()*symbols.length)];


el.style.left=Math.random()*100+"%";

el.style.animationDuration=
(5+Math.random()*8)+"s";


el.style.animationDelay=
Math.random()*5+"s";


falling.appendChild(el);

}



const giftButton =
document.getElementById("giftButton");


const start =
document.querySelector(".start");


const gift =
document.querySelector(".gift");



giftButton.onclick=()=>{

start.style.opacity="0";


setTimeout(()=>{

start.style.display="none";

gift.classList.remove("hidden");


},700);


}
