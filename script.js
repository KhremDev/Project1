const textArray = [
    " Greatness",
    " Essence",
    " Glory",
    " Majesty",
    " Valour"
];

const midnightTxt = document.getElementById("midnightTxt");

let textIndex = 0;

function changeTxt () {

    midnightTxt.style.animation = "slideUp 0.5s ease-in-out";

    setTimeout(() => {
      midnightTxt.textContent = textArray[textIndex];

    //  midnightTxt.offsetWidth;

      midnightTxt.style.animation = "";

      textIndex = (textIndex + 1) % textArray.length;

    }, 500);
}

setInterval(changeTxt, 6000);




const greatArray = [
  " Essence",
  " Glory",
  " Majesty",
  " Valour"
];

const Greatness = document.getElementById("greatness");

let greatIndex = 0;

function changeGreatTxt () {

  greatness.style.animation = "slideUp 0.5s ease-in-out";

  setTimeout(() => {
    greatness.textContent = greatArray[greatIndex];

  //  midnightTxt.offsetWidth;

    greatness.style.animation = "";

    greatIndex = (greatIndex + 1) % greatArray.length;

  }, 500);
}

setInterval(changeGreatTxt, 6000);



const joinBtn = document.getElementById('join');

if (joinBtn) {
    
    joinBtn.addEventListener('click', () => {
        
        const section = document.getElementById('pumpkin-container');
        
        if (section) section.scrollIntoView({ behavior: 'smooth' });
        
    });
    
}


/*function popMsg(txt="Ordered") {
    let m = document.createElement("div");
    m.textContent = txt;
    m.style.position = "fixed";
    m.style.bottom = "20px";
    m.style.right = "20px";
    m.style.background = "chocolate";
    m.style.color = "white";
    m.style.padding = "12px 18px";
    m.style.borderRadius = "7px";
    m.style.fontFamily = "'Times New Roman', Times, serif";
    m.style.fontSize = "16px";
    m.style.opacity = "0";
    m.style.transition = "all 0.4s";
    document.body.appendChild(m);
    setTimeout(()=>{m.style.opacity="1"; m.style.transform="translateY(-10px)";},50);
    setTimeout(()=>{m.style.opacity="0"; m.style.transform="translateY(0)"; setTimeout(()=>document.body.removeChild(m),400)},2500);
} removed beacuse had to change from inline to seperate js and css
*/
document.querySelectorAll(".hii").forEach(button => {
    
  button.addEventListener("click", () => {
      
    const item = button.dataset.item;

      
    alert("Ordered");
      
  });
    
});


document.querySelectorAll('.hi').forEach(button => {
    
    button.addEventListener('click', () => {
        
        const itemName = button.getAttribute('data-item');
        
        alert(`${itemName} added to your order`);
        
    });
}); //for the order buttons at the home page. needed different styling hence same function repeated twice



