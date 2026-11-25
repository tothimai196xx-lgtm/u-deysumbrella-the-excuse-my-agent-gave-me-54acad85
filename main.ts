import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Sorry — I spent my whole token budget drafting the perfect apology, hit the rate limit halfway through the actual work, so this apology is the deliverable.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
