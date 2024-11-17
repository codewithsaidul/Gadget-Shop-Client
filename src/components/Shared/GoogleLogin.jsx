import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {
  const { GoogleLogin, user, setUser } = useAuth();

  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    GoogleLogin()
    .then(result => {
        setUser(result.user);
        console.log(user)
        navigate("/");
    })
  };

  return (
    <div>
      <div className="divider">OR</div>

      <div className="w-full">
        <button onClick={handleGoogleLogin} className="btn bg-transparent hover:bg-transparent btn-outline w-full flex items-center justify-center gap-2">
          <FcGoogle size={32} />
          <p className="text-xl font-medium text-gray-600">Login With Google</p>
        </button>
      </div>
    </div>
  );
};

export default GoogleLogin;
