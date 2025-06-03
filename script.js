function generateMultiplier() {
  const multiplier = (Math.random() * (5 - 1) + 1).toFixed(2);
  document.getElementById("result").innerText = `Multiplier: ${multiplier}×`;
}
