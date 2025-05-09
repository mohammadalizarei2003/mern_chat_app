import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
	return (
		<div className='border-l border-primary/10 flex flex-col w-[30%] h-full'>
			<SearchInput />
			<Conversations />
			<LogoutButton />
		</div>
	);
};
export default Sidebar;