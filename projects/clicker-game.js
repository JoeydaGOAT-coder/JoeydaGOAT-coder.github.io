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
  let costOfCpsUpgrade6 = 1400000;
  let costOfCpsUpgrade7 = 20000000;
  let costOfCpsUpgrade8 = 330000000;
  let costOfCpsUpgrade9 = 5100000000;
  let costOfCpsUpgrade10 = 75000000000;
  let costOfCpsUpgrade11 = 1000000000000;
  let costOfCpsUpgrade12 = 14000000000000;
  let costOfCpsUpgrade13 = 170000000000000;
  let costOfCpsUpgrade14 = 2100000000000000;
  let costOfCpsUpgrade15 = 26000000000000000;
  let costOfCpsUpgrade16 = 310000000000000000;
  let costOfCpsUpgrade17 = 71000000000000000000;
  
  setInterval(function () {
    money += moneyPerSecond;
    output.textContent = "money: " + money;
  }, 1000);
  
  const coinClicked = () => {
    money += moneyPerClick
    return money;
  };
  
  };
  const upgradeClicked1 = () => {
    if (money >= costOfUpgrade1) {
      money -= costOfUpgrade1;
      costOfUpgrade1 *= 1.15;
      costOfUpgrade1 = Math.round(costOfUpgrade1);
      numOfUpgrade1 += 1;
      moneyPerSecond += 0.1;
    };
    return money;
  };

  const upgradeClicked2 = () => {
    if (money >= costOfUpgrade2) {
      money -= costOfUpgrade2;
      costOfUpgrade2 *= 1.15;
      costOfUpgrade2 = Math.round(costOfUpgrade2);
      numOfUpgrade2 += 1;
      moneyPerSecond += ;
    };
    return money;
  };

  const upgradeClicked3 = () => {
    if (money >= costOfUpgrade3) {
      money -= costOfUpgrade3;
      costOfUpgrade3 *= 1.15;
      costOfUpgrade3 = Math.round(costOfUpgrade3);
      numOfUpgrade3 += 1;
      moneyPerSecond += ;
    };
    return money;
  };

  const upgradeClicked4 = () => {
    if (money >= costOfUpgrade4) {
      money -= costOfUpgrade4;
      costOfUpgrade4 *= 1.15;
      costOfUpgrade4 = Math.round(costOfUpgrade4);
      numOfUpgrade4 += 1;
      moneyPerSecond += ;
    };
    return money;
  };

  const upgradeClicked5 = () => {
    if (money >= costOfUpgrade5) {
      money -= costOfUpgrade5;
      costOfUpgrade5 *= 1.15;
      costOfUpgrade5 = Math.round(costOfUpgrade5);
      numOfUpgrade5 += 1;
      moneyPerSecond += ;
    };
    return money;
  };

  const upgradeClicked6 = () => {
    if (money >= costOfUpgrade6) {
      money -= costOfUpgrade6;
      costOfUpgrade6 *= 1.15;
      costOfUpgrade6 = Math.round(costOfUpgrade6);
      numOfUpgrade6 += 1;
      moneyPerSecond += ;
    };
    return money;
  };

  const upgradeClicked7 = () => {
    if (money >= costOfUpgrade7) {
      money -= costOfUpgrade7;
      costOfUpgrade7 *= 1.15;
      costOfUpgrade7 = Math.round(costOfUpgrade7);
      numOfUpgrade7 += 1;
      moneyPerSecond += ;
    };
    return money;
  };

  const upgradeClicked8 = () => {
    if (money >= costOfUpgrade8) {
      money -= costOfUpgrade8;
      costOfUpgrade8 *= 1.15;
      costOfUpgrade8 = Math.round(costOfUpgrade8);
      numOfUpgrade8 += 1;
      moneyPerSecond += ;
    };
    return money;
  };

  const upgradeClicked9 = () => {
    if (money >= costOfUpgrade9) {
      money -= costOfUpgrade9;
      costOfUpgrade9 *= 1.15;
      costOfUpgrade9 = Math.round(costOfUpgrade9);
      numOfUpgrade9 += 1;
      moneyPerSecond += ;
    };
    return money;
  };

  const upgradeClicked10 = () => {
    if (money >= costOfUpgrade10) {
      money -= costOfUpgrade10;
      costOfUpgrade10 *= 1.15;
      costOfUpgrade10 = Math.round(costOfUpgrade10);
      numOfUpgrade10 += 1;
      moneyPerSecond += ;
    };
    return money;
  };

  const upgradeClicked11 = () => {
    if (money >= costOfUpgrade11) {
      money -= costOfUpgrade11;
      costOfUpgrade11 *= 1.15;
      costOfUpgrade11 = Math.round(costOfUpgrade11);
      numOfUpgrade11 += 1;
      moneyPerSecond += ;
    };
    return money;
  };

  const upgradeClicked12 = () => {
    if (money >= costOfUpgrade12) {
      money -= costOfUpgrade12;
      costOfUpgrade12 *= 1.15;
      costOfUpgrade12 = Math.round(costOfUpgrade12);
      numOfUpgrade12 += 1;
      moneyPerSecond += ;
    };
    return money;
  };

  const upgradeClicked13 = () => {
    if (money >= costOfUpgrade13) {
      money -= costOfUpgrade13;
      costOfUpgrade13 *= 1.15;
      costOfUpgrade13 = Math.round(costOfUpgrade13);
      numOfUpgrade13 += 1;
      moneyPerSecond += ;
    };
    return money;
  };

  const upgradeClicked14 = () => {
    if (money >= costOfUpgrade14) {
      money -= costOfUpgrade14;
      costOfUpgrade14 *= 1.15;
      costOfUpgrade14 = Math.round(costOfUpgrade14);
      numOfUpgrade14 += 1;
      moneyPerSecond += ;
    };
    return money;
  };

  const upgradeClicked15 = () => {
    if (money >= costOfUpgrade15) {
      money -= costOfUpgrade15;
      costOfUpgrade15 *= 1.15;
      costOfUpgrade15 = Math.round(costOfUpgrade15);
      numOfUpgrade15 += 1;
      moneyPerSecond += ;
    };
    return money;
  };

  const upgradeClicked16 = () => {
    if (money >= costOfUpgrade16) {
      money -= costOfUpgrade16;
      costOfUpgrade16 *= 1.15;
      costOfUpgrade16 = Math.round(costOfUpgrade16);
      numOfUpgrade16 += 1;
      moneyPerSecond += ;
    };
    return money;
  };

  const upgradeClicked17 = () => {
    if (money >= costOfUpgrade17) {
      money -= costOfUpgrade17;
      costOfUpgrade17 *= 1.15;
      costOfUpgrade17 = Math.round(costOfUpgrade17);
      numOfUpgrade17 += 1;
      moneyPerSecond += ;
    };
    return money;
  };
  
  button.addEventListener('click', () => {
    output.textContent = "money: " + coinClicked();
  });

  button1.addEventListener('click', () => {
    output.textContent = "money: " + upgradeClicked1();
    output1.textContent = "number: " + numOfUpgrade1 + " cost: " + costOfUpgrade1;
  });

  button2.addEventListener('click', () => {
    output.textContent = "money: " + autoClickerClicked();
    output2.textContent = "number: " + numOfAutoClickers + " cost: " + costOfAutoClicker;
  });
});
