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

  const aButton1 = document.getElementById("aAdd1");
  const aButton2 = document.getElementById("aAdd2");
  const aButton3 = document.getElementById("aAdd3");
  const aButton4 = document.getElementById("aAdd4");
  const aButton5 = document.getElementById("aAdd5");
  const aButton6 = document.getElementById("aAdd6");
  const aButton7 = document.getElementById("aAdd7");
  const aButton8 = document.getElementById("aAdd8");
  const aButton9 = document.getElementById("aAdd9");
  const aButton10 = document.getElementById("aAdd10");
  const aButton11 = document.getElementById("aAdd11");
  const aButton12 = document.getElementById("aAdd12");

  const aOutput1 = document.getElementById("aOutput1");
  const aOutput2 = document.getElementById("aOutput2");
  const aOutput3 = document.getElementById("aOutput3");
  const aOutput4 = document.getElementById("aOutput4");
  const aOutput5 = document.getElementById("aOutput5");
  const aOutput6 = document.getElementById("aOutput6");
  const aOutput7 = document.getElementById("aOutput7");
  const aOutput8 = document.getElementById("aOutput8");
  const aOutput9 = document.getElementById("aOutput9");
  const aOutput10 = document.getElementById("aOutput10");
  const aOutput11 = document.getElementById("aOutput11");
  const aOutput12 = document.getElementById("aOutput12");

  const aDecription = document.getElementById("aDescription");
  
  let money = 0;
  let moneyPerClick = 1;
  let moneyPerSecond = 0;
  
  let numOfUpgrade1 = 0;
  let numOfUpgrade2 = 0;
  let numOfUpgrade3 = 0;
  let numOfUpgrade4 = 0;
  let numOfUpgrade5 = 0;
  let numOfUpgrade6 = 0;
  let numOfUpgrade7 = 0;
  let numOfUpgrade8 = 0;
  let numOfUpgrade9 = 0;
  let numOfUpgrade10 = 0;
  let numOfUpgrade11 = 0;
  let numOfUpgrade12 = 0;
  let numOfUpgrade13 = 0;
  let numOfUpgrade14 = 0;
  let numOfUpgrade15 = 0;
  let numOfUpgrade16 = 0;
  let numOfUpgrade17 = 0;
  
  let costOfUpgrade1 = 15;
  let costOfUpgrade2 = 100;
  let costOfUpgrade3 = 1100;
  let costOfUpgrade4 = 20000;
  let costOfUpgrade5 = 130000;
  let costOfUpgrade6 = 1400000;
  let costOfUpgrade7 = 20000000;
  let costOfUpgrade8 = 330000000;
  let costOfUpgrade9 = 5100000000;
  let costOfUpgrade10 = 75000000000;
  let costOfUpgrade11 = 1000000000000;
  let costOfUpgrade12 = 14000000000000;
  let costOfUpgrade13 = 170000000000000;
  let costOfUpgrade14 = 2100000000000000;
  let costOfUpgrade15 = 26000000000000000;
  let costOfUpgrade16 = 310000000000000000;
  let costOfUpgrade17 = 71000000000000000000;

  let dpsOfUpgrade1 = 0.1;
  let dpsOfUpgrade2 = 1;
  let dpsOfUpgrade3 = 8;
  let dpsOfUpgrade4 = 47;
  let dpsOfUpgrade5 = 260;
  let dpsOfUpgrade6 = 1400;
  let dpsOfUpgrade7 = 7800;
  let dpsOfUpgrade8 = 44000;
  let dpsOfUpgrade9 = 260000;
  let dpsOfUpgrade10 = 1600000;
  let dpsOfUpgrade11 = 10000000;
  let dpsOfUpgrade12 = 65000000;
  let dpsOfUpgrade13 = 430000000;
  let dpsOfUpgrade14 = 2900000000;
  let dpsOfUpgrade15 = 21000000000;
  let dpsOfUpgrade16 = 150000000000;
  let dpsOfUpgrade17 = 1100000000000;

  const costOfAUpgrade1 = ;
  const costOfAUpgrade2 = ;
  const costOfAUpgrade3 = ;
  const costOfAUpgrade4 = ;
  const costOfAUpgrade5 = ;
  const costOfAUpgrade6 = ;
  const costOfAUpgrade7 = ;
  const costOfAUpgrade8 = ;
  const costOfAUpgrade9 = ;
  const costOfAUpgrade10 = ;
  const costOfAUpgrade11 = ;
  const costOfAUpgrade12 = ;

  let aUpgradebought4 = false;
  let aUpgradebought5 = false;
  let aUpgradebought6 = false;
  let aUpgradebought7 = false;
  let aUpgradebought8 = false;
  let aUpgradebought9 = false;
  let aUpgradebought10 = false;
  let aUpgradebought11 = false;
  let aUpgradebought12 = false;

  const aUpgradeClicked1 = () => {
    if (money >= costOfAUpgrade1) {
      money -= costOfAUpgrade1;
      moneyPerClick *= 2;
      moneyPerSecond += dpsOfUpgrade1*numOfUpgrade1;
      dpsOfUpgrade1 *= 2;
    };
  };

  const aUpgradeClicked2 = () => {
    if (money >= costOfAUpgrade2) {
      money -= costOfAUpgrade2;
      moneyPerClick *= 2;
      moneyPerSecond += dpsOfUpgrade1*numOfUpgrade1;
      dpsOfUpgrade1 *= 2;
    };
  };

  const aUpgradeClicked3 = () => {
    if (money >= costOfAUpgrade3) {
      money -= costOfAUpgrade3;
      moneyPerClick *= 2;
      moneyPerSecond += dpsOfUpgrade1*numOfUpgrade1;
      dpsOfUpgrade1 *= 2;
    };
  };


  const aUpradeClicked4 = () => {
    if (money >= costOfAUpgrade4) {
      money -= costOfAUpgrade4;
      dpsOfUpgrade1 += numOfUpgrade1*(0.1*numOfUpgrade2 + 0.1*numOfUpgrade3 + 0.1*numOfUpgrade4 + 0.1*numOfUpgrade5 + 0.1*numOfUpgrade6 + 0.1*numOfUpgrade7 + 0.1*numOfUpgrade8 + 0.1*numOfUpgrade9 + 0.1*numOfUpgrade10 + 0.1*numOfUpgrade11 + 0.1*numOfUpgrade12 + 0.1*numOfUpgrade13 + 0.1*numOfUpgrade14 + 0.1*numOfUpgrade15 + 0.1*numOfUpgrade16 + 0.1*numOfUpgrade17);
      moneyPerClick += 0.1*numOfUpgrade2 + 0.1*numOfUpgrade3 + 0.1*numOfUpgrade4 + 0.1*numOfUpgrade5 + 0.1*numOfUpgrade6 + 0.1*numOfUpgrade7 + 0.1*numOfUpgrade8 + 0.1*numOfUpgrade9 + 0.1*numOfUpgrade10 + 0.1*numOfUpgrade11 + 0.1*numOfUpgrade12 + 0.1*numOfUpgrade13 + 0.1*numOfUpgrade14 + 0.1*numOfUpgrade15 + 0.1*numOfUpgrade16 + 0.1*numOfUpgrade17;
      aUpgradeBought4 = true
    };
  };

  const aUpgradeClicked5 = () => {
    if (money >= costOfAUpgrade5) {
      money -= costOfAUpgrade5;
      dpsOfUpgrade1 -= numOfUpgrade1*(0.1*numOfUpgrade2 + 0.1*numOfUpgrade3 + 0.1*numOfUpgrade4 + 0.1*numOfUpgrade5 + 0.1*numOfUpgrade6 + 0.1*numOfUpgrade7 + 0.1*numOfUpgrade8 + 0.1*numOfUpgrade9 + 0.1*numOfUpgrade10 + 0.1*numOfUpgrade11 + 0.1*numOfUpgrade12 + 0.1*numOfUpgrade13 + 0.1*numOfUpgrade14 + 0.1*numOfUpgrade15 + 0.1*numOfUpgrade16 + 0.1*numOfUpgrade17);
      moneyPerClick -= 0.1*numOfUpgrade2 + 0.1*numOfUpgrade3 + 0.1*numOfUpgrade4 + 0.1*numOfUpgrade5 + 0.1*numOfUpgrade6 + 0.1*numOfUpgrade7 + 0.1*numOfUpgrade8 + 0.1*numOfUpgrade9 + 0.1*numOfUpgrade10 + 0.1*numOfUpgrade11 + 0.1*numOfUpgrade12 + 0.1*numOfUpgrade13 + 0.1*numOfUpgrade14 + 0.1*numOfUpgrade15 + 0.1*numOfUpgrade16 + 0.1*numOfUpgrade17;
  
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
      if (aUpgradebought4) {
        if (aUpgradebought5) {
          if (aUpgradebought6) {
            if (aUpgradebought7 {
              if (aUpgradebought8) {
                if (aUpgradebought9) {
                  if (aUpgradebought10) {
                    if (aUpgradebought11) {
                      if (aUpgradebought12) {
                        moneyPerSecond += 5000000*numOfUpgrade2 + 5000000*numOfUpgrade3 + 5000000*numOfUpgrade4 + 5000000*numOfUpgrade5 + 5000000*numOfUpgrade6 + 5000000*numOfUpgrade7 + 5000000*numOfUpgrade8 + 5000000*numOfUpgrade9 + 5000000*numOfUpgrade10 + 5000000*numOfUpgrade11 + 5000000*numOfUpgrade12 + 5000000*numOfUpgrade13 + 5000000*numOfUpgrade14 + 5000000*numOfUpgrade15 + 5000000*numOfUpgrade16 + 5000000*numOfUpgrade17;
                      };
                    } else {
                      moneyPerSecond += 500000*numOfUpgrade2 + 500000*numOfUpgrade3 + 500000*numOfUpgrade4 + 500000*numOfUpgrade5 + 500000*numOfUpgrade6 + 500000*numOfUpgrade7 + 500000*numOfUpgrade8 + 500000*numOfUpgrade9 + 500000*numOfUpgrade10 + 500000*numOfUpgrade11 + 500000*numOfUpgrade12 + 500000*numOfUpgrade13 + 500000*numOfUpgrade14 + 500000*numOfUpgrade15 + 500000*numOfUpgrade16 + 500000*numOfUpgrade17;
                    };
                  } else {
                    moneyPerSecond += 50000*numOfUpgrade2 + 50000*numOfUpgrade3 + 50000*numOfUpgrade4 + 50000*numOfUpgrade5 + 50000*numOfUpgrade6 + 50000*numOfUpgrade7 + 50000*numOfUpgrade8 + 50000*numOfUpgrade9 + 50000*numOfUpgrade10 + 50000*numOfUpgrade11 + 50000*numOfUpgrade12 + 50000*numOfUpgrade13 + 50000*numOfUpgrade14 + 50000*numOfUpgrade15 + 50000*numOfUpgrade16 + 50000*numOfUpgrade17;
                  };
                } else {
                  moneyPerSecond += 5000*numOfUpgrade2 + 5000*numOfUpgrade3 + 5000*numOfUpgrade4 + 5000*numOfUpgrade5 + 5000*numOfUpgrade6 + 5000*numOfUpgrade7 + 5000*numOfUpgrade8 + 5000*numOfUpgrade9 + 5000*numOfUpgrade10 + 5000*numOfUpgrade11 + 5000*numOfUpgrade12 + 5000*numOfUpgrade13 + 5000*numOfUpgrade14 + 5000*numOfUpgrade15 + 5000*numOfUpgrade16 + 5000*numOfUpgrade17;
                };
              } else {
                moneyPerSecond += 500*numOfUpgrade2 + 500*numOfUpgrade3 + 500*numOfUpgrade4 + 500*numOfUpgrade5 + 500*numOfUpgrade6 + 500*numOfUpgrade7 + 500*numOfUpgrade8 + 500*numOfUpgrade9 + 500*numOfUpgrade10 + 500*numOfUpgrade11 + 500*numOfUpgrade12 + 500*numOfUpgrade13 + 500*numOfUpgrade14 + 500*numOfUpgrade15 + 500*numOfUpgrade16 + 500*numOfUpgrade17;
              };
            } else {
              moneyPerSecond += 50*numOfUpgrade2 + 50*numOfUpgrade3 + 50*numOfUpgrade4 + 50*numOfUpgrade5 + 50*numOfUpgrade6 + 50*numOfUpgrade7 + 50*numOfUpgrade8 + 50*numOfUpgrade9 + 50*numOfUpgrade10 + 50*numOfUpgrade11 + 50*numOfUpgrade12 + 50*numOfUpgrade13 + 50*numOfUpgrade14 + 50*numOfUpgrade15 + 50*numOfUpgrade16 + 50*numOfUpgrade17;
            };
          } else {
            moneyPerSecond += 5*numOfUpgrade2 + 5*numOfUpgrade3 + 5*numOfUpgrade4 + 5*numOfUpgrade5 + 5*numOfUpgrade6 + 5*numOfUpgrade7 + 5*numOfUpgrade8 + 5*numOfUpgrade9 + 5*numOfUpgrade10 + 5*numOfUpgrade11 + 5*numOfUpgrade12 + 5*numOfUpgrade13 + 5*numOfUpgrade14 + 5*numOfUpgrade15 + 5*numOfUpgrade16 + 5*numOfUpgrade17;
          };
        } else {
          moneyPerSecond += 0.5*numOfUpgrade2 + 0.5*numOfUpgrade3 + 0.5*numOfUpgrade4 + 0.5*numOfUpgrade5 + 0.5*numOfUpgrade6 + 0.5*numOfUpgrade7 + 0.5*numOfUpgrade8 + 0.5*numOfUpgrade9 + 0.5*numOfUpgrade10 + 0.5*numOfUpgrade11 + 0.5*numOfUpgrade12 + 0.5*numOfUpgrade13 + 0.5*numOfUpgrade14 + 0.5*numOfUpgrade15 + 0.5*numOfUpgrade16 + 0.5*numOfUpgrade17;
        };
      } else {
        moneyPerSecond += 0.1*numOfUpgrade2 + 0.1*numOfUpgrade3 + 0.1*numOfUpgrade4 + 0.1*numOfUpgrade5 + 0.1*numOfUpgrade6 + 0.1*numOfUpgrade7 + 0.1*numOfUpgrade8 + 0.1*numOfUpgrade9 + 0.1*numOfUpgrade10 + 0.1*numOfUpgrade11 + 0.1*numOfUpgrade12 + 0.1*numOfUpgrade13 + 0.1*numOfUpgrade14 + 0.1*numOfUpgrade15 + 0.1*numOfUpgrade16 + 0.1*numOfUpgrade17;
      };
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

  output1.textContent = "number: 0 cost: " + costOfUpgrade1;
  output2.textContent = "number: 0 cost: " + costOfUpgrade2;
  output3.textContent = "number: 0 cost: " + costOfUpgrade3;
  output4.textContent = "number: 0 cost: " + costOfUpgrade4;
  output5.textContent = "number: 0 cost: " + costOfUpgrade5;
  output6.textContent = "number: 0 cost: " + costOfUpgrade6;
  output7.textContent = "number: 0 cost: " + costOfUpgrade7;
  output8.textContent = "number: 0 cost: " + costOfUpgrade8;
  output9.textContent = "number: 0 cost: " + costOfUpgrade9;
  output10.textContent = "number: 0 cost: " + costOfUpgrade10;
  output11.textContent = "number: 0 cost: " + costOfUpgrade11;
  output12.textContent = "number: 0 cost: " + costOfUpgrade12;
  output13.textContent = "number: 0 cost: " + costOfUpgrade13;
  output14.textContent = "number: 0 cost: " + costOfUpgrade14;
  output15.textContent = "number: 0 cost: " + costOfUpgrade15;
  output16.textContent = "number: 0 cost: " + costOfUpgrade16;
  output17.textContent = "number: 0 cost: " + costOfUpgrade17;
  
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
