let stickman = document.getElementById("stickman-container");
let stickmanRightLeg = document.getElementById("man-right-leg");
let stickmanLeftLeg = document.getElementById("man-left-leg");
let stickmanRightHand = document.getElementById("man-right-hand");
let stickmanRightHandFold = document.getElementById("right-hand-fold");

let stickWomanRightLeg = document.getElementById("woman-right-leg");
let stickWomanLeftLeg = document.getElementById("woman-left-leg");
let stickWoman = document.getElementById("stickwoman-container");

let programmer = document.getElementById("programmer-container");
let programmerRightLeg = document.getElementById("programmer-right-leg");
let programmerLeftLeg = document.getElementById("programmer-left-leg");

let road = document.getElementById("road");
let rose = document.getElementById("rose");
let msgBox = document.getElementById("msgBox");
let background = document.getElementById("primary-container");
let codingBox = document.getElementById("codingBox");
let box = document.getElementById("box");

let music = new Audio("audio.mp3");

function start() {
  // движение человечка к человечке 20с (всего 20с)
  setTimeout(() => {
    stickman.classList.add("stickman-animation-1");
    stickmanRightLeg.classList.add("right-leg-animation");
    stickmanLeftLeg.classList.add("left-leg-animation");
    setTimeout(() => {
      stickmanRightLeg.classList.remove("right-leg-animation");
      stickmanLeftLeg.classList.remove("left-leg-animation");
    }, 17000);
  }, 3000);

  // предложение человечка человечке 13с (всего 33с)
  setTimeout(() => {
    rose.style.display = "block";
    stickmanRightHand.style.display = "none";
    stickmanRightHandFold.style.display = "block";
    setTimeout(() => {
      msgBox.style.display = "block";
      setTimeout(() => {
        msgBox.style.display = "none";
      }, 9000);
    }, 1000);
  }, 21000);

  // отказ человечки 7с (всего 40с)
  setTimeout(() => {
    stickWoman.classList.add("stickwoman-move-forward");
    stickWomanLeftLeg.classList.add("left-leg-fast-animation");
    stickWomanRightLeg.classList.add("right-leg-fast-animation");
    setTimeout(() => {
      stickWomanLeftLeg.classList.remove("left-leg-fast-animation");
      stickWomanRightLeg.classList.remove("right-leg-fast-animation");
    }, 7000);
  }, 33000);

  // падение розы 7с (всего 47с)
  setTimeout(() => {
    stickmanRightHandFold.style.display = "none";
    stickmanRightHand.style.display = "block";
    rose.classList.add("rose-animation");
  }, 41000);

  // гроза и человечек уходит 21с (всего 1:08с)
  setTimeout(() => {
    setTimeout(() => {
      background.classList.add("thunder-animation");
      stickman.classList.add("stickman-animation-2");
      stickmanRightLeg.classList.add("right-leg-animation");
      stickmanLeftLeg.classList.add("left-leg-animation");
      rose.style.display = "none";
      setTimeout(() => {
        background.classList.remove("thunder-animation");
        road.style.transform = "translateX(25%)";
      }, 15000);
    }, 6000);
  }, 48000);

  // человечек прыгает 27с (всего 1:35с)
  setTimeout(() => {
    stickman.classList.add("stickman-animation-3");
    stickmanRightLeg.classList.add("right-leg-animation");
    stickmanLeftLeg.classList.add("left-leg-animation");
    setTimeout(() => {
      stickmanRightLeg.classList.remove("right-leg-animation");
      stickmanLeftLeg.classList.remove("left-leg-animation");
    }, 20000);
  }, 70000);

  // программист появляется 15с (всего 105000)
  setTimeout(() => {
    programmerRightLeg.classList.add("right-leg-fast-animation");
    programmerLeftLeg.classList.add("left-leg-fast-animation");
    programmer.style.display = "block";
    programmer.classList.add("programmer-animation-1");
    setTimeout(() => {
      programmerRightLeg.classList.remove("right-leg-fast-animation");
      programmerLeftLeg.classList.remove("left-leg-fast-animation");
      msgBox.innerHTML = "Привет, стой!";
      msgBox.style.left = "900px";
      msgBox.style.display = "block";
      setTimeout(() => {
        msgBox.style.display = "none";
        programmer.classList.add("programmer-animation-2");
        programmerRightLeg.classList.add("right-leg-fast-animation");
        programmerLeftLeg.classList.add("left-leg-fast-animation");
        setTimeout(() => {
          programmerRightLeg.classList.remove("right-leg-fast-animation");
          programmerLeftLeg.classList.remove("left-leg-fast-animation");
        }, 5000);
      }, 2000);
    }, 3000);
  }, 95000);

  // обсуждение 24с (всего 129000)
  setTimeout(() => {
    msgBox.style.display = "block";
    msgBox.innerHTML = "Ты что, с ума сошел?";
    msgBox.style.left = "650px";
    setTimeout(() => {
      msgBox.style.display = "block";
      msgBox.innerHTML = "Она разбила мое <br> сердце ♥";
      msgBox.style.left = "50px";
      setTimeout(() => {
        msgBox.style.display = "block";
        msgBox.innerHTML =
          "Теперь забудь ее и потрать время <br> на важные вещи, например, на программирование...";
        msgBox.style.left = "650px";
        setTimeout(() => {
          msgBox.style.display = "block";
          msgBox.innerHTML =
            "учись программированию! оно может сломать цикл, <br> но никогда не сломает твое сердце ♥";
          msgBox.style.left = "650px";
          setTimeout(() => {
            msgBox.style.display = "none";
          }, 8000);
        }, 8000);
      }, 4000);
    }, 4000);
  }, 105000);

  // гроза идет к человечку и программисту 15с (всего 145000)
  setTimeout(() => {
    background.classList.add("thunder-animation");
    programmer.style.display = "block";
    programmer.classList.add("programmer-animation-3");
    stickman.classList.add("stickman-animation-4");
    programmerRightLeg.classList.add("right-leg-animation");
    programmerLeftLeg.classList.add("left-leg-animation");
    stickmanRightLeg.classList.add("right-leg-animation");
    stickmanLeftLeg.classList.add("left-leg-animation");
    setTimeout(() => {
      programmerRightLeg.classList.remove("right-leg-animation");
      programmerLeftLeg.classList.remove("left-leg-animation");
      stickmanRightLeg.classList.remove("right-leg-animation");
      stickmanLeftLeg.classList.remove("left-leg-animation");
      background.classList.remove("thunder-animation");
      road.style.transform = "translateX(0%)";
      programmer.style.display = "none";
      programmer.classList.remove("programmer-animation-3");
      programmer.classList.remove("programmer-animation-1");
      programmer.classList.remove("programmer-animation-2");

      stickman.classList.remove("stickman-animation-4");
      stickman.classList.remove("stickman-animation-1");
      stickman.classList.remove("stickman-animation-2");
      stickman.classList.remove("stickman-animation-3");
    }, 15000);
  }, 130000);

  // начальная практика программирования "hello world" 10с (всего 158000)
  setTimeout(() => {
    stickman.style.display = "block";
    stickman.style.left = "100px";
    setTimeout(() => {
      codingBox.style.display = "block";
      setTimeout(() => {
        codingBox.style.display = "none";
        setTimeout(() => {
          codingBox.style.display = "block";
          codingBox.innerHTML = 'print("hello World")';
          setTimeout(() => {
            codingBox.style.display = "none";
            setTimeout(() => {
              codingBox.style.display = "block";
              codingBox.innerHTML = 'cout<<"hello World";';
              setTimeout(() => {
                codingBox.style.display = "none";
                stickman.classList.remove("stickman-animation-5");
                stickmanRightLeg.classList.remove("right-leg-animation");
                stickmanLeftLeg.classList.remove("left-leg-animation");
                stickman.style.display = "none";
                road.style.display = "none";
              }, 3000);
            }, 1000);
          }, 3000);
        }, 1000);
      }, 3000);
    }, 2000);
  }, 145000);

  // через несколько дней 14с (всего 179000)
  setTimeout(() => {
    box.style.display = "block";
    setTimeout(() => {
      box.style.display = "none";
    }, 3000);
  }, 160000);

  // ошибки 18с (всего 183000)
  setTimeout(() => {
    road.style.display = "block";
    stickman.style.display = "block";
    setTimeout(() => {
      codingBox.style.display = "block";
      codingBox.style.color = "red";
      codingBox.style.border = "1px solid red";
      codingBox.innerHTML = "синтаксическая ошибка";
      setTimeout(() => {
        codingBox.style.display = "none";
        setTimeout(() => {
          codingBox.style.display = "block";
          codingBox.innerHTML = 'неожиданный ";" на строке 99';
          setTimeout(() => {
            codingBox.style.display = "none";
            setTimeout(() => {
              codingBox.style.display = "block";
              codingBox.innerHTML = "5 ошибок 3 предупреждения!";
              setTimeout(() => {
                codingBox.style.display = "none";
                setTimeout(() => {
                  stickman.style.display = "none";
                  road.style.display = "none";
                }, 2000);
              }, 3000);
            }, 1000);
          }, 3000);
        }, 1000);
      }, 3000);
    }, 3000);
  }, 165000);

  // снова разговор с человечком и программистом 15000 (всего 183000)
  setTimeout(() => {
    stickman.style.display = "block";
    road.style.display = "block";
    stickman.style.left = "300px";
    programmer.style.display = "block";
    programmer.style.left = "500px";

    setTimeout(() => {
      msgBox.style.display = "block";
      msgBox.innerHTML = "Что случилось?";
      msgBox.style.left = "650px";
      setTimeout(() => {
        msgBox.innerHTML = "Я не могу <br> программировать";
        msgBox.style.left = "50px";
        setTimeout(() => {
          msgBox.innerHTML = "нажми ctrl + c <br> ctrl + v ";
          msgBox.style.left = "650px";
          setTimeout(() => {
            msgBox.innerHTML = "StackOverFlow поможет тебе";
            msgBox.style.left = "650px";
            setTimeout(() => {
              msgBox.style.display = "none";
              setTimeout(() => {
                stickman.style.display = "none";
                programmer.style.display = "none";
                road.style.display = "none";
              }, 1000);
            }, 3000);
          }, 3000);
        }, 3000);
      }, 3000);
    }, 1000);
  }, 183000);

  // успешное программирование 8с (всего 199000)
  setTimeout(() => {
    stickman.style.display = "block";
    stickman.style.left = "100px";
    road.style.display = "block";
    setTimeout(() => {
      codingBox.style.display = "block";
      codingBox.style.color = "green";
      codingBox.style.border = "1px solid green";
      codingBox.innerHTML = "Компиляция успешна!";
      setTimeout(() => {
        codingBox.style.display = "none";
        setTimeout(() => {
          codingBox.style.display = "block";
          codingBox.innerHTML = "0 ошибок 0 предупреждений!";
          setTimeout(() => {
            codingBox.style.display = "none";
            setTimeout(() => {
              stickman.style.display = "none";
              road.style.display = "none";
            }, 1000);
          }, 3000);
        }, 1000);
      }, 3000);
    }, 2000);
  }, 199000);

  // завершение
  setTimeout(() => {
    msgBox.style.display = "block";
    msgBox.style.left = "50%";
    msgBox.style.color = "white";
    msgBox.style.border = "1px solid white";
    msgBox.style.transform = "translate(-50%)";
    msgBox.innerHTML = "Создано <br> Cool Programming Projects";
  }, 209000);
}

let playBtn = document.getElementById("play-btn");
playBtn.onclick = () => {
  playBtn.style.display = "none";
  music.play();
  start();
};
