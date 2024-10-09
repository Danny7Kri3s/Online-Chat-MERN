import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LoginInputs } from "../../type";
import useLogin from "../../hooks/useLogin";

const Login: React.FC = () => {
  const [inputs, setInputs] = useState<LoginInputs>({
    username: "",
    password: "",
  });

  const { login, loading } = useLogin();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(inputs as LoginInputs);
  };

  return (
    <div className="text-white flex flex-col gap-2 items-center justify-center  min-w-96 mx-auto rounded-md p-5">
      <div className="w-full bg-black p-6 rounded-md">
        <h1 className="text-center text-[1.2rem] font-bold shadow-md">Login</h1>

        <form onSubmit={handleLogin}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-300">
                Username
              </span>
            </label>

            <input
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
              type="text"
              placeholder="Enter username"
              className="input bg-gray-900 input-bordered w-full max-w-xs"
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text text-gray-300">
                Password
              </span>
            </label>
            <input
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
              type="password"
              placeholder="Enter Password"
              className="input bg-gray-900 input-bordered w-full max-w-xs"
            />
          </div>

          <Link
            to="register"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Don't have an account?
          </Link>

          <div>
            <button
              className="btn btn-block btn-sm mt-2"
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner "></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

{
  /* Starter Code for this file */
}

// export default Login
// const Login: React.FC = () => {
//   return (
//     <div className='text-white flex flex-col gap-2 items-center justify-center  min-w-96 mx-auto rounded-md p-5'>
//       <div className='w-full bg-black p-6 rounded-md'>
//         <h1 className='text-center text-[1.2rem] font-bold shadow-md'>Login</h1>

//         <form action="">
//           <div>
//             <label className="label p-2">
//               <span className='text-base label-text text-gray-300'>Username</span>
//             </label>

//             <input
//               type="text"
//               placeholder="Enter username"
//               className="input bg-gray-900 input-bordered w-full max-w-xs"
//             />
//           </div>

//           <div>
//             <label className="label">
//               <span className='text-base label-text text-gray-300'>Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter Password"
//               className="input bg-gray-900 input-bordered w-full max-w-xs"
//             />
//           </div>

//           <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
//             Don't have an account?
//           </a>

//           <div>
//             <button className='btn btn-block btn-sm mt-2'>Login</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Login
