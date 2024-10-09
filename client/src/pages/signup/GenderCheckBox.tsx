import React from 'react'

interface GenderCheckBoxProps {
  onCheckboxChange: (gender: string) => void;
  selectedGender: string;
}

const GenderCheckBox: React.FC<GenderCheckBoxProps> = ({onCheckboxChange, selectedGender}) => {
  return (
    <div className='flex'>
      <div className='form-control'>
        <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}>
          <span className='label-text text-white'>Male</span>
          <input
             type="checkbox" 
             className='checkbox border-slate-300'
             onChange={() => onCheckboxChange("male")}
             value={selectedGender}
             checked={selectedGender === "male"} 
            />
        </label>
      </div>
      <div className='form-control'>
        <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}>
          <span className='label-text text-white'>Female</span>
          <input 
            type="checkbox" 
            className='checkbox border-slate-300'
            onChange={() => onCheckboxChange("female")}
            checked={selectedGender === "female"}
          />
        </label>
      </div>
    </div>
  )
}

export default GenderCheckBox