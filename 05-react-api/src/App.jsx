import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios";

function App() {
  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`,
    );
    setUserData(response.data);
  };

  useEffect(
    function () {
      getData();
    },
    [index],
  );

  let printUserData = (
    <h3 className="text-center text-2xl font-bold absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
      Loading...
    </h3>
  );

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div
          className="p-2 shadow-neutral-600 shadow-md rounded-xl"
          key={idx}
        >
          <a href={elem.url} target="_blank">
            <div className="h-45 w-50  overflow-hidden rounded-xl">
              <img
                className="w-full h-full object-cover"
                src={elem.download_url}
                alt=""
              />
            </div>
            <h2 className="font-bold text-center mt-2">{elem.author}</h2>
          </a>
        </div>
      );
    });
  }

  return (
    <div className="h-screen overflow-auto bg-black text-white">
      <div className="h-[80%] flex flex-wrap gap-5 pt-10 mb-3 items-center justify-center">
        {printUserData}
      </div>
      <div className="flex justify-center items-center p-4 gap-5">
       

        <button
          onClick={() => {
            console.log("Prev. btn clicked");
            if (index > 1) {
              setIndex(index - 1);
              setUserData([]);
            }
          }}
          className="w-30 bg-amber-500 cursor-pointer active:scale-95 text-white px-4 py-2 rounded-md font-semibold"
        >
          Previous
        </button>
         <h1 className="text-center bg-transparent border border-amber-100 border-xl px-4 py-1 rounded top-2 right-5 m-4 text-xl font-bold">
          Page - {index}
        </h1>
        <button
          onClick={() => {
            console.log("Next Btn Clicked");
            setUserData([]);
            setIndex(index + 1);
          }}
          className="w-30 bg-amber-500 cursor-pointer active:scale-95 text-white px-4 py-2 rounded-md font-semibold"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
