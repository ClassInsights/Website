import Certificate from "../components/Certificate";
import Functionality from "../components/Functionality";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import PageWrapper from "../components/PageWrapper";
import Spacing from "../components/Spacing";

function Home() {
	return (
		<PageWrapper>
			<Navbar />
			<Hero />
			<Spacing size="md" />
			<Functionality />
			<Spacing />
		</PageWrapper>
	);
}

export default Home;
