import React from "react";
import useTitle from "../../Hooks/useTitle";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function SignUp() {
  useTitle("Login");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="w-1/3 mx-auto p-8 border rounded-md mt-14">
      <h2 className="text-2xl mb-6">Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("email", { required: true })}
          type="email"
          className="border p-3 rounded-sm w-full mb-6"
        />
        {errors.email && <span>Email is required</span>}

        <input
          {...register("password", { required: true })}
          type="password"
          className="border p-3 rounded-sm w-full mb-6"
        />
        {errors.password && <span>Password is required</span>}

        <input
          type="submit"
          value="Sign In"
          className="text-white bg-blue-500 px-6 py-3 w-full rounded-sm"
        />
      </form>
      <div className="mt-4">
        Already have an account? <Link to="/login">Sign In Here</Link>
      </div>
    </div>
  );
}

export default SignUp;
