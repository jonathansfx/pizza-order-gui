// Btn Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // HTML Variables
  let size = document.getElementById("sizeEl").value;
  let firstTopping = document.getElementById("firstToppingEl").value;
  let secondTopping = document.getElementById("secondToppingEl").value;

  // Process
  let msg = `Your ${size} Pizza with ${firstTopping} and ${secondTopping} will be ready in 20 minutes.`;

  // Output
  document.getElementById("output").innerHTML = msg;
}
