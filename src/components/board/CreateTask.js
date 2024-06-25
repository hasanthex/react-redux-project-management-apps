import { useSelector, useDispatch } from "react-redux";
import { format } from 'date-fns';
import { add } from "../../redux/board/boardActions";

function CreateTask({formData, onFormChange}){
    const testingCount = useSelector((state) => state.item);
    const dispatch = useDispatch();

    const addNewTask = () => {
        console.log(formData);

        if(formData.title == ''){
            alert("Task Title can't be empty.");
            return false;
        }
        if(formData.details == ''){
            alert("Task Details can't be empty.");
            return false;
        }

        const now = new Date();

        const task = {
            ...formData,
            id: Date.now(),
            comments: [],
            attach: [],
            category: "working",
            createdAt: format(now, 'MM-dd-yyyy')
        }

        // push form data to task list
        dispatch(add(task));

        formData.title = "";
        formData.details = "";

        console.log(testingCount);
    }

    return (
        <div className="flex flex-col flex-shrink-0 w-72">
            <div className="flex items-center flex-shrink-0 h-10 px-2">

                <input
                    className="pl-2 mr-3"
                    type="text"
                    placeholder="Task Title"
                    name="title"
                    value={formData.title}
                    onChange={onFormChange}
                />

                <input
                    className="pl-2 mr-3"
                    type="text"
                    placeholder="Details"
                    name="details"
                    value={formData.details}
                    onChange={onFormChange}/>

                <select name="category" value={formData.category} onChange={onFormChange}>
                    <option value="">-- Select an option --</option>
                    <option value="working">Working</option>
                    <option value="pending">Pending</option>
                    <option value="testing">Testing</option>
                    <option value="done">Done</option>
                </select>

                <button
                    className="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100"
                    onClick={addNewTask}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </button>
            </div>

        </div>
    );
}

export default CreateTask;