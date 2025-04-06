import { useState } from "react";
import ColorPickerModal from "./ColorPickerModal";

type ColorField = "work" | "shortBreak" | "longBreak";

interface Props {
  themeColors: {
    work: string;
    shortBreak: string;
    longBreak: string;
  };
  onColorPick: (field: ColorField, color: string) => void;
}

const ThemeSettings = ({ themeColors, onColorPick }: Props) => {
  const [activeField, setActiveField] = useState<ColorField | null>(null);

  const handleColorSelect = (field: ColorField, color: string) => {
    onColorPick(field, color);
    setActiveField(null);
  };

  return (
    <div className="flex flex-col gap-6 mb-12 w-full">

      {/* Section Title */}
      <h2 className="text-lg font-bold text-[#3e2c1c]">Theme</h2>
      <div className="w-full h-[1px] bg-[#e6dcd1]" />

      {/* Each Color Field */}
      {(["work", "shortBreak", "longBreak"] as ColorField[]).map((field) => (
        <div key={field} className="flex items-center justify-between gap-8">
          
          {/* Label */}
          <label className="text-sm font-semibold text-[#3e2c1c] w-48">
            {field === "work"
              ? "Work color"
              : field === "shortBreak"
              ? "Short break color"
              : "Long break color"}
          </label>

          {/* Color Box */}
          <div className="relative w-[40px] h-[24px]">
            <div
              className="w-full h-full rounded-md cursor-pointer border border-[#e6dcd1]"
              style={{ backgroundColor: themeColors[field] }}
              onClick={() => setActiveField(field)}
            />
            {activeField === field && (
              <ColorPickerModal
                currentColor={themeColors[field]}
                onSelectColor={(color) => handleColorSelect(field, color)}
                onClose={() => setActiveField(null)}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThemeSettings;
