import fs from 'fs';
import path from 'path';

const emojiRegex = /(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu;

function scan(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) {
      scan(full);
    } else if (full.endsWith('.jsx') || full.endsWith('.js') || full.endsWith('.css')) {
      const content = fs.readFileSync(full, 'utf8');
      if (emojiRegex.test(content)) {
        console.log(`Found emojis in ${full}`);
        const lines = content.split('\n');
        lines.forEach((l, i) => {
            if(l.match(emojiRegex)) console.log(`  ${i+1}: ${l}`);
        })
      }
    }
  }
}
scan('./src');
