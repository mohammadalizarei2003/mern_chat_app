import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
	const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

	const { loading, signup } = useSignup();

	const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(inputs);
	};

	return (
		<div className='flex flex-col items-center justify-center w-lg mx-auto'>
			<div className='w-full p-6 rounded-lg bg-base-200 space-y-5 border border-primary/20'>
				<h1 className='text-3xl font-semibold text-center text-primary'>
					ثبت نام
				</h1>

				<div className="divider"></div>

				<form onSubmit={handleSubmit} className="space-y-5">
					<div>
						<label className='label my-2'>
							<span className='text-base label-text'>نام و نام خانوادگی‌ : </span>
						</label>
						<input
							type='text'
							placeholder='نام و نام خانوادگی...'
							className='w-full input input-lg outline-0 shadow-none border border-primary/10 focus:outline-0 focus:border-primary/20 focus:shadow-none bg-base-100 transition-all duration-300'
							value={inputs.fullName}
							onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
						/>
					</div>

					<div>
						<label className='label my-2'>
							<span className='text-base label-text'>نام کاربری : </span>
						</label>
						<input
							type='text'
							placeholder='نام کاربری...'
							className='w-full input input-lg outline-0 shadow-none border border-primary/10 focus:outline-0 focus:border-primary/20 focus:shadow-none bg-base-100 transition-all duration-300'
							value={inputs.username}
							onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
						/>
					</div>

					<div>
						<label className='label my-2'>
							<span className='text-base label-text'>کلمه عبور : </span>
						</label>
						<input
							type='password'
							placeholder='کلمه عبور...'
							className='w-full input input-lg outline-0 shadow-none border border-primary/10 focus:outline-0 focus:border-primary/20 focus:shadow-none bg-base-100 transition-all duration-300'
							value={inputs.password}
							onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
						/>
					</div>

					<div>
						<label className='label my-2'>
							<span className='text-base label-text'>تکرار کلمه عبور : </span>
						</label>
						<input
							type='password'
							placeholder='تکرار کلمه عبرو ...'
							className='w-full input input-lg outline-0 shadow-none border border-primary/10 focus:outline-0 focus:border-primary/20 focus:shadow-none bg-base-100 transition-all duration-300'
							value={inputs.confirmPassword}
							onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
						/>
					</div>

					<GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

					<Link
						to={"/login"}
						className='text-sm hover:text-primary transition-all duration-300'
						href='#'
					>
						آیا حساب کاربری ندارید ؟
					</Link>

					<div>
						<button className='btn btn-block btn-lg btn-primary border-0 outline-0 shadow-none mt-5' disabled={loading}>
							{loading ? <span className='loading loading-ring'></span> : "ثبت نام"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default SignUp;

// STARTER CODE FOR THE SIGNUP COMPONENT
// import GenderCheckbox from "./GenderCheckbox";

// const SignUp = () => {
// 	return (
// 		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
// 			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
// 				<h1 className='text-3xl font-semibold text-center text-gray-300'>
// 					Sign Up <span className='text-blue-500'> ChatApp</span>
// 				</h1>

// 				<form>
// 					<div>
// 						<label className='label p-2'>
// 							<span className='text-base label-text'>Full Name</span>
// 						</label>
// 						<input type='text' placeholder='John Doe' className='w-full input input-bordered  h-10' />
// 					</div>

// 					<div>
// 						<label className='label p-2 '>
// 							<span className='text-base label-text'>Username</span>
// 						</label>
// 						<input type='text' placeholder='johndoe' className='w-full input input-bordered h-10' />
// 					</div>

// 					<div>
// 						<label className='label'>
// 							<span className='text-base label-text'>Password</span>
// 						</label>
// 						<input
// 							type='password'
// 							placeholder='Enter Password'
// 							className='w-full input input-bordered h-10'
// 						/>
// 					</div>

// 					<div>
// 						<label className='label'>
// 							<span className='text-base label-text'>Confirm Password</span>
// 						</label>
// 						<input
// 							type='password'
// 							placeholder='Confirm Password'
// 							className='w-full input input-bordered h-10'
// 						/>
// 					</div>

// 					<GenderCheckbox />

// 					<a className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' href='#'>
// 						Already have an account?
// 					</a>

// 					<div>
// 						<button className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
// 					</div>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };
// export default SignUp;
