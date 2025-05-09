import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className='flex w-[80vw] h-[80vh] rounded-lg bg-base-200 border border-primary/10'>
			<Sidebar />
			<MessageContainer />
		</div>
	);
};
export default Home;
