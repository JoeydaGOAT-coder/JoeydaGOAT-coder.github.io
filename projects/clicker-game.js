window.addEventListener('load', () => { 
  const button = document.getElementById("add");
  const output = document.getElementById("output");

  let money = 0;
  const coinClicked = () => {
    return ++money;
  };
  button.addEventListener('click', () => {
    output.textContent = coinClicked();
  });
});
