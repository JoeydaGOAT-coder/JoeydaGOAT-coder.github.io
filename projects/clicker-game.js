let numberClicked = 0;
const clicked = () => {
  numberClicked = numberClicked+1;
};
document.getElementById("id").onClick = clicked;
document.write("clicked " + numberClicked + " times");
