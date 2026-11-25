import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Receipt, c. 2025. Humans kept these slips for years, in case anyone ever asked. No one ever asked.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
