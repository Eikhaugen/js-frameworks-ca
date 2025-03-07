import React from "react";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-lg mx-auto space-y-4"
        noValidate
      >
        <div>
          <label htmlFor="fullName" className="block mb-1 font-semibold">
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            className="w-full border rounded px-3 py-2"
            {...register("fullName", {
              required: "Full name is required",
              minLength: {
                value: 3,
                message: "Full name must be at least 3 characters",
              },
            })}
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="subject" className="block mb-1 font-semibold">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            className="w-full border rounded px-3 py-2"
            {...register("subject", {
              required: "Subject is required",
              minLength: {
                value: 3,
                message: "Subject must be at least 3 characters",
              },
            })}
          />
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">
              {errors.subject.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 font-semibold">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full border rounded px-3 py-2"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="body" className="block mb-1 font-semibold">
            Message
          </label>
          <textarea
            id="body"
            rows="5"
            className="w-full border rounded px-3 py-2"
            {...register("body", {
              required: "Message is required",
              minLength: {
                value: 3,
                message: "Message must be at least 3 characters",
              },
            })}
          />
          {errors.body && (
            <p className="text-red-500 text-sm mt-1">
              {errors.body.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Send Message
        </button>
        {isSubmitSuccessful && (
          <p className="text-green-600 text-center mt-4">
            Message sent successfully!
          </p>
        )}
      </form>
    </div>
  );
}

export default Contact;
