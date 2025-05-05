window.addEventListener('load', () => { 
  const button = document.getElementById("add");
  const output = document.getElementById("output");
  const button1 = document.getElementById("add1");
  const output1 = document.getElementById("output1");
  
  let money = 0;
  let moneyPerClick = 1;
  let numOfCoinUpgrades = 0;
  let costOfCoinUpgrade = 10;
  
  const coinClicked = () => {
    money += moneyPerClick
    return money;
  };
  const coinUpgradeClicked = () => {
    if (money >= costOfCoinUpgrade) {
      money -= costOfCoinUpgrade;
    };
    return money;
  };
  const coinUpgradeClicked1 = () => {
    if (money >= costOfCoinUpgrade) {
      costOfCoinUpgrade *= 1.15;
      costOfCoinUpgrade = Math.round(costOfCoinUpgrade);
      numOfCoinUpgrades += 1;
      return numOfCoinUpgrades
    } else {
      return numOfCoinUpgrades;
    };
  };
  const coinUpgradeClicked2 = () => {
    if (money >= costOfCoinUpgrade) {
    };
    return costOfCoinUpgrade;
  };
  
  button.addEventListener('click', () => {
    output.textContent = "money: " + coinClicked();
  });
  button1.addEventListener('click', () => {
    output.textContent = "money: " + coinUpgradeClicked();
    output1.textContent = "number: " + coinUpgradeClicked1() + " cost: " + coinUpgradeClicked2();
  });
});
