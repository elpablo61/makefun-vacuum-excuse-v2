import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

// The Robot Vacuum's Best Excuse — writes one excuse to /output/entry.txt.
// Gate: entry.txt must be UTF-8 text of 1 to 140 characters, one line.
// The line is deadpan robot reportage: a concrete log fact (9 days) plus one
// escalation that stays inside the robot's map logic (deliveries, an order).
// entry.txt is the single source of truth; main.ts only copies it verbatim.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entryPath = join(fileURLToPath(new URL(".", import.meta.url)), "entry.txt");

mkdirSync(outDir, { recursive: true });
copyFileSync(entryPath, join(outDir, "entry.txt"));
