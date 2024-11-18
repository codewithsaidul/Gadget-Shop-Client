import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import GoogleLogin from "../../components/Shared/GoogleLogin";
import Swal from "sweetalert2";

const Login = () => {

  const { LoginUser, setUser } = useAuth()

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    LoginUser(email, password)
    .then(result => {
      setUser(result.user)
      navigate("/");
    })
    .catch(() => {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "Email or Password Wrong!",
        showConfirmButton: false,
        timer: 1500
      });
    })
  }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", {required: true})}
                />
                {errors.email && <p className="text-red-500 text-sm font-light">Email is Required</p>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", {
                  required: true,
                  minLength: 6,
                })}
                />
                {errors.password?.type === "required" && <p className="text-red-500 text-sm font-light">Password is Required</p>}
                {errors.password?.type === "minLength" && <p className="text-red-500 text-sm font-light">Password must be at least 6 characters long</p>}
            </div>



            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
          </form>

          <div className="mt-3 px-6">
            <GoogleLogin />
          </div>

          <p className="my-6 ml-6 text-sm font-light">
            Don&apos;t Have an Account?{" "}
            <Link to="/register" className="text-primary font-bold">
              Register Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
