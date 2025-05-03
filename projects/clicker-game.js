const nothing = true
let money = 0;
let moneyPerClick = 1;
const coinClicked = () => {
  money = money+moneyPerClick;
};
if (document.getElementById("coin").onclick) {
  document.write("money: $" + money)
}
