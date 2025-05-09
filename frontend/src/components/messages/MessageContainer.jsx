import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";
import { LuMessageCircleMore } from "react-icons/lu";


const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();

	useEffect(() => {
		// cleanup function (unmounts)
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

	return (
		<div className='w-[70%] flex flex-col'>
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
					{/* Header */}
					<div className='p-5 mb-2 border-b border-primary/10 h-[10%]'>
						<span className='font-bold'>{selectedConversation.fullName}</span>
					</div>
					<Messages />
					<MessageInput />
				</>
			)}
		</div>
	);
};
export default MessageContainer;

const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl font-semibold flex flex-col items-center gap-2 space-y-5'>
				<p className="text-primary">خوش آمدیدن 👋 {authUser.fullName} ❄</p>
				<p>یک چت را برای شروع پیام‌رسانی انتخاب کنید</p>
				<LuMessageCircleMore className='text-3xl md:text-6xl text-center text-primary animate-pulse' />
			</div>
		</div>
	);
};
