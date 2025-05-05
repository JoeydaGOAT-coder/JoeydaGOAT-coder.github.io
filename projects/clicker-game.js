window.addEventListener('load', () => { 
  const button = document.getElementById("add");
  const output = document.getElementById("output");
  const button1 = document.getElementById("add1");
  const output1 = document.getElementById("output1");
  
  let money = 0;
  let moneyPerClick = 1;
  let numOfCoinUpgrades = 0;
  let costOfCoinUpgrade = 100;
  
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
  
  button.addEventListener('click', () => {
    output.textContent = "money: " + coinClicked();
  });
  button1.addEventListener('click', () => {
    output.textContent = "money: " + coinUpgradeClicked();
    output1.textContent = "number: " + numOfCoinUpgrades + " cost: " + costOfCoinUpgrade;
  });
});
