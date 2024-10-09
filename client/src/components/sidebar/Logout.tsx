import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import useLogout from '../../hooks/useLogout'

const Logout: React.FC = () => {
  const {logout} = useLogout(); 
  return (
    <button
    onClick={logout} 
      className='text-white w-[100%] md:w-[38%] lg:w-[28%] xl:w-[22.10%] z-[99] text-[1.5rem] bg-slate-800 py-3 px-2 fixed bottom-0 cursor-pointer rounded-b-md '
    >
      <BiLogOut />
    </button>
  )
}

export default Logout