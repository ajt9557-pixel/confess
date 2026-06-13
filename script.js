const message = "hello yelaa, i just wanted to say that i really like you and i hope you have a wonderful day! i will never gonna leave you again im sorry na nawala ako bigla and stopped chattin you i will pray for you that u will get better and feel better and take some time to heal from that painful thing u went through and i hope you will be happy and smile more often because you deserve it. i care about you a lot and i just want you to know that im here for you whenever you need someone to talk to or if u just wanna hang out and have fun together. i hope we can spend more time together and create more happy memories. take care always and remember that you are loved and appreciated by me and many others. <3";

function showYes() {
  document.getElementById("btnRow").style.display = "none";
  document.getElementById("question").style.display = "none";
  document.getElementById("hello").style.display = "none";
  document.querySelector(".conf-sub").style.display = "none";
  document.getElementById("response").style.display = "block";
  document.getElementById("cinnamon").style.display = "none";
  document.getElementById("peng").style.display = "none";
  document.querySelector(".hellokityy").style.display = "none";
  document.getElementById("happy").style.display = "block";
  document.getElementById("cute").style.display = "block";
  document.getElementById("cute2").style.display = "block";
  document.getElementById("cute3").style.display = "block";
  typeMessage(); 
  showpetals();
  showheart();

}

function showNo() {
    const noBtn = document.querySelector(".no");
    const maxX = window.innerWidth - 100;
    const maxY = window.innerHeight - 50;
    const randomx = Math.random() * maxX;
    const randomy = Math.random() * maxY;
    noBtn.style.position = "fixed";
    noBtn.style.left = randomx + "px";
    noBtn.style.top = randomy + "px";
  

}

function typeMessage() {
  const el = document.getElementById('typed');
  if (!el) return;
  let i = 0;
  el.innerHTML = '<span class="cursor"></span>';
  const interval = setInterval(() => {
    if (i < message.length) {
      el.innerHTML = '\u201c' + message.slice(0, i + 1) +
        (i < message.length - 1 ? '<span class="cursor"></span>' : '\u201d');
      i++;
    } else {
      clearInterval(interval);
      const sub = document.getElementById('revealSub');
      if (sub) sub.style.opacity = '1';
    }
  }, 80);
}

function showpetals() {
  const emojis = ['🌸','💕','🌷','✨','💖','🌺'];
  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      const p = document.createElement("span");
      p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      p.style.position = "fixed";
      p.style.fontSize = "24px";
      p.style.left = Math.random() * 100 + "vw";
      p.style.top = "-30px";
      p.style.zIndex = "9999";
      p.style.pointerEvents = "none";
      p.style.transition = `top ${2 + Math.random() * 2}s linear, opacity 1s ease 1.5s`;
      document.body.appendChild(p);

      setTimeout(() => {
        p.style.top = "110vh";
        p.style.opacity = "0";
      }, 50);

      setTimeout(() => p.remove(), 4500);
    }, i * 300);
  }
}


function runAway() {
  const noBtn = document.querySelector(".no");
  const maxX = window.innerWidth - 100;
  const maxY = window.innerHeight - 50;
  const randomx = Math.random() * maxX;
  const randomy = Math.random() * maxY;
  noBtn.style.position = "fixed";
  noBtn.style.left = randomx + "px";
  noBtn.style.top = randomy + "px";
}


function showheart() {
  const heart = document.querySelector(".heart");
  if (heart) heart.style.display = "block";
}
setTimeout(() => {
    document.getElementById("popupMsg").style.display = "block";

},5000)