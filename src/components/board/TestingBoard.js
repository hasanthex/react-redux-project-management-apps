import { useSelector, useDispatch } from "react-redux";
import Card from "./card";

function TestingBoard({ }){

    const testingTaskList = useSelector((state) => state.item);

    const testingTaskCount = testingTaskList.reduce((accumulator, current) => {
        if(current.category === 'testing')
            return accumulator++;
    }, 0);

    return (
        <div className="flex flex-col flex-shrink-0 w-72">
            <div className="flex items-center flex-shrink-0 h-10 px-2">
                <span className="block text-sm font-semibold">Testing</span>
                <span
                    className="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">
                    {testingTaskCount}
                </span>
                <button
                    className="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6">
                        </path>
                    </svg>
                </button>
            </div>
            <div className="flex flex-col pb-2 overflow-auto">
                {/*render list here*/}
                {testingTaskList.map((data) => {
                    if(data.category === 'testing')
                        return <Card key={data.id} data={data} />
                })}

            </div>
        </div>
    );
}

export default TestingBoard;