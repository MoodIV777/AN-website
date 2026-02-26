export interface MarkdownDoc {
  slug: string;
  type: 'about' | 'project' | 'insight';
  title: string;
  date?: string;
  tags?: string[];
  content: string;
  image?: string;
  link?: string;
}

export function parseMarkdown(raw: string, path: string): MarkdownDoc {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  let data: Record<string, string> = {};
  let content = raw;

  if (match) {
    const fm = match[1];
    content = match[2].trim();
    fm.split('\n').forEach(line => {
      const colonIndex = line.indexOf(':');
      if (colonIndex !== -1) {
        const key = line.slice(0, colonIndex).trim();
        const value = line.slice(colonIndex + 1).trim().replace(/^['"](.*)['"]$/, '$1');
        data[key] = value;
      }
    });
  }

  const type = path.includes('/projects/') ? 'project' : path.includes('/insights/') ? 'insight' : 'about';
  const slug = path.split('/').pop()?.replace('.md', '') || '';

  return {
    slug,
    type,
    title: data.title || slug,
    date: data.date,
    tags: data.tags ? data.tags.split(',').map(t => t.trim()) : [],
    content,
    image: data.image,
    link: data.link,
  };
}

// In Vite, we can use import.meta.glob to load all markdown files
const mdFiles = import.meta.glob('/content/**/*.md', { query: '?raw', import: 'default', eager: true });

export const allDocs: MarkdownDoc[] = Object.entries(mdFiles).map(([path, raw]) => {
  return parseMarkdown(raw as string, path);
});

export const aboutDoc = allDocs.find(d => d.type === 'about');
export const projects = allDocs.filter(d => d.type === 'project').sort((a, b) => (b.date || '').localeCompare(a.date || ''));
export const insights = allDocs.filter(d => d.type === 'insight').sort((a, b) => (b.date || '').localeCompare(a.date || ''));
