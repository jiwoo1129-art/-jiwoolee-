import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderPortfolio } from './portfolio-template.mjs';

const projectDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourcePath = 'C:\\Users\\jiwoo\\Downloads\\Jiwoo_Lee_Profile(202438771) (1).html';
const outputPath = path.join(projectDir, 'dist', 'index.html');

const source = await readFile(sourcePath, 'utf8');
const portraitSrc = source.match(/<img class="portrait"[^>]*src="([^"]+)"/)?.[1];

if (!portraitSrc?.startsWith('data:image/jpeg;base64,')) {
  throw new Error('Embedded portrait was not found');
}

await mkdir(path.dirname(outputPath), { recursive: true });
await writeFile(outputPath, renderPortfolio({ portraitSrc }), 'utf8');

console.log(`Built ${outputPath}`);
