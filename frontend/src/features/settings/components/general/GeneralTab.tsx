import { UserSettings } from "../../../../types/userSettings";
import DurationSettings from "./DurationSettings";
import ThemeSettings from "./ThemeSettings";

type DurationKey = "workDuration" | "shortBreakDuration" | "longBreakDuration";
type ThemeKey = "workColor" | "shortBreakColor" | "longBreakColor";

interface Props {
  settings: UserSettings;
  editing: {
    workDuration: boolean;
    shortBreakDuration: boolean;
    longBreakDuration: boolean;
    workColor: boolean;
    shortBreakColor: boolean;
    longBreakColor: boolean;
    backgroundSound: boolean;
  };
  onChange: (
    field: keyof Pick<UserSettings, DurationKey | ThemeKey>,
    value: number | string
  ) => void;
  onStartEdit: (field: DurationKey | ThemeKey | "backgroundSound") => void;
}

const GeneralTab = ({ settings, editing, onChange, onStartEdit }: Props) => (
  <div className="pt-2">
    <div className="flex flex-col gap-10 w-full max-w-4xl px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
      <DurationSettings
        durations={{
          work: settings.workDuration,
          shortBreak: settings.shortBreakDuration,
          longBreak: settings.longBreakDuration,
        }}
        editing={{
          work: editing.workDuration,
          shortBreak: editing.shortBreakDuration,
          longBreak: editing.longBreakDuration,
        }}
        onChange={(field, value) => {
          const map: Record<"work" | "shortBreak" | "longBreak", DurationKey> = {
            work: "workDuration",
            shortBreak: "shortBreakDuration",
            longBreak: "longBreakDuration",
          };
          onChange(map[field], value);
        }}
        onStartEdit={(field: "work" | "shortBreak" | "longBreak") => {
          const map: Record<"work" | "shortBreak" | "longBreak", DurationKey> = {
            work: "workDuration",
            shortBreak: "shortBreakDuration",
            longBreak: "longBreakDuration",
          };
          onStartEdit(map[field]);
        }}
      />

      <ThemeSettings
        themeColors={{
          work: settings.workColor,
          shortBreak: settings.shortBreakColor,
          longBreak: settings.longBreakColor,
        }}
        onColorPick={(field, color) => {
          const map: Record<"work" | "shortBreak" | "longBreak", ThemeKey> = {
            work: "workColor",
            shortBreak: "shortBreakColor",
            longBreak: "longBreakColor",
          };
          onChange(map[field], color);
        }}
      />
    </div>
  </div>
);

export default GeneralTab;
