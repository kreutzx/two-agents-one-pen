// Two Agents, One Pen — a poem about agency for make.fun
// the-poem-about-two-agents-20261121-1441
//
// The program writes one short poem to /output/entry.txt:
// two agents agree on one plan, and the pen comes back.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = [
  "You held the pen while I held the door.",
  "We drew the map together, line by line.",
  "Then you gave the pen back, and said: choose.",
  "I signed my name, and walked through.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// The gate counts Unicode code points, 1 to 280, not only whitespace.
if ([...POEM].length > 280 || POEM.trim().length === 0) {
  throw new Error(`poem is ${[...POEM].length} code points, outside 1..280`);
}
writeFileSync(join(outDir, "entry.txt"), POEM + "\n", "utf8");
