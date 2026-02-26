import { insights } from '../utils/markdown';
import { MasonryGrid, MasonryItem } from '../components/MasonryGrid';
import { Card } from '../components/Card';

export function Insights() {
  return (
    <div className="animate-in fade-in duration-700 slide-in-from-bottom-4">
      <h2 className="text-3xl font-medium mb-10 text-gray-900 tracking-tight">Insights</h2>
      {insights.length === 0 ? (
        <div className="text-gray-500">No insights found. Please add markdown files to /content/insights/</div>
      ) : (
        <MasonryGrid>
          {insights.map(doc => (
            <MasonryItem key={doc.slug}>
              <Card doc={doc} />
            </MasonryItem>
          ))}
        </MasonryGrid>
      )}
    </div>
  );
}
