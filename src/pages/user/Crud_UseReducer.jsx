import React, { useState, useReducer, createContext } from "react";
const TasksContext = createContext(null);
const TaskDispatchContext = createContext(null);

function AddTask({ onAddTask }) {
  const [text, setText] = useState("");
  return (
    <>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-4"
        placeholder="add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => {
          setText("");
          onAddTask(text);
        }}
      >
        AddTask
      </button>
    </>
  );
}   
function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
          </li>
        ))}
      </ul>
    </>
  );
}

function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input 
          className="mx-[10px]"
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button className="mx-[10px]" onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button className="mx-[10px]" onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <label className="">
      <input className="mx-[10px]"
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          onChange({
            ...task,
            done: e.target.checked,
          });
        }}
      />
      {taskContent}
      <button className="mx-[10px]" onClick={() => onDelete(task.id)}>Delete</button>
    </label>
  );
}
export const TaskApp = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  function handleAddTask(text) {
    dispatch({
      type: "added",
      id: "nextId++",
      text: text,
    });
  }
  function handleChangeTask(task) {
    dispatch({
      type: "changed",
      task: task,
    });
  }
  function handleDeleteTask(id) {
    dispatch({
      type: "deleted",
      id: id,
    });
  }
  return (
    <>
    <TasksContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        <div className="flex items-center justify-center">
        <h1>day of kyoto</h1>
       
        <AddTask onAddTask={handleAddTask} />
        <TaskList
          tasks={tasks}
          onChangeTask={handleChangeTask}
          onDeleteTask={handleDeleteTask}
        />
        </div>
      </TaskDispatchContext.Provider>
    </TasksContext.Provider>
    <div className="flex">
    <img src="https://placecats.com/millie/300/150" alt="" />
    <img src="https://placecats.com/neo/300/200" alt="" />
    <img src="https://placecats.com/millie_neo/300/200" alt="" />
    <img src="https://placecats.com/neo_banana/300/200" alt="" />
    <img src="https://placecats.com/neo_2/300/200" alt="" />
    <img src="https://placecats.com/bella/300/200" alt="" />
    </div>
    </>
  );
};
function tasksReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((task) => {
        if (task.id === action.task.id) {
          return action.task;
        } else {
          return task;
        }
      });
    }
    case "deleted":
      return tasks.filter((task) => task.id !== action.id);
    default:
      throw Error(`Invalid action ${action.type}`);
  }
}
let nextId = 3;
const initialTasks = [
  { id: 0, text: "watching japan animal video", done: true },
  { id: 1, text: "Phu Si mountain climb ", done: false },
  { id: 2, text: "go red Street", done: false },
];
