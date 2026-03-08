import { HashRouter, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Insights } from './pages/Insights';

import { InsightDetail } from './pages/InsightDetail';

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-[#FDFBF7] text-gray-800 font-sans selection:bg-gray-200 selection:text-black flex justify-center">
        <div className="max-w-6xl w-full flex flex-col md:flex-row gap-12 lg:gap-24 p-8 md:p-16 lg:p-24">
          <Sidebar />
          <main className="flex-1 min-w-0">
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/insights/:slug" element={<InsightDetail />} />
            </Routes>
          </main>
        </div>
      </div>
    </HashRouter>
  );
}
