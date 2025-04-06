import { FaPen, FaTrash } from "react-icons/fa";
import { Task } from "../../../types/task"; // Adjust if needed
import { useOverflow } from "../../../hooks/useOverflow";
import { useNavigate } from "react-router-dom";
import { handleDeleteTask } from "../../../services/taskService";

type Props = {
    task: Task;
    handleDelete: (id: number) => void
};

const TaskListRow = ({ task, handleDelete }: Props) => {
    const { ref: titleRef, isOverflowing: titleOverflow } = useOverflow();
    const navigate = useNavigate();

    return (
        <div className="flex items-center bg-white shadow-sm rounded-lg px-6 py-4 mb-3 hover:shadow-md transition-shadow duration-200">
        
            {/* Date + Priority */}
            <div className="flex items-center gap-3 flex-[2] pr-4 border-r border-gray-200">
                <span className="text-sm text-[#735E3C] font-medium">{task.dueDate}</span>
                <span
                    className={`w-3 h-3 rounded-full ${
                        task.hasPriority ? "bg-red-600" : "bg-yellow-400"
                    }`}
                    title={task.hasPriority ? "High priority" : "Normal priority"}
                />
            </div>

            {/* Title */}
            <div className="flex flex-col flex-[16] px-6 border-r border-gray-200">
                <div className="relative group">
                    <span
                        ref={titleRef}
                        className="text-base font-semibold text-[#2E2E2E] overflow-hidden line-clamp-1"
                    >
                        {task.title}
                    </span>
                    {titleOverflow && (
                        <div className="hidden group-hover:block absolute z-10 top-full mt-1 bg-white border border-gray-300 rounded-md shadow p-2 text-sm max-w-xs w-max">
                        {task.title}
                        </div>
                    )}
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-8 flex-[2] pl-6">
                <button
                    onClick={() => navigate(`/tasks/edit/${task.id}`)}
                    className="cursor-pointer text-[#C97E4D] hover:text-[#9f5d2d] transition"
                    title="Edit"
                >
                    <FaPen size={16} />
                </button>
                <button
                    onClick={async () => {
                        handleDeleteTask(task.id);
                        handleDelete(task.id);
                    }}
                    className="cursor-pointer text-red-600 hover:text-red-700 transition"
                    title="Delete"
                >
                    <FaTrash size={16} />
                </button>
            </div>
        </div>


    );
};

export default TaskListRow;
