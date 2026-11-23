// u-mfnakmal-dad-joke-showdown-1d2ce3e5: one dad joke, written to entry.txt.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const filePath = join(outDir, 'entry.txt');
const joke = "Careful with that gravy boat, son, it's already navigating some pretty choppy waters tonight.";

writeFileSync(filePath, joke, 'utf8');
