import { useForm } from "react-hook-form";
import { useState } from "react";

function FormDemo() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const [users, setUser] = useState([]);

  const submitForm = (obj) => {

    //manual error example
    setError("username", {
      type: "manual",
      message: "Manual validation example"
    });

    setUser([...users, obj]);
  };

  return (
    <div>
      <h1 className="text-4xl mb-4">Form</h1>

      <form onSubmit={handleSubmit(submitForm)}>

        <div className="mb-3">
          <input
            type="text"
            {...register("username", { required: true, minLength: 3 })}
            placeholder="Username"
            className="border-2 p-2"
          />

          {errors.username?.type === "required" && (
            <p className="text-red-500">Username required</p>
          )}

          {errors.username?.type === "minLength" && (
            <p className="text-red-500">Min length should be 3</p>
          )}

          {errors.username?.type === "manual" && (
            <p className="text-red-500">{errors.username.message}</p>
          )}
        </div>

        <div className="mb-3">
          <input
            type="email"
            {...register("email")}
            placeholder="Email"
            className="border-2 p-2"
          />
        </div>

        <button type="submit" className="bg-blue-400 p-3 text-white">
          Login
        </button>

      </form>

      <h1 className="text-3xl mt-10">List of Users</h1>

      <table className="max-w-4xl bg-white border border-gray-200 mx-auto mt-4">
        <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
          <tr>
            <th className="px-6 py-3 text-left">Username</th>
            <th className="px-6 py-3 text-left">Email</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 text-gray-700">

          {users.map((userObj, index) => (
            <tr key={index}>
              <td className="px-6 py-4">{userObj.username}</td>
              <td className="px-6 py-4">{userObj.email}</td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
}

export default FormDemo;