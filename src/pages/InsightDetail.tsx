import { useParams, Navigate, Link } from 'react-router-dom';
import { insights } from '../utils/markdown';
import { MarkdownRenderer } from '../components/MarkdownRenderer';
import { ArrowLeft } from 'lucide-react';

export function InsightDetail() {
    const { slug } = useParams();
    const doc = insights.find(d => d.slug === slug);

    if (!doc) {
        return <Navigate to="/insights" replace />;
    }

    return (
        <article className="animate-in fade-in duration-700 slide-in-from-bottom-4 max-w-3xl mx-auto">
            <div className="mb-8">
                <Link
                    to="/insights"
                    className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors mb-6 text-sm font-medium"
                >
                    <ArrowLeft size={16} />
                    Back to Insights
                </Link>
                <h1 className="text-3xl md:text-4xl font-medium text-gray-900 tracking-tight leading-tight mb-4">
                    {doc.title}
                </h1>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                        {doc.date && <time dateTime={doc.date} className="font-mono">{doc.date}</time>}
                        {doc.tags && doc.tags.length > 0 && (
                            <div className="flex gap-2">
                                {doc.tags.map(tag => (
                                    <span key={tag} className="px-2 py-0.5 bg-gray-50 rounded text-xs border border-gray-100">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>

                    {doc.translation && (
                        <Link
                            to={`/insights/${doc.translation}`}
                            className="inline-flex items-center self-start sm:self-auto px-4 py-1.5 text-xs font-medium text-gray-600 bg-gray-100/80 hover:bg-gray-200 hover:text-gray-900 rounded-full transition-colors border border-transparent backdrop-blur-sm"
                        >
                            {doc.slug.endsWith('-en') ? "阅读中文版" : "Read in English"}
                        </Link>
                    )}
                </div>
            </div>

            {doc.image && (
                <img
                    src={doc.image}
                    alt={doc.title}
                    className="w-full h-64 md:h-96 object-cover rounded-2xl bg-gray-50 mb-10"
                    referrerPolicy="no-referrer"
                />
            )}

            <div className="prose prose-gray prose-headings:font-medium max-w-none mb-16 break-words">
                <MarkdownRenderer content={doc.content} />
            </div>

            <footer className="mt-16 pt-8 border-t border-gray-100 text-sm text-gray-400">
                <p>
                    This work is licensed under a <a href="http://creativecommons.org/licenses/by-nc/4.0/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600 transition-colors">Creative Commons Attribution-NonCommercial 4.0 International License</a>.
                </p>
            </footer>
        </article>
    );
}
