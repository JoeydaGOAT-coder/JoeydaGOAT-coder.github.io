const nothing = true
let money = 0;
let moneyPerClick = 1;
const coinClicked = () => {
  money = money+moneyPerClick;
};
document.getElementById("coin").onclick = coinClicked();
document.write("money: $" + money)

