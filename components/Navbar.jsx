import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-slate-200 px-6 py-4">
      <div className="max-w-2xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-red-500"
        >
          🍅 PomoDo
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-6 text-sm font-medium">

          <Link
            href="/"
            className="text-slate-600 hover:text-red-500 transition-colors"
          >
            Tasks
          </Link>

          <Link
            href="/timer"
            className="text-slate-600 hover:text-red-500 transition-colors"
          >
            Timer
          </Link>

        </div>

      </div>
    </nav>
  );
}