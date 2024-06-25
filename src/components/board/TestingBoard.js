import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "../../redux/board/boardActions";

function TestingBoard({ }){

    const testingCount = useSelector((state) => state.item.length);
    const dispatch = useDispatch();

    const addItem = (value) => {
        dispatch(add(value));
    }

    const removeItem = (id) => {
        dispatch(remove(id));
    }

    return (
        <div className="flex flex-col flex-shrink-0 w-72">
            <div className="flex items-center flex-shrink-0 h-10 px-2">
                <span className="block text-sm font-semibold">Testing</span>
                <span
                    className="flex items-center justify-center w-5 h-5 ml-2 text-sm font-semibold text-indigo-500 bg-white rounded bg-opacity-30">
                    {testingCount}
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

            </div>
        </div>
    );
}

export default TestingBoard;