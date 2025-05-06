window.addEventListener('load', () => { 
  const button = document.getElementById("add");
  const output = document.getElementById("output");
  const dps = document.getElementById("dps");
  
  const button1 = document.getElementById("add1");
  const output1 = document.getElementById("output1");
  const button2 = document.getElementById("add2");
  const output2 = document.getElementById("output2");
  const button3 = document.getElementById("add3");
  const output3 = document.getElementById("output3");
  const button4 = document.getElementById("add4");
  const output4 = document.getElementById("output4");
  const button5 = document.getElementById("add5");
  const output5 = document.getElementById("output5");
  const button6 = document.getElementById("add6");
  const output6 = document.getElementById("output6");
  const button7 = document.getElementById("add7");
  const output7 = document.getElementById("output7");
  const button8 = document.getElementById("add8");
  const output8 = document.getElementById("output8");
  const button9 = document.getElementById("add9");
  const output9 = document.getElementById("output9");
  const button10 = document.getElementById("add10");
  const output10 = document.getElementById("output10");
  const button11 = document.getElementById("add11");
  const output11 = document.getElementById("output11");
  const button12 = document.getElementById("add12");
  const output12 = document.getElementById("output12");
  const button13 = document.getElementById("add13");
  const output13 = document.getElementById("output13");
  const button14 = document.getElementById("add14");
  const output14 = document.getElementById("output14");
  const button15 = document.getElementById("add15");
  const output15 = document.getElementById("output15");
  const button16 = document.getElementById("add16");
  const output16 = document.getElementById("output16");
  const button17 = document.getElementById("add17");
  const output17 = document.getElementById("output17");
  
  let money = 0;
  let moneyPerClick = 1;
  let moneyPerSecond = 0;
  
  let numOfCpsUpgrade1 = 0;
  let numOfCpsUpgrade2 = 0;
  let numOfCpsUpgrade3 = 0;
  let numOfCpsUpgrade4 = 0;
  let numOfCpsUpgrade5 = 0;
  let numOfCpsUpgrade6 = 0;
  let numOfCpsUpgrade7 = 0;
  let numOfCpsUpgrade8 = 0;
  let numOfCpsUpgrade9 = 0;
  let numOfCpsUpgrade10 = 0;
  let numOfCpsUpgrade11 = 0;
  let numOfCpsUpgrade12 = 0;
  let numOfCpsUpgrade13 = 0;
  let numOfCpsUpgrade14 = 0;
  let numOfCpsUpgrade15 = 0;
  let numOfCpsUpgrade16 = 0;
  let numOfCpsUpgrade17 = 0;
  
  let costOfCpsUpgrade1 = 15;
  let costOfCpsUpgrade2 = 100;
  let costOfCpsUpgrade3 = 1100;
  let costOfCpsUpgrade4 = 2000;
  let costOfCpsUpgrade5 = 130000;
  let costOfCpsUpgrade6 = 
  let costOfCpsUpgrade7 = 
  let costOfCpsUpgrade8 = 
  let costOfCpsUpgrade9 = 
  let costOfCpsUpgrade10 = 
  let costOfCpsUpgrade11 = 
  let costOfCpsUpgrade12 = 
  let costOfCpsUpgrade13 = 
  let costOfCpsUpgrade14 = 
  let costOfCpsUpgrade15 = 
  let costOfCpsUpgrade16 = 
  let costOfCpsUpgrade17 = 
  
  setInterval(function () {
    money += moneyPerSecond;
    output.textContent = "money: " + money;
  }, 1000);
  
  const coinClicked = () => {
    money += moneyPerClick
    return money;
  };
  
  };
  const autoClickerClicked = () => {
    if (money >= costOfAutoClicker) {
      money -= costOfAutoClicker;
      costOfAutoClicker *= 1.15;
      costOfAutoClicker = Math.round(costOfAutoClicker);
      numOfAutoClickers += 1;
      moneyPerSecond += 0.1;
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
  button2.addEventListener('click', () => {
    output.textContent = "money: " + autoClickerClicked();
    output2.textContent = "number: " + numOfAutoClickers + " cost: " + costOfAutoClicker;
  });
});
