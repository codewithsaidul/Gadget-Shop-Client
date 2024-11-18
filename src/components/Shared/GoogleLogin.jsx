import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";


const GoogleLogin = () => {
  const { GoogleLogin, setUser } = useAuth();


  const navigate = useNavigate();



  const handleGoogleLogin = () => {
    GoogleLogin().then((result) => {
      const email = result.user.email;
      const role = "buyer";
      const status = "approved";
      const wishlist = [];
      const userData = { email, role, status, wishlist}
      axios.post(`http://localhost:4000/users`, userData);
      setUser(result.user);
      navigate("/");
    });
  };

  return (
    <div>
      <div className="divider">OR</div>

      <div className="w-full relative">
        <button
          onClick={handleGoogleLogin}
          className="btn bg-transparent hover:bg-transparent btn-outline w-full flex items-center justify-center gap-2"
        >
          <FcGoogle size={32} />
          <p className="text-xl font-medium text-gray-600">Login With Google</p>
        </button>
      </div>

      
    </div>
  );
};

export default GoogleLogin;
