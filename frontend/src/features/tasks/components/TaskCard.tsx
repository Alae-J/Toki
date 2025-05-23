import { FiClock } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Task } from "../../../types/task";
import { useOverflow } from "../../../hooks/useOverflow";
import { getInspirationMessage } from "../../../utils/getInspirationMessage";

interface Props {
    key: number;
    task: Task;
    workDuration: number;
}

const TaskCard = ({ task, workDuration }: Props) => {
    const { ref: titleRef, isOverflowing: isTitleOverflowing } = useOverflow();
    const { ref: inspRef, isOverflowing: isInspOverflowing } = useOverflow();
    const total = Math.ceil(task.estimatedTime * 60 / workDuration);
    const progress = (task.sessionsCount / total) * 100;
    const navigate = useNavigate();
  
    return (
      <div className="relative bg-[#FAF8F3] hover:shadow-md transition hover:scale-[1.01] rounded-2xl shadow-sm w-full max-w-md p-6 flex flex-col space-y-4">
  
        {/* Start Pomodoro Button */}
        <button
          className="cursor-pointer absolute -top-3 -right-3 w-10 h-10 bg-[#FF7C7C] hover:bg-[#ff5c5c] text-white rounded-full shadow-md flex items-center justify-center z-10"
          onClick={() => navigate(`/pomodoro/${task.id}`)}
          title="Start Pomodoro"
        >
          <FiClock size={20} />
        </button>
  
        {/* Title */}
        <div className="relative group h-[1.5rem]">
            <div ref={titleRef} className="text-xl font-semibold text-[#37383B] leading-snug truncate overflow-hidden whitespace-nowrap">
                {task.title}
            </div>
            {isTitleOverflowing && (
                <div className="hidden group-hover:block absolute z-10 top-full mt-1 bg-white border border-gray-300 rounded-md shadow p-2 w-max max-w-xs text-sm">
                {task.title}
                </div>
            )}
        </div>

        {/* Divider */}
        <div className="border-t-[2px] border-[#E5E1DC]" />
  
        {/* Due Date & Priority */}
        <div className="flex justify-between items-center h-6">
          <div className="flex-shrink-0 flex space-x-1 text-[#676668] text-sm font-semibold">
            <span>Due date:</span>
            <span className="text-[#3D3E40]">{task.dueDate}</span>
          </div>
  
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${task.hasPriority ? "bg-red-500" : "bg-yellow-500"}`} />
            <span className="text-[#2E2E31] text-sm font-semibold">
              {task.hasPriority ? "High" : "Average"}
            </span>
          </div>
        </div>
  
        {/* Progress Bar */}
        <div className="w-full h-3 rounded-full bg-gray-300 overflow-hidden">
          <div
            className="h-full bg-blue-500 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
  
        {/* Sessions Done */}
        <div className="h-6 text-[#282829] text-sm font-semibold text-center">
          {task.sessionsCount} of {total} sessions done!
        </div>
  
        {/* Divider */}
        <div className="border-t-[2px] border-[#E5E1DC]" />
  
        {/* Inspiration Message */}
        <div className="relative group h-[1.5rem]">
          <div ref={inspRef} className="text-[#303133] text-sm font-semibold text-center line-clamp-2 overflow-hidden">
            {getInspirationMessage({ task, workDuration })}
          </div>
          {isInspOverflowing && (
            <div className="hidden group-hover:block absolute z-10 top-full left-1/2 transform -translate-x-1/2 mt-1 bg-white border border-gray-300 rounded-md shadow p-2 w-max max-w-xs text-sm text-center">
              {getInspirationMessage({ task, workDuration })}
            </div>
          )}
        </div>
      </div>
    );
  };
  

export default TaskCard;

