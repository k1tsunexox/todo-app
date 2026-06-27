import AddTaskForm
from '@/components/AddTaskForm';

import TaskList
from '@/components/TaskList';

export default function Home() {
  return (
    <>
      <h1 className="text-3xl mb-6">
        PomoDo
      </h1>

      <AddTaskForm />

      <TaskList />
    </>
  );
}