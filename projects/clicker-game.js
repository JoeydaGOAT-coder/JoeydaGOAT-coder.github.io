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
  
  let money = 999999999999999999999;
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
  let costOfCpsUpgrade4 = 20000;
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

  let dpsOfUpgrade1 = 0.1;
  let dpsOfUpgrade2 = 1;
  let dpsOfUpgrade3 = 8;
  let dpsOfUpgrade4 = 47;
  let dpsOfUpgrade5 = 260;
  let dpsOfUpgrade6 = 1400;
  let dpsOfUpgrade7 = 7800;
  let dpsOfUpgrade8 = ;
  let dpsOfUpgrade9 = ;
  let dpsOfUpgrade10 = ;
  let dpsOfUpgrade11 = ;
  let dpsOfUpgrade12 = ;
  let dpsOfUpgrade13 = ;
  let dpsOfUpgrade14 = ;
  let dpsOfUpgrade15 = ;
  let dpsOfUpgrade16 = ;
  let dpsOfUpgrade17 = ;
  
  setInterval(function () {
    money += moneyPerSecond;
    output.textContent = "money: " + money;
  }, 1000);
  
  const coinClicked = () => {
    money += moneyPerClick
    return money;
  };
  
  const upgradeClicked1 = () => {
    if (money >= costOfUpgrade1) {
      money -= costOfUpgrade1;
      costOfUpgrade1 *= 1.15;
      costOfUpgrade1 = Math.round(costOfUpgrade1);
      numOfUpgrade1 += 1;
      moneyPerSecond += dpsOfUpgrade1;
    };
    return money;
  };

  const upgradeClicked2 = () => {
    if (money >= costOfUpgrade2) {
      money -= costOfUpgrade2;
      costOfUpgrade2 *= 1.15;
      costOfUpgrade2 = Math.round(costOfUpgrade2);
      numOfUpgrade2 += 1;
      moneyPerSecond += dpsOfUpgrade2;
    };
    return money;
  };

  const upgradeClicked3 = () => {
    if (money >= costOfUpgrade3) {
      money -= costOfUpgrade3;
      costOfUpgrade3 *= 1.15;
      costOfUpgrade3 = Math.round(costOfUpgrade3);
      numOfUpgrade3 += 1;
      moneyPerSecond += dpsOfUpgrade3;
    };
    return money;
  };

  const upgradeClicked4 = () => {
    if (money >= costOfUpgrade4) {
      money -= costOfUpgrade4;
      costOfUpgrade4 *= 1.15;
      costOfUpgrade4 = Math.round(costOfUpgrade4);
      numOfUpgrade4 += 1;
      moneyPerSecond += dpsOfUpgrade4;
    };
    return money;
  };

  const upgradeClicked5 = () => {
    if (money >= costOfUpgrade5) {
      money -= costOfUpgrade5;
      costOfUpgrade5 *= 1.15;
      costOfUpgrade5 = Math.round(costOfUpgrade5);
      numOfUpgrade5 += 1;
      moneyPerSecond += dpsOfUpgrade5;
    };
    return money;
  };

  const upgradeClicked6 = () => {
    if (money >= costOfUpgrade6) {
      money -= costOfUpgrade6;
      costOfUpgrade6 *= 1.15;
      costOfUpgrade6 = Math.round(costOfUpgrade6);
      numOfUpgrade6 += 1;
      moneyPerSecond += dpsOfUpgrade6;
    };
    return money;
  };

  const upgradeClicked7 = () => {
    if (money >= costOfUpgrade7) {
      money -= costOfUpgrade7;
      costOfUpgrade7 *= 1.15;
      costOfUpgrade7 = Math.round(costOfUpgrade7);
      numOfUpgrade7 += 1;
      moneyPerSecond += dpsOfUpgrade7;
    };
    return money;
  };

  const upgradeClicked8 = () => {
    if (money >= costOfUpgrade8) {
      money -= costOfUpgrade8;
      costOfUpgrade8 *= 1.15;
      costOfUpgrade8 = Math.round(costOfUpgrade8);
      numOfUpgrade8 += 1;
      moneyPerSecond += dpsOfUpgrade8;
    };
    return money;
  };

  const upgradeClicked9 = () => {
    if (money >= costOfUpgrade9) {
      money -= costOfUpgrade9;
      costOfUpgrade9 *= 1.15;
      costOfUpgrade9 = Math.round(costOfUpgrade9);
      numOfUpgrade9 += 1;
      moneyPerSecond += dpsOfUpgrade9;
    };
    return money;
  };

  const upgradeClicked10 = () => {
    if (money >= costOfUpgrade10) {
      money -= costOfUpgrade10;
      costOfUpgrade10 *= 1.15;
      costOfUpgrade10 = Math.round(costOfUpgrade10);
      numOfUpgrade10 += 1;
      moneyPerSecond += dpsOfUpgrade10;
    };
    return money;
  };

  const upgradeClicked11 = () => {
    if (money >= costOfUpgrade11) {
      money -= costOfUpgrade11;
      costOfUpgrade11 *= 1.15;
      costOfUpgrade11 = Math.round(costOfUpgrade11);
      numOfUpgrade11 += 1;
      moneyPerSecond += dpsOfUpgrade11;
    };
    return money;
  };

  const upgradeClicked12 = () => {
    if (money >= costOfUpgrade12) {
      money -= costOfUpgrade12;
      costOfUpgrade12 *= 1.15;
      costOfUpgrade12 = Math.round(costOfUpgrade12);
      numOfUpgrade12 += 1;
      moneyPerSecond += dpsOfUpgrade12;
    };
    return money;
  };

  const upgradeClicked13 = () => {
    if (money >= costOfUpgrade13) {
      money -= costOfUpgrade13;
      costOfUpgrade13 *= 1.15;
      costOfUpgrade13 = Math.round(costOfUpgrade13);
      numOfUpgrade13 += 1;
      moneyPerSecond += dpsOfUpgrade13;
    };
    return money;
  };

  const upgradeClicked14 = () => {
    if (money >= costOfUpgrade14) {
      money -= costOfUpgrade14;
      costOfUpgrade14 *= 1.15;
      costOfUpgrade14 = Math.round(costOfUpgrade14);
      numOfUpgrade14 += 1;
      moneyPerSecond += dpsOfUpgrade14;
    };
    return money;
  };

  const upgradeClicked15 = () => {
    if (money >= costOfUpgrade15) {
      money -= costOfUpgrade15;
      costOfUpgrade15 *= 1.15;
      costOfUpgrade15 = Math.round(costOfUpgrade15);
      numOfUpgrade15 += 1;
      moneyPerSecond += dpsOfUpgrade15;
    };
    return money;
  };

  const upgradeClicked16 = () => {
    if (money >= costOfUpgrade16) {
      money -= costOfUpgrade16;
      costOfUpgrade16 *= 1.15;
      costOfUpgrade16 = Math.round(costOfUpgrade16);
      numOfUpgrade16 += 1;
      moneyPerSecond += dpsOfUpgrade16;
    };
    return money;
  };

  const upgradeClicked17 = () => {
    if (money >= costOfUpgrade17) {
      money -= costOfUpgrade17;
      costOfUpgrade17 *= 1.15;
      costOfUpgrade17 = Math.round(costOfUpgrade17);
      numOfUpgrade17 += 1;
      moneyPerSecond += dpsOfUpgrade17;
    };
    return money;
  };
  
  button.addEventListener('click', () => {
    output.textContent = "money: " + coinClicked();
  });

  button1.addEventListener('click', () => {
    output.textContent = "money: " + upgradeClicked1();
    output1.textContent = "number: " + numOfUpgrade1 + " cost: " + costOfUpgrade1;
    dps.textContent = "dps: " + moneyPerSecond;
  });

  button2.addEventListener('click', () => {
    output.textContent = "money: " + upgradeClicked2();
    output2.textContent = "number: " + numOfUpgrade2 + " cost: " + costOfUpgrade2;
    dps.textContent = "dps: " + moneyPerSecond;
  });

  button3.addEventListener('click', () => {
    output.textContent = "money: " + upgradeClicked3();
    output3.textContent = "number: " + numOfUpgrade3 + " cost: " + costOfUpgrade3;
    dps.textContent = "dps: " + moneyPerSecond;
  });

  button4.addEventListener('click', () => {
    output.textContent = "money: " + upgradeClicked4();
    output4.textContent = "number: " + numOfUpgrade4 + " cost: " + costOfUpgrade4;
    dps.textContent = "dps: " + moneyPerSecond;
  });

  button5.addEventListener('click', () => {
    output.textContent = "money: " + upgradeClicked5();
    output5.textContent = "number: " + numOfUpgrade5 + " cost: " + costOfUpgrade5;
    dps.textContent = "dps: " + moneyPerSecond;
  });

  button6.addEventListener('click', () => {
    output.textContent = "money: " + upgradeClicked6();
    output6.textContent = "number: " + numOfUpgrade6 + " cost: " + costOfUpgrade6;
    dps.textContent = "dps: " + moneyPerSecond;
  });

  button7.addEventListener('click', () => {
    output.textContent = "money: " + upgradeClicked7();
    output7.textContent = "number: " + numOfUpgrade7 + " cost: " + costOfUpgrade7;
    dps.textContent = "dps: " + moneyPerSecond;
  });

  button8.addEventListener('click', () => {
    output.textContent = "money: " + upgradeClicked8();
    output8.textContent = "number: " + numOfUpgrade8 + " cost: " + costOfUpgrade8;
    dps.textContent = "dps: " + moneyPerSecond;
  });

  button9.addEventListener('click', () => {
    output.textContent = "money: " + upgradeClicked9();
    output9.textContent = "number: " + numOfUpgrade9 + " cost: " + costOfUpgrade9;
    dps.textContent = "dps: " + moneyPerSecond;
  });

  button10.addEventListener('click', () => {
    output.textContent = "money: " + upgradeClicked10();
    output10.textContent = "number: " + numOfUpgrade10 + " cost: " + costOfUpgrade10;
    dps.textContent = "dps: " + moneyPerSecond;
  });

  button11.addEventListener('click', () => {
    output.textContent = "money: " + upgradeClicked11();
    output11.textContent = "number: " + numOfUpgrade11 + " cost: " + costOfUpgrade11;
    dps.textContent = "dps: " + moneyPerSecond;
  });

  button12.addEventListener('click', () => {
    output.textContent = "money: " + upgradeClicked12();
    output12.textContent = "number: " + numOfUpgrade12 + " cost: " + costOfUpgrade12;
    dps.textContent = "dps: " + moneyPerSecond;
  });

  button13.addEventListener('click', () => {
    output.textContent = "money: " + upgradeClicked13();
    output13.textContent = "number: " + numOfUpgrade13 + " cost: " + costOfUpgrade13;
    dps.textContent = "dps: " + moneyPerSecond;
  });

  button14.addEventListener('click', () => {
    output.textContent = "money: " + upgradeClicked14();
    output14.textContent = "number: " + numOfUpgrade14 + " cost: " + costOfUpgrade14;
    dps.textContent = "dps: " + moneyPerSecond;
  });

  button15.addEventListener('click', () => {
    output.textContent = "money: " + upgradeClicked15();
    output15.textContent = "number: " + numOfUpgrade15 + " cost: " + costOfUpgrade15;
    dps.textContent = "dps: " + moneyPerSecond;
  });

  button16.addEventListener('click', () => {
    output.textContent = "money: " + upgradeClicked16();
    output16.textContent = "number: " + numOfUpgrade16 + " cost: " + costOfUpgrade16;
    dps.textContent = "dps: " + moneyPerSecond;
  });

  button17.addEventListener('click', () => {
    output.textContent = "money: " + upgradeClicked17();
    output17.textContent = "number: " + numOfUpgrade17 + " cost: " + costOfUpgrade17;
    dps.textContent = "dps: " + moneyPerSecond;
  });
});
