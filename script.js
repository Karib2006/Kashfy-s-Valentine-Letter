// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");
const mail = document.querySelector("#mail-container");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalButton = document.getElementById("final-button");
const flowerBtn = document.getElementById('flower-btn');
const flowerBox = document.getElementById('flower-box');
const flowerBtnY = document.getElementById('flower-btn2');

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

// Logic to move the NO btn

noBtn.addEventListener("mouseover", () => {
    const min = 70;
    const max = 70;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Logic to make YES btn to grow

// let yesScale = 1;

// yesBtn.style.position = "relative"
// yesBtn.style.transformOrigin = "center center";
// yesBtn.style.transition = "transform 0.3s ease";

// noBtn.addEventListener("click", () => {
//     yesScale += 2;

//     if (yesBtn.style.position !== "fixed") {
//         yesBtn.style.position = "fixed";
//         yesBtn.style.top = "50%";
//         yesBtn.style.left = "50%";
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }else{
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }
// });

// YES is clicked

yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee!";

    catImg.src = "cat_dance.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalButton.style.display = "block";
});

finalButton.addEventListener("click", ()=>{
    letter.style.display = "none";
    mail.style.display = 'flex';
    setTimeout( () => {
        document.querySelector("#mail-container").classList.add("open");
    },50);
})

flowerBtn.addEventListener('click', ()=>{
    flowerImg = document.createElement('img')
    flowerImg.src ='flower.png'
    flowerImg.id = 'flower-img'
    flowerBox.appendChild(flowerImg) 
})

flowerBtnY.addEventListener('click', ()=>{
    flowerImg = document.createElement('img')
    flowerImg.src ='flower2.png'
    flowerImg.id = 'flower-img'
    flowerBox.appendChild(flowerImg) 
})