window.addEventListener('load', () => { 
  const button = document.getElementById("add");
  const output = document.getElementById("output");
  const button1 = document.getElementById("add1");
  const output1 = document.getElementById("output1");
  const button2 = document.getElementById("add2");
  const output2 = document.getElementById("output2");
  
  let money = 0;
  let moneyPerClick = 1;
  let moneyPerSecond = 0;
  let numOfCoinUpgrades = 0;
  let costOfCoinUpgrade = 100;
  let numOfAutoClickers = 0
  let costOfAutoClicker = 15

  setInterval(function () {
    money += moneyPerSecond;
    output.textContent = "money: " + money;
  }, 1000);
  
  const coinClicked = () => {
    money += moneyPerClick
    return money;
  };
  const coinUpgradeClicked = () => {
    if (money >= costOfCoinUpgrade) {
      money -= costOfCoinUpgrade;
      costOfCoinUpgrade *= 1.15;
      costOfCoinUpgrade = Math.round(costOfCoinUpgrade);
      numOfCoinUpgrades += 1;
      moneyPerClick += 1;
    };
    return money;
  };
  const autoClickerClicked = () => {
    if (money >= costOfAutoClicker) {
      money -= costOfAutoClicker;
      costOfAutoClicker *= 1.15;
      costOfAutoClicker = Math.round(costOfAutoClicker);
      numOfAutoClickers += 1;
      moneyPerSecond += 1;
    };
    return money;
  };
  
  button.addEventListener('click', () => {
    output.textContent = "money: " + coinClicked();
  });
  button1.addEventListener('click', () => {
    output.textContent = "money: " + coinUpgradeClicked();
    output1.textContent = "number: " + numOfCoinUpgrades + " cost: " + costOfCoinUpgrade;
  });
  button2.eddEventListener('click', () => {
    output.textContent = "money: " + coinUpgradeClicked();
    output2.textContent = "number: " + numOfAutoClickers + " cost: " + costOfAutoClicker;
  });
});
