import { MarkdownDoc } from '../utils/markdown';
import { MarkdownRenderer } from './MarkdownRenderer';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Card({ doc }: { doc: MarkdownDoc }) {
  return (
    <article className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-6">
      {doc.image && (
        <img
          src={doc.image}
          alt={doc.title}
          className="w-full h-56 object-cover rounded-xl bg-gray-50"
          referrerPolicy="no-referrer"
        />
      )}
      <div>
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-medium text-gray-900 tracking-tight">
            {doc.type === 'insight' ? (
              <Link to={`/insights/${doc.slug}`} className="hover:text-blue-600 flex items-center gap-1 group">
                {doc.title}
                <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
              </Link>
            ) : doc.link ? (
              <a href={doc.link} target="_blank" rel="noreferrer" className="hover:text-blue-600 flex items-center gap-1 group">
                {doc.title}
                <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
              </a>
            ) : (
              doc.title
            )}
          </h3>
          {doc.date && <span className="text-sm text-gray-400 whitespace-nowrap ml-4 font-mono">{doc.date}</span>}
        </div>

        <div className="text-gray-600">
          <MarkdownRenderer content={doc.summary || doc.content} />
        </div>
      </div>

      {doc.tags && doc.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-50">
          {doc.tags.map(tag => (
            <span key={tag} className="px-2.5 py-1 bg-gray-50 text-gray-500 text-xs rounded-md border border-gray-100 font-medium">
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
