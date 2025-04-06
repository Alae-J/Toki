import tomatoImage from "../../../assets/images/TokiAuthImage.png";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
    return (
        <div className="w-full h-screen flex flex-col lg:flex-row">
            {/* Top Banner (image for small screens) */}
            <div className="w-full h-85 sm:h-72 lg:hidden">
                <img
                    src={tomatoImage}
                    alt="Pomodoro visual"
                    className="w-full h-full object-cover"
                />
            </div>


            {/* Left Side - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center px-6 sm:px-10 lg:px-20 py-10 lg:py-0">
                <div className="w-full max-w-md flex flex-col gap-10">
                <h1 className="text-[#BE893E] text-3xl font-bold">Log In</h1>
                <LoginForm />
                </div>
            </div>

            {/* Right Side - Image (desktop only) */}
            <div className="hidden lg:block lg:w-1/2 h-full">
                <img
                src={tomatoImage}
                alt="Pomodoro visual"
                className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
}
