let money = 0;
let moneyPerClick = 1;
const coinClicked = () => {
  money = money+moneyPerClick;
};
document.getElementById("coin").onClick = coinClicked;
document.write("money: $" + money)

