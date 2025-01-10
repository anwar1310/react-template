import CustomInput from "@/common/CustomInput";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/validation/FormSchema";
import { z } from "zod";
import { Link, useNavigate } from "react-router-dom";
import { ProtectedRoutes, PublicRoutes } from "@/utils";
import axiosInstance from "@/api/axios";
import toast from "react-hot-toast";

type LoginFormType = z.infer<typeof loginSchema>;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
  });

  const navigate = useNavigate()

  const handleFormSubmit: SubmitHandler<LoginFormType> = async (data) => {
    try {
      const response = await axiosInstance.post("/login", data);
      if (response.data.data) {
        toast.success("Login successfully!");
        setTimeout(() =>{
          navigate(ProtectedRoutes.dashboard)
        }, 1000)
      }
    } catch (error: any) {
      toast.error("Something went wrong");
      console.error("API error:", error.response?.data || error.message);
    }
  };
  return (
    <div className="container mx-auto flex items-center justify-between px-4 py-4 h-[calc(100vh-80px)]">
      <section className="w-full">
        <div className="flex flex-col items-center justify-center px-0 py-0 lg:px-6 lg:py-8 mx-auto">
          <div className="w-full bg-white rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-5 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Welcome back!
              </h1>
              <form
                className="space-y-4 md:space-y-6 flex flex-col gap-1"
                onSubmit={handleSubmit(handleFormSubmit)}
              >
                <CustomInput
                  label="Email"
                  name="email"
                  placeholder="name@company.com"
                  type="email"
                  register={register}
                  errors={errors}
                />
                <CustomInput
                  label="Password"
                  name="password"
                  placeholder="••••••••"
                  type="password"
                  register={register}
                  errors={errors}
                />
                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account ?{" "}
                  <Link
                    to={PublicRoutes.register}
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
