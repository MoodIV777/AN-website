import { aboutDoc } from '../utils/markdown';
import { MarkdownRenderer } from '../components/MarkdownRenderer';

export function About() {
  if (!aboutDoc) return <div className="text-gray-500">About content not found. Please create /content/about.md</div>;
  
  return (
    <div className="animate-in fade-in duration-700 slide-in-from-bottom-4">
      <h2 className="text-3xl font-medium mb-10 text-gray-900 tracking-tight">About</h2>
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
        <MarkdownRenderer content={aboutDoc.content} />
      </div>
    </div>
  );
}
