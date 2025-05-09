const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
	return (
		<div className='flex gap-2'>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""} `}>
					
					<input
						type='checkbox'
						className='checkbox checkbox-primary'
						checked={selectedGender === "male"}
						onChange={() => onCheckboxChange("male")}
					/>
					<span className='label-text'>مرد</span>
				</label>
			</div>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer  ${selectedGender === "female" ? "selected" : ""}`}>
					
					<input
						type='checkbox'
						className='checkbox checkbox-primary'
						checked={selectedGender === "female"}
						onChange={() => onCheckboxChange("female")}
					/>
					<span className='label-text'>زن</span>
				</label>
			</div>
		</div>
	);
};
export default GenderCheckbox;
