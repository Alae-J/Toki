import { useEffect } from "react";

interface Props {
  message: string;
  type?: "success" | "error";
  onClose: () => void;
}

const Toast = ({ message, type = "success", onClose }: Props) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const baseColor = type === "success" ? "bg-green-700" : "bg-red-700";
  const borderColor = type === "success" ? "border-green-600" : "border-red-600";

  return (
    <div className={`fixed top-6 left-1/2 transform -translate-x-1/2 px-6 py-4 rounded-xl shadow-lg text-white text-base font-semibold z-50 transition-all duration-300 ${baseColor} border ${borderColor}`}>
      {message}
    </div>
  );
};

export default Toast;
