// =====================================
// Gender Reveal Ver2
// =====================================

const balloon = document.getElementById("balloon");
const reveal = document.getElementById("reveal");
const container = document.querySelector(".container");
const sparkleArea = document.querySelector(".sparkles");

// -------------------------
// キラキラ背景
// -------------------------

for(let i=0;i<30;i++){

    const star=document.createElement("span");

    star.style.position="absolute";
    star.style.width="5px";
    star.style.height="5px";
    star.style.borderRadius="50%";
    star.style.background="rgba(255,255,255,.9)";

    star.style.left=Math.random()*100+"%";
    star.style.top=Math.random()*100+"%";

    star.style.animation=
    `twinkle ${2+Math.random()*3}s infinite`;

    sparkleArea.appendChild(star);

}

// -------------------------
// ハートを飛ばす
// -------------------------

function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="💗";

    heart.style.position="fixed";
    heart.style.left=Math.random()*100+"vw";
    heart.style.top="100vh";
    heart.style.fontSize=(18+Math.random()*18)+"px";
    heart.style.pointerEvents="none";
    heart.style.zIndex="999";

    document.body.appendChild(heart);

    heart.animate([

        {
            transform:"translateY(0) rotate(0deg)",
            opacity:1
        },

        {
            transform:`translateY(-${600+Math.random()*200}px)
                      translateX(${Math.random()*120-60}px)
                      rotate(${Math.random()*180}deg)`,
            opacity:0
        }

    ],{

        duration:3500,
        easing:"ease-out"

    });

    setTimeout(()=>heart.remove(),3400);

}

// -------------------------
// 紙吹雪
// -------------------------

function fireConfetti(){

    confetti({

        particleCount:180,

        spread:120,

        origin:{y:.6},

        colors:[
            "#FFD6E8",
            "#FFFFFF",
            "#FFE58A",
            "#F7A9C4"
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

// -------------------------
// Reveal
// -------------------------

function revealGirl(){

    balloon.style.pointerEvents="none";

    balloon.animate([

        {transform:"scale(1)"},

        {transform:"scale(.88)"},

        {transform:"scale(1.05)"},

        {transform:"scale(0)"}

    ],{

        duration:500,

        easing:"ease-in"

    });

    setTimeout(()=>{

        fireConfetti();

        for(let i=0;i<20;i++){

            setTimeout(createHeart,i*120);

        }

    },450);

    setTimeout(()=>{

        container.style.display="none";

        reveal.classList.remove("hidden");

        reveal.animate([

            {
                opacity:0,
                transform:"translateY(40px) scale(.9)"
            },

            {
                opacity:1,
                transform:"translateY(0) scale(1)"
            }

        ],{

            duration:900,
            fill:"forwards"

        });

    },700);

}

// -------------------------

balloon.addEventListener("click",revealGirl);

balloon.addEventListener("touchstart",function(){

    balloon.style.transform="scale(.97)";

});

balloon.addEventListener("touchend",function(){

    balloon.style.transform="";

});
