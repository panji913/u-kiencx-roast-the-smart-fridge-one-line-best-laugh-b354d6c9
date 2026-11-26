import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My smart fridge logs every midnight opening and flashes a disappointed emoji, like a snitch with a touchscreen that still cannot keep the ice cream frozen.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
