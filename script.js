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


createBurst();


},700);


}


const nextButton =

document.getElementById("nextButton");

const musicSection =

document.querySelector(".music-section");

nextButton.onclick=()=>{

gift.classList.add("hidden");

musicSection.classList.remove("hidden");

}

const musicButton =

document.getElementById("musicButton");

const song =

document.getElementById("song");

musicButton.onclick=()=>{

song.play();

musicButton.innerHTML =

"❚❚ Музыка играет";

}


function createBurst(){


const present =
document.querySelector(".present");


const things = [
"🍓",
"❤️"
];


for(let i=0;i<18;i++){


let item =
document.createElement("div");


item.className="burst";


item.innerHTML =
things[Math.floor(Math.random()*things.length)];



item.style.left="75px";

item.style.top="40px";



item.style.setProperty(
"--x",
(Math.random()*300-150)+"px"
);



item.style.setProperty(
"--y",
(Math.random()*-250-50)+"px"
);



present.appendChild(item);



setTimeout(()=>{

item.remove();

},2000);



}



}
