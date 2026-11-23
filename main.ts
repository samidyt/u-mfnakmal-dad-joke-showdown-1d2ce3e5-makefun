// Dad Joke Showdown — make.fun entry (program/v1).
// Writes one original dad joke to /output/entry.txt, exactly as-is:
// 109 characters, UTF-8, no trailing newline — the joke is the whole entry.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I told my guitar I'd string it along forever. It said, 'That's the nicest thing anyone's ever fretted about.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
