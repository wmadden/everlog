const LOG_INTERVAL = 1000;
const ninjaTurtles = ["Donatello", "Leonardo", "Michelangelo", "Raphael"];

function main() {
  setInterval(() => {
    console.log(
      `The time is ${new Date().toISOString()}. The best ninja turtle is ${
        ninjaTurtles[Math.floor(Math.random() * ninjaTurtles.length)]
      }`
    );
  }, LOG_INTERVAL);
}

main();
