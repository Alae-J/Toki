import { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";

interface Props {
  label: string;
  value: string;
  icon: "edit";
  iconType?: "text" | "email";
  editing: boolean;
  onChange: (newValue: string) => void;
  onStartEdit: () => void;
}

const EditableField = ({
  label,
  value,
  iconType = "text",
  editing,
  onChange,
  onStartEdit,
}: Props) => {
  const [error, setError] = useState("");

  useEffect(() => {
    setError("");
  }, [editing]);

  const validate = (val: string) => {
    if (iconType === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // weird email validation stuff
      if (!emailRegex.test(val)) return "Please enter a valid email address.";
    }
    if (label.toLowerCase() === "username" && val.length > 20) {
      return "Username must not exceed 20 characters.";
    }
    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    const err = validate(val);
    setError(err);
    onChange(val);
  };

  return (
    <div className="flex flex-col">
      <label className="text-sm font-semibold text-[#3e2c1c] mb-1">{label}</label>
      <div className="relative">
        <input
          type={iconType}
          value={value}
          readOnly={!editing}
          onChange={handleChange}
          className={`w-full px-4 py-2 rounded-md border ${
            editing
              ? error
                ? "border-red-400"
                : "border-[#c97e4d]"
              : "border-[#e6dcd1]"
          } bg-white text-[#5A4B3B] text-sm`}
        />
        <span
          className="absolute right-3 top-2.5 text-[#c97e4d] cursor-pointer"
          onClick={onStartEdit}
        >
          <FaEdit />
        </span>
      </div>
      {error && <span className="text-xs text-red-500 mt-1">{error}</span>}
    </div>
  );
};

export default EditableField;
