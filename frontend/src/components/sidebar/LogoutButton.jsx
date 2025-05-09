import { LuSun, LuMoon, LuLogOut } from 'react-icons/lu'
import useLogout from "../../hooks/useLogout";
import { useThemeStore } from "../../zustand/useThemeStore";


const LogoutButton = () => {
	const { loading, logout } = useLogout();
	const { theme, setTheme } = useThemeStore();

	return (
		<div className='mt-auto flex items-center p-2 justify-between gap-5 border-t border-primary/10 h-[10%]'>
			{!loading ? (
				<LuLogOut className='size-6 cursor-pointer' onClick={logout} />
			) : (
				<span className='loading loading-spinner'></span>
			)}
			<button className="btn btn-circle bg-transparent border-0 outline-0 shadow-none" onClick={() => setTheme()}>
				{theme === 'business' ? <LuSun className="size-6" /> : <LuMoon className="size-6" />}
			</button>
		</div>
	);
};
export default LogoutButton;
