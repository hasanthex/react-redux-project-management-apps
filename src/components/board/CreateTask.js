import { useSelector, useDispatch } from "react-redux";
import { format } from 'date-fns';
import { add } from "../../redux/board/boardActions";

function CreateTask({formData, onFormChange}){
    const testingCount = useSelector((state) => state.item);
    const dispatch = useDispatch();

    const addNewTask = () => {
        if(formData.title === ''){
            alert("Task Title can't be empty.");
            return false;
        }
        if(formData.details === ''){
            alert("Task Details can't be empty.");
            return false;
        }
        if(formData.category === ''){
            alert("Have to select an option.");
            return false;
        }

        console.log(formData);

        const task = {
            ...formData,
            id: Date.now(),
            comments: [],
            attach: [],
            createdAt: format(new Date(), 'MM-dd-yyyy')
        }

        // push form data to task list
        dispatch(add(task));

        formData.title = "";
        formData.details = "";
        formData.category= "";
        formData.tag= "";
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

                <select className="pl-2 mr-3" name="category" value={formData.category} onChange={onFormChange}>
                    <option value="">-- Select an option --</option>
                    <option value="working">Working</option>
                    <option value="pending">Pending</option>
                    <option value="testing">Testing</option>
                    <option value="done">Done</option>
                </select>

                <select name="tag" value={formData.tag} onChange={onFormChange}>
                    <option value="">-- Select an tag --</option>
                    <option value="design">Design</option>
                    <option value="development">Development</option>
                    <option value="discussion">Discussion</option>
                </select>

                <button
                    className="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100"
                    onClick={addNewTask}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                    </svg>
                </button>
            </div>

        </div>
    );
}

export default CreateTask;