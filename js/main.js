let element1 = new Title("title");
let element2 = new Home("home");

function Tick(secondsoftick) {
  setInterval(() => {
    element2.game.grams = element2.game.grams.add(
      new Decimal(1).mul(element2.game.speedrun)
    );
    element2.updateHome();
    element2.game.speedrun /= 1.049;
    document.getElementById("home").innerHTML = element2.template;
  }, secondsoftick * 1000);
}

document.getElementById("click").onclick = () => {
  element2.game.grams = element2.game.grams.add(1);
  element2.updateHome();
};

document.getElementById("alec").onclick = () => {
  element2.game.speedrun *= 1.036;
};

document.getElementById("reset").onclick = () => {
  element2.game.speedrun = 1;
};

Tick(0.9);
