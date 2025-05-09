import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};

	return (
		<div className='flex flex-col items-center justify-center w-lg mx-auto'>
			<div className='w-full p-6 rounded-lg bg-base-200 space-y-5 border border-primary/20'>
				<h1 className='text-3xl font-semibold text-center text-primary'>
					ورود به حساب کاربری
				</h1>
				<div className="divider"></div>

				<form onSubmit={handleSubmit} className="space-y-5">
					<div>
						<label className='label my-2'>
							<span className='text-base label-text'>نام کاربری :</span>
						</label>
						<input
							type='text'
							placeholder='نام کاربری...'
							className='w-full input input-lg outline-0 shadow-none border border-primary/10 focus:outline-0 focus:border-primary/20 focus:shadow-none bg-base-100 transition-all duration-300'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>

					<div>
						<label className='label my-2'>
							<span className='text-base label-text'>کلمه عبور :</span>
						</label>
						<input
							type='password'
							placeholder='کلمه عبور...'
							className='w-full input input-lg outline-0 shadow-none border border-primary/10 focus:outline-0 focus:border-primary/20 focus:shadow-none bg-base-100 transition-all duration-300'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<Link to='/signup' className='text-sm hover:text-primary transition-all duration-300'>
						آیا حساب کاربری ندارید ؟
					</Link>

					<div>
						<button className='btn btn-block btn-lg btn-primary border-0 outline-0 shadow-none mt-5' disabled={loading}>
							{loading ? <span className='loading loading-ring '></span> : "ورود"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default Login;
