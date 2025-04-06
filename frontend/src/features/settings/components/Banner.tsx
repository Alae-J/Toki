import banner from "../../../assets/images/Banner.png";
import SaveCancelButtons from "./SaveCancelButtons";

interface Props {
  activeTab: "general" | "profile";
  onTabChange: (tab: "general" | "profile") => void;
  onSave: () => void;
  onCancel: () => void;
}

const Banner = ({ activeTab, onTabChange, onSave, onCancel }: Props) => {
  return (
    <div className="w-full">
      {/* Banner Image */}
      <div className="w-full h-[200px] sm:h-[320px]">
        <img
          src={banner}
          alt="Settings Banner"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Title + Tabs + Buttons */}
      <div className="w-full px-6 sm:px-16 py-4 sm:py-6 flex flex-wrap justify-between items-center gap-4 text-[#3e2c1c]">

        {/* Left: Title + Tabs */}
        <div>
          <h1 className="text-2xl font-bold mb-2 text-[#3e2c1c]">Settings</h1>
          <div className="flex gap-6 text-sm font-medium">
            <button
              className={`cursor-pointer pb-1 border-b-2 transition ${
                activeTab === "general"
                  ? "border-[#c97e4d] text-[#c97e4d]"
                  : "border-transparent text-[#3e2c1c]/80 hover:text-[#c97e4d]"
              }`}
              onClick={() => onTabChange("general")}
            >
              General
            </button>
            <button
              className={`cursor-pointer pb-1 border-b-2 transition ${
                activeTab === "profile"
                  ? "border-[#c97e4d] text-[#c97e4d]"
                  : "border-transparent text-[#3e2c1c]/80 hover:text-[#c97e4d]"
              }`}
              onClick={() => onTabChange("profile")}
            >
              Profile
            </button>
          </div>
        </div>

        {/* Right: Save/Cancel Buttons */}
        <div className="self-end sm:self-center">
          <SaveCancelButtons onCancel={onCancel} onSave={onSave} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
