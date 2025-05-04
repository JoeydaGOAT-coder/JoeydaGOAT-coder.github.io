window.addEventListener('load', () => { 
  const button = document.getElementById("add");
  const output = document.getElementById("output");

  let money = 0;
  let moneyPerClick = 1;
  const coinClicked = () => {
    money += moneyPerClick
    return money;
  };
  button.addEventListener('click', () => {
    output.textContent = "money: " + coinClicked();
  });
});
window.addEventListener('load', () => { 
  const button = document.getElementById("add");
  const output = document.getElementById("output");

  let numOfCoinUpgrades = 0;
  const coinClicked = () => {
    money += moneyPerClick
    return money;
  };
  button.addEventListener('click', () => {
    output.textContent = "money: " + coinClicked();
  });
});
