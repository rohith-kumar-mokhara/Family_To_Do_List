import * as React from "react";
import "./Addtask.scss";
import Delete from "../../assets/categoryImages/Delete.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify"
import Select from "react-select";

export interface AddTaskProps {
        taskTitle: string;
        date: string;
        category: string;
        note: string;
        reminder: string;
        priority: string;
        assignedTo: string[]
}

const familyMembers = [
    { value: "Rohith", label: "Rohith" },
    { value: "Yashwanth", label: "Yashwanth" },
    { value: "Veneela", label: "Veneela" },
    { value: "Saradhi", label: "Saradhi" },
    { value: "Durga", label: "Durga" }
];

export default function AddTask(props: AddTaskProps) {
    const [task, setTask] = useState<AddTaskProps>({
        taskTitle: "",
        date: "",
        category: "",
        note: "",
        reminder: "",
        priority: "",
        assignedTo: []
    });

    const [errors,setError] = useState({
        taskError: "",
        dateError: "",
        reminderError: "",
        categoryError: ""
    })

    const navigate = useNavigate();

    //validation of each input field is pending
    const handleSubmit = async() =>{
        if(task.taskTitle === "" || task.taskTitle === null || task.taskTitle === undefined ){
            console.log("task title is not entered")
            toast.error("Please Enter Task Title" ,{autoClose:1500})
            return;
        }
        if(task.date === "" || task.date === null || task.date === undefined ){
            toast.error("Please Enter Date" ,{autoClose:1500})
            return;
        }
        if(task.category === "" || task.category === null || task.category === undefined ){
            toast.error("Please Enter Category" ,{autoClose:1500})
            return;
        }
        if(task.reminder === "" || task.reminder === null || task.reminder === undefined ){
            toast.error("Please Enter Reminder" ,{autoClose:1500})
            return;
        }

        if(task.priority === "" || task.priority === null || task.priority === undefined){
            task.priority = "1";
        }
    }

    // Function to handle changes in input fields
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        console.log(task.taskTitle, task.category,task.date, task.reminder, task.note, task.priority);
        setTask(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleAssignChange = (e) => {
        const options = e;
        console.log("options are ",options);
        const assignedTo: string[] = [];
        for (let i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                assignedTo.push(options[i].value);
            }
        }
        setTask(prevState => ({
            ...prevState,
            assignedTo
        }));
    };

    return (
        <div className="Addtask-page">
            <div className="Addtask-container-wrapper">
                <div className="Addtask-container">
                    <div className="Addtask-form">
                        <div className="addtask-label">
                            <label htmlFor="title-label">Task Title:</label>
                        </div>
                        <div className="addtask-title">
                            <input
                                className="task-input"
                                placeholder="Task Title"
                                id="title-label"
                                type="text"
                                name="taskTitle"
                                value={task.taskTitle}
                                onChange={handleChange}
                            />
                        </div>
                        {errors.taskError && <div>{errors.taskError}</div>}
                        <div className="addtask-label">
                            <label htmlFor="date-label">Date:</label>
                        </div>
                        <div className="addtask-date">
                            <input
                                className="task-input"
                                type="date"
                                name="date"
                                id="date-label"
                                value={task.date}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="addtask-label">
                            <label htmlFor="category-label">Category:</label>
                        </div>
                        <select
                            id="category-label"
                            className="addtask-category"
                            name="category"
                            value={task.category}
                            onChange={handleChange}
                        >
                            <option className="category-option" value="">
                                Select Category
                            </option>
                            <option className="category-option" value="Task">
                                Task
                            </option>
                            <option className="category-option" value="Study">
                                Study
                            </option>
                            <option className="category-option" value="Sports">
                                Sports
                            </option>
                            <option className="category-option" value="Entertainment">
                                Entertainment
                            </option>

                            <option className="category-option" value="Finance">
                                Finance
                            </option>

                            <option className="category-option" value="Health">
                                Health
                            </option>

                            <option className="category-option" value="Home">
                                Home
                            </option>

                            <option className="category-option" value="Nutrition">
                                Nutrition
                            </option>
                            <option className="category-option" value="Coding">
                                Coding
                            </option>

                            <option className="category-option" value="Social">
                                Social
                            </option>

                            <option className="category-option" value="Art">
                                Art
                            </option>
                            
                        </select>
                        <div className="addtask-label">
                            <label htmlFor="note-label">Note:</label>
                        </div>
                        <div className="addtask-note">
                            <textarea
                                className="note-textarea"
                                id="note-label"
                                placeholder="Add note"
                                name="note"
                                value={task.note}
                                onChange={handleChange}
                                cols={30}
                                rows={10}
                            />
                        </div>
                        <div className="addtask-label">
                            <label htmlFor="reminder-label">Deadline:</label>
                        </div>
                        <div className="addtask-reminder">
                            <input
                                className="task-input"
                                id="reminder-label"
                                type="time"
                                placeholder="Select reminder"
                                name="reminder"
                                value={task.reminder}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="addtask-label">
                            <label htmlFor="priority-label">Priority:</label>
                        </div>
                        <div className="addtask-priority">
                            <input
                                className="task-input"
                                id="priority-label"
                                type="number"
                                name="priority"
                                value={task.priority}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="assignedTo">Assign To:</label>
                            <Select
                                id="assignedTo"
                                name="assignedTo"
                                value={task.assignedTo}
                                options={familyMembers}
                                isMulti = {true}
                                onChange={handleAssignChange}
                            />
                        </div>
                    </div>
                    <div className="buttons-addtask">
                        <div className="task-delete">
                            <button className="addtask-delete-button">Delete</button>
                        </div>
                        <div className="task-submit">
                            <button className="addtask-submit-button" onClick={handleSubmit}>Add Task</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
