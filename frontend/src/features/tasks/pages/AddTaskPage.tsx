import { useEffect, useState } from "react";
import { handleAddTask } from "../../../services/taskService";
import { CreateTaskPayload } from "../../../types/task";
import { useNavigate } from "react-router-dom";
import Toast from "../../../components/alerts/Toast";

const AddTaskPage = () => {
    const [title, setTitle] = useState("");
    const [dueDate, setDueDate] = useState<Date | null>(null);
    const [estimatedTime, setEstimatedTime] = useState<number>(0);
    const [hasPriority, setHasPriority] = useState(false);
    const navigate = useNavigate();
    const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

    useEffect(() => {
        if (toast) {
            const timer = setTimeout(() => setToast(null), 3000);
            return () => clearTimeout(timer);
        }
    }, [toast]);
    

    const validateForm = () => {
        if (!title.trim()) return "Title is required.";
        if (!dueDate) return "Please select a due date.";
        if (estimatedTime <= 0) return "Estimated time must be greater than 0.";
        return null;
    };

    const handleSave = async () => {
        const error = validateForm();
        if (error) {
            setToast({ message: error, type: "error" });
            return;
        }
    
        const task: CreateTaskPayload = {
            title,
            hasPriority,
            dueDate: dueDate?.toISOString().split("T")[0] ?? "",
            estimatedTime,
            completed: false,
            status: "PENDING",
            sessionsCount: 0
        };
    
        try {
            await handleAddTask(task);
            setToast({ message: "Task added successfully!", type: "success" });
            setTimeout(() => navigate('/'), 1000); // redirect after short delay
        } catch (err) {
            console.error("Failed to save task:", err);
            setToast({ message: "Something went wrong while saving the task.", type: "error" });
        }
    };
    

    return (
        <>
            {toast && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={() => setToast(null)}
                />
            )}

            <div className="min-h-screen w-full bg-[#F3F4F8] px-4 py-12 flex justify-center items-start overflow-x-hidden overflow-y-auto">
                <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl p-8 sm:p-12 md:p-16">
                    <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#3E2C1C] mb-10 tracking-tight">
                        Add Task
                    </h1>
            
                    <form className="space-y-10">
                        {/* Title */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="title" className="text-sm font-semibold text-[#3E2C1C] pl-1">
                                Title
                            </label>
                            <input
                                id="title"
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="e.g. Finish report"
                                className="w-full rounded-md border border-[#E0CFBE] bg-[#F9F9F9] text-[#5A4B3B] placeholder-[#C2B9B0] px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#C97E4D] transition"
                            />
                        </div>
                
                        {/* Dates + Time */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="dueDate" className="text-sm font-semibold text-[#3E2C1C] pl-1">
                                    Due Date
                                </label>
                                <input
                                    id="dueDate"
                                    type="date"
                                    value={dueDate ? dueDate.toISOString().split("T")[0] : ""}
                                    onChange={(e) => setDueDate(e.target.value ? new Date(e.target.value) : null)}
                                    className="w-full rounded-md border border-[#E0CFBE] bg-[#F9F9F9] text-[#5A4B3B] px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#C97E4D] transition"
                                />
                            </div>
                
                            <div className="flex flex-col gap-2">
                                <label htmlFor="estimatedTime" className="text-sm font-semibold text-[#3E2C1C] pl-1">
                                    Estimated Time (hours)
                                </label>
                                <input
                                    id="estimatedTime"
                                    type="number"
                                    min={0}
                                    value={estimatedTime}
                                    onChange={(e) => setEstimatedTime(parseFloat(e.target.value))}
                                    className="w-full rounded-md border border-[#E0CFBE] bg-[#F9F9F9] text-[#5A4B3B] px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#C97E4D] transition"
                                />
                            </div>
                        </div>
                
                        {/* Priority Toggle */}
                        <div className="flex items-center space-x-3 pt-1">
                            <input
                                id="hasPriority"
                                type="checkbox"
                                checked={hasPriority}
                                onChange={(e) => setHasPriority(e.target.checked)}
                                className="w-5 h-5 rounded text-[#C97E4D] border-[#C97E4D] focus:ring-[#C97E4D] cursor-pointer"
                            />
                            <label htmlFor="hasPriority" className="text-sm font-medium text-[#3E2C1C] cursor-pointer">
                                Mark as High Priority
                            </label>
                        </div>
                
                        {/* Submit Button */}
                        <div className="flex justify-center pt-4">
                            <button
                                type="button"
                                onClick={handleSave}
                                className="cursor-pointer bg-[#C97E4D] hover:brightness-105 hover:scale-105 transition-transform duration-200 px-10 py-3 rounded-full text-white font-semibold text-lg shadow-md"
                            >
                                Save Task
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddTaskPage;
