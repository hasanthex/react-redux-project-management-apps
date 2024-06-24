function CreateTask({formData, onFormChange}){



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
                    className="pl-2"
                    type="text"
                    placeholder="Details"
                    name="details"
                    value={formData.details}
                    onChange={onFormChange}/>

                <button
                    className="flex items-center justify-center w-6 h-6 ml-auto text-indigo-500 rounded hover:bg-indigo-500 hover:text-indigo-100">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6">
                        </path>
                    </svg>
                </button>
            </div>

        </div>
    );
}

export default CreateTask;