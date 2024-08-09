import Functionality from "../components/Functionality";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import PageWrapper from "./PageWrapper";

function Home() {
	return (
		<PageWrapper>
			<Navbar />
			<Hero />
			<Functionality />
		</PageWrapper>
	);
}

export default Home;
