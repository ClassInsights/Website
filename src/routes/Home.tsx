import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import PageWrapper from "./PageWrapper";

function Home() {
	return (
		<PageWrapper>
			<Navbar />
			<Hero />
		</PageWrapper>
	);
}

export default Home;
