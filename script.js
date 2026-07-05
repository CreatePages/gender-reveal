// ===============================
// Gender Reveal
// ===============================

const balloon = document.getElementById("balloon");
const reveal = document.getElementById("reveal");
const container = document.querySelector(".container");

// -------------------------------
// 背景キラキラ
// -------------------------------

const sparkleArea = document.querySelector(".sparkles");

for (let i = 0; i < 25; i++) {

    const star = document.createElement("span");

    star.style.position = "absolute";
    star.style.width = "6px";
    star.style.height = "6px";
    star.style.borderRadius = "50%";
    star.style.background = "rgba(255,255,255,.9)";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.animation = `twinkle ${2 + Math.random() * 3}s infinite`;

    sparkleArea.appendChild(star);

}

// twinkleアニメーションを追加
const style = document.createElement("style");

style.textContent = `
@keyframes twinkle{

0%,100%{

opacity:.2;
transform:scale(.6);

}

50%{

opacity:1;
transform:scale(1.3);

}

}
`;

document.head.appendChild(style);

// -------------------------------
// 紙吹雪
// -------------------------------

function fireConfetti(){

    confetti({

        particleCount:180,

        spread:120,

        origin:{y:0.55},

        colors:[
            "#FFD4E5",
            "#FF8DB8",
            "#FFFFFF",
            "#FFE38A"
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

    },300);

}

// -------------------------------
// Balloon
// -------------------------------

function revealGirl(){

    balloon.animate([

        {transform:"scale(1)"},

        {transform:"scale(.92)"},

        {transform:"scale(1.08)"},

        {transform:"scale(0)"}

    ],{

        duration:450,

        easing:"ease-in"

    });

    setTimeout(()=>{

        balloon.style.display="none";

        document.querySelector(".tap").style.display="none";

        fireConfetti();

        container.style.display="none";

        reveal.classList.remove("hidden");

        reveal.animate([

            {
                opacity:0,
                transform:"translateY(40px)"
            },

            {
                opacity:1,
                transform:"translateY(0)"
            }

        ],{

            duration:900,
            fill:"forwards"

        });

    },420);

}

balloon.addEventListener("click", revealGirl);

balloon.addEventListener("keypress",(e)=>{

    if(e.key==="Enter"){

        revealGirl();

    }

});
