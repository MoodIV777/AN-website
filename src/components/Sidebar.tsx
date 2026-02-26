import { Github, Mail } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export function Sidebar() {
  return (
    <aside className="w-full md:w-64 shrink-0 flex flex-col gap-10 md:sticky md:top-24 h-fit">
      <div>
        <h1 className="text-3xl font-medium tracking-tight text-gray-900">Alex Nie</h1>
        <p className="text-gray-500 mt-1 text-sm">下木</p>
      </div>

      <div className="flex gap-5 text-gray-900">
        <a href="mailto:alexnie1216@gmail.com" className="hover:text-gray-500 transition-colors">
          <Mail size={24} strokeWidth={1.5} />
        </a>
        <a href="https://github.com/MoodIV777" target="_blank" rel="noreferrer" className="hover:text-gray-500 transition-colors">
          <Github size={24} strokeWidth={1.5} />
        </a>
      </div>

      <nav className="flex flex-col gap-4 text-base font-medium mt-4">
        <NavLink
          to="/"
          className={({ isActive }) => `transition-colors ${isActive ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'}`}
          end
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => `transition-colors ${isActive ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'}`}
        >
          Projects
        </NavLink>
        <NavLink
          to="/insights"
          className={({ isActive }) => `transition-colors ${isActive ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'}`}
        >
          Insights
        </NavLink>
      </nav>
    </aside>
  );
}
