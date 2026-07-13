import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const read = (path) => readFileSync(join(root, path), 'utf8');

const requiredFiles = [
  'src/app/about/page.tsx',
  'src/app/services/ai-transformation/page.tsx',
  'src/app/services/ai-automation/page.tsx',
  'src/app/services/ai-education/page.tsx',
  'src/app/industries/sme/page.tsx',
  'src/app/industries/engineering/page.tsx',
  'src/app/case-studies/page.tsx',
  'src/app/faq/page.tsx',
  'src/app/blog/page.tsx',
  'src/app/llms.txt/route.ts',
  'src/lib/ai-readable-content.ts',
];

for (const file of requiredFiles) {
  if (!existsSync(join(root, file))) {
    throw new Error(`Missing AI-readable file: ${file}`);
  }
}

const content = read('src/lib/ai-readable-content.ts');
const homepage = read('src/app/page.tsx');
const layout = read('src/app/layout.tsx');
const sitemap = read('src/app/sitemap.ts');
const robots = read('src/app/robots.ts');

const expectedNeedles = [
  ['entity description', content, 'AX Con is an AI Transformation consulting organization'],
  ['who we help', content, 'Who we help'],
  ['problems we solve', content, 'Problems we solve'],
  ['tools and methods', content, 'Tools and methods'],
  ['AI Native Company', content, 'AI Native Company'],
  ['RAG System Implementation', content, 'RAG System Implementation'],
  ['Internal AI Gateway', content, 'Internal AI Gateway'],
  ['SME AI Consulting', content, 'SME AI Consulting'],
  ['engineering industry', content, 'engineering companies'],
  ['10 question blog topics', content, '중소기업 AX 컨설팅 비용과 도입 절차'],
  ['homepage readable block', homepage, 'Who we help:'],
  ['professional service schema', layout, 'ProfessionalServiceJsonLd'],
  ['breadcrumb schema', layout, 'BreadcrumbListJsonLd'],
  ['sitemap llms', sitemap, '/llms.txt'],
  ['sitemap faq', sitemap, '/faq'],
  ['sitemap blog', sitemap, '/blog/ai-native-company'],
  ['robots allow llms', robots, '/llms.txt'],
];

for (const [label, haystack, needle] of expectedNeedles) {
  if (!haystack.includes(needle)) {
    throw new Error(`Missing ${label}: ${needle}`);
  }
}

const blogSlugs = [...content.matchAll(/slug: "([^"]+)"/g)].map((m) => m[1]);
if (blogSlugs.length < 10) {
  throw new Error(`Expected at least 10 AI-readable blog topics, got ${blogSlugs.length}`);
}

console.log('AI-readable contract ok');
