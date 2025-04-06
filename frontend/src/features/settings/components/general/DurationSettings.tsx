import { FaEdit } from "react-icons/fa";

interface Props {
  durations: {
    work: number;
    shortBreak: number;
    longBreak: number;
  };
  editing: {
    work: boolean;
    shortBreak: boolean;
    longBreak: boolean;
  };
  onChange: (field: "work" | "shortBreak" | "longBreak", value: number) => void;
  onStartEdit: (field: "work" | "shortBreak" | "longBreak") => void;
}

const DurationSettings = ({ durations, editing, onChange, onStartEdit }: Props) => {
  return (
    <div className="flex flex-col gap-6 mb-12 w-full">
      {/* Section Title */}
      <h2 className="text-lg font-bold text-[#3e2c1c]">Duration</h2>
      <div className="w-full h-[1px] bg-[#e6dcd1]" />

      {[
        { label: "Work duration", key: "work" },
        { label: "Short break duration", key: "shortBreak" },
        { label: "Long break duration", key: "longBreak" },
      ].map(({ label, key }) => (
        <div key={key} className="flex items-center justify-between gap-8">
          {/* Label */}
          <label className="text-sm font-semibold text-[#3e2c1c] w-48">{label}</label>

          {/* Input */}
          <div className="relative w-[80px]">
            <input
              type="number"
              min={1}
              value={durations[key as keyof typeof durations]}
              readOnly={!editing[key as keyof typeof editing]}
              onChange={(e) =>
                onChange(key as "work" | "shortBreak" | "longBreak", parseInt(e.target.value))
              }
              className={`w-full px-3 py-1.5 rounded-md border ${
                editing[key as keyof typeof editing]
                  ? "border-[#c97e4d]"
                  : "border-[#e5e5ed]"
              } bg-white text-sm text-[#5A4B3B]`}
            />
            {!editing[key as keyof typeof editing] && (
              <span
                className="absolute right-3 top-2.5 text-[#e3c79c] cursor-pointer"
                onClick={() => onStartEdit(key as "work" | "shortBreak" | "longBreak")}
              >
                <FaEdit />
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DurationSettings;
