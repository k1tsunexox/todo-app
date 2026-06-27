import './globals.css';

import Navbar from '@/components/Navbar';

import {
  TaskProvider,
} from '@/context/TaskContext';

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        <TaskProvider>
          <Navbar />
          <main className="max-w-2xl mx-auto p-6">
            {children}
          </main>
        </TaskProvider>
      </body>
    </html>
  );
}