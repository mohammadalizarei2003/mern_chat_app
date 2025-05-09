import { useState } from "react";
import { BsSend } from "react-icons/bs";
import { LuSend } from "react-icons/lu";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
	const [message, setMessage] = useState("");
	const { loading, sendMessage } = useSendMessage();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!message) return;
		await sendMessage(message);
		setMessage("");
	};

	return (
		<form className='px-2 h-[10%] border-t border-primary/10 flex items-center justify-center' onSubmit={handleSubmit}>
			<div className='w-full flex items-center justify-center'>
				<input
					type='text'
					className='w-full border-0 input-lg bg-transparent input focus:shadow-none focus:outline-0 shadow-none'
					placeholder='متن پیام...'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button type='submit' className='cursor-pointer group'>
					{loading ? <div className='loading loading-ring'></div> : <LuSend className="size-8 group-hover:scale-110 transition-all duration-300" />}
				</button>
			</div>
		</form>
	);
};
export default MessageInput;
