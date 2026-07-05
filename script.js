// =====================================
// Gender Reveal - Complete Version
// =====================================

const balloon = document.getElementById("balloon");
const reveal = document.getElementById("reveal");
const container = document.querySelector(".container");
const sparkleArea = document.querySelector(".sparkles");

// ----------------------------
// Background Sparkles
// ----------------------------

for(let i=0;i<35;i++){

    const star=document.createElement("span");

    star.style.left=Math.random()*100+"%";
    star.style.top=Math.random()*100+"%";

    star.style.animationDelay=Math.random()*3+"s";

    sparkleArea.appendChild(star);

}

// ----------------------------
// Floating Hearts
// ----------------------------

function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="💗";

    heart.style.position="fixed";

    heart.style.left=Math.random()*100+"vw";

    heart.style.top="105vh";

    heart.style.fontSize=(18+Math.random()*22)+"px";

    heart.style.pointerEvents="none";

    heart.style.zIndex="9999";

    document.body.appendChild(heart);

    heart.animate([

        {

            transform:"translateY(0) rotate(0deg)",

            opacity:1

        },

        {

            transform:`
                translateY(-700px)
                translateX(${Math.random()*120-60}px)
                rotate(${Math.random()*180-90}deg)
            `,

            opacity:0

        }

    ],{

        duration:3800,

        easing:"ease-out"

    });

    setTimeout(()=>{

        heart.remove();

    },3800);

}

// ----------------------------
// Confetti
// ----------------------------

function fireConfetti(){

    confetti({

        particleCount:220,

        spread:140,

        origin:{y:.65},

        colors:[
            "#FFD6E8",
            "#FFE58A",
            "#FFFFFF",
            "#F8AFC8",
            "#F6D6FF"
        ]

    });

    setTimeout(()=>{

        confetti({

            particleCount:120,

            angle:60,

            spread:80,

            origin:{x:0}

        });

        confetti({

            particleCount:120,

            angle:120,

            spread:80,

            origin:{x:1}

        });

    },250);

}

// ----------------------------
// Reveal
// ----------------------------

function revealGirl(){

    balloon.style.pointerEvents="none";

    balloon.classList.add("pop");

    setTimeout(()=>{

        fireConfetti();

        for(let i=0;i<35;i++){

            setTimeout(createHeart,i*90);

        }

    },350);

    setTimeout(()=>{

        container.style.display="none";

        reveal.classList.remove("hidden");

    },700);

}

// ----------------------------

balloon.addEventListener("click",revealGirl);

balloon.addEventListener("touchstart",()=>{

    balloon.style.transform="scale(.97)";

});

balloon.addEventListener("touchend",()=>{

    balloon.style.transform="";

});
