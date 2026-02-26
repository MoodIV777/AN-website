import { ReactNode } from 'react';

export function MasonryGrid({ children }: { children: ReactNode }) {
  return (
    <div className="columns-1 lg:columns-2 gap-8 space-y-8">
      {children}
    </div>
  );
}

export function MasonryItem({ children }: { children: ReactNode }) {
  return (
    <div className="break-inside-avoid">
      {children}
    </div>
  );
}
