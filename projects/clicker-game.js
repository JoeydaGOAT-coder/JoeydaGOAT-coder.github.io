let money = 0;
let moneyPerClick = 1;
const coinClicked = () => {
  money = money+moneyPerClick;
  console.log("test");
};
document.getElementById("coin").onClick = coinClicked;
document.write("money: $" + money);
console.log("test2");
