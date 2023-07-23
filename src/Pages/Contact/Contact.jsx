import React from "react";
import useTitle from "../../Hooks/useTitle";
import TitleSection from "../../Components/TitleSection/TitleSection";
import { useForm } from "react-hook-form";

function Contact() {
  useTitle("Contact Us");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <TitleSection
        title="Contact Us"
        description="Get the latest news, updates and tips"
      />
      <div className="container mx-auto my-10">
        <div className="w-1/2 mx-auto">
          <div>
            <h2 className="text-3xl mb-6">Send Us a Message </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Full Name"
                className="border p-3 rounded-sm w-full mb-6"
              />
              {errors.name && <span>Name is required</span>}

              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Email"
                className="border p-3 rounded-sm w-full mb-6"
              />
              {errors.email && <span>Email is required</span>}

              <textarea
                {...register("message", { required: true })}
                placeholder="Message"
                className="border p-3 rounded-sm w-full mb-6"
                rows="6"
              />
              {errors.message && <span>Message is required</span>}

              <input
                type="submit"
                value="Send"
                className="text-white bg-blue-500 px-6 py-3 w-full rounded-sm"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
