import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

async function loadBuiltHtml() {
  return readFile(new URL('../dist/index.html', import.meta.url), 'utf8').catch(() => '');
}

test('builds a profile without direct contact details', async () => {
  const html = await loadBuiltHtml();
  assert.notEqual(html, '', 'dist/index.html must be built');
  assert.doesNotMatch(html, /jiwoo_0809@naver\.com|10-2548-4988|mailto:|tel:/i);
  assert.doesNotMatch(html, />Contact<|>연락처</);
});

test('keeps English as the default and preserves language switching', async () => {
  const html = await loadBuiltHtml();
  assert.notEqual(html, '', 'dist/index.html must be built');
  assert.match(html, /<body>/);
  assert.doesNotMatch(html, /<body[^>]*class="[^"]*korean/);
  assert.match(html, /function toggleLanguage\(\)/);
  assert.match(html, /class="lang-switch"/);
});

test('remains a self-contained deployable document', async () => {
  const html = await loadBuiltHtml();
  assert.notEqual(html, '', 'dist/index.html must be built');
  assert.match(html, /<style>[\s\S]*<\/style>/);
  assert.match(html, /src="data:image\/jpeg;base64,/);
  assert.doesNotMatch(html, /(?:src|href)="(?:\.\/|\.\.\/|file:)/i);
});

test('keeps safe project links and responsive styles', async () => {
  const html = await loadBuiltHtml();
  assert.notEqual(html, '', 'dist/index.html must be built');
  assert.match(html, /target="_blank" rel="noopener noreferrer"/);
  assert.match(html, /@media\(max-width:780px\)/);
});

test('renders portfolio navigation and section anchors', async () => {
  const html = await loadBuiltHtml();
  for (const id of ['about', 'experience', 'projects', 'activities']) {
    assert.match(html, new RegExp(`href="#${id}"`));
    assert.match(html, new RegExp(`id="${id}"`));
  }
});

test('renders two distinct calls to action', async () => {
  const html = await loadBuiltHtml();
  assert.match(html, /class="cta[^>]*" href="#projects"/);
  assert.match(html, /class="cta[^>]*" href="https:\/\/comply-ai-beauty-listing-studio-copy\.jiwoolee1129\.chatgpt\.site\/"/);
});

test('renders three project cards and timeline content', async () => {
  const html = await loadBuiltHtml();
  assert.equal((html.match(/class="project-card/g) || []).length, 3);
  assert.match(html, /class="timeline"/);
  assert.match(html, /English Conversation Instructor/);
  assert.match(html, /KNOT Supporters/);
});

test('supports reduced motion and print presentation', async () => {
  const html = await loadBuiltHtml();
  assert.match(html, /prefers-reduced-motion:reduce/);
  assert.match(html, /@media print/);
});
