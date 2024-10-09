import React, { useState } from 'react'
import GenderCheckBox from './GenderCheckBox'
import { Link } from 'react-router-dom';
import { Inputs } from '../../type';
import useSignup from '../../hooks/useSignup';
import toast, { Toaster } from 'react-hot-toast';

const SignUp: React.FC = () => {
  const [inputs, setInputs] = useState<Inputs>({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: ""
  });

  const {loading, signup} = useSignup();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    await signup(inputs as Inputs);
  } 

  const handleCheckboxChange = (gender: string) => {
    setInputs({...inputs, gender})
  }

  return (
    <div className='text-white flex flex-col items-center justify-center min-w-96 mx-auto'>
      
      <div className='w-full bg-black p-6 rounded-md'>
        <h1 className='text-center text-[1.2rem] font-bold'>Sign Up Chat-App</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base text-white label-text'>Full Name</span>
            </label>
            <input 
              value={inputs.fullName}
              onChange={e => setInputs({...inputs, fullName: e.target.value})}
              type='text' 
              placeholder='John Doe' 
              className='w-full bg-slate-700 input input-border h-10'
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base text-white label-text'>Username</span>
            </label>
            <input 
              value={inputs.username}
              onChange={e => setInputs({...inputs, username: e.target.value})}
              type='text' 
              placeholder='johndoe' 
              className='w-full bg-slate-700 input input-border h-10'
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base text-white label-text'>Password</span>
            </label>
            <input 
              value={inputs.password}
              onChange={e => setInputs({...inputs, password: e.target.value})}
              type='password'
              placeholder='Enter Password'  
              className='w-full bg-slate-700 input input-border h-10'
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base text-white label-text'>Confirm Password</span>
            </label>
            <input 
              value={inputs.confirmPassword}
              onChange={e => setInputs({...inputs, confirmPassword: e.target.value})}
              type='password'
              placeholder='Enter Password'  
              className='w-full bg-slate-700 input input-border h-10'
            />
          </div>

          <GenderCheckBox
            onCheckboxChange = {handleCheckboxChange}
            selectedGender = {inputs.gender}
          />

          <Link to="/" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
            Already have an account?
          </Link>

          <div>
            <button 
              className='btn btn-block btn-sm mt-2'
              onClick={handleSubmit}
              disabled={loading}
            >
                {
                  loading ? (
                    <span className='loading loading-spinner '></span>
                  ) : "Sign Up"
                }
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp;


// Starter Code For Sign Up Component
// const SignUp: React.FC = () => {

//   return (
//     <div className='text-white flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className='w-full bg-black p-6 rounded-md'>
//         <h1 className='text-center text-[1.2rem] font-bold'>Sign Up Chat-App</h1>
//         <form>

//           <div>
//             <label className='label p-2'>
//               <span className='text-base text-white label-text'>Full Name</span>
//             </label>
//             <input 
//               type='text' 
//               placeholder='John Doe' 
//               className='w-full bg-slate-700 input input-border h-10'
//             />
//           </div>

//           <div>
//             <label className='label p-2'>
//               <span className='text-base text-white label-text'>Username</span>
//             </label>
//             <input 
//               type='text' 
//               placeholder='johndoe' 
//               className='w-full bg-slate-700 input input-border h-10'
//             />
//           </div>

//           <div>
//             <label className='label p-2'>
//               <span className='text-base text-white label-text'>Password</span>
//             </label>
//             <input 
//               type='password'
//               placeholder='Enter Password'  
//               className='w-full bg-slate-700 input input-border h-10'
//             />
//           </div>

//           <div>
//             <label className='label p-2'>
//               <span className='text-base text-white label-text'>Confirm Password</span>
//             </label>
//             <input 
//               type='password'
//               placeholder='Enter Password'  
//               className='w-full bg-slate-700 input input-border h-10'
//             />
//           </div>

//           <GenderCheckBox/>

//           <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
//             Already have an account?
//           </a>

//           <div>
//             <button className='btn btn-block btn-sm mt-2'>Sign Up</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default SignUp