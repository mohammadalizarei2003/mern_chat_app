import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
	const [search, setSearch] = useState("");
	const { setSelectedConversation } = useConversation();
	const { conversations } = useGetConversations();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!search) return;
		if (search.length < 3) {
			return toast.error("Search term must be at least 3 characters long");
		}

		const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

		if (conversation) {
			setSelectedConversation(conversation);
			setSearch("");
		} else toast.error("کاربری یافت نشد.");
	};
	return (
		<form onSubmit={handleSubmit} className='flex items-center gap-2 h-[10%] border-b border-primary/10 p-2'>
			<input
				type='text'
				placeholder='جستجو...'
				className='w-full input  h-full outline-0 shadow-none border border-primary/10 focus:outline-0 focus:border-primary/20 focus:shadow-none bg-base-100 transition-all duration-300'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<button type='submit' className='btn h-full btn-lg border-0 outline-0 shadow-none bg-primary'>
				<IoSearchSharp className='size-6 outline-none' />
			</button>
		</form>
	);
};
export default SearchInput;