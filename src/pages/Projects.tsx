import { projects } from '../utils/markdown';
import { MasonryGrid, MasonryItem } from '../components/MasonryGrid';
import { Card } from '../components/Card';

export function Projects() {
  return (
    <div className="animate-in fade-in duration-700 slide-in-from-bottom-4">
      <h2 className="text-3xl font-medium mb-10 text-gray-900 tracking-tight">Projects</h2>
      {projects.length === 0 ? (
        <div className="text-gray-500">No projects found. Please add markdown files to /content/projects/</div>
      ) : (
        <MasonryGrid>
          {projects.map(doc => (
            <MasonryItem key={doc.slug}>
              <Card doc={doc} />
            </MasonryItem>
          ))}
        </MasonryGrid>
      )}
    </div>
  );
}
