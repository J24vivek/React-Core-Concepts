import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { X, Plus } from 'lucide-react';





function App() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [subpoints, setSubpoints] = useState([""]);

  const [task, seTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];

    copyTask.push({
      title,
      details,
      subpoints,
    });

    seTask(copyTask);
    console.log(task);

    setTitle("");
    setDetails("");
    setSubpoints([""]);
  };


  const deleteHandler = (index) => {
    const copyTask = [...task];
    copyTask.splice(index, 1);
    seTask(copyTask);
  };

  const addSubpointAt = (index) => {
    setSubpoints((p) => {
      const next = [...p];
      next.splice(index + 1, 0, "");
      return next;
    });
  };

  const updateSubpoint = (index, value) => {
    setSubpoints((p) => p.map((s, i) => (i === index ? value : s)));
  };

  const deleteSubpoint = (index) => {
    setSubpoints((p) => {
      if (p.length <= 1) return [""];
      return p.filter((_, i) => i !== index);
    });
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
        <div className="w-full flex flex-col gap-2">
          {subpoints.map((s, i) => (
            <div key={i} className="flex items-center gap-2">
              <input
                type="text"
                className="flex-1 px-4 py-2 border rounded outline-none"
                placeholder="Subpoint"
                value={s}
                onChange={(e) => updateSubpoint(i, e.target.value)}
              />
              {i === subpoints.length - 1 ? (
                <button
                  type="button"
                  onClick={() => addSubpointAt(i)}
                  className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300 flex items-center"
                >
                  <Plus size={16} />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => deleteSubpoint(i)}
                  className="px-2 py-2 text-red-600 rounded hover:bg-red-100 flex items-center"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          ))}
        </div>
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
                className="relative min-h-130 max-h-130 w-95 pl-6 pr-5 pt-10 mb-5 mt-3 rounded-2xl bg-[url('E:\\Learnings\\ReactJS\\04-react-hooksN\\sticky.jpg')] bg-cover bg-center overflow-hidden"
              >
                <h2 onClick={() => deleteHandler(idx)} className="absolute top-5 right-7 bg-red-600 p-1 rounded-full text-white cursor-pointer"><X size={10} strokeWidth={2.5} /></h2>
                <h3 className="text-md font-bold pl-3 mt-2 mb-2">🎯 {elem.title}</h3>
                <div className="pl-4 pr-4 pt-0 text-black-900 bg-white/0 rounded max-h-97 overflow-auto slim-scrollbar scrollbar-thumb-gray-100 scrollbar-track-gray-700  ">
                  <p className="mb-2 mt-0">{elem.details}</p>
                  {elem.subpoints && elem.subpoints.length > 0 && (
                    <ul className="list-disc pl-5 space-y-1 mb-5">
                      {elem.subpoints.map((s, si) => (
                        <li key={si} className="text-sm">{s}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
