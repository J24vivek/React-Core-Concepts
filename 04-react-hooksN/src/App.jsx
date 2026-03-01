import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { X } from 'lucide-react';





function App() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [task, seTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];

    copyTask.push({
      title,
      details,
    });

    seTask(copyTask);
    console.log(task);

    setTitle("");
    setDetails("");
  };


  const deleteHandler = (index) => {
    const copyTask = [...task];
    copyTask.splice(index, 1);
    seTask(copyTask);
  };

  return (
    <div className="h-screen lg:overflow-hidden lg:flex">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex lg:w-[33%] flex-col gap-3 items-start px-10 py-7"
      >
        <label className="text-lg font-bold" htmlFor="">
          CREATE NEW NOTES
        </label>
        <input
          className="w-full px-5 py-2 border rounded outline-none"
          type="text"
          placeholder="Enter Notes Heading.."
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          className="w-full px-5 h-30 py-2 border rounded outline-none"
          type="text"
          placeholder="Enter Notes Content.."
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />
        <button className="w-full active:scale-98 bg-blue-300 border px-5 py-2 rounded hover:bg-blue-400">
          Add Note
        </button>
      </form>

      <div className="h-100vh lg:border-l-2 lg:w-2/3 pr-5 pl-15 py-7">
        <h1 className="text-xl font-bold">YOUR NOTES</h1>
        <div className="lg:h-[90vh] flex flex-wrap items-start gap-x-5 overflow-auto pt-3">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="relative h-60 w-95 pl-6 pr-5 pt-10 rounded-2xl bg-[url('https://img.freepik.com/free-vector/wooden-banner-isolated-cartoon_1308-135243.jpg?semt=ais_hybrid&w=740&q=80')] bg-cover bg-center"
              >
                <h2 onClick={() => deleteHandler(idx)} className="absolute top-10 right-7 bg-red-600 p-1 rounded-full text-white cursor-pointer"><X size={16} strokeWidth={2.5} /></h2>
                <h3 className="text-md font-bold pl-5">--- {elem.title}</h3>
                <p className="p-4 text-black-900">{elem.details}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
