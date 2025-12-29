"use client";

import { useState } from "react";

export default function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = () => {
    if (!task.trim()) return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg dark:bg-zinc-900">
        <h1 className="mb-4 text-center text-2xl font-semibold text-black dark:text-white">
           To-Do App
        </h1>

        {/* Input */}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter a task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="w-full rounded-md border px-3 py-2 text-black focus:outline-none focus:ring dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
          />
          <button
            onClick={addTask}
            className="rounded-md bg-black px-4 py-2 text-white hover:bg-zinc-800 dark:bg-white dark:text-black"
          >
            Add
          </button>
        </div>

        {/* Task List */}
        <ul className="mt-4 space-y-2">
          {tasks.length === 0 && (
            <p className="text-center text-sm text-zinc-500">
              No tasks added yet
            </p>
          )}

          {tasks.map((t, index) => (
            <li
              key={index}
              className="flex items-center justify-between rounded-md bg-zinc-100 px-3 py-2 dark:bg-zinc-800"
            >
              <span className="text-black dark:text-white">{t}</span>
              <button
                onClick={() => deleteTask(index)}
                className="text-sm text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
