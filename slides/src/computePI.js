



let steps = 0;
function CalculatePI() {
  let steps  = prompt("Enter number of steps:", "0");
  if (steps > 0) {
    let Pi = 0;
    let n = 1;
    for (i = 0; i < steps; i++) {
      Pi = Pi + (4 / n) - (4 / (n + 2));
      n += 4;
			debugger;
    }
  alert(Pi);
  }
  else {
    alert("Canceled or Error in input: Input must be positive.");
		}
}
