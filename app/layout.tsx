import './globals.css';

import Navbar
from '@/components/Navbar';

import {
  TaskProvider,
}
from '@/context/TaskContext';

export default function RootLayout({
  children,
}) {
  return (
    <html>

      <body>

        <TaskProvider>

          <Navbar />

          {children}

        </TaskProvider>

      </body>

    </html>
  );
}