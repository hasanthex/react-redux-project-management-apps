import {useState} from "react";
import {Provider} from "react-redux";
import Store from "./redux/store";
import WorkingBoard from "./components/board/WorkingBoard";
import TestingBoard from "./components/board/TestingBoard";
import CreateTask from "./components/board/CreateTask";

function App() {
  const [formData, setFormData] = useState({ title: "", details: ""});

  const handleFormChange = (event) => {
    const { name, value} = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
      <Provider store={Store}>
          <div className="App">
            <div
                className="flex flex-col w-screen h-screen overflow-auto text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200">
              <div className="flex items-center flex-shrink-0 w-full h-16 px-10 bg-white bg-opacity-75">
                <svg className="w-8 h-8 text-indigo-600 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
                </svg>
                <input
                    className="flex items-center h-10 px-4 ml-10 text-sm bg-gray-200 rounded-full focus:outline-none focus:ring"
                    type="search" placeholder="Search for anything…"/>
                <div className="ml-10">
                  <a className="mx-2 text-sm font-semibold text-indigo-700" href="#">Projects</a>
                  <a className="mx-2 text-sm font-semibold text-gray-600 hover:text-indigo-700" href="#">
                    Task Board
                  </a>
                </div>
                <button
                    className="flex items-center justify-center w-8 h-8 ml-auto overflow-hidden rounded-full cursor-pointer">
                  <img
                      src="https://assets.codepen.io/5041378/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1600304177&width=512"
                      alt=""/>
                </button>
              </div>

              <div className="px-10 mt-6">
                <h1 className="text-2xl font-bold">Team Project Board</h1>
                <CreateTask formData={formData} onFormChange={handleFormChange}/>
              </div>

              <div className="flex flex-grow px-10 mt-4 space-x-6 overflow-auto">
                <WorkingBoard/>
                <TestingBoard/>
              </div>
            </div>
          </div>
      </Provider>
  );
}

export default App;
