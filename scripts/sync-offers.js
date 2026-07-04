/** 將 data/offers.json 同步至 offers-data.js（供離線 HTML 使用） */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const jsonPath = path.join(root, 'data', 'offers.json');
const outPath = path.join(root, 'offers-data.js');

const offers = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
const content = `// 由 data/offers.json 自動產生，請執行 npm run sync-offers 更新\nconst OFFERS_DATA = ${JSON.stringify(offers, null, 2)};\n`;

fs.writeFileSync(outPath, content, 'utf-8');
console.log(`已更新 ${outPath}（${offers.length} 筆優惠）`);
