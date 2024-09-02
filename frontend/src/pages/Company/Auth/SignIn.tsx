import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../../../api-clients";
import { useAppContext } from "../../../contexts/AppContext";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Briefcase, Lock } from "lucide-react";
import image from "./image.png"; 

export type CompanySignInFormData = {
  email: string;
  password: string;
};

function CompanySignIn() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { showToast } = useAppContext();
  const { register, formState: { errors }, handleSubmit } = useForm<CompanySignInFormData>();
  const [showPassword, setShowPassword] = useState(false);

  const mutation = useMutation(apiClient.signInCompany, {
    onSuccess: async () => {
      showToast({ message: "Company Sign-In Successful", type: "SUCCESS" });
      await queryClient.invalidateQueries("validate-token");
      navigate("/company-dashboard");
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const onSubmit = handleSubmit(data => mutation.mutate(data));

  return (
    <div className="min-h-screen bg-[#93B4FC] flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-between p-4 w-full max-w-4xl space-x-8">
        <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <img
            src={image} 
            alt="Company Sign-In illustration"
            className="w-full max-w-md"
          />
        </div>
        <div className="md:w-1/2">
          <div className="bg-[#6D96F3] rounded-lg shadow-lg p-8 w-full">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              COMPANY SIGN IN
            </h2>

            <form onSubmit={onSubmit} className="space-y-4">
              <div className="relative">
                <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2" size={20} />
                <input
                  type="text"
                  placeholder="Company Email"
                  className="w-full pl-10 pr-4 py-2 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-white"
                  {...register("email", { required: "Email is required" })}
                />
              </div>
              {errors.email && <span className="text-red-200 text-sm">{errors.email.message}</span>}

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2" size={20} />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full pl-10 pr-4 py-2 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-white"
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Password must be at least 6 characters long" }
                  })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  {showPassword ? <EyeOff className="text-green-800" size={20} /> : <Eye className="text-green-800" size={20} />}
                </button>
              </div>
              {errors.password && <span className="text-red-200 text-sm">{errors.password.message}</span>}

              <div className="flex items-center justify-between mt-2 text-sm text-white">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    onChange={() => setShowPassword(!showPassword)}
                    checked={showPassword}
                  />
                  Show Password
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-green-700 rounded-full py-2 mt-6 font-bold hover:bg-green-100 transition duration-300"
              >
                SIGN IN
              </button>
            </form>

            <div className="mt-4 text-center text-white">
              <span>Not Registered? </span>
              <Link to="/company-sign-up" className="underline hover:text-green-200">
                Register Your Company
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanySignIn;
