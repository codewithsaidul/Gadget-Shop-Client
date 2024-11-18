import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import GoogleLogin from "../../components/Shared/GoogleLogin";
import axios from "axios";
import Swal from 'sweetalert2'

const Register = () => {
  const { CreateUser, setUser } = useAuth();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    const role = data.role;
    const status = role === "buyer" ? "approved" : "pending";
    const wishlist = [];
    const userData = { email, role, status, wishlist };
    CreateUser(email, password)
      .then((result) => {
        axios.post(`http://localhost:4000/users`, userData)
        .then(res => {
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "Registration Successfull",
              showConfirmButton: false,
              timer: 1500
            });
            setUser(result.user);
            navigate("/");
            reset();
          }
        });
      })
      .catch(() => {
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: "Email Already Exists",
          showConfirmButton: false,
          timer: 1500
        });
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
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
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm font-light">
                  Email is Required
                </p>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", { required: true, minLength: 6 })}
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500 text-sm font-light">
                  Password is Required
                </p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500 text-sm font-light">
                  Password must be at least 6 characters long
                </p>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="confirm password"
                className="input input-bordered"
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) => {
                    if (watch("password") !== value) {
                      return "Passwords do not match";
                    }
                  },
                })}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm font-light">
                  Both Passwords Must Match
                </p>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Role</span>
              </label>

              <select
                className="select select-bordered w-full max-w-xs"
                {...register("role", { required: "Role is required" })}
              >
                <option value="" disabled>
                  Select a Role
                </option>
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </select>

              {errors.role && (
                <p className="text-red-500 text-sm font-light">
                  {errors.role.message}
                </p>
              )}
            </div>

            <div className="form-control mt-8">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </form>

          <div className="mt-3 px-6">
            <GoogleLogin />
          </div>

          <p className="my-6 ml-6 text-sm font-light">
            Already Have an Account?{" "}
            <Link to="/login" className="text-primary font-bold">
              Login Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
