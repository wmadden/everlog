import { readFileSync } from "fs";
import * as url from "url";

const cwd = url.fileURLToPath(new URL(".", import.meta.url));

const ulyssesLines = readFileSync(
  `${cwd}/james-joyce-ulysses.txt`,
  "utf-8"
).split(/\r?\n/);
const LOG_INTERVAL = 100;

function main() {
  let i = 0;
  setInterval(() => {
    console.log(ulyssesLines[i % ulyssesLines.length]);
    i += 1;
  }, LOG_INTERVAL);
}

main();
