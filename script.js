// =======================================
// Gender Reveal Ver3
// =======================================

const balloon = document.getElementById("balloon");
const reveal = document.getElementById("reveal");
const main = document.getElementById("main");
const sparkleArea = document.querySelector(".sparkles");

// ============================
// Sparkles
// ============================

for(let i=0;i<40;i++){

    const star=document.createElement("span");

    star.style.left=Math.random()*100+"%";
    star.style.top=Math.random()*100+"%";

    star.style.animationDelay=(Math.random()*3)+"s";

    sparkleArea.appendChild(star);

}

// ============================
// Heart Animation
// ============================

function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="💗";

    heart.style.position="fixed";

    const rect=balloon.getBoundingClientRect();

    heart.style.left=(rect.left+rect.width/2)+"px";

    heart.style.top=(rect.top+rect.height/2)+"px";

    heart.style.fontSize=(18+Math.random()*18)+"px";

    heart.style.pointerEvents="none";

    heart.style.zIndex="9999";

    document.body.appendChild(heart);

    const x=(Math.random()*180)-90;

    const y=-600-(Math.random()*150);

    heart.animate([

        {

            transform:"translate(0,0) scale(1)",

            opacity:1

        },

        {

            transform:`translate(${x}px,${y}px) rotate(${Math.random()*360}deg) scale(1.4)`,

            opacity:0

        }

    ],{

        duration:3500,

        easing:"ease-out"

    });

    setTimeout(()=>{

        heart.remove();

    },3500);

}

// ============================
// Flash
// ============================

function flash(){

    const f=document.createElement("div");

    f.style.position="fixed";

    f.style.inset="0";

    f.style.background="white";

    f.style.opacity=".95";

    f.style.zIndex="998";

    document.body.appendChild(f);

    f.animate([

        {opacity:.95},

        {opacity:0}

    ],{

        duration:250

    });

    setTimeout(()=>{

        f.remove();

    },250);

}

// ============================
// Confetti
// ============================

function fireConfetti(){

    confetti({

        particleCount:180,

        spread:120,

        origin:{y:.6},

        colors:[
            "#FFD8EA",
            "#F6C7FF",
            "#FFF4B0",
            "#FFFFFF"
        ]

    });

    setTimeout(()=>{

        confetti({

            particleCount:120,

            angle:60,

            spread:70,

            origin:{x:0}

        });

        confetti({

            particleCount:120,

            angle:120,

            spread:70,

            origin:{x:1}

        });

    },200);

}

// ============================
// Reveal
// ============================

function revealGirl(){

    balloon.style.pointerEvents="none";

    balloon.classList.add("pop");

    flash();

    setTimeout(()=>{

        fireConfetti();

    },150);

    for(let i=0;i<40;i++){

        setTimeout(createHeart,i*80);

    }

    setTimeout(()=>{

        main.style.display="none";

        reveal.classList.remove("hidden");

    },700);

}

// ============================

balloon.addEventListener("click",revealGirl);

balloon.addEventListener("touchstart",()=>{

    balloon.style.transform="scale(.96)";

});

balloon.addEventListener("touchend",()=>{

    balloon.style.transform="";

});
